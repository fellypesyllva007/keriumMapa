export function PointDetails({ point }) {
  if (!point) return null

  return (
    <aside className="point-details" aria-live="polite">
      <span className="point-details__eyebrow">Ponto clicável</span>
      <h2>{point.label}</h2>
      <p>{point.description}</p>
      <dl>
        <div>
          <dt>Key</dt>
          <dd>{point.key}</dd>
        </div>
        <div>
          <dt>Ação visual</dt>
          <dd>{point.action}</dd>
        </div>
        <div>
          <dt>Categoria</dt>
          <dd>{point.category}</dd>
        </div>
      </dl>
    </aside>
  )
}
