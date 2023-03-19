import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  // this solves type error: https://github.com/intlify/vue-i18n-next/issues/1119
  messages: messages as I18nOptions['messages'],
})

export const t = i18n.global.t
export const te = i18n.global.te
export const locale = i18n.global.locale

export const setupI18n = (app: App) => {
  app.use(i18n)
}
