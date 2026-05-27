# Mapa v001 — Hub visual do Kérium

Este pacote transforma o menu atual do Kérium em um **mapa-hub visual** no estilo `Kérium — Cristal Gótico Arcano`.

O objetivo é substituir a percepção de botões soltos por pontos clicáveis dentro de uma cena dark fantasy premium: uma mesa cartográfica arcana, ruínas góticas, cristais azul-esverdeados, névoa mágica e moldura dourada ornamental.

## Escopo

Este pacote contém apenas documentação visual e prompts de asset.

Não altera:

- backend;
- migrations;
- combate;
- inventário;
- economia;
- personagens;
- drops;
- monstros;
- guilda;
- pets;
- montarias.

## Arquivos pequenos

Cada ponto clicável possui um arquivo próprio em:

```text
docs/map_v001/click_points/
```

Isso permite modificar cada função separadamente no futuro.

## Pontos do hub

- Inventário
- Mapas
- Masmorra
- Eventos
- Perfil
- Arena PvP
- Comércio
- Fendas
- Batalha
- Guilda
- Personagens
- Mercador
- Painel GM
- Logout

## Regra principal

O mapa visual não deve criar lógica. Ele deve apenas representar visualmente as ações que o backend ou o miniapp já expõem.