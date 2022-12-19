<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { tryOnMounted, useTitle } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import { logger } from '~/utils'

const user = useUserStore()
const locale = useLocaleStore()
const route = useRoute()
const router = useRouter()
const { nhost } = useNhostClient()
const ws = useWSClient()
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
  loc => locale.setLocale(loc),
  { immediate: true },
)

tryOnMounted(() => {
  window.api.finishLoadingAnimation()

  nhost.auth.onAuthStateChanged(async (event, session) => {
    logger.debug(`AUTH_EVENT => ${event}`)

    switch (event) {
      case 'SIGNED_IN':
        if (session) {
          user.handleSignIn(session)
          ws?.restart()
          if (route.path === '/' || route.path === '/login')
            router.push('/home')
        }
        break
      case 'SIGNED_OUT':
        user.handleSignOut()
        router.push('/login')
        break
    }
  })

  nhost.auth.onTokenChanged(async (session) => {
    logger.debug('AUTH_EVENT => TOKEN_CHANGED')

    if (session) {
      user.handleSignIn(session)
      ws?.restart()
    }
    else { logger.error('AUTH => Session is null on TOKEN_CHANGED') }
  })
})
</script>

<template>
  <el-config-provider :locale="locale.current.ui" size="default" :z-index="3000">
    <app-layout />
  </el-config-provider>
</template>
