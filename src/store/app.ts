import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Language } from 'element-plus/es/locale'
/* import en from 'element-plus/es/locale/lang/en'
import ru from 'element-plus/es/locale/lang/ru' */
import { en, ru } from 'element-plus/es/locales'
import { i18n } from '~/setup/i18n'

const { t, te } = i18n.global

export interface AppState {
  path: string | null
  title: string | undefined
  sidebar: {
    collapsed: boolean
  }
  locale: Language
  locales: Language[]
  allowEdit: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    path: null,
    title: import.meta.env.VITE_APP_TITLE as string,
    locale: ru,
    locales: [en, ru],
    sidebar: {
      collapsed: false,
    },
    allowEdit: false,
  }),
  actions: {
    async setPath(path: string) {
      this.path = path
    },
    async setTitle(title: string | undefined) {
      if (title && te(title))
        this.title = `${import.meta.env.VITE_APP_TITLE} - ${t(title)}`
      else if (title)
        this.title = `${import.meta.env.VITE_APP_TITLE} - ${title}`
      else
        this.title = `${import.meta.env.VITE_APP_TITLE}`
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
