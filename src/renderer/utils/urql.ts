import type { Client, ClientOptions } from 'graphql-ws'
import { createClient } from 'graphql-ws'

export const DefaultWSClient = Symbol('default-ws-client')
export const GQL_URL = `${import.meta.env.VITE_BACKEND_URL}/v1/graphql` /*  import.meta.env.VITE_HASURA_GRAPHQL_GRAPHQL_URL ?? 'http://localhost:8080/v1/graphql' */
export const WS_URL = GQL_URL.startsWith('https') ? GQL_URL.replace(/^https/, 'wss') : GQL_URL.replace(/^http/, 'wss')

export interface RestartableClient extends Client {
  restart(): void
}

export function createRestartableClient(options: ClientOptions): RestartableClient {
  let restartRequested = false
  let restart = () => {
    restartRequested = true
  }

  const client = createClient({
    ...options,
    on: {
      ...options.on,
      opened: (originalSocket) => {
        const socket = originalSocket as WebSocket
        options.on?.opened?.(socket)

        restart = () => {
          if (socket.readyState === WebSocket.OPEN) {
            // if the socket is still open for the restart, do the restart
            socket.close(4205, 'Client Restart')
          }
          else {
            // otherwise the socket might've closed, indicate that you want
            // a restart on the next opened event
            restartRequested = true
          }
        }

        // just in case you were eager to restart
        if (restartRequested) {
          restartRequested = false
          restart()
        }
      },
    },
  })

  return {
    ...client,
    restart: () => restart(),
  }
}

export const getAuthHeaders = () => {
  const user = useUserStore()
  return { authorization: user.session?.accessToken ? `Bearer ${user.session?.accessToken}` : '' }
}
