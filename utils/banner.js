import gradient from 'gradient-string'
import figlet from 'figlet'

const text = 'windraxb'

const bannerText = figlet.textSync(text)

const banner = gradient([
  { color: '#42d392', pos: 0 },
  { color: '#42d392', pos: 0.1 },
  { color: '#647eff', pos: 1 }
])(bannerText)

export default banner
