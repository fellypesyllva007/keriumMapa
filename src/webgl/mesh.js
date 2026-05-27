import { shade } from '../core/shape.js'

export function hexToRgb(hex) {
  const normalized = hex.replace('#', '')
  const value = Number.parseInt(normalized, 16)
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255,
  ]
}

export function addVertex(vertices, point, color) {
  const [r, g, b] = hexToRgb(color)
  vertices.push(point.x, point.y, r, g, b)
}

export function addTriangle(vertices, a, b, c, color) {
  addVertex(vertices, a, color)
  addVertex(vertices, b, color)
  addVertex(vertices, c, color)
}

export function addQuad(vertices, a, b, c, d, color) {
  addTriangle(vertices, a, b, c, color)
  addTriangle(vertices, a, c, d, color)
}

export function addDiamond(vertices, project, x, z, y, color) {
  const a = project(x, z + 0.5, y)
  const b = project(x + 0.5, z, y)
  const c = project(x + 1, z + 0.5, y)
  const d = project(x + 0.5, z + 1, y)
  addQuad(vertices, a, b, c, d, color)
  return { a, b, c, d }
}

export function addPrism(vertices, project, x, z, height, color) {
  const top = addDiamond(vertices, project, x, z, height, color)
  const groundA = project(x, z + 0.5, 0)
  const groundC = project(x + 1, z + 0.5, 0)
  const groundD = project(x + 0.5, z + 1, 0)
  addQuad(vertices, top.c, top.d, groundD, groundC, shade(color, -52))
  addQuad(vertices, top.a, top.d, groundD, groundA, shade(color, -36))
}

export function addBox(vertices, project, x, z, width, depth, base, height, color) {
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

  addQuad(vertices, topB, topC, botC, botB, shade(color, -46))
  addQuad(vertices, topC, topD, botD, botC, shade(color, -62))
  addQuad(vertices, topA, topB, topC, topD, color)
}

export function addPyramid(vertices, project, x, z, width, depth, base, height, color) {
  const x0 = x - width / 2
  const x1 = x + width / 2
  const z0 = z - depth / 2
  const z1 = z + depth / 2

  const a = project(x0, z0, base)
  const b = project(x1, z0, base)
  const c = project(x1, z1, base)
  const d = project(x0, z1, base)
  const top = project(x, z, base + height)

  addTriangle(vertices, a, top, b, shade(color, 18))
  addTriangle(vertices, b, top, c, color)
  addTriangle(vertices, c, top, d, shade(color, -40))
  addTriangle(vertices, d, top, a, shade(color, -18))
}
