import type { App } from 'vue'
import { NhostClient } from '@nhost/vue'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN as string,
  region: import.meta.env.VITE_NHOST_REGION as string,
})

export const setupDatabase = (app: App) => {
  app.use(nhost)
}
