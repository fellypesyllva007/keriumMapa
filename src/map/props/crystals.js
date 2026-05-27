import { COLORS } from '../../core/constants.js'
import { drawPyramid } from '../../core/shape.js'
import { getTileHeight } from '../terrain/terrainGenerator.js'

export function drawCrystal(ctx, project, x, z, time = 0) {
  const base = getTileHeight('crystal', x, z) + 0.04
  const cx = x + 0.5
  const cz = z + 0.5
  const pulse = Math.sin(time * 0.004 + x + z) * 0.2 + 0.8

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  const p = project(cx, cz, base + 0.4)
  const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 38)
  glow.addColorStop(0, `rgba(40, 240, 208, ${0.22 * pulse})`)
  glow.addColorStop(1, 'rgba(40, 240, 208, 0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(p.x, p.y, 38, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  drawPyramid(ctx, project, cx, cz, 0.34, 0.34, base, 0.86, COLORS.crystal)
  drawPyramid(ctx, project, cx + 0.2, cz + 0.08, 0.24, 0.24, base, 0.56, COLORS.crystalBlue)
  drawPyramid(ctx, project, cx - 0.18, cz + 0.1, 0.22, 0.22, base, 0.48, COLORS.crystal)
}
