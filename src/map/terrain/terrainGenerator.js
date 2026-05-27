import { MAP_SIZE, ROUTE_LINKS } from '../../core/constants.js'
import { mapPoints, getPointByKey } from '../../points/index.js'
import { TILE_TYPES } from './tileTypes.js'

function keyOf(x, z) {
  return `${x}:${z}`
}

function addPath(cells, from, to) {
  let x = from.tile.x
  let z = from.tile.z
  cells.add(keyOf(x, z))

  while (x !== to.tile.x) {
    x += Math.sign(to.tile.x - x)
    cells.add(keyOf(x, z))
  }

  while (z !== to.tile.z) {
    z += Math.sign(to.tile.z - z)
    cells.add(keyOf(x, z))
  }
}

export function createRouteCells() {
  const cells = new Set()
  ROUTE_LINKS.forEach(([fromKey, toKey]) => {
    const from = getPointByKey(fromKey)
    const to = getPointByKey(toKey)
    if (from && to) addPath(cells, from, to)
  })
  return cells
}

export function createPointCells() {
  return new Map(mapPoints.map((point) => [keyOf(point.tile.x, point.tile.z), point]))
}

export function getTileType(x, z, routeCells, pointCells) {
  if (pointCells.has(keyOf(x, z))) return TILE_TYPES.ruin
  if (routeCells.has(keyOf(x, z))) return TILE_TYPES.road
  if ((x === 7 && z >= 2 && z <= 9) || (z === 7 && x >= 4 && x <= 11)) return TILE_TYPES.water
  if ((x < 3 && z < 4) || (x > 10 && z < 3) || (x > 10 && z > 10)) return TILE_TYPES.stone
  if ((x + z) % 6 === 0 || (x * 3 + z * 5) % 13 === 0) return TILE_TYPES.forest
  if ((x * 11 + z * 7) % 19 === 0) return TILE_TYPES.crystal
  return TILE_TYPES.grass
}

export function getTileHeight(type, x, z, time = 0) {
  if (type === TILE_TYPES.stone) return 0.56 + ((x * 9 + z * 5) % 3) * 0.12
  if (type === TILE_TYPES.ruin) return 0.32
  if (type === TILE_TYPES.road) return 0.25
  if (type === TILE_TYPES.water) return 0.08 + Math.sin(time * 0.002 + x * 0.8 + z) * 0.02
  if (type === TILE_TYPES.forest) return 0.28
  if (type === TILE_TYPES.crystal) return 0.26
  return 0.18 + Math.sin(x * 0.7 + z * 0.35) * 0.03
}

export function createTerrain(time = 0) {
  const routeCells = createRouteCells()
  const pointCells = createPointCells()
  const tiles = []

  for (let z = 0; z < MAP_SIZE; z += 1) {
    for (let x = 0; x < MAP_SIZE; x += 1) {
      const type = getTileType(x, z, routeCells, pointCells)
      tiles.push({
        x,
        z,
        type,
        height: getTileHeight(type, x, z, time),
        order: x + z,
      })
    }
  }

  return tiles.sort((a, b) => a.order - b.order || a.x - b.x)
}
