import { useEffect, useRef } from 'react'
import { drawBackground, drawPoint, drawRoute, setupCanvas } from '../map/drawUtils.js'

const routePairs = [
  ['inventory', 'maps'],
  ['dungeon', 'events'],
  ['profile', 'arena_pvp'],
  ['commerce', 'rifts'],
  ['battle', 'guild'],
  ['characters', 'merchant'],
  ['maps', 'rifts'],
  ['rifts', 'gm_panel'],
  ['gm_panel', 'logout'],
]

export function MapCanvas({ points, activeKey }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let frameId = 0
    let disposed = false

    function render(time) {
      if (disposed) return
      const { ctx, width, height } = setupCanvas(canvas)
      ctx.clearRect(0, 0, width, height)
      drawBackground(ctx, width, height, time)

      const pointMap = new Map(points.map((point) => [point.key, point]))
      routePairs.forEach(([fromKey, toKey]) => {
        const from = pointMap.get(fromKey)
        const to = pointMap.get(toKey)
        if (from && to) drawRoute(ctx, width, height, from, to)
      })

      points.forEach((point) => drawPoint(ctx, width, height, point, activeKey, time))
      frameId = requestAnimationFrame(render)
    }

    frameId = requestAnimationFrame(render)

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
    }
  }, [points, activeKey])

  return <canvas className="kerium-map-canvas" ref={canvasRef} aria-hidden="true" />
}
