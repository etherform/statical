import type { App } from 'vue'
import { createHead } from '@unhead/vue'

import '@unocss/reset/tailwind.css'
import '~/styles/default.scss'
import '~/styles/hover.scss'
import '~/styles/element.scss'
import 'uno.css'

const head = createHead()

export const setupStyles = (app: App) => {
  app.use(head)
}
