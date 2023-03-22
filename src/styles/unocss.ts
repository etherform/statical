import type { UserShortcuts } from 'unocss'
import { icons } from './icons'
const iconsArray = Object.values(icons)

export const shortcuts: UserShortcuts<{}> = [
  ['content-block', 'rounded-2 p-3 bg-white shadow-sm'],
  ['icon-btn', 'cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:color-teal-600'],
  ['icon-btn-5', 'icon-btn w-5 h-5'],
  ['icon-btn-6', 'icon-btn w-6 h-6'],
  ['icon-btn-7', 'icon-btn w-7 h-7'],

]

export const safelist = [...iconsArray]
