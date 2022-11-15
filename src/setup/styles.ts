import type { App } from 'vue'
import { createHead } from '@vueuse/head'

import '~/styles/default.scss'
import '~/styles/hover.scss'
import '~/styles/element.scss'
import 'uno.css'

const head = createHead()

export const setupStyles = (app: App) => {
  app.use(head)
}
