import { useState } from 'react'
import { IsometricMap } from './components/IsometricMap.jsx'

export default function App() {
  const [activeKey, setActiveKey] = useState('maps')

  function handleSelect(point) {
    setActiveKey(point.key)
    window.dispatchEvent(new CustomEvent('kerium:map-point', { detail: point }))
  }

  return (
    <main className="app-shell" aria-label="Mapa 3D procedural do Kérium">
      <IsometricMap activeKey={activeKey} onSelect={handleSelect} />
    </main>
  )
}
