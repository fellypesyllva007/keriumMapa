import { useMemo, useState } from 'react'
import { MapCanvas } from './components/MapCanvas.jsx'
import { MapPointButton } from './components/MapPointButton.jsx'
import { PointDetails } from './components/PointDetails.jsx'
import { hubPoints } from './data/hubPoints.js'

export default function App() {
  const [activeKey, setActiveKey] = useState('maps')
  const activePoint = useMemo(
    () => hubPoints.find((point) => point.key === activeKey) || hubPoints[0],
    [activeKey],
  )

  function handleSelect(point) {
    setActiveKey(point.key)

    // Integração futura:
    // aqui o Mini App poderá chamar o backend Nakama ou emitir eventos para a aplicação principal.
    // O mapa visual não cria regra de combate, inventário, economia, drops ou monstros.
    window.dispatchEvent(new CustomEvent('kerium:map-point', { detail: point }))
  }

  return (
    <main className="kerium-shell">
      <section className="map-stage" aria-label="Mapa arcano do Kérium">
        <MapCanvas points={hubPoints} activeKey={activeKey} />

        <div className="map-click-layer">
          {hubPoints.map((point) => (
            <MapPointButton
              key={point.key}
              point={point}
              active={point.key === activeKey}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <div className="map-title-card">
          <span>Kérium</span>
          <h1>Cristal Gótico Arcano</h1>
          <p>Mapa-hub visual para Telegram/MMORPG</p>
        </div>
      </section>

      <PointDetails point={activePoint} />
    </main>
  )
}
