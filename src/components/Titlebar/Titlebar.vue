<script setup lang="ts">
import { icons } from '~/styles/icons'
import { logger } from '~/utils'

/* const _eventHandle = await listen(TauriEvent.WINDOW_FOCUS, (event) => {
  logger.trace(event.event)
  logger.trace(JSON.stringify(event.payload))
  event.
}) */

const app = useAppStore()

const handleMinimize: Ref<() => Promise<void>> = ref(async () => {})
const handleMaximize: Ref<() => Promise<void>> = ref(async () => {})
const handleClose: Ref<() => Promise<void>> = ref(async () => {})

onMounted(async () => {
  if (app.tauri) {
    const { appWindow } = await import('@tauri-apps/api/window')

    handleMinimize.value = async () => appWindow.minimize()
    handleMaximize.value = async () => appWindow.toggleMaximize()
    handleClose.value = async () => appWindow.close()

    app.tauri.isMaximized = await appWindow.isMaximized()

    const _unlistenFocusEvent = await appWindow.onFocusChanged(({ payload: focused }) => {
      if (app.tauri) {
        app.tauri.isFocused = focused
        logger.trace(`Focus changed, window is now ${focused ? 'focused' : 'unfocused'}.`)
      }
    })

    const _unlistenResizeEvent = await appWindow.onResized(async () => {
    // TODO: figure a way to delay firing this, so it won't fire a thousand times when manually resizing a window
    // or find another way to change maximized window state
      if (app.tauri) {
        app.tauri.isMaximized = await appWindow.isMaximized()
        logger.trace(`Window size change. Window is ${app.tauri.isMaximized ? 'maximized' : 'not maximized'}.`)
      }
    })
  }
})
</script>

<template>
  <q-header bordered data-tauri-drag-region flex select-none bg-truegray-800 p-0 :class="app.tauri?.isFocused ? 'text-white' : 'text-gray'">
    <div class="titlebar-item-container" justify-start pl-4>
      <div self-center ml-2 mr-2>
        File
      </div>
      <div self-center ml-2 mr-2>
        About
      </div>
    </div>
    <div class="titlebar-item-container" justify-center>
      <div self-center>
        Hello
      </div>
    </div>
    <div class="titlebar-item-container" justify-end>
      <div class="titlebar-icon-container">
        <q-icon class="titlebar-icon" :class="icons.minimize" @click="handleMinimize" />
      </div>
      <div class="titlebar-icon-container" @click="handleMaximize">
        <q-icon class="titlebar-icon" :class="app.tauri?.isMaximized ? icons.unmaximize : icons.maximize" />
      </div>
      <!-- TODO: Make red background on hover for close button. -->
      <div class="titlebar-icon-container">
        <q-icon class="titlebar-icon" :class="icons.close" @click="handleClose" />
      </div>
    </div>
  </q-header>
</template>

<style lang="scss" scoped>
.titlebar-item-container {
  display: flex;
  flex: 1;
  pointer-events: none;
}
.titlebar-icon-container {
  display: flex;
  pointer-events: all;
  > &:hover {
  background-color: rgba(82, 82, 82, 0.5);
  }
}
.titlebar-icon {
  height: 18px;
  width: 30px;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  align-self: center;
}
</style>
