export type AppColor =
  | 'dark100'
  | 'dark200'
  | 'grey100'
  | 'grey200'
  | 'white'
  | 'skin100'
  | 'skin200'
  | 'warning'
  | 'critical'
  | 'success'
  | 'highlight100'
  | 'highlight200'
  | 'red100'

export type CategoryColor =
  | 'daily'
  | 'food'
  | 'animals'
  | 'housework'
  | 'children'
  | 'specialCouple'
  | 'administrative'
  | 'other'

export type Color = AppColor | CategoryColor

export const colors = {
  // APP
  dark100: '#0C2333',
  dark200: '#0A1D2B',
  grey100: '#BDBCBD',
  grey200: '#607788',
  white: '#FFFFFF',
  skin100: '#F9F0EB',
  skin200: '#EEE2DC',
  warning: '#F4A82C',
  critical: '#F42C2C',
  success: '#69CE7F',
  highlight100: '#7489E1',
  highlight200: '#A8B9FE',
  red100: '#E87180',
  categories: {
    // CATEGORIES
    daily: '#E87180',
    food: '#E1B674',
    animals: '#71C2E8',
    housework: '#69CE7F',
    children: '#FFA171',
    specialCouple: '#7489E1',
    administrative: '#698FBF',
    other: '#A674E1',
  },
}

export const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
