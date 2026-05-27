export function MapPointButton({ point, active, onSelect }) {
  return (
    <button
      className={`map-point-button ${active ? 'is-active' : ''}`}
      style={{ left: `${point.position.x}%`, top: `${point.position.y}%` }}
      type="button"
      onClick={() => onSelect(point)}
      aria-label={point.label}
    >
      <span className="map-point-button__orb" data-accent={point.accent} />
      <span className="map-point-button__label">{point.shortLabel}</span>
    </button>
  )
}
