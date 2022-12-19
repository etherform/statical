import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'

export interface AppState {
  sidebar: {
    collapsed: RemovableRef<boolean>
  }
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    sidebar: {
      collapsed: useStorage('sidebar-collapsed', false),
    },
  }),
  getters: {

  },
  actions: {
    toggleSidebar() {
      this.sidebar.collapsed = !this.sidebar.collapsed
    },
  },
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
