import { MAP_SIZE, TILE } from './constants.js'

export function createProjector(width, height, time = 0) {
  const tileWidth = Math.max(
    TILE.minWidth,
    Math.min(TILE.maxWidth, Math.min(width / (MAP_SIZE * 0.92), height / (MAP_SIZE * 0.58))),
  )
  const tileHeight = tileWidth * TILE.ratio
  const heightScale = tileWidth * TILE.heightScale
  const center = MAP_SIZE / 2
  const yaw = Math.sin(time * 0.00018) * 0.035
  const cos = Math.cos(yaw)
  const sin = Math.sin(yaw)
  const originX = width / 2
  const originY = Math.max(150, height * 0.3)

  function project(x, z, y = 0) {
    const dx = x - center
    const dz = z - center
    const rx = dx * cos - dz * sin
    const rz = dx * sin + dz * cos

    return {
      x: originX + (rx - rz) * (tileWidth / 2),
      y: originY + (rx + rz) * (tileHeight / 2) - y * heightScale,
    }
  }

  return { project, tileWidth, tileHeight, heightScale, originX, originY }
}
