import { createProjector } from '../core/projector.js'
import { mapPoints } from '../points/index.js'

export function getPointScreenPositions(width, height, time = 0) {
  const { project } = createProjector(width, height, time)
  return mapPoints.map((point) => {
    const screen = project(point.tile.x + 0.5, point.tile.z + 0.5, 1.15)
    return { ...point, screen }
  })
}

export function findPointAt(clientX, clientY, rect, time = 0) {
  const x = clientX - rect.left
  const y = clientY - rect.top
  const points = getPointScreenPositions(rect.width, rect.height, time)

  return points.find((point) => {
    const dx = point.screen.x - x
    const dy = point.screen.y - y
    return Math.sqrt(dx * dx + dy * dy) <= 34
  })
}
