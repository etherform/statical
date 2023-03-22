#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

// use log::{debug, error, info, warn};
use byte_unit::{Byte, ByteUnit};
use specta::collect_types;
use tauri_plugin_log::fern::colors::{Color, ColoredLevelConfig};
use tauri_plugin_log::LogTarget;
use tauri_specta::ts;

#[tauri::command]
#[specta::specta]
fn get_os() -> String {
    String::from(std::env::consts::OS)
}

fn main() {
    let log_level = if cfg!(debug_assertions) {
        log::LevelFilter::Trace
    } else {
        log::LevelFilter::Info
    };

    #[cfg(debug_assertions)]
    ts::export(collect_types![get_os], "../src/tauri.ts").unwrap();

    tauri::Builder::default()
        .plugin(
            tauri_plugin_log::Builder::default()
                .max_file_size(Byte::from_unit(16f64, ByteUnit::KiB).unwrap().into())
                .targets([LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview])
                .level(log_level)
                .format(|out, message, record| {
                    let colors = ColoredLevelConfig::new()
                        .error(Color::Red)
                        .warn(Color::Yellow)
                        .info(Color::Green)
                        .debug(Color::Magenta)
                        .trace(Color::White);

                    out.finish(format_args!(
                        "{} | {:<5} | {}",
                        chrono::Local::now().format("%Y-%m-%d | %H:%M:%S"),
                        colors.color(record.level()),
                        message
                    ))
                })
                .build(),
        )
        .invoke_handler(tauri::generate_handler![get_os])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
