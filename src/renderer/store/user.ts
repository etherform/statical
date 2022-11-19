import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Language } from 'element-plus/es/locale'
import { en, ru } from 'element-plus/es/locales'
import type { NhostSession } from '@nhost/core'
import { nhost } from '~/setup/nhost'
import { t, locale as appLocale } from '~/setup/i18n'

export interface UserState {
  id: string | undefined
  name: string | undefined
  email: string | undefined
  roles: string[] | undefined
  avatar: string | undefined
  locale: {
    name: string
    string: string
    element: Language
    elementArray: Language[]
  }
  token: {
    access: string | undefined
    refresh: string | undefined
  }

}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    id: undefined,
    name: undefined,
    email: undefined,
    roles: undefined,
    avatar: undefined,
    locale: {
      name: t('name'),
      string: en.name,
      element: en,
      elementArray: [en, ru],
    },
    token: {
      access: undefined,
      refresh: undefined,
    },
  }),
  actions: {
    handleSignIn(session: NhostSession) {
      this.id = session.user.id
      this.name = session.user?.displayName
      this.email = session.user?.email
      this.roles = session.user?.roles
      this.avatar = session.user?.avatarUrl

      if (session.user?.locale) {
        const locale = this.locale.elementArray.find((i) => i.name === session.user.locale)
        if (locale && this.locale.name !== locale.name) {
          appLocale.value = locale.name
          this.locale.string = locale.name
          this.locale.name = t('name')
          this.locale.element = locale
        }
      }
    },

    handleSignOut() {
      this.id = undefined
      this.name = undefined
      this.email = undefined
      this.roles = undefined
      this.avatar = undefined
      this.token.access = undefined
      this.token.refresh = undefined
    },

    handleTokenChange(session: NhostSession) {
      this.token.access = session.accessToken
      this.token.refresh = session.refreshToken
    },

    refreshSession() {
      nhost.auth.refreshSession(this.token.refresh)
    },

    setLocaleById(id: number) {
      appLocale.value = this.locale.elementArray[id].name
      this.locale.string = this.locale.elementArray[id].name
      this.locale.element = this.locale.elementArray[id]
      this.locale.name = t('name')
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
