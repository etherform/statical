import type { App } from 'vue'
import Urql, {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from '@urql/vue'
import { DefaultWSClient, GQL_URL, WS_URL, createRestartableClient, getAuthHeaders } from '~/utils'
/* import { contextExchange } from '@urql/exchange-context'; */

export const wsClient = createRestartableClient({
  url: WS_URL,
  connectionParams: async () => ({
    headers: {
      ...getAuthHeaders(),
    },
  }),
})

const exchanges = [
  dedupExchange,
  cacheExchange,
  fetchExchange,
  subscriptionExchange({
    forwardSubscription: operation => ({ subscribe: sink => ({ unsubscribe: wsClient.subscribe(operation, sink) }) }),
  }),
]

export const urql = createClient({
  url: GQL_URL,
  exchanges,
  requestPolicy: 'cache-and-network',
  maskTypename: true,
  suspense: true,
  fetchOptions: () => {
    return {
      headers: {
        ...getAuthHeaders(),
      },
    }
  },
})

export const setupUrql = (app: App) => {
  app.use(Urql, urql)
  app.provide(DefaultWSClient, wsClient)
}
