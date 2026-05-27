import { useEffect, useRef } from 'react'
import { findPointAt } from '../interaction/hitTest.js'
import { startWebGLMap } from '../webgl/renderer.js'

export function IsometricMap({ activeKey, onSelect }) {
  const canvasRef = useRef(null)
  const activeKeyRef = useRef(activeKey)
  const rendererRef = useRef(null)

  useEffect(() => {
    activeKeyRef.current = activeKey
  }, [activeKey])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderer = startWebGLMap(canvas, () => activeKeyRef.current)
    rendererRef.current = renderer

    return () => {
      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  function handlePointerDown(event) {
    const canvas = canvasRef.current
    if (!canvas) return

    const time = rendererRef.current?.getTime?.() || 0
    const point = findPointAt(event.clientX, event.clientY, canvas.getBoundingClientRect(), time)
    if (point) onSelect(point)
  }

  return (
    <canvas
      ref={canvasRef}
      className="isometric-map-canvas"
      onPointerDown={handlePointerDown}
      aria-label="Mapa 3D procedural WebGL do Kérium"
    />
  )
}
