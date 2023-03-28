<script lang="ts" setup>
import { useNhostClient } from '@nhost/vue'
import { useTitle } from '@vueuse/core'
import devtools from '@vue/devtools'
import { useQuasar } from 'quasar'
import { iconMapFn, initializeLogger, logger } from '~/utils'

const app = useAppStore()
const user = useUserStore()
const locale = useLocaleStore()
const router = useRouter()
const { nhost } = useNhostClient()
const ws = useWSClient()
const q = useQuasar()

q.iconMapFn = iconMapFn

/* q.iconSet.set() */
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
  if (window.__TAURI__ !== undefined) {
    const { platform } = await import('@tauri-apps/api/os')
    const { getLogLevel } = await import('~/tauri')

    app.tauri = {
      os: await platform(),
      isMaximized: false,
      isFocused: false,
      logLevel: await getLogLevel(),
    }

    await initializeLogger()

    logger.debug('TAURI => Initialized.')

    if (import.meta.env.DEV)
      devtools.connect('http://localhost', 8098)

    // TODO: Implement window loading splash/animation and finish it here.
  }

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
  <q-layout view="hHh Lpr fFf">
    <titlebar v-if="app.drawTitlebar" h-30px z-9999 />
    <app-layout />
  </q-layout>
</template>

<style lang="scss">

</style>
