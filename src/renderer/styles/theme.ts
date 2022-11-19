export const themeVariables = {
  // base color
  /* 'color-white': '#fff',
  'color-blue': '#324157',
  'color-light-blue': '#3A71A8',
  'color-red': '#fa0206',
  'color-pink': '#E65D6E',
  'color-green': '#30B08F',
  'color-tiffany': '#4AB7BD',
  'color-yellow': '#FEC171',
  'color-pan-green': '#30B08F',
  'color-light-grey': '#eee',
  'color-dark-grey': '#889aa4', */

  'color-bg-dark': '#283443',

  // sidebar
  'color-menu-text': '#bfcbd9',
  'color-menu-active-text': '#409EFF',
  'color-sub-menu-active-text': '#f4f4f5', // https://github.com/ElemeFE/element/issues/12951

  'color-menu-bg': '#304156',
  'color-menu-hover': '#263445',

  'color-sub-menu-bg': '#1f2d3d',
  'color-sub-menu-hover': '#001528',

  'width-sidebar-open': '210px',
  'width-sidebar-collapsed': '64px',
}

export const generateThemeVars = () => {
  const variables = Object.entries(themeVariables).reduce((result, value) => {
    const [key, val] = value
    return `${result}$${key}:${val};`
  }, '')
  return `${variables}`
}
