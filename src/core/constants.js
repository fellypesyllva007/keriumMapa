export const MAP_SIZE = 17

export const TILE = {
  minWidth: 34,
  maxWidth: 82,
  ratio: 0.52,
  heightScale: 0.78,
}

export const COLORS = {
  void: '#03080b',
  panel: '#071017',
  grid: 'rgba(92, 255, 218, 0.09)',
  grass: '#1f7b3a',
  grassDark: '#155c32',
  forest: '#124d2b',
  road: '#c49b4a',
  roadGlow: '#f3d17b',
  water: '#156d8b',
  stone: '#48515f',
  stoneDark: '#303845',
  ruin: '#2e3740',
  ruinLight: '#59626e',
  gold: '#e0b45d',
  goldLight: '#ffe49a',
  crystal: '#28f0d0',
  crystalBlue: '#38aef4',
  fog: 'rgba(38, 240, 208, 0.18)',
  danger: '#a33a42',
  ember: '#f08a3c',
  shadow: 'rgba(0, 0, 0, 0.38)',
  label: '#f8f0d2',
}

export const ROUTE_LINKS = [
  ['characters', 'inventory'],
  ['inventory', 'profile'],
  ['profile', 'maps'],
  ['maps', 'events'],
  ['maps', 'rifts'],
  ['rifts', 'arena_pvp'],
  ['commerce', 'merchant'],
  ['merchant', 'guild'],
  ['battle', 'dungeon'],
  ['dungeon', 'arena_pvp'],
  ['guild', 'gm_panel'],
  ['gm_panel', 'logout'],
  ['maps', 'battle'],
  ['commerce', 'maps'],
]
