# KériumMapa — Cristal Gótico Arcano

Este repositório documenta o **novo mapa visual completo do Kérium**, preparado para ser usado como camada visual do Mini App/Telegram e posteriormente conectado ao backend `fellypesyllva007/kerium-nakama`.

> Escopo deste arquivo: **documentação, identidade visual, organização de assets e prompts**.  
> Não há alteração de combate, inventário, economia, personagens, pets, montarias, guilda, drops, monstros, migrations ou backend.

---

## 1. Identidade visual oficial

**Nome da identidade:** `Kérium — Cristal Gótico Arcano`

### Direção visual obrigatória

- Dark fantasy MMORPG.
- Ruínas góticas antigas.
- Cristais mágicos azul-esverdeados.
- Névoa mágica verde/azul.
- Molduras douradas ornamentais.
- Clima premium, sombrio, místico e adequado para Telegram/RPG.
- Sem texto dentro das imagens.
- Sem marca d’água.
- Sem visual moderno, sci-fi, cyberpunk ou cartoon infantil.

### Paleta base

| Elemento | Cor conceitual | Uso visual |
|---|---|---|
| Pedra gótica | preto grafite, cinza carvão | ruínas, torres, muralhas |
| Cristal arcano | azul-esverdeado, ciano espectral | cristais, fendas, energia |
| Névoa mágica | verde profundo, azul nebuloso | profundidade, mistério, transição |
| Ornamento premium | ouro envelhecido | molduras, cantos, brasões sem texto |
| Perigo | vermelho escuro, âmbar queimado | boss, corrupção, guerra |
| Luz divina corrompida | dourado pálido, azul lunar | Lúmen, Solvara, zonas celestiais |

---

## 2. Papel do mapa no jogo

O mapa não deve ser a fonte de verdade do jogo. Ele deve funcionar como **camada visual interativa**.

A fonte de verdade continuará sendo o backend `kerium-nakama`, especialmente:

- personagem ativo;
- reino atual;
- localização atual;
- rotas disponíveis;
- áreas desbloqueadas;
- exploração;
- combate;
- inventário;
- drops;
- economia;
- eventos.

O mapa visual deve apenas representar o que o backend permitir.

### Contrato visual esperado com o backend

Quando conectado ao `kerium-nakama`, o mapa deve consumir informações equivalentes a:

| Campo conceitual | Uso visual |
|---|---|
| `kingdom_key` | define o reino renderizado: `axis`, `ethos`, `lumen` |
| `current_location_key` | destaca a capital/mapa/zona atual |
| `available_paths` | mostra rotas clicáveis/desbloqueadas |
| `to_location_key` | destino de cada rota |
| `is_available` | ativa/desativa o nó visual |
| `is_future` | mostra nó como névoa, bloqueado ou futuro |
| `map_key` | identifica o mapa principal |
| `area_key` | identifica a zona interna |
| `zone_index` | 1 entrada, 2 intermediária, 3 profundezas |
| `zone_role` | papel visual da zona: entrada, intermediária, profundezas |

---

## 3. Estrutura macro do mundo

Estrutura obrigatória:

```text
Reino
└── Capital
    └── Mapas principais
        └── 3 zonas internas por mapa
```

Este documento cobre os **3 reinos principais**:

1. Reino de Áxis — Capital Ferrath
2. Reino de Éthos — Capital Aurath
3. Reino de Lúmen — Capital Solvara

Cada reino possui:

- 1 capital;
- 10 mapas principais;
- 30 zonas internas;
- total geral dos 3 reinos: 3 capitais, 30 mapas principais, 90 zonas internas.

---

# 4. Reino de Áxis — Ferrath

## Tema visual

Áxis é o reino da ordem militar, aço negro, muralhas antigas, fortalezas quebradas e energia arcana controlada por disciplina brutal. Deve parecer um império gótico de guerra consumido por cristais verde-azulados.

### Capital

| Campo | Valor |
|---|---|
| Reino | Reino de Áxis |
| Capital | Ferrath |
| Função visual | hub militar, cidadela central, ponto inicial do reino |
| Arquivo PNG | `axis_ferrath_capital_v001.png` |
| Arquivo WebP | `axis_ferrath_capital_v001.webp` |
| Pasta | `assets/maps/axis/capital/ferrath/` |

**Prompt positivo — Ferrath:**

```text
Mysterious gothic dark fantasy MMORPG capital city, Ferrath, iron citadel of the Kingdom of Axis, massive black steel walls, ancient military fortress, ruined gothic towers, shield-shaped plazas, war banners without readable symbols, emerald arcane energy flowing through cracks in the stone, celestial blue crystal core above the central keep, golden ornamental frame details, dramatic storm sky, premium fantasy city map, cinematic top-down cartography mixed with concept art, highly detailed, no text labels, no watermark, no characters.
```

**Negative prompt:**

```text
modern buildings, sci-fi technology, cyberpunk, cartoon, childish style, readable text, labels, watermark, logo, huge characters, clean modern roads, cars, guns, neon city
```

### Mapa do Reino de Áxis

| Campo | Valor |
|---|---|
| Nome conceitual | Muralhas de Ferrath |
| Função | mapa-mundo do Reino de Áxis |
| Arquivo PNG | `axis_realm_map_v001.png` |
| Arquivo WebP | `axis_realm_map_v001.webp` |
| Pasta | `assets/maps/axis/world/` |

**Prompt positivo — mapa do reino:**

```text
Dark fantasy MMORPG kingdom map of Axis, gothic military realm surrounding the capital Ferrath, black iron citadel at the center, ten connected territories represented as ancient fortified regions, dense haunted forests, ruined steel fortresses, abyssal chasms, echoing bastilles, rusted battlefields, broken arsenals, titan walls, general tombs, living machine heart, armored throne district, teal emerald crystals glowing through the land, arcane fog, golden ornamental map frame, cinematic isometric fantasy cartography, premium game map art, no text, no labels, no watermark, no characters.
```

### Mapas principais de Áxis

| Ordem | Map key | Nome | Níveis | Zonas internas | Arquivo base |
|---:|---|---|---|---|---|
| 1 | `axis_floresta_da_vanguarda` | Floresta da Vanguarda | 1–10 | Borda da Floresta; Interior da Vanguarda; Profundezas da Vanguarda | `axis_floresta_da_vanguarda_v001.png` |
| 2 | `axis_fortaleza_de_aco` | Fortaleza de Aço | 11–20 | Muros Externos; Pátios Internos; Salão do Trono Corrompido | `axis_fortaleza_de_aco_v001.png` |
| 3 | `axis_abismo_da_ordem` | Abismo da Ordem | 21–30 | Borda do Abismo; Cavernas do Caos; Núcleo da Ruptura | `axis_abismo_da_ordem_v001.png` |
| 4 | `axis_bastilha_dos_ecos` | Bastilha dos Ecos | 31–40 | Portões Quebrados; Galerias de Ferro; Cela do General Morto | `axis_bastilha_dos_ecos_v001.png` |
| 5 | `axis_campos_da_ferrugem` | Campos da Ferrugem | 41–50 | Trincheiras Vermelhas; Máquinas Tombadas; Forja Enferrujada | `axis_campos_da_ferrugem_v001.png` |
| 6 | `axis_arsenal_quebrado` | Arsenal Quebrado | 51–60 | Depósito de Lâminas; Câmara de Canhões; Coração Bélico | `axis_arsenal_quebrado_v001.png` |
| 7 | `axis_muralha_dos_titas` | Muralha dos Titãs | 61–70 | Escadarias de Pedra; Bastiões Gigantes; Portão do Titã | `axis_muralha_dos_titas_v001.png` |
| 8 | `axis_sepulcro_dos_generais` | Sepulcro dos Generais | 71–80 | Criptas Externas; Salas de Honra; Túmulo do Marechal | `axis_sepulcro_dos_generais_v001.png` |
| 9 | `axis_coracao_da_maquina` | Coração da Máquina | 81–90 | Engrenagens Vivas; Núcleo de Vapor; Motor do Kérium | `axis_coracao_da_maquina_v001.png` |
| 10 | `axis_trono_de_ferrath` | Trono de Ferrath | 91–99 | Avenida dos Escudos; Câmara de Aço; Trono Blindado | `axis_trono_de_ferrath_v001.png` |

### Prompts dos mapas de Áxis

#### 1. Floresta da Vanguarda

```text
Dark fantasy MMORPG exploration map, Vanguard Forest of the Kingdom of Axis, haunted military forest surrounding old gothic outposts, black iron watchtowers swallowed by ancient trees, emerald blue crystals growing from roots and broken stone roads, misty green-blue fog, ruined banners without readable symbols, fortified paths, premium cinematic isometric cartography, golden ornamental frame, highly detailed, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_floresta_da_vanguarda_borda_da_floresta_v001.png`
- `axis_floresta_da_vanguarda_interior_da_vanguarda_v001.png`
- `axis_floresta_da_vanguarda_profundezas_da_vanguarda_v001.png`

#### 2. Fortaleza de Aço

```text
Dark gothic fantasy MMORPG map, Steel Fortress of Axis, massive black iron walls, ruined battlements, military courtyards, corrupted throne hall silhouette, teal emerald arcane cracks in metal and stone, storm clouds, heavy fog, golden ornamental frame, cinematic isometric concept art cartography, premium game map, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_fortaleza_de_aco_muros_externos_v001.png`
- `axis_fortaleza_de_aco_patios_internos_v001.png`
- `axis_fortaleza_de_aco_salao_do_trono_corrompido_v001.png`

#### 3. Abismo da Ordem

```text
Dark fantasy abyss map, Abyss of Order in the Kingdom of Axis, disciplined military bridges over a colossal chasm, gothic stone arches collapsing into emerald void light, blue-green crystal veins, chaotic caverns below, central rupture core, arcane fog, premium isometric MMORPG cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_abismo_da_ordem_borda_do_abismo_v001.png`
- `axis_abismo_da_ordem_cavernas_do_caos_v001.png`
- `axis_abismo_da_ordem_nucleo_da_ruptura_v001.png`

#### 4. Bastilha dos Ecos

```text
Gothic dark fantasy prison fortress map, Bastille of Echoes, broken gates, iron galleries, haunted cells, military ruins, spectral teal echoes, emerald crystal growths through black stone, misty corridors, premium MMORPG isometric cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_bastilha_dos_ecos_portoes_quebrados_v001.png`
- `axis_bastilha_dos_ecos_galerias_de_ferro_v001.png`
- `axis_bastilha_dos_ecos_cela_do_general_morto_v001.png`

#### 5. Campos da Ferrugem

```text
Dark fantasy battlefield map, Rust Fields of Axis, red trenches, fallen war machines, rusted gothic siege engines, broken black steel, emerald arcane mist seeping from the ground, corrupted forge glow, cinematic isometric fantasy cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_campos_da_ferrugem_trincheiras_vermelhas_v001.png`
- `axis_campos_da_ferrugem_maquinas_tombadas_v001.png`
- `axis_campos_da_ferrugem_forja_enferrujada_v001.png`

#### 6. Arsenal Quebrado

```text
Dark gothic fantasy arsenal map, Broken Arsenal of Axis, shattered blade depots, abandoned cannon chambers, war relics, black iron vaults, teal crystal energy pulsing in weapon racks, emerald fog, ruined military architecture, premium MMORPG isometric map art, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_arsenal_quebrado_deposito_de_laminas_v001.png`
- `axis_arsenal_quebrado_camara_de_canhoes_v001.png`
- `axis_arsenal_quebrado_coracao_belico_v001.png`

#### 7. Muralha dos Titãs

```text
Epic dark fantasy titan wall map, colossal gothic wall of the Kingdom of Axis, giant stone stairways, enormous bastions, black iron titan gate, blue-green crystal seams, storm fog, ruined defensive architecture, premium cinematic isometric MMORPG cartography, golden ornamental border, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_muralha_dos_titas_escadarias_de_pedra_v001.png`
- `axis_muralha_dos_titas_bastioes_gigantes_v001.png`
- `axis_muralha_dos_titas_portao_do_tita_v001.png`

#### 8. Sepulcro dos Generais

```text
Dark gothic military tomb map, Sepulcher of the Generals in Axis, external crypts, honor halls, marshal tomb, black stone sarcophagi, ruined statues without readable markings, emerald ghost light, blue arcane crystals, premium isometric fantasy cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_sepulcro_dos_generais_criptas_externas_v001.png`
- `axis_sepulcro_dos_generais_salas_de_honra_v001.png`
- `axis_sepulcro_dos_generais_tumulo_do_marechal_v001.png`

#### 9. Coração da Máquina

```text
Dark fantasy arcane machine map, Heart of the Machine in Axis, living gothic gears, ruined steam core, black iron machinery powered by teal emerald Kerium crystals, ancient military engine, mystical fog, no modern technology, no sci-fi, premium cinematic isometric MMORPG map, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_coracao_da_maquina_engrenagens_vivas_v001.png`
- `axis_coracao_da_maquina_nucleo_de_vapor_v001.png`
- `axis_coracao_da_maquina_motor_do_kerium_v001.png`

#### 10. Trono de Ferrath

```text
Dark gothic endgame capital district map, Throne of Ferrath, shield avenue, steel chamber, armored throne, massive black iron palace, teal celestial crystal above the throne, emerald energy cracks, storm sky, premium isometric fantasy cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `axis_trono_de_ferrath_avenida_dos_escudos_v001.png`
- `axis_trono_de_ferrath_camara_de_aco_v001.png`
- `axis_trono_de_ferrath_trono_blindado_v001.png`

---

# 5. Reino de Éthos — Aurath

## Tema visual

Éthos é o reino da ambição, contratos, riqueza decadente e corrupção orgânica. Deve parecer um império mercantil gótico, dourado, nobre, mas envenenado por jardins podres, águas escuras e cristais azul-esverdeados.

### Capital

| Campo | Valor |
|---|---|
| Reino | Reino de Éthos |
| Capital | Aurath |
| Função visual | hub mercantil, nobreza decadente, comércio sombrio |
| Arquivo PNG | `ethos_aurath_capital_v001.png` |
| Arquivo WebP | `ethos_aurath_capital_v001.webp` |
| Pasta | `assets/maps/ethos/capital/aurath/` |

**Prompt positivo — Aurath:**

```text
Mysterious gothic dark fantasy MMORPG capital city, Aurath, golden corrupted capital of the Kingdom of Ethos, ancient merchant palaces, decaying noble gardens, black marble canals, moonlit contract halls, golden ornamental towers, emerald blue crystals growing from fountains and vaults, green-blue magical fog, premium fantasy city map, cinematic top-down cartography mixed with concept art, highly detailed, no text labels, no watermark, no characters.
```

### Mapa do Reino de Éthos

| Campo | Valor |
|---|---|
| Nome conceitual | Domínios de Aurath |
| Função | mapa-mundo do Reino de Éthos |
| Arquivo PNG | `ethos_realm_map_v001.png` |
| Arquivo WebP | `ethos_realm_map_v001.webp` |
| Pasta | `assets/maps/ethos/world/` |

```text
Dark fantasy MMORPG kingdom map of Ethos, decadent gothic merchant realm surrounding Aurath, corrupted gardens, amber desert, storm port, submerged market, golden catacombs, contract coliseum, black sun mine, debt palace, storm vault, golden Kerium pyramid, teal emerald crystals, green-blue mystical fog, aged gold ornamentation, premium isometric fantasy cartography, golden frame, no text, no labels, no watermark, no characters.
```

### Mapas principais de Éthos

| Ordem | Map key | Nome | Níveis | Zonas internas | Arquivo base |
|---:|---|---|---|---|---|
| 1 | `ethos_jardins_corrompidos` | Jardins Corrompidos | 1–10 | Jardins Externos; Estufas Corrompidas; Coração Podre dos Jardins | `ethos_jardins_corrompidos_v001.png` |
| 2 | `ethos_deserto_de_ambar` | Deserto de Âmbar | 11–20 | Dunas Externas; Ruínas Antigas; Catacumbas Subterrâneas | `ethos_deserto_de_ambar_v001.png` |
| 3 | `ethos_porto_das_tempestades` | Porto das Tempestades | 21–30 | Cais Externo; Armazéns Abandonados; Navio Fantasma Ancorado | `ethos_porto_das_tempestades_v001.png` |
| 4 | `ethos_mercado_submerso` | Mercado Submerso | 31–40 | Tendas Afundadas; Praça das Moedas; Cofre Alagado | `ethos_mercado_submerso_v001.png` |
| 5 | `ethos_catacumbas_douradas` | Catacumbas Douradas | 41–50 | Entrada dos Sarcófagos; Galeria dos Contratos; Tesouro dos Ossos | `ethos_catacumbas_douradas_v001.png` |
| 6 | `ethos_coliseu_dos_contratos` | Coliseu dos Contratos | 51–60 | Arquibancadas Vazias; Arena de Sangue; Camarote do Mercador-Rei | `ethos_coliseu_dos_contratos_v001.png` |
| 7 | `ethos_mina_de_sol_negro` | Mina de Sol Negro | 61–70 | Trilhos Quebrados; Veios Escuros; Poço Solar | `ethos_mina_de_sol_negro_v001.png` |
| 8 | `ethos_palacio_das_dividas` | Palácio das Dívidas | 71–80 | Salão dos Juros; Corredor dos Fiadores; Câmara do Leilão Final | `ethos_palacio_das_dividas_v001.png` |
| 9 | `ethos_cofre_da_tempestade` | Cofre da Tempestade | 81–90 | Portões Dourados; Salas de Relâmpago; Núcleo da Fortuna | `ethos_cofre_da_tempestade_v001.png` |
| 10 | `ethos_piramide_do_kerium_dourado` | Pirâmide do Kérium Dourado | 91–99 | Degraus do Ouro; Câmara dos Mercadores; Topo da Ambição | `ethos_piramide_do_kerium_dourado_v001.png` |

### Prompts dos mapas de Éthos

#### 1. Jardins Corrompidos

```text
Dark fantasy MMORPG exploration map, Corrupted Gardens of Ethos, decadent noble gardens overtaken by black vines, ruined gothic greenhouses, poisonous emerald mist, blue-green Kerium crystals growing through roots and fountains, golden broken statues without readable symbols, premium isometric cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_jardins_corrompidos_jardins_externos_v001.png`
- `ethos_jardins_corrompidos_estufas_corrompidas_v001.png`
- `ethos_jardins_corrompidos_coracao_podre_dos_jardins_v001.png`

#### 2. Deserto de Âmbar

```text
Dark fantasy amber desert map, Kingdom of Ethos, golden dunes around ancient gothic ruins, underground catacomb entrances, emerald blue crystal mirages, black stone obelisks, mystical green-blue fog drifting over sand, premium cinematic isometric MMORPG cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_deserto_de_ambar_dunas_externas_v001.png`
- `ethos_deserto_de_ambar_ruinas_antigas_v001.png`
- `ethos_deserto_de_ambar_catacumbas_subterraneas_v001.png`

#### 3. Porto das Tempestades

```text
Dark gothic storm port map, Storm Port of Ethos, haunted docks, abandoned warehouses, anchored ghost ship, black water canals, lightning over ruined merchant towers, teal emerald crystals on wet stone, arcane fog, premium isometric fantasy cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_porto_das_tempestades_cais_externo_v001.png`
- `ethos_porto_das_tempestades_armazens_abandonados_v001.png`
- `ethos_porto_das_tempestades_navio_fantasma_ancorado_v001.png`

#### 4. Mercado Submerso

```text
Dark fantasy submerged market map, flooded gothic bazaar of Ethos, sunken tents, coin plaza underwater, flooded vault, black marble stalls, golden relics, blue-green crystals glowing under dark water, mystical fog, premium isometric MMORPG map art, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_mercado_submerso_tendas_afundadas_v001.png`
- `ethos_mercado_submerso_praca_das_moedas_v001.png`
- `ethos_mercado_submerso_cofre_alagado_v001.png`

#### 5. Catacumbas Douradas

```text
Dark gothic golden catacombs map, Kingdom of Ethos, sarcophagus entrance, contract gallery, bone treasure chamber, aged gold ornaments, black stone crypts, emerald arcane crystals, misty green-blue light, premium cinematic isometric MMORPG cartography, ornate frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_catacumbas_douradas_entrada_dos_sarcofagos_v001.png`
- `ethos_catacumbas_douradas_galeria_dos_contratos_v001.png`
- `ethos_catacumbas_douradas_tesouro_dos_ossos_v001.png`

#### 6. Coliseu dos Contratos

```text
Dark fantasy contract coliseum map, empty gothic arena of Ethos, blood-stained sand, merchant king balcony, broken golden seats, contract sigils without readable text, teal crystal torches, emerald fog, premium isometric MMORPG map, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_coliseu_dos_contratos_arquibancadas_vazias_v001.png`
- `ethos_coliseu_dos_contratos_arena_de_sangue_v001.png`
- `ethos_coliseu_dos_contratos_camarote_do_mercador_rei_v001.png`

#### 7. Mina de Sol Negro

```text
Dark fantasy black sun mine map, Kingdom of Ethos, broken mine rails, dark mineral veins, solar pit glowing with cursed amber and teal light, gothic mining structures, blue-green crystals, smoky magical fog, premium cinematic isometric MMORPG cartography, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_mina_de_sol_negro_trilhos_quebrados_v001.png`
- `ethos_mina_de_sol_negro_veios_escuros_v001.png`
- `ethos_mina_de_sol_negro_poco_solar_v001.png`

#### 8. Palácio das Dívidas

```text
Dark gothic debt palace map, Kingdom of Ethos, halls of interest, guarantor corridors, final auction chamber, decadent gold architecture, black marble floors, chained vault doors, emerald crystal veins, green-blue arcane fog, premium isometric fantasy cartography, golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_palacio_das_dividas_salao_dos_juros_v001.png`
- `ethos_palacio_das_dividas_corredor_dos_fiadores_v001.png`
- `ethos_palacio_das_dividas_camara_do_leilao_final_v001.png`

#### 9. Cofre da Tempestade

```text
Dark fantasy storm vault map, Kingdom of Ethos, golden gates, lightning halls, fortune core, black clouds inside an ancient treasury, teal emerald crystals powering sealed vaults, mystical storm fog, premium cinematic isometric MMORPG map, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_cofre_da_tempestade_portoes_dourados_v001.png`
- `ethos_cofre_da_tempestade_salas_de_relampago_v001.png`
- `ethos_cofre_da_tempestade_nucleo_da_fortuna_v001.png`

#### 10. Pirâmide do Kérium Dourado

```text
Dark fantasy golden Kerium pyramid map, Kingdom of Ethos, gold steps, merchant chambers, ambition summit, ancient gothic pyramid fused with blue-green crystals, cursed wealth, emerald fog, premium isometric MMORPG endgame map, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `ethos_piramide_do_kerium_dourado_degraus_do_ouro_v001.png`
- `ethos_piramide_do_kerium_dourado_camara_dos_mercadores_v001.png`
- `ethos_piramide_do_kerium_dourado_topo_da_ambicao_v001.png`

---

# 6. Reino de Lúmen — Solvara

## Tema visual

Lúmen é o reino da luz sagrada corrompida, florestas celestiais, observatórios, mosteiros suspensos, pontes estelares e arquivos antigos. Deve parecer belo, místico e sombrio, com cristais azul-esverdeados atravessando templos de luz quebrada.

### Capital

| Campo | Valor |
|---|---|
| Reino | Reino de Lúmen |
| Capital | Solvara |
| Função visual | hub místico, santuário solar, fé e conhecimento |
| Arquivo PNG | `lumen_solvara_capital_v001.png` |
| Arquivo WebP | `lumen_solvara_capital_v001.webp` |
| Pasta | `assets/maps/lumen/capital/solvara/` |

**Prompt positivo — Solvara:**

```text
Mysterious gothic dark fantasy MMORPG capital city, Solvara, celestial capital of the Kingdom of Lumen, ancient solar sanctuary, ruined luminous gothic towers, suspended bridges, broken sun altars, moonlit libraries, emerald blue crystals growing through white stone and gold ornaments, green-blue magical fog, premium fantasy city map, cinematic top-down cartography mixed with concept art, highly detailed, no text labels, no watermark, no characters.
```

### Mapa do Reino de Lúmen

| Campo | Valor |
|---|---|
| Nome conceitual | Santuários de Solvara |
| Função | mapa-mundo do Reino de Lúmen |
| Arquivo PNG | `lumen_realm_map_v001.png` |
| Arquivo WebP | `lumen_realm_map_v001.webp` |
| Pasta | `assets/maps/lumen/world/` |

```text
Dark fantasy MMORPG kingdom map of Lumen, celestial gothic realm surrounding Solvara, heavenly forest, soul swamp, eternal peak, burned library, mirror garden, lunar observatory, star bridge, suspended monastery, broken sun sanctuary, Aeon archive, teal emerald crystals, blue-green divine fog, pale gold ornaments, premium isometric fantasy cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

### Mapas principais de Lúmen

| Ordem | Map key | Nome | Níveis | Zonas internas | Arquivo base |
|---:|---|---|---|---|---|
| 1 | `lumen_bosque_celestial` | Bosque Celestial | 1–10 | Entrada do Bosque; Clareiras Sombrias; Árvore Ancestral Corrompida | `lumen_bosque_celestial_v001.png` |
| 2 | `lumen_pantano_das_almas` | Pântano das Almas | 11–20 | Margens do Pântano; Ilhas Flutuantes; Templo Afundado | `lumen_pantano_das_almas_v001.png` |
| 3 | `lumen_pico_eterno` | Pico Eterno | 21–30 | Encostas Nevadas; Cavernas de Gelo; Cume Dimensional | `lumen_pico_eterno_v001.png` |
| 4 | `lumen_biblioteca_queimada` | Biblioteca Queimada | 31–40 | Átrio Cinzento; Estantes Vivas; Sala dos Livros Proibidos | `lumen_biblioteca_queimada_v001.png` |
| 5 | `lumen_jardim_dos_espelhos` | Jardim dos Espelhos | 41–50 | Fonte Refletida; Labirinto de Vidro; Espelho Primordial | `lumen_jardim_dos_espelhos_v001.png` |
| 6 | `lumen_observatorio_lunar` | Observatório Lunar | 51–60 | Escadas da Lua; Cúpula Astral; Lente do Aeon | `lumen_observatorio_lunar_v001.png` |
| 7 | `lumen_ponte_das_estrelas` | Ponte das Estrelas | 61–70 | Arcos Luminosos; Vão Suspenso; Portão Estelar | `lumen_ponte_das_estrelas_v001.png` |
| 8 | `lumen_mosteiro_suspenso` | Mosteiro Suspenso | 71–80 | Pátio dos Monges; Salas de Meditação; Campanário Celestial | `lumen_mosteiro_suspenso_v001.png` |
| 9 | `lumen_santuario_do_sol_partido` | Santuário do Sol Partido | 81–90 | Degraus de Luz; Altar Quebrado; Núcleo Solar | `lumen_santuario_do_sol_partido_v001.png` |
| 10 | `lumen_arquivo_do_aeon` | Arquivo do Aeon | 91–99 | Prateleiras Infinitas; Câmara das Eras; Sala do Primeiro Registro | `lumen_arquivo_do_aeon_v001.png` |

### Prompts dos mapas de Lúmen

#### 1. Bosque Celestial

```text
Dark fantasy MMORPG celestial forest map, Celestial Grove of Lumen, sacred forest under broken divine light, shadowed clearings, corrupted ancestral tree, white gothic ruins, teal emerald crystals growing from roots, blue-green magical fog, pale golden ornaments, premium isometric fantasy cartography, ornate frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_bosque_celestial_entrada_do_bosque_v001.png`
- `lumen_bosque_celestial_clareiras_sombrias_v001.png`
- `lumen_bosque_celestial_arvore_ancestral_corrompida_v001.png`

#### 2. Pântano das Almas

```text
Dark fantasy soul swamp map, Kingdom of Lumen, haunted swamp margins, floating islands, sunken temple, ghostly blue-green mist, teal crystals rising from black water, ruined sacred arches, premium isometric MMORPG cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_pantano_das_almas_margens_do_pantano_v001.png`
- `lumen_pantano_das_almas_ilhas_flutuantes_v001.png`
- `lumen_pantano_das_almas_templo_afundado_v001.png`

#### 3. Pico Eterno

```text
Dark fantasy eternal peak map, Kingdom of Lumen, snowy gothic mountain slopes, ice caves, dimensional summit, broken celestial bridges, teal emerald crystals frozen in ancient stone, blue-green fog, premium cinematic isometric MMORPG map, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_pico_eterno_encostas_nevadas_v001.png`
- `lumen_pico_eterno_cavernas_de_gelo_v001.png`
- `lumen_pico_eterno_cume_dimensional_v001.png`

#### 4. Biblioteca Queimada

```text
Dark gothic burned library map, Kingdom of Lumen, gray atrium, living shelves, forbidden book chamber, ash-covered marble, blue-green crystal lamps, scorched celestial arches, mystical fog, premium isometric fantasy cartography, golden ornamental frame, no readable books, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_biblioteca_queimada_atrio_cinzento_v001.png`
- `lumen_biblioteca_queimada_estantes_vivas_v001.png`
- `lumen_biblioteca_queimada_sala_dos_livros_proibidos_v001.png`

#### 5. Jardim dos Espelhos

```text
Dark fantasy mirror garden map, Kingdom of Lumen, reflected fountain, glass labyrinth, primordial mirror, shattered gothic garden paths, teal emerald crystals reflected in black glass, pale golden ornaments, mystical blue-green fog, premium isometric MMORPG cartography, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_jardim_dos_espelhos_fonte_refletida_v001.png`
- `lumen_jardim_dos_espelhos_labirinto_de_vidro_v001.png`
- `lumen_jardim_dos_espelhos_espelho_primordial_v001.png`

#### 6. Observatório Lunar

```text
Dark fantasy lunar observatory map, Kingdom of Lumen, moon stairways, astral dome, Aeon lens, ruined gothic telescope structures, teal blue crystals, celestial fog, pale gold details, premium cinematic isometric MMORPG map, golden ornamental frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_observatorio_lunar_escadas_da_lua_v001.png`
- `lumen_observatorio_lunar_cupula_astral_v001.png`
- `lumen_observatorio_lunar_lente_do_aeon_v001.png`

#### 7. Ponte das Estrelas

```text
Dark fantasy star bridge map, Kingdom of Lumen, luminous gothic arches over cosmic void, suspended span, stellar gate, broken celestial stones, blue-green Kerium crystals floating in mist, premium isometric MMORPG cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_ponte_das_estrelas_arcos_luminosos_v001.png`
- `lumen_ponte_das_estrelas_vao_suspenso_v001.png`
- `lumen_ponte_das_estrelas_portao_estelar_v001.png`

#### 8. Mosteiro Suspenso

```text
Dark fantasy suspended monastery map, Kingdom of Lumen, monk courtyard, meditation halls, celestial bell tower, floating gothic monastery ruins, teal emerald crystal roots, blue-green divine fog, pale gold ornaments, premium cinematic isometric MMORPG map, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_mosteiro_suspenso_patio_dos_monges_v001.png`
- `lumen_mosteiro_suspenso_salas_de_meditacao_v001.png`
- `lumen_mosteiro_suspenso_campanario_celestial_v001.png`

#### 9. Santuário do Sol Partido

```text
Dark fantasy broken sun sanctuary map, Kingdom of Lumen, steps of light, shattered altar, solar core cracked by teal crystals, ruined gothic temple, divine fog, pale gold and black stone, premium isometric MMORPG endgame cartography, ornate golden frame, no text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_santuario_do_sol_partido_degraus_de_luz_v001.png`
- `lumen_santuario_do_sol_partido_altar_quebrado_v001.png`
- `lumen_santuario_do_sol_partido_nucleo_solar_v001.png`

#### 10. Arquivo do Aeon

```text
Dark fantasy Aeon archive map, Kingdom of Lumen, infinite shelves, chamber of eras, first record hall, ancient gothic archive beyond time, teal emerald crystal hourglasses, blue-green mist, pale gold ornaments, premium cinematic isometric MMORPG map, no readable text, no labels, no watermark, no characters.
```

Zonas internas:

- `lumen_arquivo_do_aeon_prateleiras_infinitas_v001.png`
- `lumen_arquivo_do_aeon_camara_das_eras_v001.png`
- `lumen_arquivo_do_aeon_sala_do_primeiro_registro_v001.png`

---

# 7. Negative prompt universal

Usar em todos os assets:

```text
modern buildings, sci-fi technology, futuristic city, cyberpunk, neon city, cartoon, childish style, anime chibi, readable text, labels, watermark, logo, signature, huge characters, clean modern roads, cars, motorcycles, guns, spaceships, UI buttons inside the image, flat mobile game cartoon, bright casual game style, low detail, blurry, overexposed
```

---

# 8. Regras para PNG, WebP e WebP animado

## PNG estático

Uso recomendado:

- imagem-base de cada capital;
- mapa-mundo de cada reino;
- card de cada mapa principal;
- fallback visual para Telegram.

Formato sugerido:

```text
1024x1024 ou 1536x1536
PNG sem texto
sem watermark
com moldura ornamental discreta
```

## WebP otimizado

Uso recomendado:

- Mini App;
- carregamento rápido;
- versão principal do mapa em produção.

Configuração sugerida:

```text
quality: 80–88
lossless: false
metadata: removida
largura máxima: 1280px
```

## WebP animado leve

Animações permitidas:

- névoa verde/azul movendo lentamente;
- brilho pulsante nos cristais;
- energia arcana correndo em rachaduras;
- água escura com leve ondulação;
- relâmpago distante em mapas de tempestade;
- partículas mágicas pequenas.

Animações proibidas:

- personagens andando;
- monstros grandes em destaque;
- texto animado;
- UI desenhada dentro da imagem;
- efeitos neon modernos;
- excesso de frames pesados.

Configuração sugerida:

```text
2 a 4 segundos de loop
8 a 12 fps
movimento sutil
peso alvo: abaixo de 2 MB por asset sempre que possível
```

---

# 9. Organização de pastas sugerida

```text
assets/
  maps/
    axis/
      capital/
        ferrath/
      world/
      main/
        axis_floresta_da_vanguarda/
        axis_fortaleza_de_aco/
        axis_abismo_da_ordem/
        axis_bastilha_dos_ecos/
        axis_campos_da_ferrugem/
        axis_arsenal_quebrado/
        axis_muralha_dos_titas/
        axis_sepulcro_dos_generais/
        axis_coracao_da_maquina/
        axis_trono_de_ferrath/
    ethos/
      capital/
        aurath/
      world/
      main/
        ethos_jardins_corrompidos/
        ethos_deserto_de_ambar/
        ethos_porto_das_tempestades/
        ethos_mercado_submerso/
        ethos_catacumbas_douradas/
        ethos_coliseu_dos_contratos/
        ethos_mina_de_sol_negro/
        ethos_palacio_das_dividas/
        ethos_cofre_da_tempestade/
        ethos_piramide_do_kerium_dourado/
    lumen/
      capital/
        solvara/
      world/
      main/
        lumen_bosque_celestial/
        lumen_pantano_das_almas/
        lumen_pico_eterno/
        lumen_biblioteca_queimada/
        lumen_jardim_dos_espelhos/
        lumen_observatorio_lunar/
        lumen_ponte_das_estrelas/
        lumen_mosteiro_suspenso/
        lumen_santuario_do_sol_partido/
        lumen_arquivo_do_aeon/
```

---

# 10. Convenção de nomes

Obrigatório:

- minúsculas;
- sem acento;
- sem espaços;
- usar underscore;
- sempre terminar com `v001`.

Exemplos:

```text
axis_ferrath_capital_v001.png
axis_ferrath_capital_v001.webp
axis_floresta_da_vanguarda_v001.png
axis_floresta_da_vanguarda_borda_da_floresta_v001.png
ethos_jardins_corrompidos_coracao_podre_dos_jardins_v001.webp
lumen_bosque_celestial_arvore_ancestral_corrompida_v001.webp
```

---

# 11. Direção para o futuro mapa interativo

Quando este repositório receber implementação visual, a interface deve seguir estas regras:

1. O mapa não deve criar dados próprios de gameplay.
2. O mapa não deve simular drops, monstros, economia ou combate.
3. O mapa deve apenas renderizar visualmente as rotas enviadas pelo backend.
4. O botão de viagem deve usar o `to_location_key` recebido do backend.
5. Áreas indisponíveis devem aparecer como névoa, ruína distante ou cristal apagado.
6. Áreas disponíveis devem brilhar com energia azul-esverdeada.
7. A localização atual deve ter brilho arcano mais forte.
8. Bosses e perigos devem ser indicados por aura, não por personagens gigantes.
9. O mapa deve continuar legível em tela pequena de celular/Telegram.
10. Nenhuma imagem deve conter texto interno.

---

# 12. Status deste repositório

Este arquivo é a **base v001 completa** do mapa visual do Kérium.

Ele define:

- identidade visual;
- 3 reinos;
- 3 capitais;
- 30 mapas principais;
- 90 zonas internas;
- prompts positivos;
- negative prompt universal;
- nomes de arquivos;
- estrutura de pastas;
- regras PNG/WebP/WebP animado;
- contrato visual esperado com `kerium-nakama`.

Próxima etapa recomendada: gerar os primeiros 6 assets visuais prioritários:

1. `axis_ferrath_capital_v001.png`
2. `ethos_aurath_capital_v001.png`
3. `lumen_solvara_capital_v001.png`
4. `axis_floresta_da_vanguarda_v001.png`
5. `ethos_jardins_corrompidos_v001.png`
6. `lumen_bosque_celestial_v001.png`
