import { COLORS } from '../../core/constants.js'
import { drawPyramid } from '../../core/shape.js'
import { getTileHeight } from '../terrain/terrainGenerator.js'

export function drawRock(ctx, project, x, z) {
  const base = getTileHeight('stone', x, z) + 0.02
  const cx = x + 0.5
  const cz = z + 0.5

  drawPyramid(ctx, project, cx, cz, 0.72, 0.72, base, 0.62, COLORS.stone)
  drawPyramid(ctx, project, cx + 0.18, cz - 0.1, 0.46, 0.46, base + 0.08, 0.44, COLORS.stoneDark)
}
