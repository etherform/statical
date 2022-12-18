import type { App } from 'vue'
import { NhostClient } from '@nhost/vue'

export const nhost = new NhostClient({
  backendUrl: 'https://statical.etherform.dev',
  autoRefreshToken: true,
  autoSignIn: true,
})

export const setupNhost = (app: App) => {
  app.use(nhost)
}
