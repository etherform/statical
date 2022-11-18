<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { useHead } from '@unhead/vue'
import { toast } from '~/utils/toast'

const app = useAppStore()
const user = useUserStore()
const { nhost } = useNhostClient()
const router = useRouter()

useHead({
  title: 'Statical',
  titleTemplate: (title) => { return app.page.title ? `${title} - ${app.page.title}` : `${title}` },
})

nhost.auth.onAuthStateChanged(async (event, session) => {
  if (import.meta.env.DEV)
    toast.info(`EVENT: Auth - ${event}`)

  if (event === 'SIGNED_IN' && session) {
    user.handleSignIn(session)
    if (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/') {
      const error = await router.push({ path: '/home' })
      if (error && import.meta.env.DEV)
        toast.error(error.message)
    }
  }
  else if (event === 'SIGNED_OUT') {
    user.handleSignOut()
    const error = await router.push({ path: '/login' })
    if (error && import.meta.env.DEV)
      toast.error(error.message)
  }
})

nhost.auth.onTokenChanged((session) => {
  if (import.meta.env.DEV)
    toast.info('EVENT: Auth - Token changed.')

  if (session)
    user.handleTokenChange(session)
})
</script>

<template>
  <el-config-provider :locale="user.locale.element" size="default" :z-index="3000">
    <router-view />
  </el-config-provider>
</template>

