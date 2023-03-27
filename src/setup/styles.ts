import type { App } from 'vue'
import { Quasar } from 'quasar'

/* import '~/styles/element.scss' */
import '@unocss/reset/tailwind.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '~/styles/global.scss'
import '~/styles/default.scss'
import '~/styles/hover.scss'
import 'uno.css'

export const setupStyles = (app: App) => {
  app.use(Quasar, {})
}
