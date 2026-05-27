import { inventoryPoint } from './inventoryPoint.js'
import { mapsPoint } from './mapsPoint.js'
import { dungeonPoint } from './dungeonPoint.js'
import { eventsPoint } from './eventsPoint.js'
import { profilePoint } from './profilePoint.js'
import { arenaPvpPoint } from './arenaPvpPoint.js'
import { commercePoint } from './commercePoint.js'
import { riftsPoint } from './riftsPoint.js'
import { battlePoint } from './battlePoint.js'
import { guildPoint } from './guildPoint.js'
import { charactersPoint } from './charactersPoint.js'
import { merchantPoint } from './merchantPoint.js'
import { gmPanelPoint } from './gmPanelPoint.js'
import { logoutPoint } from './logoutPoint.js'

export const mapPoints = [
  inventoryPoint,
  mapsPoint,
  dungeonPoint,
  eventsPoint,
  profilePoint,
  arenaPvpPoint,
  commercePoint,
  riftsPoint,
  battlePoint,
  guildPoint,
  charactersPoint,
  merchantPoint,
  gmPanelPoint,
  logoutPoint,
]

export function getPointByKey(key) {
  return mapPoints.find((point) => point.key === key)
}
