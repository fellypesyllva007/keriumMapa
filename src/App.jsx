import { useMemo, useState } from 'react'
import { IsometricMap } from './components/IsometricMap.jsx'
import { HudPanel } from './ui/HudPanel.jsx'
import { mapPoints } from './points/index.js'

export default function App() {
  const [activeKey, setActiveKey] = useState('maps')
  const activePoint = useMemo(
    () => mapPoints.find((point) => point.key === activeKey) || mapPoints[0],
    [activeKey],
  )

  function handleSelect(point) {
    setActiveKey(point.key)

    window.dispatchEvent(new CustomEvent('kerium:map-point', { detail: point }))
  }

  return (
    <main className="app-shell">
      <section className="map-card" aria-label="Mapa 3D procedural do Kérium">
        <IsometricMap activeKey={activeKey} onSelect={handleSelect} />
      </section>

      <HudPanel point={activePoint} points={mapPoints} onSelect={handleSelect} />
    </main>
  )
}
