import type { wsClient } from '~/setup/urql'
import { DefaultWSClient } from '~/utils/urql'

export const useWSClient = () => inject<typeof wsClient>(DefaultWSClient)
