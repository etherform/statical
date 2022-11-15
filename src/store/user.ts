import { acceptHMRUpdate, defineStore } from 'pinia'
import type { AuthError, Session } from '@supabase/supabase-js'

export interface UserState {
  name: string | undefined
  email: string | null | undefined
  session: Session | null | undefined

}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    name: undefined,
    email: undefined,
    session: undefined,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.session
    },
  },
  actions: {
    async signIn(email: string, password: string): Promise<AuthError | null> {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      return error
    },
    handleSignIn(session: Session) {
      this.email = session.user?.email
      this.session = session
    },
    async signOut(): Promise<AuthError | null> {
      const { error } = await supabase.auth.signOut()
      return error
    },
    handleSignOut() {
      this.name = undefined
      this.email = undefined
      this.session = undefined
    },
    async refreshSession(): Promise<AuthError | null > {
      const { error } = await supabase.auth.refreshSession()
      return error
    },
    handleRefreshSession(session: Session) {
      this.session = session
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
