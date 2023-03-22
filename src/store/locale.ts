import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Language } from 'element-plus/es/locale'
import { en, ru } from 'element-plus/es/locales'
import { locale as appLocale, t } from '~/setup/i18n'

export interface LocaleState {
  current: {
    name: string
    text: string
    ui: Language
  }
  elementLocaleArray: Language[]
}

export const useLocaleStore = defineStore({
  id: 'locale',
  state: (): LocaleState => ({
    current: {
      name: 'Русский',
      text: 'ru',
      ui: ru,
    },
    elementLocaleArray: [en, ru],
  }),
  actions: {
    setLocale(s: string) {
      const locale = this.elementLocaleArray.find(l => l.name === s)
      if (locale) {
        appLocale.value = locale.name
        this.current.text = locale.name
        this.current.ui = locale
        this.current.name = t('name')
      }
    },

    setLocaleById(id: number) {
      appLocale.value = this.elementLocaleArray[id].name
      this.current.text = this.elementLocaleArray[id].name
      this.current.ui = this.elementLocaleArray[id]
      this.current.name = t('name')
    },
  },
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore as any, import.meta.hot))
