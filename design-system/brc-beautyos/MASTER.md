# BRC BeautyOS - Design System Master

> Fonte de verdade para a direcao visual do prototipo executivo. Regras de pagina podem complementar este arquivo, mas nao devem trocar a identidade central sem decisao explicita.

**Projeto:** BRC BeautyOS
**Atualizado:** 2026-07-04
**Categoria:** sistema operacional interno para salao premium
**Densidade:** alta, dashboard executivo, leitura rapida
**Movimento:** sutil, funcional, sem pirotecnia

## Direcao Visual

O produto deve parecer uma ferramenta proprietaria do Bruno Ribeiro Concept: escura, precisa, elegante e operacional. A interface precisa vender controle e sofisticação, nao parecer landing page generica de beleza.

## Paleta Aprovada

| Papel | Hex | Variavel existente |
| --- | --- | --- |
| Preto base | `#050505` | `--brc-black` |
| Superficie | `#0E0E0E` | `--brc-surface` |
| Superficie elevada | `#151515` | `--brc-surface-2` |
| Grafite | `#1E1E1E` | `--brc-graphite` |
| Borda | `#2B2B2B` | `--brc-border` |
| Branco | `#FFFFFF` | `--brc-white` |
| Off-white | `#F5F2EA` | `--brc-off-white` |
| Texto secundario | `#A3A3A3` | `--brc-muted` |
| Champagne BRC | `#D6B56D` | `--brc-champagne` |
| Champagne claro | `#E7D3A0` | `--brc-champagne-soft` |
| Sucesso | `#22C55E` | `--brc-success` |
| Alerta | `#F59E0B` | `--brc-warning` |
| Risco | `#EF4444` | `--brc-danger` |

**Proibido para esta fase:** rosa/lavanda como paleta dominante. Isso enfraquece a marca BRC e deixa a demo com cara de template de beleza generico.

## Tipografia

- Fonte de interface: Inter/system UI.
- Headings: peso alto, letter spacing 0, sem exagero editorial dentro de dashboard.
- Tamanho hero apenas em telas de apresentacao/login/agendamento publico.
- Cards e paineis usam headings compactos para preservar densidade operacional.

## Componentes

- Cards: raio 22px no sistema atual; manter consistencia, sem cards dentro de cards desnecessarios.
- Botoes: pílula premium, Motion hover/tap, loading visual quando simular acao sem backend.
- Modais/drawers: fundo escuro, borda champagne sutil, fechamento por botao e overlay.
- Tabelas: densas, legiveis, com hover discreto.
- Charts: Recharts com champagne como cor principal e verde/vermelho apenas para semantica financeira.

## Efeitos

- Aceternity-style permitido em hero, apresentacao e agendamento publico: aura, beams e brilho champagne sutil.
- Motion deve priorizar opacity/transform; nao animar layout pesado.
- Respeitar `prefers-reduced-motion` nos componentes com animacao continua.
- Nada de orbs decorativos genericos; qualquer brilho precisa reforcar palco premium/operacional.

## Regras UX

- Nenhum botao inerte: se nao houver backend, simular loading, estado local e toast.
- Filtros precisam alterar a lista ou comunicar resultado visual.
- Navegacao deve funcionar em desktop e mobile.
- A primeira tela depois do login deve causar impacto executivo: KPIs, grafico, agenda, comandas e alertas.
- O produto deve deixar claro que e beta visual sem backend real, mas a experiencia nao pode parecer incompleta.

## Checklist Antes De Entregar

- [x] Identidade BRC visivel: preto, off-white e champagne.
- [x] Logo BRC presente em login, app shell, hero e agendamento publico.
- [x] Motion aplicado sem prejudicar performance.
- [x] Rotas principais navegaveis.
- [x] Sem botao/link inerte pela auditoria estatica.
- [x] Build Vite sem warning novo.
