import nprogress from 'nprogress'
import type { Router } from 'vue-router/auto'
import { logger } from '~/utils'

nprogress.configure({ showSpinner: false, parent: '#app' })

export const setupGuards = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    nprogress.start()

    const user = useUserStore()

    logger.debug(`ROUTER => from: ${from.path}, to: ${to.path}, user auth: ${user.isAuthenticated}, auth req: ${to.matched.some(r => r.meta.requiresAuth)}`)

    if (to.path === '/login' && (user.isAuthenticated || await user.refreshSession())) {
      logger.debug('ROUTER => Redirecting AUTHORIZED user to /home.')
      next({ path: '/home' })
    }
    else if (to.matched.some(r => r.meta.requiresAuth) && (!user.isAuthenticated && !(await user.refreshSession()))) {
      logger.debug('ROUTER => Redirecting UNAUTHORIZED user to /login.')
      next({ path: '/login' })
    }
    else {
      next()
    }
  })

  router.afterEach(async (to, from, failure) => {
    const app = useAppStore()

    if (!failure)
      app.handleRouteChange(from, to)

    nprogress.done()
  })
}
