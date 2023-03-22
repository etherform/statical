use specta::specta;
use tauri::command;

#[command]
#[specta]
pub fn get_os() -> String {
  String::from(std::env::consts::OS)
}
