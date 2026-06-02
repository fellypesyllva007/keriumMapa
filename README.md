# KeriumMapa

O mapa agora é renderizado **proceduralmente em WebGL**, controlado por React + Vite.  
Todos os tiles, efeitos visuais e iluminação são gerados por código, sem uso de imagens externas (PNG, JPG, WebP, GIF, SVG, GLB).  

## Estrutura
- React + Vite para interface e controle de estado
- HTML5 Canvas + WebGL para renderização 3D procedural
- CSS modular apenas para interface externa (menus, tooltips, HUD)
- Geometria criada por código (hexágonos, grids, fractais)
- Shaders GLSL para profundidade, partículas mágicas e iluminação dinâmica

## Objetivo
Criar um mapa dinâmico e tridimensional, inspirado em estética dark fantasy arcana, totalmente otimizado para mobile e desktop.

