<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { icons } from '~/styles/icons'

const { t } = useI18n()

const user = useUserStore()
const app = useAppStore()
const { nhost } = useNhostClient()

const handleSignOut = async () => await nhost.auth.signOut()
</script>

<template>
  <q-page-sticky position="top" expand flex items-center bg-white color-gray-700>
    <q-icon :class="icons.sidebar" icon-btn-7 ml-2 @click="app.toggleSidebar" />
    <q-separator vertical self-center h-8 mx-2 />
    <div flex-grow>
      <nav flex aria-label="Breadcrumb" mx-2>
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Templates</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <q-separator vertical self-center h-8 mx-2 />
    <q-icon :class="icons.expand" icon-btn-6 />
    <q-separator vertical self-center h-8 mx-2 />
    <q-icon :class="icons.lock" icon-btn-6 />
    <q-separator vertical self-center h-8 mx-2 />
    <q-btn-dropdown flat no-caps h-40px mx-1 px-1>
      <template #label>
        <q-item m-0 p-0>
          <q-item-section avatar mx-2 px-0>
            <div class="overflow-hidden relative w-7 h-7 bg-gray-100 rounded-full">
              <svg class="absolute -top-0.5 -left-1 w-9 h-9 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ user.name ?? 'User' }}</q-item-label>
            <q-item-label caption lines="1">
              Администратор
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <q-list>
        <q-item to="/profile" clickable>
          <q-item-section>
            <q-item-label>
              Профиль
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="handleSignOut">
          <q-item-section>
            <q-item-label>
              Выйти
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-page-sticky>
</template>

<style lang="scss" scoped>
// TODO: fix arrow opacity
 .q-btn-dropdown {
  .q-btn-dropdown__arrow {
    opacity: 0.75;
  }
}
</style>
