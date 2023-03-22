use specta::specta;
use tauri::command;

use crate::TAURI_WINDOW;

#[command]
#[specta]
pub fn set_window_title(title: &str) {
  log::trace!("[core] Setting window title to '{}'..", title);
  let _ = match TAURI_WINDOW.lock().unwrap().as_ref().unwrap().set_title(title) {
    Ok(_) => {
      log::trace!("[core] Window title set to '{}'", title);
      Ok(())
    },
    Err(e) => {
      log::error!("[core] Failed to set window title: {}", e);
      Err(e)
    },
  };
}

#[command]
#[specta]
pub fn minimize_window() {
  log::trace!("[core] Minimizing window...");
  let _ = match TAURI_WINDOW.lock().unwrap().as_ref().unwrap().minimize() {
    Ok(_) => {
      log::trace!("[core] Window minimized");
      Ok(())
    },
    Err(e) => {
      log::error!("[core] Failed to minimize window: {}", e);
      Err(e)
    },
  };
}

#[command]
#[specta]
pub fn maximize_window() {
  log::trace!("[core] Maximizing window...");
  let _ = match TAURI_WINDOW.lock().unwrap().as_ref().unwrap().maximize() {
    Ok(_) => {
      log::trace!("[core] Window maximized");
      Ok(())
    },
    Err(e) => {
      log::error!("[core] Failed to maximize window: {}", e);
      Err(e)
    },
  };
}

#[command]
#[specta]
pub fn unmaximize_window() {
  log::trace!("[core] Unmaximizing window...");
  let _ = match TAURI_WINDOW.lock().unwrap().as_ref().unwrap().unmaximize() {
    Ok(_) => {
      log::trace!("[core] Window unmaximized");
      Ok(())
    },
    Err(e) => {
      log::error!("[core] Failed to unmaximize window: {}", e);
      Err(e)
    },
  };
}

#[command]
#[specta]
pub fn close_window() {
  log::debug!("[core] Closing window...");
  let _ = match TAURI_WINDOW.lock().unwrap().as_ref().unwrap().close() {
    Ok(_) => {
      log::trace!("[core] Window closed");
      Ok(())
    },
    Err(e) => {
      log::error!("[core] Failed to close window: {}", e);
      Err(e)
    },
  };
}

#[command]
#[specta]
pub fn window_is_maximized() -> bool {
  TAURI_WINDOW.lock().unwrap().as_ref().unwrap().is_maximized().unwrap()
}
