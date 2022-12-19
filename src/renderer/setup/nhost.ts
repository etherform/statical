import type { App } from 'vue'
import { NhostClient } from '@nhost/vue'

export const nhost = new NhostClient({
  backendUrl: import.meta.env.VITE_BACKEND_URL as string,
  autoRefreshToken: true,
  autoSignIn: true,
})

export const setupNhost = (app: App) => {
  app.use(nhost)
}
