import { createApp } from 'vue'
import App from '~/App.vue'
import { setupStore } from '~/setup/pinia'
import { setupI18n } from '~/setup/i18n'
import { setupRouter } from '~/setup/router'
import { setupNhost } from '~/setup/nhost'
import { setupUrql } from '~/setup/urql'
import { setupStyles } from '~/setup/styles'

/* import '~/setup/styles' */

const app = createApp(App)
setupStore(app)
setupI18n(app)
setupNhost(app)
setupUrql(app)
setupStyles(app)
const router = setupRouter(app)
router.isReady().then(() => {
  app.mount('#app')
})
