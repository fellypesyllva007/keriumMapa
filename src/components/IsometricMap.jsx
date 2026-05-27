import { useEffect, useRef } from 'react'
import { clearCanvas, setupCanvas } from '../core/canvas.js'
import { drawScene } from '../map/scene/drawScene.js'
import { findPointAt } from '../interaction/hitTest.js'

export function IsometricMap({ activeKey, onSelect }) {
  const canvasRef = useRef(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let frameId = 0
    let disposed = false

    function render(time) {
      if (disposed) return
      timeRef.current = time
      const { ctx, width, height } = setupCanvas(canvas)
      clearCanvas(ctx, width, height)
      drawScene(ctx, width, height, activeKey, time)
      frameId = requestAnimationFrame(render)
    }

    frameId = requestAnimationFrame(render)

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
    }
  }, [activeKey])

  function handlePointerDown(event) {
    const canvas = canvasRef.current
    if (!canvas) return

    const point = findPointAt(event.clientX, event.clientY, canvas.getBoundingClientRect(), timeRef.current)
    if (point) onSelect(point)
  }

  return (
    <canvas
      ref={canvasRef}
      className="isometric-map-canvas"
      onPointerDown={handlePointerDown}
      aria-label="Mapa 3D procedural do Kérium"
    />
  )
}
