import { icons } from '~/styles/icons'

interface IconFnReturnResolved {
  cls: string
  content?: string
}

interface IconFnReturnRecursive {
  icon: string
}

type IconFnReturn = IconFnReturnResolved | IconFnReturnRecursive

function customRules(icon: string): string {
  switch (icon) {
    case 'keyboard_arrow_down':
      return 'i-majesticons-chevron-down-line'
    case 'arrow_drop_down':
      return 'i-majesticons-chevron-down-line'
    default:
      return icon
  }
}

export const iconMapFn = (icon: string): IconFnReturn => {
  const iconParsed = customRules(icon)

  if (Object.values(icons).includes(iconParsed))
    return { cls: iconParsed }

  return { cls: '', content: iconParsed }
}
