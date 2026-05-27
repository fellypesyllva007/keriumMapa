import { colorForAccent, palette } from './colors.js'

export function setupCanvas(canvas) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  const width = Math.max(1, Math.floor(rect.width * ratio))
  const height = Math.max(1, Math.floor(rect.height * ratio))

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }

  const ctx = canvas.getContext('2d')
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  return { ctx, width: rect.width, height: rect.height, ratio }
}

export function drawBackground(ctx, width, height, time) {
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#07100f')
  gradient.addColorStop(0.45, '#0b201c')
  gradient.addColorStop(1, '#1b130b')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  drawOrnamentalFrame(ctx, width, height)
  drawFog(ctx, width, height, time)
  drawCrystalField(ctx, width, height, time)
  drawMapTable(ctx, width, height)
}

function drawOrnamentalFrame(ctx, width, height) {
  ctx.save()
  ctx.strokeStyle = 'rgba(243, 213, 139, 0.55)'
  ctx.lineWidth = 2
  ctx.strokeRect(14, 14, width - 28, height - 28)
  ctx.strokeStyle = 'rgba(184, 138, 58, 0.65)'
  ctx.lineWidth = 1
  ctx.strokeRect(26, 26, width - 52, height - 52)

  const corners = [
    [34, 34, 1, 1],
    [width - 34, 34, -1, 1],
    [34, height - 34, 1, -1],
    [width - 34, height - 34, -1, -1],
  ]

  corners.forEach(([x, y, sx, sy]) => {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + sx * 44, y)
    ctx.lineTo(x, y + sy * 44)
    ctx.closePath()
    ctx.stroke()
  })
  ctx.restore()
}

function drawFog(ctx, width, height, time) {
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  for (let i = 0; i < 7; i += 1) {
    const x = width * (0.18 + i * 0.12) + Math.sin(time * 0.0004 + i) * 24
    const y = height * (0.12 + (i % 4) * 0.18) + Math.cos(time * 0.0003 + i) * 18
    const radius = Math.max(width, height) * (0.12 + i * 0.008)
    const fog = ctx.createRadialGradient(x, y, 0, x, y, radius)
    fog.addColorStop(0, 'rgba(46, 242, 192, 0.10)')
    fog.addColorStop(0.45, 'rgba(48, 200, 242, 0.045)')
    fog.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = fog
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

function drawCrystalField(ctx, width, height, time) {
  ctx.save()
  const points = [
    [0.14, 0.18, 12], [0.86, 0.2, 10], [0.13, 0.48, 9], [0.87, 0.5, 13],
    [0.2, 0.78, 11], [0.8, 0.78, 9], [0.5, 0.09, 8], [0.5, 0.9, 12],
  ]

  points.forEach(([px, py, size], index) => {
    const x = width * px
    const y = height * py
    const pulse = Math.sin(time * 0.002 + index) * 0.25 + 0.75
    ctx.fillStyle = `rgba(46, 242, 192, ${0.18 * pulse})`
    ctx.beginPath()
    ctx.moveTo(x, y - size)
    ctx.lineTo(x + size * 0.55, y)
    ctx.lineTo(x, y + size)
    ctx.lineTo(x - size * 0.55, y)
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = `rgba(48, 200, 242, ${0.42 * pulse})`
    ctx.stroke()
  })
  ctx.restore()
}

function drawMapTable(ctx, width, height) {
  ctx.save()
  const cx = width / 2
  const cy = height * 0.52
  const radiusX = width * 0.36
  const radiusY = height * 0.37

  const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, radiusX)
  gradient.addColorStop(0, 'rgba(25, 54, 48, 0.86)')
  gradient.addColorStop(1, 'rgba(9, 19, 17, 0.64)')
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.ellipse(cx, cy, radiusX, radiusY, 0, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = 'rgba(184, 138, 58, 0.45)'
  ctx.lineWidth = 2
  ctx.stroke()

  ctx.strokeStyle = 'rgba(46, 242, 192, 0.12)'
  ctx.lineWidth = 1
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath()
    ctx.ellipse(cx, cy, radiusX * (0.26 + i * 0.14), radiusY * (0.22 + i * 0.12), 0, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.restore()
}

export function drawRoute(ctx, width, height, from, to) {
  const ax = (from.position.x / 100) * width
  const ay = (from.position.y / 100) * height
  const bx = (to.position.x / 100) * width
  const by = (to.position.y / 100) * height

  ctx.save()
  ctx.strokeStyle = 'rgba(46, 242, 192, 0.20)'
  ctx.lineWidth = 2
  ctx.setLineDash([6, 9])
  ctx.beginPath()
  ctx.moveTo(ax, ay)
  ctx.quadraticCurveTo(width / 2, (ay + by) / 2 - 20, bx, by)
  ctx.stroke()
  ctx.restore()
}

export function drawPoint(ctx, width, height, point, activeKey, time) {
  const x = (point.position.x / 100) * width
  const y = (point.position.y / 100) * height
  const active = point.key === activeKey
  const accent = colorForAccent(point.accent)
  const pulse = Math.sin(time * 0.003 + x * 0.02) * 0.18 + 0.82
  const radius = active ? 22 : 18

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3.4)
  glow.addColorStop(0, `${accent}66`)
  glow.addColorStop(0.55, `${accent}22`)
  glow.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(x, y, radius * 3.4 * pulse, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  ctx.save()
  ctx.fillStyle = 'rgba(4, 12, 10, 0.9)'
  ctx.strokeStyle = active ? palette.goldLight : 'rgba(184, 138, 58, 0.82)'
  ctx.lineWidth = active ? 3 : 2
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()

  drawGeometry(ctx, point.geometry, x, y, radius, accent)
  ctx.restore()
}

function drawGeometry(ctx, geometry, x, y, radius, accent) {
  ctx.save()
  ctx.strokeStyle = accent
  ctx.fillStyle = `${accent}44`
  ctx.lineWidth = 2

  if (geometry.includes('crystal') || geometry.includes('atlas') || geometry.includes('rift')) {
    ctx.beginPath()
    ctx.moveTo(x, y - radius * 0.75)
    ctx.lineTo(x + radius * 0.46, y)
    ctx.lineTo(x, y + radius * 0.72)
    ctx.lineTo(x - radius * 0.46, y)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  } else if (geometry.includes('gate') || geometry.includes('keep') || geometry.includes('door')) {
    ctx.strokeRect(x - radius * 0.54, y - radius * 0.42, radius * 1.08, radius * 0.84)
    ctx.beginPath()
    ctx.moveTo(x - radius * 0.62, y - radius * 0.42)
    ctx.lineTo(x, y - radius * 0.92)
    ctx.lineTo(x + radius * 0.62, y - radius * 0.42)
    ctx.stroke()
  } else if (geometry.includes('circle') || geometry.includes('sigil') || geometry.includes('brazier')) {
    ctx.beginPath()
    ctx.arc(x, y, radius * 0.56, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x - radius * 0.56, y)
    ctx.lineTo(x + radius * 0.56, y)
    ctx.moveTo(x, y - radius * 0.56)
    ctx.lineTo(x, y + radius * 0.56)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.moveTo(x, y - radius * 0.62)
    ctx.lineTo(x + radius * 0.62, y)
    ctx.lineTo(x, y + radius * 0.62)
    ctx.lineTo(x - radius * 0.62, y)
    ctx.closePath()
    ctx.stroke()
  }

  ctx.restore()
}
