import { createProjector } from '../../core/projector.js'
import { drawBackground } from './drawBackground.js'
import { createTerrain } from '../terrain/terrainGenerator.js'
import { drawTile } from '../terrain/drawTile.js'
import { TILE_TYPES } from '../terrain/tileTypes.js'
import { drawTree } from '../props/trees.js'
import { drawRock } from '../props/rocks.js'
import { drawCrystal } from '../props/crystals.js'
import { drawStructure } from '../props/structures.js'
import { mapPoints } from '../../points/index.js'

export function drawScene(ctx, width, height, activeKey, time = 0) {
  drawBackground(ctx, width, height, time)
  const { project } = createProjector(width, height, time)
  const terrain = createTerrain(time)

  terrain.forEach((tile) => drawTile(ctx, project, tile))

  terrain.forEach((tile) => {
    if (tile.type === TILE_TYPES.forest) drawTree(ctx, project, tile.x, tile.z)
    if (tile.type === TILE_TYPES.stone && (tile.x + tile.z) % 2 === 0) drawRock(ctx, project, tile.x, tile.z)
    if (tile.type === TILE_TYPES.crystal) drawCrystal(ctx, project, tile.x, tile.z, time)
  })

  mapPoints
    .slice()
    .sort((a, b) => a.tile.x + a.tile.z - (b.tile.x + b.tile.z))
    .forEach((point) => drawStructure(ctx, project, point, activeKey, time))
}
