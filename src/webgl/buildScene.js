import { COLORS } from '../core/constants.js'
import { createProjector } from '../core/projector.js'
import { createTerrain, getTileHeight } from '../map/terrain/terrainGenerator.js'
import { TILE_TYPES } from '../map/terrain/tileTypes.js'
import { mapPoints } from '../points/index.js'
import { addBox, addPrism, addPyramid } from './mesh.js'

function tileColor(type) {
  if (type === TILE_TYPES.road) return COLORS.road
  if (type === TILE_TYPES.water) return COLORS.water
  if (type === TILE_TYPES.forest) return COLORS.forest
  if (type === TILE_TYPES.stone) return COLORS.stone
  if (type === TILE_TYPES.ruin) return COLORS.ruin
  if (type === TILE_TYPES.crystal) return COLORS.grassDark
  return COLORS.grass
}

export function buildScene(width, height, activeKey, time = 0) {
  const { project } = createProjector(width, height, time)
  const terrain = createTerrain(time)
  const vertices = []

  terrain.forEach((tile) => {
    addPrism(vertices, project, tile.x, tile.z, tile.height, tileColor(tile.type))

    if (tile.type === TILE_TYPES.road) {
      addBox(vertices, project, tile.x + 0.5, tile.z + 0.5, 0.38, 0.38, tile.height + 0.01, 0.05, COLORS.goldLight)
    }

    if (tile.type === TILE_TYPES.water) {
      addBox(vertices, project, tile.x + 0.5, tile.z + 0.5, 0.3, 0.3, tile.height + 0.03, 0.025, COLORS.crystalBlue)
    }
  })

  terrain.forEach((tile) => {
    if (tile.type === TILE_TYPES.forest) addTree(vertices, project, tile.x, tile.z)
    if (tile.type === TILE_TYPES.stone && (tile.x + tile.z) % 2 === 0) addRock(vertices, project, tile.x, tile.z)
    if (tile.type === TILE_TYPES.crystal) addCrystal(vertices, project, tile.x, tile.z, time)
  })

  mapPoints
    .slice()
    .sort((a, b) => a.tile.x + a.tile.z - (b.tile.x + b.tile.z))
    .forEach((point) => addStructure(vertices, project, point, activeKey))

  return new Float32Array(vertices)
}

function addTree(vertices, project, x, z) {
  const base = getTileHeight('forest', x, z) + 0.02
  const cx = x + 0.5
  const cz = z + 0.5
  addBox(vertices, project, cx, cz, 0.18, 0.18, base, 0.46, '#5a331e')
  addPyramid(vertices, project, cx, cz, 0.76, 0.76, base + 0.34, 0.88, COLORS.forest)
  addPyramid(vertices, project, cx, cz, 0.58, 0.58, base + 0.78, 0.72, '#176b38')
}

function addRock(vertices, project, x, z) {
  const base = getTileHeight('stone', x, z) + 0.02
  const cx = x + 0.5
  const cz = z + 0.5
  addPyramid(vertices, project, cx, cz, 0.72, 0.72, base, 0.62, COLORS.stone)
  addPyramid(vertices, project, cx + 0.18, cz - 0.1, 0.46, 0.46, base + 0.08, 0.44, COLORS.stoneDark)
}

function addCrystal(vertices, project, x, z) {
  const base = getTileHeight('crystal', x, z) + 0.04
  const cx = x + 0.5
  const cz = z + 0.5
  addPyramid(vertices, project, cx, cz, 0.34, 0.34, base, 0.86, COLORS.crystal)
  addPyramid(vertices, project, cx + 0.2, cz + 0.08, 0.24, 0.24, base, 0.56, COLORS.crystalBlue)
  addPyramid(vertices, project, cx - 0.18, cz + 0.1, 0.22, 0.22, base, 0.48, COLORS.crystal)
}

function addStructure(vertices, project, point, activeKey) {
  const { x, z } = point.tile
  const cx = x + 0.5
  const cz = z + 0.5
  const base = getTileHeight('ruin', x, z) + 0.03
  const active = point.key === activeKey

  if (point.structure.includes('tower')) return addTower(vertices, project, cx, cz, base, active)
  if (point.structure.includes('gate') || point.structure.includes('portal')) return addGate(vertices, project, cx, cz, base, active)
  if (point.structure.includes('circle') || point.structure.includes('sigil')) return addCircle(vertices, project, cx, cz, base, active)
  if (point.structure.includes('vault')) return addVault(vertices, project, cx, cz, base, active)
  if (point.structure.includes('stall') || point.structure.includes('square')) return addMarket(vertices, project, cx, cz, base, active)
  if (point.structure.includes('keep') || point.structure.includes('sanctum')) return addKeep(vertices, project, cx, cz, base, active)
  if (point.structure.includes('crystal')) return addRift(vertices, project, cx, cz, base, active)
  if (point.structure.includes('brazier')) return addBrazier(vertices, project, cx, cz, base, active)
  return addObelisk(vertices, project, cx, cz, base, active)
}

function activeColor(active, fallback) {
  return active ? COLORS.crystalBlue : fallback
}

function addTower(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.44, 0.44, base, active ? 1.25 : 1.05, COLORS.ruin)
  addPyramid(vertices, project, x, z, 0.68, 0.68, base + (active ? 1.18 : 1), 0.58, activeColor(active, COLORS.stoneDark))
  addBox(vertices, project, x, z, 0.12, 0.12, base + 1.58, 0.22, COLORS.goldLight)
}

function addGate(vertices, project, x, z, base, active) {
  addBox(vertices, project, x - 0.22, z, 0.18, 0.32, base, 0.85, COLORS.ruin)
  addBox(vertices, project, x + 0.22, z, 0.18, 0.32, base, 0.85, COLORS.ruin)
  addBox(vertices, project, x, z, 0.62, 0.16, base + 0.68, 0.18, active ? COLORS.gold : COLORS.ruinLight)
}

function addCircle(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.78, 0.78, base, 0.08, active ? COLORS.danger : COLORS.road)
  addPyramid(vertices, project, x, z, 0.28, 0.28, base + 0.08, 0.42, active ? COLORS.ember : COLORS.gold)
}

function addVault(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.74, 0.58, base, 0.58, COLORS.ruin)
  addPyramid(vertices, project, x, z, 0.84, 0.68, base + 0.54, 0.42, active ? COLORS.crystal : COLORS.stoneDark)
}

function addMarket(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.72, 0.52, base, 0.42, active ? COLORS.gold : '#9a6e34')
  addPyramid(vertices, project, x, z, 0.9, 0.7, base + 0.38, 0.34, COLORS.danger)
}

function addKeep(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.78, 0.78, base, 0.72, COLORS.ruin)
  addPyramid(vertices, project, x, z, 0.92, 0.92, base + 0.66, 0.46, activeColor(active, COLORS.stoneDark))
  addBox(vertices, project, x - 0.28, z - 0.28, 0.18, 0.18, base, 0.84, COLORS.ruinLight)
  addBox(vertices, project, x + 0.28, z + 0.28, 0.18, 0.18, base, 0.84, COLORS.ruinLight)
}

function addRift(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.74, 0.74, base, 0.08, COLORS.stoneDark)
  addPyramid(vertices, project, x, z, 0.3, 0.3, base + 0.04, active ? 1.2 : 0.98, COLORS.crystal)
  addPyramid(vertices, project, x + 0.18, z - 0.12, 0.22, 0.22, base + 0.02, 0.72, COLORS.crystalBlue)
}

function addBrazier(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.38, 0.38, base, 0.46, COLORS.ruin)
  addPyramid(vertices, project, x, z, 0.34, 0.34, base + 0.38, active ? 0.72 : 0.52, COLORS.goldLight)
}

function addObelisk(vertices, project, x, z, base, active) {
  addBox(vertices, project, x, z, 0.32, 0.32, base, active ? 1.1 : 0.9, COLORS.ruinLight)
  addPyramid(vertices, project, x, z, 0.4, 0.4, base + (active ? 1.05 : 0.86), 0.3, COLORS.crystal)
}
