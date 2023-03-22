import { createApp } from 'vue'
import App from '~/App.vue'
import { setupStore } from '~/setup/pinia'
import { setupI18n } from '~/setup/i18n'
import { setupRouter } from '~/setup/router'
import { setupNhost } from '~/setup/nhost'
import { setupUrql } from '~/setup/urql'

import '~/setup/styles'

const app = createApp(App)
setupStore(app)
setupI18n(app)
setupNhost(app)
setupUrql(app)
const router = setupRouter(app)
router.isReady().then(() => {
  app.mount('#app')
})
