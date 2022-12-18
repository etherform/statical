import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Session } from '@supabase/supabase-js'
import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { logger } from '~/utils/logger'

export interface UserState {
  id: string | undefined
  name: string | undefined
  email: string | undefined
  roles: string[] | undefined
  locale: string
  refreshToken: RemovableRef<string>
  session: Session | undefined
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    id: undefined,
    name: undefined,
    email: undefined,
    roles: undefined,
    locale: 'ru',
    refreshToken: useStorage('refreshToken', ''),
    session: undefined,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.session
    },
  },
  actions: {
    async handleSignIn(session: Session) {
      this.session = session

      const supa = useSupabase()
      const { data: users, error } = await supa.from('users').select(`
        id,
        name,
        email,
        locale
      `).eq('id', session.user.id)

      if (users?.length === 1) {
        this.id = users[0].id
        this.name = users[0].name
        this.email = users[0].email
        this.locale = users[0].locale
        this.refreshToken = session.refresh_token
      }
    },

    handleSignOut() {
      this.id = undefined
      this.name = undefined
      this.email = undefined
      this.roles = undefined
      this.refreshToken = ''
      this.session = undefined
    },

    handleTokenChange(session: Session) {
      this.refreshToken = session.refresh_token
      this.session = session
    },

    async refreshSession() {
      const supa = useSupabase()
      const { data, error } = await supa.auth.refreshSession({ refresh_token: this.refreshToken })
      if (error) {
        logger.debug(`AUTH => Failed to refresh session: ${error.message}`)
      }
      else if (data.session) {
        logger.debug('AUTH => Successfully refreshed session.')
        await this.handleSignIn(data.session)
      }

      return !!data.session
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
