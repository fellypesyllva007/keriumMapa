export const palette = {
  background: '#06130f',
  void: '#020706',
  stone: '#14201d',
  stoneLight: '#263732',
  gold: '#b88a3a',
  goldLight: '#f3d58b',
  emerald: '#2ef2c0',
  teal: '#30c8f2',
  fog: 'rgba(39, 242, 191, 0.18)',
  blood: '#9d2731',
  ember: '#e4893f',
  violet: '#8462ff',
  silver: '#b8c7c6',
  ash: '#6f7c78',
}

export function colorForAccent(accent) {
  return palette[accent] || palette.emerald
}
