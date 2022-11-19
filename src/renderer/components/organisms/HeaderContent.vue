<script lang="ts" setup>
import { useSignOut } from '@nhost/vue'
import { ElMessage as message } from 'element-plus/es'
import { icons } from '~/styles/icons'

const { t } = useI18n()

const user = useUserStore()
const app = useAppStore()
const { signOut } = useSignOut()

const handleSignOut = async () => {
  const { isError, error } = await signOut()

  if (isError)
    message.error(`${t('strings_capital.error')}: ${error?.message}`)
}
</script>

<template>
  <div flex items-center justify-center w-8 h-8 ml-2 class="hvr-grow" @click="app.toggleSidebar">
    <i :class="icons.sidebar" w-6 h-6 color-gray-700 />
  </div>
  <el-divider direction="vertical" h-6 />
  <div flex-grow />
  <div
    class="header-item flex"
    style="justify-content: center; width: 40px"
  >
    <div :class="icons.fullscreen" />
  </div>
  <div
    class="header-item flex"
    style="justify-content: center; width: 40px"
    @click="app.toggleEditMode"
  >
    <div :class="app.allowEdit ? icons.unlock : icons.lock" />
  </div>
  <el-dropdown trigger="click" mr-4>
    <div class="flex" style="justify-content: space-evenly; height: 100%">
      <div :class="icons.user" />
      <div style="align-self: center; pointer-events: none">
        <strong>{{ user.name ?? 'User' }}</strong>
      </div>
      <div style="align-self: end">
        <div :class="icons.down" />
      </div>
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
</template>
