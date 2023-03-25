<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { useTitle } from '@vueuse/core'
import { platform } from '@tauri-apps/api/os'
import devtools from '@vue/devtools'
import { logger } from '~/utils'

const app = useAppStore()
const user = useUserStore()
const locale = useLocaleStore()
const router = useRouter()
const { nhost } = useNhostClient()
const ws = useWSClient()

if (import.meta.env.DEV)
  devtools.connect('http://localhost', 8098)

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
  app.os = await platform()
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
  <el-config-provider :locale="locale.current.ui" size="default" :z-index="3000" :message="{ max: 3 }">
    <el-container direction="vertical">
      <titlebar v-if="app.os === 'win32' || app.os === 'linux' || app.os === 'macos'" />
      <app-layout />
    </el-container>
  </el-config-provider>
</template>
