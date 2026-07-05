# Auditoria de Interativos - BRC BeautyOS

Data: 2026-07-04
Escopo: paginas e componentes React em `src/`.

## Achados Iniciais Corrigidos

- `Dashboard`: botao `Novo agendamento` nao tinha acao. Agora simula loading, confirma e navega para Agenda.
- `Agenda`: mini calendario nao alterava estado; busca nao filtrava; ficha nao reagia. Agora filtra, troca dia, abre ficha/comanda visual e salva agendamento com loading.
- `AppointmentCard`: `Ver ficha` era inerte. Agora abre ficha tecnica visual via toast/loading.
- `CommandDrawer`: metodos de pagamento, adicionar servico e adicionar insumo eram inertes. Agora todos alteram estado ou simulam acao.
- `Commands`: `Abrir comanda` e `Abrir drawer` eram inertes; havia botao dentro de botao. Agora abre drawer, tem teclado Enter/Espaco e HTML valido.
- `BudgetSummaryCard`: enviar, alterar, gerar proposta e duplicar eram inertes. Agora todos simulam acao com loading e feedback.
- `Clients`: `Buscar` e `Segmentar retorno` eram inertes. Agora busca informa resultado e segmentacao aplica filtro de inativas.
- `ClientProfile`: `WhatsApp visual` e `Novo retorno` eram inertes. Agora simulam mensagem e retorno.
- `Cashier`: abrir/fechar caixa, sangria e suprimento eram inertes. Agora alteram status/feedback visual.
- `ColorFormulas`: `Simular formula` era inerte. Agora marca simulacao ativa e recomenda formula.
- `Financial`: `Gerar DRE visual` era inerte. Agora atualiza estado da DRE.
- `Permissions`: `Novo usuario visual` era inerte. Agora abre modal e salva usuario visual.
- `Presentation`: `Iniciar demonstracao` era inerte. Agora inicia fluxo e navega ao dashboard.
- `Professionals`: configurar/regras restritas eram inertes. Agora respondem conforme permissao.
- `Reports`: exportar/atualizar periodo eram inertes. Agora exporta visual e atualiza periodo.
- `Settings`: salvar era inerte. Agora confirma salvamento visual.
- `Stock`: exportar, novo item, baixa por servico e ver criticos eram inertes. Agora exporta visual, abre modal, simula baixa e filtra criticos.
- `OnlineBooking`: horarios nao eram selecionaveis e confirmacao final nao tinha acao de envio. Agora seleciona horario e confirma reserva visual.
- `Header`: busca global parecia interativa mas era apenas um bloco visual. Agora e botao com feedback.

## Auditoria Final

Comando usado:

```bash
rg '<Button|<button|<Link|<NavLink|role="button"|onClick|to=|href=' src -n
```

Resultado final: nao restaram botoes ou links inertes identificados. Itens sem `onClick` sao `type="submit"`, `disabled`, `Link/NavLink` com rota, ou recebem handler por props.

## Rodada de navegador local - 2026-07-04 23:53:32 -03:00

### Resultado

- Suite guiada Chrome/Playwright: 31 fluxos, 0 falhas, 0 console warnings/errors, 0 page errors.
- Pasta de evidencias local: qa-interaction-screenshots/scenario-final-2-2026-07-05T02-26-53-786Z/.
- Varredura ampla: 228 interacoes; dois falsos positivos (Novo agendamento, Exportar visual) foram retestados isoladamente e funcionaram.

### Correcoes aplicadas

- IDs de toast ficaram deterministas com sequencia para eliminar colisao React.
- useDemoAction passou a suportar multiplas acoes pendentes independentes.
- Favicon BRC adicionado para remover 404 de deploy.

## Smoke publico - 2026-07-04 23:56:51 -03:00

- URL: https://sistema-brc.vercel.app/#/login.
- Resultado: renderizacao confirmada no Chrome headless, texto BRC e botao Entrar no sistema presentes, sem console/page errors.
- Print local: qa-interaction-screenshots/public-login-after-push.png.
## Navegacao Vercel responsiva - 2026-07-05 00:09:30 -03:00

- Bug reproduzido em https://sistema-brc.vercel.app/#/login no viewport 1024px: sidebar desktop escondida e botao Abrir menu invisivel.
- Causa: breakpoints divergentes entre sidebar (1180px) e .button.mobile-only (760px).
- Correcao: menu mobile/tablet aparece ate 1180px.
- Validacao local: 1024px navega por Clientes e Comandas sem F5; 1180px mostra menu; 1181px/1440px mostram sidebar desktop.

## Tela preta na troca de rotas - 2026-07-05 00:22:57 -03:00
- Bug real confirmado: .page-motion ficava com opacity 0 e translateY(-8px) apos navegacao SPA, deixando o miolo da tela preto apesar do DOM estar preenchido.
- Causa: AnimatePresence mode="wait" no Outlet do AppShell.
- Correcao: substituir a transicao Motion por div.page-motion comum com animacao CSS segura, cujo estado padrao e sempre visivel.
- Validacao: Agenda, Clientes, Comandas, Orcamentos, Formulas, Estoque, Financeiro e Relatorios mantiveram opacity=1 apos cliques normais; cliques rapidos tambem passaram.
- Builds: npm run build e npm run build:github passaram.

## Smoke publico da tela preta - 2026-07-05 00:26:40 -03:00

- Commit publicado: 025b93e.
- Vercel confirmou bundle assets/index-mhkBmGl5.js.
- Agenda, Clientes, Comandas, Orcamentos, Formulas, Estoque, Financeiro e Relatorios passaram com opacity=1 e conteudo visivel.
- Cliques rapidos e breakpoint 1024px tambem passaram.