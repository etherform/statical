import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import type { RouteRecordRaw } from 'vue-router/auto'
import { setupGuards } from '~/router/guards'

/* if router.meta.requiresAuth is not defined make it true by default */
const protectRoutes = (routes: RouteRecordRaw[]) => routes.map((route) => {
  if (!route.meta)
    route.meta = { requiresAuth: true }
  else if (route.meta.requiresAuth === undefined)
    route.meta.requiresAuth = true

  if (route.children)
    protectRoutes(route.children)

  return route
})

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: protectRoutes,
})

export const setupRouter = (app: App) => {
  setupGuards(router)
  app.use(router)
  return router
}
