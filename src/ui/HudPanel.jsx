export function HudPanel({ point, points, onSelect }) {
  return (
    <aside className="hud-panel">
      <p className="eyebrow">Kérium procedural</p>
      <h1>Mapa 3D gerado por código</h1>
      <p className="description">
        Hub isométrico com tiles, rotas, cristais, ruínas góticas e pontos clicáveis separados por arquivo.
      </p>

      <section className="status-card">
        <span>Ponto selecionado</span>
        <strong>{point.label}</strong>
        <p>{point.description}</p>
      </section>

      <section className="route-card">
        <h2>Pontos do mapa</h2>
        <div className="point-list">
          {points.map((item) => (
            <button
              type="button"
              key={item.key}
              className={item.key === point.key ? 'selected' : ''}
              onClick={() => onSelect(item)}
            >
              <strong>{item.label}</strong>
              <small>{item.tile.x}:{item.tile.z} · {item.action}</small>
            </button>
          ))}
        </div>
      </section>

      <div className="legend-grid">
        <span><i className="legend-road" />Rotas</span>
        <span><i className="legend-crystal" />Cristais</span>
        <span><i className="legend-ruin" />Ruínas</span>
        <span><i className="legend-water" />Rio arcano</span>
      </div>
    </aside>
  )
}
