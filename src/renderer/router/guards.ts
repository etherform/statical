import nprogress from 'nprogress'
import type { Router } from 'vue-router'
import { toast } from '~/utils/toasts'
import { isAuthenticated } from '~/utils/auth'

nprogress.configure({ showSpinner: false })

export const setupGuards = (router: Router) => {
  router.beforeEach(async (to, _from, next) => {
    // start nprogress animation
    nprogress.start()

    /*  const routes = router.getRoutes()
    console.log('RAW Routes')
    console.log(JSON.stringify(routes))
    const processedRoutes = routes.find((r) => r.path)
    console.log('PROCESSED Routes')
    console.log(JSON.stringify(processedRoutes)) */

    const user = useUserStore()

    // if authenticated redirect from login to home page
    if (to.path === '/login' && await isAuthenticated()) {
      if (import.meta.env.DEV)
        toast.info('ROUTER: Redirecting authorized user to /home.')

      next({ path: '/home' })
    }
    else if (to.matched.some((record) => record.meta.requiresAuth) && !(await isAuthenticated())) {
      if (user.token.refresh) {
        user.refreshSession()

        if (await isAuthenticated()) {
          if (import.meta.env.DEV)
            toast.info('ROUTER: Successfully refreshed user session.')

          next()
        }
        else {
          if (import.meta.env.DEV)
            toast.info('ROUTER: Session refresh failed. Redirecting user to /login.')

          next({ path: '/login' })
        }
      }
      else {
        if (import.meta.env.DEV)
          toast.info('ROUTER: Redirecting unauthorized user to /login.')

        next({ path: '/login' })
      }
    }
    else { next() }
  })

  router.afterEach(async (to, _from, failure) => {
    const app = useAppStore()
    if (!failure) {
      app.setPagePath(to.path)
      app.setPageTitle(to.meta.title as string)
    }

    // finish nprogress animation
    nprogress.done()
  })
}
