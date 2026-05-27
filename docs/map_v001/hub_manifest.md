# Manifesto visual — Hub clicável v001

## Conceito

O menu atual deve ser reinterpretado como um **mapa-hub arcano**.

Em vez de botões retangulares verdes, cada função vira um ponto de interesse dentro de uma composição única:

```text
Mapa central do Kérium
├── pontos de navegação principais
├── pontos de progressão
├── pontos sociais
├── pontos administrativos
└── ponto de saída
```

## Composição sugerida

- Formato: vertical/mobile, pensado para Telegram.
- Resolução de criação: 1536x2048.
- Resolução otimizada: 1080x1440 ou 960x1280.
- Fundo: mesa cartográfica gótica, ruínas, névoa azul-esverdeada, cristais de Kérium.
- Moldura: dourada ornamental, discreta, sem texto.
- Sem labels dentro da imagem.
- Os nomes dos pontos devem ser renderizados pela interface, não pelo asset.

## Coordenadas conceituais dos pontos

As coordenadas abaixo são apenas referência visual para futura implementação.

| Ponto | Key | X% | Y% | Categoria visual |
|---|---|---:|---:|---|
| Inventário | `inventory` | 27 | 16 | recursos |
| Mapas | `maps` | 72 | 16 | navegação |
| Masmorra | `dungeon` | 27 | 27 | perigo |
| Eventos | `events` | 72 | 27 | tempo limitado |
| Perfil | `profile` | 27 | 38 | personagem |
| Arena PvP | `arena_pvp` | 72 | 38 | combate competitivo |
| Comércio | `commerce` | 27 | 49 | economia |
| Fendas | `rifts` | 72 | 49 | dimensional |
| Batalha | `battle` | 27 | 60 | combate |
| Guilda | `guild` | 72 | 60 | social |
| Personagens | `characters` | 27 | 71 | seleção |
| Mercador | `merchant` | 72 | 71 | loja |
| Painel GM | `gm_panel` | 50 | 82 | administração |
| Logout | `logout` | 50 | 93 | saída |

## Prompt positivo do mapa completo

```text
Premium dark fantasy MMORPG mobile hub map for Telegram, gothic arcane cartography table, ancient ruined stone interface transformed into a fantasy map, fourteen clickable points represented as mystical landmarks without text, teal emerald Kerium crystals, blue-green magical fog, golden ornamental frame, gothic ruins, ancient compass ornaments, dark premium mystical atmosphere, no readable text, no labels, no watermark, no characters, no modern UI buttons, cinematic vertical composition, highly detailed.
```

## Negative prompt universal

```text
readable text, labels, watermark, logo, modern app buttons, flat green menu, cartoon, childish style, sci-fi, cyberpunk, neon city, cars, guns, modern buildings, plastic UI, low detail, blurry, huge characters, emoji style icons inside the art
```

## Animação leve sugerida para WebP

- Névoa movendo lentamente entre os pontos.
- Cristais pulsando em azul-esverdeado.
- Pequenas partículas arcanas sobre os pontos disponíveis.
- Moldura dourada com brilho muito sutil.
- Pontos bloqueados com névoa mais densa.

## Arquivos sugeridos

```text
assets/hub/kerium_hub_map_v001.png
assets/hub/kerium_hub_map_v001.webp
assets/hub/kerium_hub_map_animated_v001.webp
```
