<script lang="ts" setup>
import { supabaseAuthHook } from '~/hooks/auth'

const app = useAppStore()
const router = useRouter()

useHead({
  title: computed(() => app.title),
})

supabaseAuthHook(router)
</script>

<template>
  <el-config-provider :locale="app.locale" size="default" :z-index="3000">
    <router-view />
  </el-config-provider>
</template>
