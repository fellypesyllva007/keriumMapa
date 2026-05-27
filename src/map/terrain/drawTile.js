import { COLORS } from '../../core/constants.js'
import { drawPrism } from '../../core/shape.js'
import { TILE_TYPES } from './tileTypes.js'

export function colorForTile(type) {
  if (type === TILE_TYPES.road) return COLORS.road
  if (type === TILE_TYPES.water) return COLORS.water
  if (type === TILE_TYPES.forest) return COLORS.forest
  if (type === TILE_TYPES.stone) return COLORS.stone
  if (type === TILE_TYPES.ruin) return COLORS.ruin
  if (type === TILE_TYPES.crystal) return COLORS.grassDark
  return COLORS.grass
}

export function drawTile(ctx, project, tile) {
  drawPrism(ctx, project, tile.x, tile.z, tile.height, colorForTile(tile.type))

  if (tile.type === TILE_TYPES.road) {
    drawRoadGlow(ctx, project, tile)
  }

  if (tile.type === TILE_TYPES.water) {
    drawWaterGlow(ctx, project, tile)
  }
}

function drawRoadGlow(ctx, project, tile) {
  const p = project(tile.x + 0.5, tile.z + 0.5, tile.height + 0.015)
  ctx.save()
  ctx.fillStyle = 'rgba(255, 228, 154, 0.42)'
  ctx.beginPath()
  ctx.ellipse(p.x, p.y, 7, 3.5, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawWaterGlow(ctx, project, tile) {
  const p = project(tile.x + 0.5, tile.z + 0.5, tile.height + 0.02)
  ctx.save()
  ctx.fillStyle = 'rgba(56, 174, 244, 0.28)'
  ctx.beginPath()
  ctx.ellipse(p.x, p.y, 12, 5, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}
