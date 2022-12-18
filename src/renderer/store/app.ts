import { acceptHMRUpdate, defineStore } from 'pinia'

export interface AppState {
  sidebar: {
    collapsed: boolean
  }
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    sidebar: {
      collapsed: false,
    },
  }),
  getters: {
    /*     pageTitle(_state): string | undefined {
      const route = useRoute()
      if (route.meta.title && te(route.meta.title as string))
        return t(route.meta.title as string)
      else if (route.meta.title)
        return route.meta.title as string
      else
        return undefined
    }, */
  },
  actions: {
    /* async setPagePath(path: string) {
      this.page.path = path
    },
    async setPageTitle(title: string | undefined) {
      if (title && te(title))
        this.page.title = t(title)
      else if (title)
        this.page.title = title
      else
        this.page.title = undefined
    }, */
    toggleSidebar() {
      this.sidebar.collapsed = !this.sidebar.collapsed
    },
  },
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
