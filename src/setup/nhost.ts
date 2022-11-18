import type { App } from 'vue'
import { NhostClient } from '@nhost/vue'
import { createApolloClient } from '@nhost/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'

export const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
})

const apolloClient = createApolloClient({ nhost })

export const setupDatabase = (app: App) => {
  app.use(nhost).provide(DefaultApolloClient, apolloClient)
}
