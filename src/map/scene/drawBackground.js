import { COLORS } from '../../core/constants.js'

export function drawBackground(ctx, width, height, time = 0) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, '#07111a')
  gradient.addColorStop(0.52, '#040b11')
  gradient.addColorStop(1, '#020509')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  drawPanelFrame(ctx, width, height)
  drawMist(ctx, width, height, time)
}

function drawPanelFrame(ctx, width, height) {
  ctx.save()
  const inset = 18
  ctx.strokeStyle = 'rgba(255, 228, 154, 0.14)'
  ctx.lineWidth = 1
  ctx.strokeRect(inset, inset, width - inset * 2, height - inset * 2)

  ctx.strokeStyle = 'rgba(40, 240, 208, 0.07)'
  for (let y = 30; y < height; y += 6) {
    ctx.beginPath()
    ctx.moveTo(24, y)
    ctx.lineTo(width - 24, y)
    ctx.stroke()
  }
  ctx.restore()
}

function drawMist(ctx, width, height, time) {
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  for (let i = 0; i < 5; i += 1) {
    const x = width * (0.2 + i * 0.16) + Math.sin(time * 0.00035 + i) * 22
    const y = height * (0.2 + (i % 3) * 0.2) + Math.cos(time * 0.00025 + i) * 18
    const radius = Math.max(width, height) * 0.18
    const fog = ctx.createRadialGradient(x, y, 0, x, y, radius)
    fog.addColorStop(0, COLORS.fog)
    fog.addColorStop(1, 'rgba(40, 240, 208, 0)')
    ctx.fillStyle = fog
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}
