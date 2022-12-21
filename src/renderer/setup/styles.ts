import type { App } from 'vue'
import { createHead } from '@unhead/vue'

import '~/styles/element.scss'
/* import '@unocss/reset/tailwind.css' - imported ny electron */
import '~/styles/default.scss'
import '~/styles/hover.scss'
import 'uno.css'

const head = createHead()

export const setupStyles = (app: App) => {
  app.use(head)
}
