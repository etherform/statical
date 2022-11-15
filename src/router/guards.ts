import nprogress from 'nprogress'
import type { Router } from 'vue-router'

nprogress.configure({ showSpinner: false })

export const setupGuards = (router: Router) => {
  router.beforeEach((to, _from, next) => {
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
    /* if (to.path === '/login') {
      if (user.isAuthenticated) { next({ path: '/home' }) }
      else {
        user.refreshSession()
        if (user.isAuthenticated)
          next({ path: '/home' })
      }
    } */

    // if not authenticated and required to be
    /* else */ if (to.meta.requiresAuth && !user.isAuthenticated)
      next({ path: '/login' })

    else next()
  })

  router.afterEach(async (to, _from, failure) => {
    const app = useAppStore()
    if (!failure) {
      app.setPath(to.path)
      app.setTitle(to.meta.title as string)
    }

    // finish nprogress animation
    nprogress.done()
  })
}
