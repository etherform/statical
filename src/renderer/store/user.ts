import { acceptHMRUpdate, defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import type { NhostSession } from '@nhost/core'
import { logger } from '~/utils/logger'
import { nhost } from '~/setup/nhost'

export interface UserState {
  id?: string
  name?: string
  email?: string
  roles?: string[]
  locale: string
  refreshToken: RemovableRef<string>
  session?: NhostSession
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    locale: 'ru',
    refreshToken: useStorage('refreshToken', ''),
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.session
    },
  },
  actions: {
    handleSignIn(session: NhostSession) {
      this.session = session
      this.id = session.user.id
      this.name = session.user.displayName
      this.email = session.user.email
      this.locale = session.user.locale
      this.refreshToken = session.refreshToken
      this.roles = session.user.roles

      logger.debug('AUTH => Session refreshed.')
    },

    handleSignOut() {
      this.id = undefined
      this.name = undefined
      this.email = undefined
      this.roles = undefined
      this.refreshToken = ''
      this.session = undefined
      logger.debug('AUTH => Session dropped.')
    },

    async refreshSession() {
      logger.debug('AUTH => Attempting to refresh session...')

      if (!this.refreshToken || this.refreshToken.length === 0) {
        logger.debug('AUTH => Failed to refresh session: refresh token missing')
        return false
      }

      const { session, error } = await nhost.auth.refreshSession(this.refreshToken)

      if (error)
        logger.debug(`AUTH => Failed to refresh session: ${error.message}`)

      if (session)
        return true

      return false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
