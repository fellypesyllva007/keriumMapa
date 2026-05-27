import { COLORS } from '../../core/constants.js'
import { drawBox, drawPyramid } from '../../core/shape.js'
import { getTileHeight } from '../terrain/terrainGenerator.js'

export function drawStructure(ctx, project, point, activeKey, time = 0) {
  const { x, z } = point.tile
  const cx = x + 0.5
  const cz = z + 0.5
  const base = getTileHeight('ruin', x, z) + 0.03
  const active = point.key === activeKey

  drawAura(ctx, project, cx, cz, base, point.kind, active, time)

  if (point.structure.includes('tower')) return drawTower(ctx, project, cx, cz, base, active)
  if (point.structure.includes('gate') || point.structure.includes('portal')) return drawGate(ctx, project, cx, cz, base, active)
  if (point.structure.includes('circle') || point.structure.includes('sigil')) return drawCircle(ctx, project, cx, cz, base, active)
  if (point.structure.includes('vault')) return drawVault(ctx, project, cx, cz, base, active)
  if (point.structure.includes('stall') || point.structure.includes('square')) return drawMarket(ctx, project, cx, cz, base, active)
  if (point.structure.includes('keep') || point.structure.includes('sanctum')) return drawKeep(ctx, project, cx, cz, base, active)
  if (point.structure.includes('crystal')) return drawRift(ctx, project, cx, cz, base, active)
  if (point.structure.includes('brazier')) return drawBrazier(ctx, project, cx, cz, base, active)
  return drawObelisk(ctx, project, cx, cz, base, active)
}

function drawAura(ctx, project, x, z, base, kind, active, time) {
  const p = project(x, z, base + 0.45)
  const color = kind === 'danger' || kind === 'combat' ? '240, 82, 82' : kind === 'economy' || kind === 'event' ? '255, 218, 120' : '40, 240, 208'
  const pulse = Math.sin(time * 0.004 + x + z) * 0.25 + 0.75
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, active ? 58 : 40)
  glow.addColorStop(0, `rgba(${color}, ${active ? 0.34 : 0.2 * pulse})`)
  glow.addColorStop(1, `rgba(${color}, 0)`)
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(p.x, p.y, active ? 58 : 40, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawTower(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.44, 0.44, base, active ? 1.25 : 1.05, COLORS.ruin)
  drawPyramid(ctx, project, x, z, 0.68, 0.68, base + (active ? 1.18 : 1), 0.58, active ? COLORS.crystalBlue : COLORS.stoneDark)
  drawBox(ctx, project, x, z, 0.12, 0.12, base + 1.58, 0.22, COLORS.goldLight)
}

function drawGate(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x - 0.22, z, 0.18, 0.32, base, 0.85, COLORS.ruin)
  drawBox(ctx, project, x + 0.22, z, 0.18, 0.32, base, 0.85, COLORS.ruin)
  drawBox(ctx, project, x, z, 0.62, 0.16, base + 0.68, 0.18, active ? COLORS.gold : COLORS.ruinLight)
}

function drawCircle(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.78, 0.78, base, 0.08, active ? COLORS.danger : COLORS.road)
  drawPyramid(ctx, project, x, z, 0.28, 0.28, base + 0.08, 0.42, active ? COLORS.ember : COLORS.gold)
}

function drawVault(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.74, 0.58, base, 0.58, COLORS.ruin)
  drawPyramid(ctx, project, x, z, 0.84, 0.68, base + 0.54, 0.42, active ? COLORS.crystal : COLORS.stoneDark)
}

function drawMarket(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.72, 0.52, base, 0.42, active ? COLORS.gold : '#9a6e34')
  drawPyramid(ctx, project, x, z, 0.9, 0.7, base + 0.38, 0.34, COLORS.danger)
}

function drawKeep(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.78, 0.78, base, 0.72, COLORS.ruin)
  drawPyramid(ctx, project, x, z, 0.92, 0.92, base + 0.66, 0.46, active ? COLORS.crystalBlue : COLORS.stoneDark)
  drawBox(ctx, project, x - 0.28, z - 0.28, 0.18, 0.18, base, 0.84, COLORS.ruinLight)
  drawBox(ctx, project, x + 0.28, z + 0.28, 0.18, 0.18, base, 0.84, COLORS.ruinLight)
}

function drawRift(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.74, 0.74, base, 0.08, COLORS.stoneDark)
  drawPyramid(ctx, project, x, z, 0.3, 0.3, base + 0.04, active ? 1.2 : 0.98, COLORS.crystal)
  drawPyramid(ctx, project, x + 0.18, z - 0.12, 0.22, 0.22, base + 0.02, 0.72, COLORS.crystalBlue)
}

function drawBrazier(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.38, 0.38, base, 0.46, COLORS.ruin)
  drawPyramid(ctx, project, x, z, 0.34, 0.34, base + 0.38, active ? 0.72 : 0.52, COLORS.goldLight)
}

function drawObelisk(ctx, project, x, z, base, active) {
  drawBox(ctx, project, x, z, 0.32, 0.32, base, active ? 1.1 : 0.9, COLORS.ruinLight)
  drawPyramid(ctx, project, x, z, 0.4, 0.4, base + (active ? 1.05 : 0.86), 0.3, COLORS.crystal)
}
