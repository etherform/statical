<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { useTitle } from '@vueuse/core'
import { invoke } from '@tauri-apps/api/tauri'
import { logger } from '~/utils'

const app = useAppStore()
const user = useUserStore()
const locale = useLocaleStore()
const router = useRouter()
const { nhost } = useNhostClient()
const ws = useWSClient()

useTitle(() => app.title)

/* watch(
  () => app.title,
  title => window.titlebar.setTitle(title),
  { immediate: true },
) */

watch(
  () => user.locale,
  loc => locale.setLocale(loc),
  { immediate: true },
)

onMounted(async () => {
  app.os = await invoke<string>('get_os')
  /* window.api.finishLoadingAnimation() */

  nhost.auth.onAuthStateChanged(async (event, session) => {
    logger.debug(`AUTH_EVENT => ${event}`)

    switch (event) {
      case 'SIGNED_IN':
        if (!session) {
          logger.error('AUTH => Session is undefined at SIGN_IN.')
          break
        }

        user.handleSignIn(session)
        ws?.restart()
        if (app.route.current.path === '/' || app.route.current.path === '/login')
          router.push(app.route.previous.path ?? '/home')

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
    } else {
      logger.debug('AUTH => Logged out.')
    }
  })
})
</script>

<template>
  <titlebar v-if="app.os === 'windows' || app.os === 'linux' || app.os === 'macos'" />
  <el-config-provider :locale="locale.current.ui" size="default" :z-index="3000" :message="{ max: 3 }">
    <app-layout />
  </el-config-provider>
</template>
