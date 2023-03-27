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
  <q-header shadow h-12 flex items-center p-0 bg-white color-gray-700>
    <q-icon :class="icons.sidebar" icon-btn-7 ml-2 @click="app.toggleSidebar" />
    <el-divider direction="vertical" h-6 />
    <div flex-grow />
    <el-divider direction="vertical" h-6 />
    <el-icon :class="icons.expand" icon-btn-6 />
    <el-divider direction="vertical" h-6 />
    <el-icon :class="icons.lock" icon-btn-6 />
    <el-divider direction="vertical" h-6 />
    <el-dropdown trigger="click" mr-3>
      <div flex items-center text-gray-700>
        <div class="overflow-hidden relative w-7 h-7 bg-gray-100 rounded-full">
          <svg class="absolute -top-0.5 -left-1 w-9 h-9 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
        </div>
        <div ml-2>
          <div>{{ user.name ?? 'User' }}</div>
          <div class="text-xs text-gray-500">
            Администратор
          </div>
        </div>
        <el-icon :class="icons.down" w-5 h-5 ml-0.5 />
      </div>

      <template #dropdown>
        <el-dropdown-menu class="no-select">
          <router-link to="/profile">
            <el-dropdown-item>Профиль</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click="handleSignOut">
            Выйти
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </q-header>
</template>
