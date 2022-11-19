import type { RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

export const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes)
