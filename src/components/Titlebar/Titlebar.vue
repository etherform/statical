<script setup lang="ts">
import { closeWindow, maximizeWindow, minimizeWindow, unmaximizeWindow, windowIsMaximized } from '~/tauri'

const handleMinimize = () => {
  minimizeWindow()
}

const handleMaximize = async () => {
  if (await windowIsMaximized())
    unmaximizeWindow()
  else
    maximizeWindow()
}

const handleClose = () => {
  closeWindow()
}
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <div id="titlebar-minimize" class="titlebar-button" @click="handleMinimize">
      <svg viewBox="0 0 11 11"><path d="M11,4.9v1.1H0V4.399h11z" /></svg>
    </div>
    <div id="titlebar-maximize" class="titlebar-button" @click="handleMaximize">
      <svg viewBox="0 0 11 11"><path d="M0,1.7v7.6C0,10.2,0.8,11,1.7,11h7.6c0.9,0,1.7-0.8,1.7-1.7V1.7C11,0.8,10.2,0,9.3,0H1.7C0.8,0,0,0.8,0,1.7z M8.8,9.9H2.2c-0.6,0-1.1-0.5-1.1-1.1V2.2c0-0.6,0.5-1.1,1.1-1.1h6.7c0.6,0,1.1,0.5,1.1,1.1v6.7C9.9,9.4,9.4,9.9,8.8,9.9z" /></svg>
    </div>
    <div id="titlebar-close" class="titlebar-button" @click="handleClose">
      <svg viewBox="0 0 11 11"><path d="M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z" /></svg>
    </div>
  </div>
</template>

<style scoped>
.titlebar {
  height: 30px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  background: #5bbec3;
}
</style>
