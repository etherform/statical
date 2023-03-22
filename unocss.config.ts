import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { safelist, shortcuts } from './src/styles/unocss'

export default defineConfig({
  shortcuts,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        majesticons: () => import('@iconify-json/majesticons/icons.json').then(i => i.default),
        uil: () => import('@iconify-json/uil/icons.json').then(i => i.default),
        quill: () => import('@iconify-json/quill/icons.json').then(i => i.default),
        ep: () => import('@iconify-json/ep/icons.json').then(i => i.default),
      },
      extraProperties: {
        /* 'display': 'flex',
        'justify-content': 'space-around',
        'vertical-align': 'middle', */
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        serif: 'Roboto Serif',
        mono: 'Roboto Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist,
})
