import { createApp } from 'vue'
import App from '~/App.vue'
import { setupStore } from '~/setup/pinia'
import { setupI18n } from '~/setup/i18n'
import { setupRouter } from '~/setup/router'
import { setupDatabase } from '~/setup/nhost'
import { setupStyles } from '~/setup/styles'

const app = createApp(App)
setupStore(app)
setupI18n(app)
setupRouter(app)
setupDatabase(app)
setupStyles(app)
app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
