import { COLORS } from '../../core/constants.js'
import { drawBox, drawPyramid } from '../../core/shape.js'
import { getTileHeight } from '../terrain/terrainGenerator.js'

export function drawTree(ctx, project, x, z) {
  const base = getTileHeight('forest', x, z) + 0.02
  const cx = x + 0.5
  const cz = z + 0.5

  drawBox(ctx, project, cx, cz, 0.18, 0.18, base, 0.46, '#5a331e')
  drawPyramid(ctx, project, cx, cz, 0.76, 0.76, base + 0.34, 0.88, COLORS.forest)
  drawPyramid(ctx, project, cx, cz, 0.58, 0.58, base + 0.78, 0.72, '#176b38')
}
