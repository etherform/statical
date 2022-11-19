import { nhost } from '~/setup/nhost'
import { waitUntil } from '~/utils/wait'

export const isAuthenticated = async () => {
  if (!nhost.auth.getAuthenticationStatus().isLoading)
    return nhost.auth.getAuthenticationStatus().isAuthenticated

  else if (await waitUntil(async () => !nhost.auth.getAuthenticationStatus().isLoading, 100, 10000))
    return nhost.auth.getAuthenticationStatus().isAuthenticated

  else
    return nhost.auth.getAuthenticationStatus().isAuthenticated
}
