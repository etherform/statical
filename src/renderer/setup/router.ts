import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '~/router/routes'
import { setupGuards } from '~/router/guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const setupRouter = (app: App) => {
  setupGuards(router)
  app.use(router)
}
