import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'flex',
        'justify-content': 'space-around',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'i-quill:hamburger-sidebar',
    'i-octicon:sidebar-collapse-24',
    'i-octicon:sidebar-expand-24',
    'i-uil-user',
    'i-uil-lock',
    'i-uil:lock-alt',
    'i-uil:lock-open-alt',
    'i-majesticons:arrows-expand-line',
    'i-uil:user-circle',
    'i-majesticons:chevron-down',
    'i-fluent-mdl2:locale-language',
  ],
})
