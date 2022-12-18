import { createApp } from 'vue'
import App from '~/App.vue'
import { setupStore } from '~/setup/pinia'
import { setupI18n } from '~/setup/i18n'
import { setupSupabase } from '~/setup/supabase'
import { setupRouter } from '~/setup/router'
import { setupStyles } from '~/setup/styles'

const app = createApp(App)
setupStore(app)
setupI18n(app)
setupSupabase(app)
setupStyles(app)
const router = setupRouter(app)
router.isReady().then(() => {
  app.mount('#app')
})
