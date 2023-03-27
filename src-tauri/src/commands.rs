use tauri::command;

use crate::LOG_LEVEL;

#[command]
pub async fn get_log_level() -> u8 {
  let level = LOG_LEVEL.lock().await;
  let level: u8 = match *level {
    log::LevelFilter::Off => 0,
    log::LevelFilter::Error => 1,
    log::LevelFilter::Warn => 2,
    log::LevelFilter::Info => 3,
    log::LevelFilter::Debug => 4,
    log::LevelFilter::Trace => 5,
  };
  log::trace!("[core] Log level is {}", level);
  level
}
