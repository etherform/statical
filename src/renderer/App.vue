<script lang="ts" setup>
import { tryOnMounted, useTitle } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import { logger } from '~/utils'

const user = useUserStore()
const locale = useLocaleStore()
const route = useRoute()
const router = useRouter()
const supa = useSupabase()
const { t, te } = useI18n()

const pageTitle: ComputedRef<string | undefined> = computed(() => {
  if (route.meta.title && te(route.meta.title as string))
    return t(route.meta.title as string)
  else if (route.meta.title)
    return route.meta.title as string
  else
    return undefined
})

const appTitle = useTitle(() => pageTitle.value ? `Statical - ${pageTitle.value}` : 'Statical')

watch(
  () => appTitle.value,
  () => window.titlebar.setTitle(appTitle.value ?? 'Statical'),
  { immediate: true },
)

watch(
  () => user.locale,
  (loc) => locale.setLocale(loc),
  { immediate: true },
)

tryOnMounted(() => {
  window.api.finishLoadingAnimation()

  /*
  | 'PASSWORD_RECOVERY'
  | 'SIGNED_IN'
  | 'SIGNED_OUT'
  | 'TOKEN_REFRESHED'
  | 'USER_UPDATED'
  | 'USER_DELETED'
  */
  supa.auth.onAuthStateChange(async (event, session) => {
    logger.debug(`AUTH_EVENT => ${event}`)

    switch (event) {
      case 'SIGNED_IN':
        if (session) {
          await user.handleSignIn(session)
          if (route.path === '/' || route.path === '/login')
            router.push('/home')
        }
        break
      case 'SIGNED_OUT':
        user.handleSignOut()
        router.push('/login')
        break
      case 'TOKEN_REFRESHED':
        if (session)
          user.handleTokenChange(session)
        break
      case 'USER_UPDATED':
        if (session)
          await user.handleSignIn(session)
        break
      case 'USER_DELETED':
        user.handleSignOut()
        router.push('/login')
        break
    }
  })
})
</script>

<template>
  <el-config-provider :locale="locale.current.ui" size="default" :z-index="3000">
    <app-layout />
  </el-config-provider>
</template>
