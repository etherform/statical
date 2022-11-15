import type { AuthChangeEvent } from '@supabase/supabase-js'
import type { Router } from 'vue-router'
import { ElMessage as message } from 'element-plus/es'

const events = {
  signIn: 'SIGNED_IN' as AuthChangeEvent,
  signOut: 'SIGNED_OUT' as AuthChangeEvent,
  refreshed: 'TOKEN_REFRESHED' as AuthChangeEvent,
}

export const supabaseAuthHook = (router: Router) => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    const user = useUserStore()

    if (import.meta.env.DEV) {
      /* console.log(`auth event: ${event}`)
      console.log(`route path: ${router.currentRoute.value.path}`) */
      message.info(`Auth event: ${event}`)
    }

    if (event === events.signIn && (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/')) {
      if (session) {
        user.handleSignIn(session)
        router.push({ path: '/home' })
      }
    }

    else if (event === events.refreshed) {
      if (session)
        user.handleRefreshSession(session)
    }

    else if (event === events.signOut) {
      user.handleSignOut()
      router.push({ path: '/login' })
    }
  })
}
