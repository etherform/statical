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
  <el-header shadow h-12 flex items-center p-0 bg-white color-gray-700>
    <el-icon :class="icons.sidebar" class="icon-btn" w-7 h-7 ml-2 @click="app.toggleSidebar" />
    <el-divider direction="vertical" h-6 />
    <div flex-grow />
    <el-divider direction="vertical" h-6 />
    <el-icon :class="icons.expand" class="icon-btn" w-6 h-6 />
    <el-divider direction="vertical" h-6 />
    <el-icon :class="icons.lock" class="icon-btn" w-6 h-6 />
    <el-divider direction="vertical" h-6 />
    <el-dropdown trigger="click" mr-3>
      <span flex items-center select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 color-gray-700 hover:color-teal-600>
        <el-icon :class="icons.user" w-6 h-6 pr-2 />
        <strong text-4>{{ user.name ?? 'User' }}</strong>
        <el-icon :class="icons.down" w-5 h-5 />
      </span>
      <!-- <div class="flex" style="justify-content: space-evenly; height: 100%">
        <div :class="icons.user" />
        <div style="align-self: center; pointer-events: none">
          <strong>{{ user.name ?? 'User' }}</strong>
        </div>
        <div style="align-self: end">
          <div :class="icons.down" />
        </div>
      </div> -->

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
  </el-header>
</template>
