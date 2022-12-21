<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { tryOnMounted, useTitle } from '@vueuse/core'
import { logger } from '~/utils'

const app = useAppStore()
const user = useUserStore()
const locale = useLocaleStore()
const router = useRouter()
const { nhost } = useNhostClient()
const ws = useWSClient()

useTitle(() => app.title)

watch(
  () => app.title,
  title => window.titlebar.setTitle(title),
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
          if (app.route.current.path === '/' || app.route.current.path === '/login')
            router.push(app.route.previous.path ?? '/home')
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
  <el-config-provider :locale="locale.current.ui" size="default" :z-index="3000" :message="{ max: 3 }">
    <app-layout />
  </el-config-provider>
</template>
