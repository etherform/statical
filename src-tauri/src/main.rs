#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

/* lazy_static! {
  pub static ref TAURI_WINDOW: std::sync::Mutex<Option<tauri::Window>> = Default::default();
  pub static ref LOG_LEVEL: std::sync::Mutex<log::LevelFilter> = if cfg!(debug_assertions) {
    std::sync::Mutex::new(log::LevelFilter::Trace)
  } else {
    std::sync::Mutex::new(log::LevelFilter::Info)
  };
} */

mod commands;

// use log::{debug, error, info, warn};
use log::LevelFilter;
use once_cell::sync::Lazy;
use tauri::Manager;
use tauri_plugin_log::{
  fern::colors::{Color, ColoredLevelConfig},
  LogTarget,
};
use tokio::sync::Mutex;
use window_shadows::set_shadow;

static MAIN_WINDOW: Lazy<Mutex<Option<tauri::Window>>> = Lazy::new(|| Default::default());
static LOG_LEVEL: Lazy<Mutex<LevelFilter>> = Lazy::new(|| {
  if cfg!(debug_assertions) {
    Mutex::new(LevelFilter::Trace)
  } else {
    Mutex::new(LevelFilter::Info)
  }
});

#[tokio::main]
async fn main() {
  let ctx = tauri::generate_context!();

  let log_plugin = tauri_plugin_log::Builder::default()
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
    .level(*LOG_LEVEL.lock().await)
    .targets([LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview]);

  tauri::Builder::default()
    .plugin(log_plugin.build())
    .setup(|app| {
      let window = app.get_window("main").unwrap();

      #[cfg(debug_assertions)]
      {
        window.open_devtools();
      }

      #[cfg(any(windows, target_os = "macos"))]
      set_shadow(&window, true).unwrap();

      Ok(())
    })
    .invoke_handler(tauri::generate_handler![commands::get_log_level])
    .run(ctx)
    .expect("error while running tauri application");
}
