#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

#[macro_use]
extern crate lazy_static;

lazy_static! {
  pub static ref TAURI_WINDOW: std::sync::Mutex<Option<tauri::Window>> = Default::default();
}

mod commands {
  pub mod utils;
  pub mod window;
}

// use log::{debug, error, info, warn};
use specta::collect_types;
use tauri::Manager;
use tauri_plugin_log::{
  fern::colors::{Color, ColoredLevelConfig},
  LogTarget,
};
use tauri_specta::ts;
use window_shadows::set_shadow;

fn main() {
  #[cfg(debug_assertions)]
  ts::export(
    collect_types![
      commands::utils::get_os,
      commands::window::set_window_title,
      commands::window::minimize_window,
      commands::window::maximize_window,
      commands::window::unmaximize_window,
      commands::window::close_window,
      commands::window::window_is_maximized
    ],
    "../src/tauri.ts",
  )
  .unwrap();

  let log_level = if cfg!(debug_assertions) {
    log::LevelFilter::Trace
  } else {
    log::LevelFilter::Info
  };

  tauri::Builder::default()
    .plugin(
      tauri_plugin_log::Builder::default()
        .format(|out, msg, rec| {
          let colors = ColoredLevelConfig::new()
            .error(Color::Red)
            .warn(Color::Yellow)
            .info(Color::Green)
            .debug(Color::Magenta)
            .trace(Color::White);

          out.finish(format_args!(
            "{} | {:<5} | {}",
            chrono::Local::now().format("%Y-%m-%d | %H:%M:%S"),
            colors.color(rec.level()),
            msg
          ))
        })
        .level(log_level)
        .targets([LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview])
        .build(),
    )
    .setup(|app| {
      let window = app.get_window("main").unwrap();

      #[cfg(debug_assertions)] // only include this code on debug builds
      {
        window.open_devtools();
      }

      #[cfg(any(windows, target_os = "macos"))]
      set_shadow(&window, true).unwrap();

      *TAURI_WINDOW.lock().unwrap() = Some(window);

      Ok(())
    })
    .invoke_handler(tauri::generate_handler![
      commands::utils::get_os,
      commands::window::set_window_title,
      commands::window::minimize_window,
      commands::window::maximize_window,
      commands::window::unmaximize_window,
      commands::window::close_window,
      commands::window::window_is_maximized
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
