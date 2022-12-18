import nprogress from 'nprogress'
import type { Router } from 'vue-router'
import { logger, toast } from '~/utils'

nprogress.configure({ showSpinner: false })

export const setupGuards = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    // start nprogress animation
    nprogress.start()

    const user = useUserStore()

    // eslint-disable-next-line max-len
    logger.debug(`ROUTER => from: ${from.path}, to: ${to.path}, user auth: ${user.isAuthenticated}, auth req: ${to.matched.some((r) => r.meta.requiresAuth)}`)

    // if authenticated redirect from login to home page
    if (
      to.path === '/login'
      && (
        user.isAuthenticated
        || (user.refreshToken && user.refreshToken.length !== 0 && await user.refreshSession())
      )
    ) {
      logger.debug('ROUTER => Redirecting AUTHORIZED user to /home.')
      next({ path: '/home' })
    }
    else if (
      to.matched.some((r) => r.meta.requiresAuth)
      && (
        !user.isAuthenticated
        && !(user.refreshToken && user.refreshToken.length !== 0 && await user.refreshSession())
      )
    ) {
      toast.debug('ROUTER => Redirecting UNAUTHORIZED user to /login.')
      next({ path: '/login' })
    }

    next()
  })

  router.afterEach(async (_to, _from, _failure) => {
    /* const app = useAppStore()
    if (!failure) {
      app.setPagePath(to.path)
      app.setPageTitle(to.meta.title as string)
    } */

    // finish nprogress animation
    nprogress.done()
  })
}
