import { acceptHMRUpdate, defineStore } from 'pinia'
import { t, te } from '~/setup/i18n'

export interface AppState {
  page: {
    path: string | undefined
    title: string | undefined
  }
  sidebar: {
    collapsed: boolean
  }
  allowEdit: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    page: {
      path: undefined,
      title: undefined,
    },
    sidebar: {
      collapsed: false,
    },
    allowEdit: false,
  }),
  actions: {
    async setPagePath(path: string) {
      this.page.path = path
    },
    async setPageTitle(title: string | undefined) {
      if (title && te(title))
        this.page.title = t(title)
      else if (title)
        this.page.title = title
      else
        this.page.title = undefined
    },
    toggleSidebar() {
      this.sidebar.collapsed = !this.sidebar.collapsed
    },
    toggleEditMode() {
      this.allowEdit = !this.allowEdit
    },
  },
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
