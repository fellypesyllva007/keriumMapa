export function shade(hex, amount) {
  const value = hex.replace('#', '')
  const number = Number.parseInt(value, 16)
  const r = clamp(((number >> 16) & 255) + amount, 0, 255)
  const g = clamp(((number >> 8) & 255) + amount, 0, 255)
  const b = clamp((number & 255) + amount, 0, 255)
  return `#${[r, g, b].map((item) => item.toString(16).padStart(2, '0')).join('')}`
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

export function polygon(ctx, points, fill, stroke = null) {
  ctx.beginPath()
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y)
    else ctx.lineTo(point.x, point.y)
  })
  ctx.closePath()
  if (fill) {
    ctx.fillStyle = fill
    ctx.fill()
  }
  if (stroke) {
    ctx.strokeStyle = stroke
    ctx.stroke()
  }
}

export function drawDiamond(ctx, project, x, z, y, fill, stroke = null) {
  const a = project(x, z + 0.5, y)
  const b = project(x + 0.5, z, y)
  const c = project(x + 1, z + 0.5, y)
  const d = project(x + 0.5, z + 1, y)
  polygon(ctx, [a, b, c, d], fill, stroke)
  return { a, b, c, d }
}

export function drawPrism(ctx, project, x, z, height, color) {
  const top = drawDiamond(ctx, project, x, z, height, color, 'rgba(255,255,255,0.08)')
  const ground = {
    a: project(x, z + 0.5, 0),
    c: project(x + 1, z + 0.5, 0),
    d: project(x + 0.5, z + 1, 0),
  }

  polygon(ctx, [top.c, top.d, ground.d, ground.c], shade(color, -50))
  polygon(ctx, [top.a, top.d, ground.d, ground.a], shade(color, -36))
}

export function drawBox(ctx, project, x, z, width, depth, base, height, color) {
  const x0 = x - width / 2
  const x1 = x + width / 2
  const z0 = z - depth / 2
  const z1 = z + depth / 2

  const topA = project(x0, z0, base + height)
  const topB = project(x1, z0, base + height)
  const topC = project(x1, z1, base + height)
  const topD = project(x0, z1, base + height)
  const botB = project(x1, z0, base)
  const botC = project(x1, z1, base)
  const botD = project(x0, z1, base)

  polygon(ctx, [topB, topC, botC, botB], shade(color, -46))
  polygon(ctx, [topC, topD, botD, botC], shade(color, -62))
  polygon(ctx, [topA, topB, topC, topD], color, 'rgba(255,255,255,0.08)')
}

export function drawPyramid(ctx, project, x, z, width, depth, base, height, color) {
  const x0 = x - width / 2
  const x1 = x + width / 2
  const z0 = z - depth / 2
  const z1 = z + depth / 2

  const a = project(x0, z0, base)
  const b = project(x1, z0, base)
  const c = project(x1, z1, base)
  const d = project(x0, z1, base)
  const top = project(x, z, base + height)

  polygon(ctx, [a, top, b], shade(color, 18))
  polygon(ctx, [b, top, c], color)
  polygon(ctx, [c, top, d], shade(color, -40))
  polygon(ctx, [d, top, a], shade(color, -18))
}
