import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
/* import type {  } from 'vue-router' */
import type { RouteLocationNormalized } from 'vue-router'
import type { RouteMeta, RouteRecordRaw } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { t, te } from '~/setup/i18n'

export interface AppState {
  route: {
    previous: {
      path?: string
      meta?: RouteMeta
    }
    current: {
      path?: string
      meta?: RouteMeta
    }
  }
  sidebar: {
    collapsed: RemovableRef<boolean>
  }
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    route: {
      previous: {},
      current: {},
    },
    sidebar: {
      collapsed: useStorage('sidebar-collapsed', false),
    },
  }),
  getters: {
    title(state): string {
      if (state.route.current.meta?.title && te(state.route.current.meta?.title as string))
        return `Statical - ${t(state.route.current.meta.title as string)}`
      else if (state.route.current.meta?.title)
        return `Statical - ${state.route.current.meta.title as string}`
      else
        return 'Statical'
    },
    sidebarMenuMap(_state): RouteRecordRaw[] {
      const filter = (rs: RouteRecordRaw[]) => rs.filter((r) => {
        if (r.meta && !r.meta.menuIgnore && r.meta.menuIndex) {
          if (r.children)
            filter(r.children)
          return true
        } else {
          return false
        }
      })
      const sort = (rs: RouteRecordRaw[]) => rs.sort((a, b) => Number(a.meta?.menuIndex) - Number(b.meta?.menuIndex)).map((r) => {
        if (r.children)
          r.children = sort(r.children)
        return r
      })
      return sort(filter(routes))
    },
  },
  actions: {
    toggleSidebar() {
      this.sidebar.collapsed = !this.sidebar.collapsed
    },
    handleRouteChange(from: RouteLocationNormalized, to: RouteLocationNormalized) {
      this.route.previous.path = from.fullPath
      this.route.previous.meta = from.meta
      this.route.current.path = to.path
      this.route.current.meta = to.meta
    },
  },
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
