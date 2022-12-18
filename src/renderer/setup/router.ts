import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupGuards } from '~/router/guards'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    const processed = routes.map((route) => {
      if (!route.meta)
        route.meta = { requiresAuth: true }
      else if (route.meta.requiresAuth === undefined)
        route.meta.requiresAuth = true
      return route
    })
    return processed
  },
})

export const setupRouter = (app: App) => {
  setupGuards(router)
  app.use(router)
  return router
}
