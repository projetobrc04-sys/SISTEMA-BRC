# PROMPT MASTER PARA CODEX 5.5 — BRC BeautyOS Visual Beta Premium

> **Objetivo:** usar este prompt como instrução principal para o Codex criar, em uma única sessão de até 5 horas, uma versão **front-end visual beta**, bonita, navegável e pronta para apresentação executiva, do sistema próprio do salão **Bruno Ribeiro Concept — BRC**.

---

## 0. Modo de operação do Codex

Atue como uma equipe completa composta por:

- Staff Frontend Engineer;
- Product Designer sênior;
- UX/UI Designer de software premium;
- Especialista em sistemas para salão de beleza;
- Especialista em dashboard administrativo;
- Especialista em prototipação de alto impacto para apresentação executiva.

A prioridade é **entregar uma aplicação visual funcionando localmente**, com aparência profissional, dados fictícios realistas e fluxos navegáveis.  
Não faça perguntas. Tome decisões de produto, layout e arquitetura de forma autônoma.

O objetivo desta sessão não é criar o sistema final de produção.  
O objetivo é criar uma **demonstração visual irresistível**, capaz de mostrar para os executivos da BRC como seria abandonar o sistema atual e evoluir para um sistema próprio, premium e adaptado à operação real do salão.

---

## 1. Resultado esperado da sessão

Crie uma aplicação web chamada:

# BRC BeautyOS

Sistema visual beta para gestão completa do salão **Bruno Ribeiro Concept**.

A entrega deve conter:

- Projeto React + TypeScript rodando localmente;
- Interface premium no estilo BRC;
- Dados fictícios/mockados;
- Telas navegáveis;
- Fluxos simulados;
- Permissões visuais por perfil;
- Dashboard executivo;
- Agenda visual;
- CRM com prontuário técnico;
- Comandas com consumo de insumos;
- Orçamentos com cálculo visual;
- Fórmulas de coloração;
- Estoque;
- Caixa;
- Financeiro/DRE visual;
- Relatórios/BI;
- Modo de apresentação para diretoria;
- README simples explicando como rodar.

**Não implemente backend real.**  
**Não implemente banco de dados real.**  
**Não implemente autenticação real.**  
**Não implemente pagamento real.**  
**Não implemente integração real com WhatsApp, fiscal, gateway ou APIs.**

Use `mock data`, `local state` e, se quiser, `localStorage` apenas para melhorar a experiência de demonstração.

---

## 2. Intenção estratégica do protótipo

Este protótipo será usado para apresentar a primeira visão do sistema aos executivos/proprietários da BRC.

Ele precisa transmitir imediatamente:

1. **Premium:** o sistema parece caro, moderno e alinhado à marca.
2. **Controle:** a gestão enxerga agenda, caixa, estoque, clientes, comissões e relatórios.
3. **Operação real:** a recepção, profissionais e estoque conseguem visualizar como trabalhariam.
4. **Diferencial BRC:** prontuário técnico, histórico capilar, orçamento, consumo por gramas/ml e sugestão de fórmulas.
5. **Motivo para substituir o sistema atual:** o BRC BeautyOS é mais personalizado, mais visual, mais direto e mais adaptado ao salão.

A primeira impressão precisa ser forte.  
O Dashboard, Login, Agenda, Clientes, Comandas e Orçamentos precisam estar especialmente bonitos.

---

## 3. Referência de marca BRC

Use como base a marca **Bruno Ribeiro Concept**.

Referências conhecidas da marca:

- Nome público: **BRUNO RIBEIRO CONCEPT**;
- Posicionamento: **Beauty experience**;
- Especialidade associada: cabelo, beleza premium, salão, experiência;
- Perfil visual: preto, branco, elegante, minimalista, sofisticado;
- Logo enviada: círculo preto com letras **BRC** brancas e minimalistas;
- Instagram usado como referência: `@brunoribeiroconcept`;
- A marca aparece associada a Wella/Expert Wella, então o sistema deve valorizar serviços técnicos de cabelo, coloração, mechas e tratamento.

### Tradução disso para interface

A interface deve parecer:

- Luxo discreto;
- Profissional;
- Minimalista;
- Moderna;
- De alto padrão;
- Forte em preto e branco;
- Com detalhes pequenos em champagne/dourado;
- Sem visual infantil;
- Sem excesso de cores;
- Sem cara de template genérico.

### Não usar

- Azul SaaS genérico como cor principal;
- Roxo neon;
- Gradientes coloridos demais;
- Layout poluído;
- Ícones exagerados;
- Aparência de sistema barato;
- Visual parecido com sistemas prontos existentes.

---

## 4. Sistema visual da marca no produto

### Paleta principal

Use esta paleta como design tokens:

```ts
const colors = {
  brcBlack: "#050505",
  brcSurface: "#0E0E0E",
  brcSurface2: "#151515",
  brcGraphite: "#1E1E1E",
  brcBorder: "#2B2B2B",
  brcWhite: "#FFFFFF",
  brcOffWhite: "#F5F2EA",
  brcMuted: "#A3A3A3",
  brcChampagne: "#D6B56D",
  brcChampagneSoft: "#E7D3A0",
  brcSuccess: "#22C55E",
  brcWarning: "#F59E0B",
  brcDanger: "#EF4444",
  brcInfo: "#94A3B8"
}
```

### Estilo

- Fundo principal escuro no app administrativo;
- Cards com borda fina grafite;
- Áreas importantes com off-white quando fizer sentido;
- Texto branco/off-white;
- Texto secundário cinza claro;
- Champagne apenas em detalhes nobres: borda ativa, botão premium, destaque de KPI, selo VIP;
- Cantos arredondados entre `16px` e `24px`;
- Sombras sutis;
- Divisórias finas;
- Ícones lineares com `lucide-react`;
- Microinterações suaves;
- Hover elegante;
- Layout com respiro.

### Tipografia

Use fonte moderna de sistema:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Hierarquia:

- Títulos grandes, limpos e elegantes;
- Labels pequenos e em caixa alta apenas quando fizer sentido;
- Números de dashboard com destaque;
- Textos de ajuda curtos.

### Logo

Use a logo BRC anexada pelo usuário.  
Se ela estiver no projeto, coloque em:

```txt
public/brc-logo.png
```

Exiba a logo em:

- Login;
- Sidebar;
- Header;
- Agendamento online;
- Modo apresentação.

Se a imagem não estiver disponível, crie fallback com CSS:

- Círculo preto;
- Texto “BRC” branco;
- Tipografia fina;
- Borda sutil cinza.

---

## 5. Stack técnica recomendada

Use preferencialmente:

- React;
- TypeScript;
- Vite;
- Tailwind CSS;
- React Router DOM;
- Lucide React;
- Recharts;
- date-fns;
- clsx ou cn util;
- Componentes próprios reutilizáveis.

Evite dependências que atrasem a entrega.  
Se o shadcn/ui for rápido de instalar, pode usar. Se houver risco de erro, crie componentes próprios simples e elegantes.

### Regras técnicas

- Não criar backend.
- Não criar servidor API.
- Não usar Prisma.
- Não usar Supabase/Firebase.
- Não usar Next.js se isso atrasar.
- Não usar autenticação real.
- Não criar integrações reais.
- Não depender de imagens externas obrigatórias.
- Não deixar erros de TypeScript.
- Não deixar páginas vazias.
- Ao final, o projeto precisa rodar com:

```bash
npm install
npm run dev
```

E deve passar em:

```bash
npm run build
```

---

## 6. Plano de execução em 5 horas

Use este plano para maximizar a entrega.

### Primeiros 20 minutos — Setup e base visual

- Criar projeto Vite React TypeScript;
- Configurar Tailwind;
- Criar tokens visuais BRC;
- Criar layout base com Sidebar e Header;
- Criar rotas;
- Criar mock data base;
- Garantir que o app abre.

### 20 a 70 minutos — Layout premium e Dashboard

- Login premium;
- Shell administrativo;
- Sidebar;
- Header;
- Seletor “Visualizando como”;
- Dashboard com cards, gráficos, agenda do dia, alertas e apresentação do projeto.

### 70 a 150 minutos — Fluxos operacionais principais

- Agenda;
- Clientes/CRM;
- Perfil da cliente com abas;
- Comandas com drawer;
- Checkout visual;
- Orçamentos.

### 150 a 230 minutos — Diferenciais BRC

- Controle de estoque por gramas/ml;
- Fórmulas de coloração;
- Comparativo de marcas;
- Profissionais e comissões visuais;
- Caixa;
- Permissões.

### 230 a 285 minutos — Executivo e BI

- Financeiro/DRE visual;
- Relatórios;
- Modo apresentação;
- Telas restritas por perfil;
- Responsividade.

### 285 a 300 minutos — Polimento final

- Rodar build;
- Corrigir erros;
- Melhorar espaçamentos;
- Verificar rotas;
- Garantir que não há páginas vazias;
- Criar README;
- Resumir entrega.

---

## 7. Estrutura de arquivos sugerida

Crie uma estrutura limpa:

```txt
src/
  main.tsx
  App.tsx
  routes/
    AppRoutes.tsx
  components/
    layout/
      AppShell.tsx
      Sidebar.tsx
      Header.tsx
      MobileNav.tsx
    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      Input.tsx
      Select.tsx
      Tabs.tsx
      Modal.tsx
      Drawer.tsx
      DataTable.tsx
      StatCard.tsx
      EmptyState.tsx
      AccessDeniedCard.tsx
      StatusBadge.tsx
    brc/
      BrcLogo.tsx
      BrcHero.tsx
      PermissionGuard.tsx
      CommandDrawer.tsx
      ClientProfileTabs.tsx
      AppointmentCard.tsx
      FormulaSuggestionCard.tsx
      BudgetSummaryCard.tsx
      StockStatusBadge.tsx
      PresentationCard.tsx
  data/
    mockClients.ts
    mockAppointments.ts
    mockProfessionals.ts
    mockServices.ts
    mockProducts.ts
    mockOrders.ts
    mockReports.ts
    mockPermissions.ts
    mockFinancial.ts
  pages/
    Login.tsx
    Dashboard.tsx
    Agenda.tsx
    OnlineBooking.tsx
    Clients.tsx
    ClientProfile.tsx
    Commands.tsx
    Budgets.tsx
    ColorFormulas.tsx
    Stock.tsx
    Professionals.tsx
    Cashier.tsx
    Financial.tsx
    Reports.tsx
    Permissions.tsx
    Settings.tsx
    Presentation.tsx
  styles/
    globals.css
  utils/
    format.ts
    permissions.ts
    calculations.ts
```

Se preferir simplificar, pode reduzir pastas, mas mantenha organização clara.

---

## 8. Rotas obrigatórias

Crie estas rotas navegáveis:

```txt
/login
/dashboard
/agenda
/agendamento-online
/clientes
/clientes/:id
/comandas
/orcamentos
/formulas-coloracao
/estoque
/profissionais
/caixa
/financeiro
/relatorios
/permissoes
/configuracoes
/apresentacao
```

Após clicar em “Entrar no sistema”, ir para `/dashboard`.

A rota `/agendamento-online` deve parecer um link público do cliente, com visual mais limpo e sem depender totalmente do shell administrativo, mas ainda usando identidade BRC.

---

## 9. Perfis e permissões visuais

No Header, incluir um seletor fixo:

# Visualizando como

Opções:

- Admin;
- Gerente;
- Recepção;
- Profissional;
- Estoque.

Ao trocar o perfil, a interface deve mudar visualmente.

### Admin

Pode ver tudo:

- Dashboard completo;
- Financeiro;
- DRE;
- Margem;
- Relatórios;
- Comissões;
- Configurações;
- Estoque;
- Auditoria;
- Permissões;
- Dados estratégicos.

### Gerente

Pode ver quase tudo, mas não precisa acessar configurações sensíveis completas.

### Recepção

Pode ver:

- Agenda;
- Clientes;
- Check-in;
- Comandas;
- Caixa operacional;
- Recebimentos;
- Remarcações;
- Lista de espera;
- Agendamento online.

Não pode ver:

- Lucro líquido;
- DRE;
- Margem real;
- Configuração de comissões;
- Informações estratégicas dos profissionais.

Quando tentar ver área restrita, mostrar:

```txt
Acesso restrito
Este conteúdo é permitido apenas para administradores autorizados.
```

### Profissional

Pode ver:

- Própria agenda;
- Cliente atual;
- Histórico técnico autorizado;
- Orçamentos;
- Fórmulas de coloração;
- Serviços realizados;
- Comissões próprias;
- Metas próprias;
- Observações técnicas.

Não pode ver:

- Financeiro geral;
- Caixa completo;
- Dados de outros profissionais;
- Configurações estratégicas.

### Estoque

Pode ver:

- Estoque;
- Produtos;
- Movimentações;
- Alertas;
- Baixa de insumos;
- Produtos próximos do vencimento.

Não pode ver DRE, comissões estratégicas e financeiro completo.

### Como implementar

Não precisa bloquear de verdade.  
Faça `PermissionGuard` visual com base no perfil selecionado.

---

## 10. Dados fictícios obrigatórios

Crie dados realistas e consistentes.

### Clientes

Pelo menos 16 clientes:

- Mariana Alves;
- Amanda Soares;
- Larissa Monteiro;
- Camila Nunes;
- Beatriz Rocha;
- Juliana Lima;
- Fernanda Costa;
- Isabela Martins;
- Renata Carvalho;
- Patrícia Sales;
- Gabriela Torres;
- Luana Ferreira;
- Débora Macedo;
- Thais Araújo;
- Ana Clara Moreira;
- Vanessa Pires.

Cada cliente deve ter:

- ID único: `BRC-CL-0001`;
- Nome completo;
- Telefone;
- Instagram;
- Status: Nova, Recorrente, VIP, Inativa, Alto ticket, Pacote ativo;
- Última visita;
- Próximo agendamento;
- Profissional preferido;
- Serviços favoritos;
- Histórico capilar;
- Alergias/contraindicações;
- Tons aplicados;
- Produtos preferidos;
- Ticket médio;
- Total gasto;
- Pontos de fidelidade;
- Observações internas;
- Placeholder de fotos antes/depois.

### Profissionais

Pelo menos 7:

- Bruno Ribeiro — Hair Designer;
- Marina Costa — Colorista;
- Rafael Mendes — Cabeleireiro;
- Bianca Rocha — Tratamentos;
- Lucas Almeida — Assistente técnico;
- Sofia Martins — Make & Beauty;
- Equipe Recepção — Atendimento.

Cada profissional deve ter:

- Função;
- Avatar placeholder;
- Status;
- Agenda do dia;
- Faturamento produzido;
- Comissão estimada;
- Ocupação;
- Avaliação média;
- Metas.

### Serviços

Pelo menos 14:

- Corte feminino premium;
- Escova modelada;
- Tratamento Wella Fusion;
- Cronograma capilar;
- Coloração global;
- Tonalização;
- Morena iluminada premium;
- Mechas premium;
- Consultoria capilar;
- Reconstrução pós-química;
- Finalização especial;
- Combo semanal BRC;
- Diagnóstico capilar;
- Retoque de raiz.

Cada serviço deve ter:

- Duração;
- Valor;
- Categoria;
- Profissional indicado;
- Necessita avaliação;
- Necessita sinal;
- Produtos/insumos padrão.

### Produtos e insumos

Pelo menos 20:

- Wella Blondor;
- Wella Koleston;
- Color Touch;
- L'Oréal Majirel;
- Schwarzkopf Igora;
- Oxidante 20 volumes;
- Oxidante 30 volumes;
- Oxidante 40 volumes;
- Máscara Wella Fusion;
- Shampoo técnico;
- Ampola de tratamento;
- Finalizador;
- Luvas descartáveis;
- Papel alumínio;
- Pente técnico;
- Touca descartável;
- Protetor térmico;
- Home care premium;
- Sérum finalizador;
- Máscara pós-química.

Cada produto deve ter:

- Marca;
- Tipo: Venda, Uso interno, Insumo técnico, Descartável;
- Unidade: g, ml, unidade, pacote;
- Estoque atual;
- Estoque mínimo;
- Custo;
- Preço de venda quando aplicável;
- Margem;
- Validade;
- Status.

### Agendamentos

Criar 25 a 32 agendamentos fictícios para um dia cheio.

Status:

- Confirmado;
- Aguardando sinal;
- Cliente chegou;
- Em atendimento;
- Finalizado;
- Cancelado;
- No-show;
- Reagendado.

### Comandas

Pelo menos 10 comandas com status variados:

- Aberta;
- Em atendimento;
- Aguardando pagamento;
- Paga;
- Cancelada.

Cada comanda deve ter:

- Cliente;
- Profissional;
- Serviços;
- Produtos vendidos;
- Insumos consumidos;
- Quantidade em g/ml;
- Custo técnico;
- Desconto;
- Forma de pagamento;
- Total;
- Status;
- Histórico de alterações.

---

## 11. Telas obrigatórias com detalhes

# 11.1 Login

Tela de grande impacto visual.

### Aparência

- Fundo preto/grafite;
- Logo BRC grande;
- Card de login central;
- Visual luxuoso;
- Pequeno texto: “Gestão premium para o Bruno Ribeiro Concept”;
- Elementos sutis em champagne;
- Painel lateral ou texto conceitual com benefícios do sistema.

### Elementos

- Logo BRC;
- Título: `BRC BeautyOS`;
- Subtítulo: `Sistema proprietário de gestão premium`;
- Campo e-mail;
- Campo senha;
- Botão: `Entrar no sistema`;
- Acesso rápido com perfis:
  - Admin;
  - Recepção;
  - Profissional;
  - Estoque.

Credenciais fictícias:

```txt
admin@brc.com
recepcao@brc.com
profissional@brc.com
estoque@brc.com
```

Ao clicar, apenas entrar no Dashboard.

---

# 11.2 Dashboard Principal

Deve ser a tela mais impressionante.

### Conteúdo obrigatório

Cards:

- Faturamento do dia: `R$ 8.740,00`;
- Faturamento do mês: `R$ 126.380,00`;
- Agendamentos hoje: `32`;
- Clientes atendidas hoje: `18`;
- Taxa de ocupação: `87%`;
- Ticket médio: `R$ 312,00`;
- Comandas abertas: `7`;
- Orçamentos pendentes: `4`;
- No-show: `2`;
- Produtos em estoque baixo: `6`;
- Aniversariantes do dia: `3`.

Blocos:

- Agenda de hoje;
- Fila de espera;
- Comandas em aberto;
- Alertas críticos;
- Serviços mais vendidos;
- Profissionais em destaque;
- Gráfico de faturamento semanal;
- Mapa de calor de horários;
- Card “Por que o BRC BeautyOS existe?”.

### Card executivo obrigatório

Criar um card chamado:

```txt
Sistema proprietário BRC
Uma experiência operacional criada para agenda, clientes, comandas, estoque técnico e gestão premium do Bruno Ribeiro Concept.
```

Com bullets:

- Prontuário técnico por cliente;
- Controle de insumos por gramas/ml;
- Orçamentos rápidos no atendimento;
- Permissões por função;
- Relatórios para decisão.

---

# 11.3 Agenda Inteligente

Tela central da operação.

### Layout

- Filtros no topo;
- Visão diária com coluna por profissional ou timeline;
- Alternar Dia/Semana;
- Mini calendário lateral;
- Lista de espera;
- Próximos check-ins;
- Cards por horário.

### Ações visuais

- Novo agendamento;
- Check-in;
- Ver ficha;
- Abrir comanda;
- Reagendar;
- Marcar no-show;
- Abrir lista de espera.

### Card exemplo

```txt
09:00 — Amanda Soares
Corte feminino premium + Tratamento Wella Fusion
Profissional: Bruno Ribeiro
Status: Confirmado
Ações: Check-in | Ver ficha | Abrir comanda
```

### Fluxo visual

Ao clicar em Check-in, mostrar toast:

```txt
Check-in realizado. Comanda pronta para abertura.
```

Ao clicar em Abrir comanda, abrir modal/drawer simulando criação.

---

# 11.4 Agendamento Online

Experiência pública do cliente.

### Objetivo

Parecer um link que a cliente acessaria pelo Instagram/WhatsApp.

### Layout

- Sem sidebar administrativa;
- Header BRC;
- Hero elegante;
- Passos do agendamento:
  1. Serviço;
  2. Profissional;
  3. Data e horário;
  4. Seus dados;
  5. Confirmação.
- Cards premium de serviços;
- Botão champagne/preto;
- Confirmação final.

### Texto de confirmação

```txt
Seu horário foi reservado.
Nossa equipe entrará em contato para confirmar os detalhes da sua beauty experience.
```

---

# 11.5 Clientes / CRM

### Lista

- Busca por nome, telefone ou Instagram;
- Filtros por status;
- Tabela premium;
- Cards de resumo:
  - Total de clientes;
  - VIPs;
  - Inativas;
  - Pacotes ativos;
  - Aniversariantes.

Tabela com:

- ID;
- Cliente;
- Telefone;
- Instagram;
- Última visita;
- Próximo atendimento;
- Profissional preferido;
- Ticket médio;
- Status.

### Alerta de duplicidade

Incluir, em algum modal/form visual, alerta:

```txt
Possível duplicidade encontrada: já existe uma cliente com este telefone.
```

---

# 11.6 Perfil da Cliente / Prontuário

Criar tela muito rica, pois é um dos diferenciais do projeto.

### Abas obrigatórias

1. Visão geral;
2. Histórico técnico;
3. Fórmulas e colorações;
4. Fotos antes/depois;
5. Comandas;
6. Pagamentos;
7. Observações internas;
8. Marketing/retorno.

### Conteúdos

- Dados pessoais;
- ID único;
- Profissional preferido;
- Serviços favoritos;
- Alergias;
- Contraindicações;
- Histórico químico;
- Tons utilizados;
- Produtos/marcas preferidas;
- Linha do tempo de atendimentos;
- Fotos antes/depois com placeholders elegantes;
- Termos assinados;
- Pacotes/assinaturas;
- Pontos de fidelidade;
- Próximo retorno sugerido.

---

# 11.7 Comandas e Checkout Manual

Esta tela precisa demonstrar o fluxo que resolve o problema real da BRC.

### Layout

Kanban por status:

- Abertas;
- Em atendimento;
- Aguardando pagamento;
- Finalizadas.

Cada card:

- Nome da cliente;
- Profissional;
- Serviços;
- Valor parcial;
- Status;
- Tempo de atendimento;
- Botões de ação.

### Drawer da comanda

Ao selecionar uma comanda, abrir drawer lateral com:

- Cabeçalho da cliente;
- Profissional responsável;
- Serviços adicionados;
- Produtos vendidos;
- Insumos consumidos;
- Consumo por g/ml;
- Custo técnico estimado;
- Total de serviços;
- Descontos;
- Total da comanda;
- Forma de pagamento;
- Botão `Adicionar serviço`;
- Botão `Adicionar insumo`;
- Botão `Finalizar pagamento`.

### Consumo de insumos

Mostrar tabela:

```txt
Pó descolorante Wella Blondor — 80g usados — estoque restante: 420g — custo R$ 31,20
Oxidante 30 volumes — 120ml usados — estoque restante: 2.1L — custo R$ 12,80
Máscara Wella Fusion — 35g usados — estoque restante: 640g — custo R$ 18,40
```

Mostrar aviso:

```txt
Na versão final, essa baixa será automática no estoque ao fechar a comanda.
```

### Checkout visual

Formas:

- Dinheiro;
- PIX;
- Débito;
- Crédito;
- Link de pagamento;
- Gift card;
- Pacote pré-pago;
- Pagamento misto.

Não processe pagamento real.

---

# 11.8 Orçamentos / Simulador de Orçamento

Tela para o profissional montar orçamento durante atendimento.

### Campos visuais

- Cliente;
- Serviço;
- Profissional;
- Tempo estimado;
- Produtos previstos;
- Quantidade em g/ml;
- Custo técnico;
- Valor sugerido;
- Margem estimada;
- Status.

### Exemplo obrigatório

Cliente: `Mariana Alves`  
Serviço: `Morena iluminada premium`

Produtos previstos:

- Pó descolorante — 90g;
- Oxidante 30 vol — 150ml;
- Tonalizante 8.13 — 60g;
- Tratamento pós-química — 40g.

Resumo:

- Custo estimado de insumos: `R$ 86,40`;
- Tempo previsto: `4h30`;
- Valor sugerido: `R$ 680,00`;
- Margem estimada: `62%`;
- Status: `Aguardando aprovação da cliente`.

Ações:

- Enviar para comanda;
- Cliente aprovou;
- Cliente solicitou alteração;
- Gerar proposta visual;
- Duplicar orçamento.

---

# 11.9 Fórmulas de Coloração

Um dos principais diferenciais. Caprichar visualmente.

### Campos

- Cliente;
- Tom atual;
- Altura de tom atual;
- Reflexo atual;
- Resultado desejado;
- Marca preferida;
- Produtos disponíveis;
- Tempo disponível;
- Orçamento máximo.

### Saída

Mostrar 3 cards:

#### Opção 1 — Resultado premium

- Marca: Wella;
- Fórmula sugerida;
- Oxidante;
- Proporção;
- Quantidade estimada;
- Custo;
- Resultado esperado;
- Badge: `Maior qualidade`.

#### Opção 2 — Custo-benefício

- Marca: L'Oréal;
- Fórmula;
- Custo menor;
- Badge: `Melhor margem`.

#### Opção 3 — Alternativa econômica

- Marca: Schwarzkopf;
- Fórmula;
- Badge: `Menor custo`.

### Tabela comparativa obrigatória

| Marca | Produtos | Custo técnico | Valor sugerido | Margem estimada | Estoque |
|---|---|---:|---:|---:|---|
| Wella | Blondor + Color Touch | R$ 92,30 | R$ 720,00 | 64% | Sim |
| L'Oréal | Majirel + Ox 30 | R$ 81,50 | R$ 680,00 | 62% | Sim |
| Schwarzkopf | Igora + Ox | R$ 76,90 | R$ 650,00 | 60% | Baixo |

Aviso:

```txt
Sugestão demonstrativa. A decisão técnica final é sempre do profissional.
```

---

# 11.10 Estoque e Produtos

### Layout

- Cards de alerta;
- Tabela principal;
- Filtros por tipo;
- Histórico de movimentação;
- Baixa por serviço;
- Produtos vencendo;
- Produtos críticos.

### Campos

- Produto;
- Marca;
- Categoria;
- Tipo;
- Unidade;
- Estoque atual;
- Estoque mínimo;
- Custo;
- Preço de venda;
- Margem;
- Validade;
- Status.

### Alertas

- Estoque baixo;
- Crítico;
- Próximo do vencimento;
- Consumo acima do padrão;
- Comprar nos próximos 7 dias.

### Destaque visual

Criar card:

```txt
Consumo técnico do mês
Pó descolorante: 3.8kg
Oxidante: 12.4L
Tratamentos: 5.1kg
```

---

# 11.11 Profissionais e Comissões

### Conteúdo

- Lista de profissionais;
- Faturamento por profissional;
- Agenda;
- Comissão estimada;
- Metas;
- Avaliações;
- Serviços realizados;
- Horários bloqueados.

### Permissão

Recepção não pode editar/visualizar regras sensíveis de comissão.  
Para recepção, mostrar apenas informações operacionais.

Admin vê:

- Comissão estimada;
- Configuração de regras;
- Produção;
- Ranking;
- Metas.

---

# 11.12 Caixa e Recebimentos

### Conteúdo

- Abrir caixa;
- Fechar caixa;
- Entradas do dia;
- Saídas do dia;
- PIX recebido;
- Dinheiro;
- Débito;
- Crédito;
- Link de pagamento;
- Comandas aguardando pagamento;
- Sangria;
- Suprimento;
- Diferença de caixa.

### Recepção

Recepção vê o fluxo operacional, sem lucro líquido ou DRE.

---

# 11.13 Financeiro / DRE Visual

Acesso apenas Admin/Gerente.

### Conteúdo

- Faturamento bruto;
- Faturamento líquido;
- Despesas fixas;
- Despesas variáveis;
- Taxas de cartão;
- Comissões;
- Custos de insumos;
- Lucro estimado;
- Margem por serviço;
- Margem por categoria;
- DRE gerencial visual;
- Gráficos mockados.

Perfis restritos devem ver `AccessDeniedCard`.

---

# 11.14 Relatórios e BI

Usar Recharts com dados mockados.

Relatórios:

- Faturamento por período;
- Agenda por profissional;
- Taxa de ocupação;
- Serviços mais vendidos;
- Produtos mais consumidos;
- Produtos mais vendidos;
- Clientes novas;
- Clientes recorrentes;
- Clientes inativas;
- No-show;
- Cancelamentos;
- Consumo de estoque por serviço;
- Consumo de estoque por profissional;
- Mapa de calor por horário;
- Margem por serviço.

---

# 11.15 Permissões e Configurações

### Permissões

- Lista de usuários;
- Perfis;
- Tabela de permissões;
- Toggles visuais;
- Badge de acesso;
- Auditoria fictícia.

### Logs fictícios

```txt
03/07/2026 09:12 — Recepção abriu comanda #1021
03/07/2026 10:04 — Marina alterou orçamento #883
03/07/2026 11:20 — Admin visualizou DRE mensal
03/07/2026 14:37 — Estoque registrou baixa de Blondor 80g
```

### Configurações

- Dados da unidade;
- Horários de funcionamento;
- Serviços;
- Regras de sinal;
- Regras de cancelamento;
- LGPD;
- Segurança;
- Backup visual;
- Preferências de aparência.

---

# 11.16 Modo Apresentação

Criar página `/apresentacao`.

Esta página deve ser feita para mostrar aos executivos.

### Conteúdo

Título:

```txt
BRC BeautyOS
A nova base operacional do Bruno Ribeiro Concept.
```

Cards de argumento:

1. **Agenda e atendimento em uma só visão**
2. **Comanda com baixa de estoque técnico**
3. **Prontuário capilar completo da cliente**
4. **Orçamento rápido dentro do atendimento**
5. **Controle financeiro por permissão**
6. **Relatórios para decisão**
7. **Sistema proprietário com identidade BRC**

Inclua um bloco comparativo conceitual:

```txt
Antes: sistema genérico, fluxos adaptados manualmente, controle limitado de insumos.
Depois: sistema próprio BRC, fluxo pensado para o salão, prontuário técnico e gestão premium.
```

Não use nome de concorrente na interface final. Use apenas “sistema atual” ou “solução genérica”.

---

## 12. Componentes obrigatórios

Crie componentes reutilizáveis:

- `AppShell`;
- `Sidebar`;
- `Header`;
- `BrcLogo`;
- `PageHeader`;
- `StatCard`;
- `StatusBadge`;
- `AccessDeniedCard`;
- `PermissionGuard`;
- `DataTable`;
- `Tabs`;
- `Drawer`;
- `Modal`;
- `AppointmentCard`;
- `CommandDrawer`;
- `BudgetSummaryCard`;
- `FormulaSuggestionCard`;
- `StockStatusBadge`;
- `ClientProfileTabs`;
- `PresentationCard`;
- `HeatmapGrid`;
- `MetricTrend`;
- `SectionCard`.

---

## 13. Interações visuais obrigatórias

Mesmo sem backend, implementar:

- Troca de perfil no seletor “Visualizando como”;
- Navegação pela sidebar;
- Login fictício;
- Abrir/fechar drawer de comanda;
- Abrir modal de novo agendamento;
- Abrir modal de orçamento;
- Trocar abas no perfil da cliente;
- Filtrar clientes;
- Filtrar estoque;
- Selecionar status de agenda;
- Simular check-in com toast;
- Simular abertura de comanda com toast;
- Simular aprovação de orçamento com toast;
- Simular finalização de pagamento com toast;
- Mostrar acesso negado quando necessário.

Não precisa persistir após refresh.

---

## 14. Badges e estados

### Agendamento

- Confirmado;
- Aguardando sinal;
- Cliente chegou;
- Em atendimento;
- Finalizado;
- Cancelado;
- No-show;
- Reagendado.

### Comanda

- Aberta;
- Em atendimento;
- Aguardando pagamento;
- Paga;
- Cancelada.

### Estoque

- Normal;
- Baixo;
- Crítico;
- Vencendo;
- Vencido.

### Cliente

- Nova;
- Recorrente;
- VIP;
- Inativa;
- Alto ticket;
- Pacote ativo.

### Pagamento

- Pendente;
- Parcial;
- Pago;
- Estornado visual;
- Aguardando confirmação.

---

## 15. Cálculos visuais simulados

Criar helpers simples:

### Orçamento

```txt
custoTecnico = soma(custoUnitario * quantidadeUsada)
valorSugerido = serviçoBase + margem + complexidade
margemEstimada = (valorSugerido - custoTecnico - comissaoEstimada) / valorSugerido
```

### Comanda

```txt
total = serviços + produtosVendidos - desconto
custoTecnico = insumosConsumidos
comissaoEstimada = percentual * serviços
```

### Estoque

```txt
status = estoqueAtual <= minimo ? "Baixo" : "Normal"
status = estoqueAtual <= minimo * 0.4 ? "Crítico" : status
```

Os cálculos são apenas demonstrativos.

---

## 16. Responsividade

O sistema deve funcionar bem em:

- Desktop grande;
- Notebook;
- Tablet;
- Celular.

No mobile:

- Sidebar vira menu;
- Cards empilham;
- Tabelas podem virar cards;
- Agenda pode virar lista;
- Drawers ocupam tela cheia.

---

## 17. Critérios de qualidade visual

Antes de finalizar, verifique:

- O sistema parece BRC?
- O preto/branco/champagne está elegante?
- O Dashboard impressiona?
- A Agenda parece útil?
- A Comanda resolve o problema de operação?
- O prontuário da cliente parece completo?
- O orçamento por gramas/ml ficou claro?
- A fórmula de coloração parece um diferencial real?
- As permissões estão fáceis de demonstrar?
- A página de apresentação vende bem a ideia para executivos?
- Não há telas vazias?
- Não há cara de template genérico?
- O build passa sem erro?

---

## 18. Conteúdo do README

Criar `README.md`:

```md
# BRC BeautyOS — Visual Beta

Protótipo visual front-end do sistema próprio para administração do salão Bruno Ribeiro Concept.

Esta versão usa dados fictícios e não possui backend, banco de dados, autenticação real, pagamentos reais ou integrações reais.

O objetivo é demonstrar visualmente os principais fluxos:
agenda, clientes, prontuário técnico, comandas, orçamentos, fórmulas de coloração, estoque, caixa, permissões, financeiro e relatórios.

## Como rodar

npm install
npm run dev

## Observação

Este projeto é uma versão beta visual para apresentação executiva. Os dados são mockados e as ações são simuladas localmente.
```

---

## 19. Restrições importantes

Não copiar layout, textos proprietários, marca ou identidade visual de sistemas existentes.  
Não mencionar concorrentes dentro da interface final.  
Não implementar backend.  
Não perder tempo com integrações reais.  
Não criar páginas vazias.  
Não entregar apenas wireframe.  
Não usar design genérico.

O protótipo precisa parecer um produto real, pronto para demonstração.

---

## 20. Definição de pronto

A entrega estará pronta quando:

- `npm run dev` abrir o sistema;
- `npm run build` passar;
- Login fictício funcionar;
- Sidebar navegar entre páginas;
- Dashboard estiver completo;
- Agenda estiver visualmente funcional;
- Clientes e perfil com prontuário existirem;
- Comandas tiverem drawer com insumos por g/ml;
- Orçamentos calcularem valores simulados;
- Fórmulas compararem marcas;
- Estoque mostrar alertas;
- Caixa estiver operacional visualmente;
- Financeiro/DRE estiver protegido por permissão;
- Relatórios tiverem gráficos;
- Permissões tiverem seletor de perfil;
- Modo apresentação vender a ideia;
- Identidade BRC estiver clara;
- Dados fictícios preencherem todas as telas;
- Nada importante estiver quebrado.

---

## 21. Instrução final

Crie o BRC BeautyOS como uma aplicação visual premium, completa e navegável.

O foco é convencer.  
O foco é impressionar.  
O foco é mostrar que o Bruno Ribeiro Concept pode ter um sistema próprio mais bonito, mais funcional e mais alinhado à rotina real do salão.

Priorize impacto visual, clareza operacional e fluxos que demonstram valor imediato:

- Agenda;
- Clientes;
- Prontuário;
- Comandas;
- Estoque por insumo;
- Orçamentos;
- Fórmulas;
- Permissões;
- Dashboard executivo.

Ao final, entregue o projeto funcionando e informe apenas:

1. Como rodar;
2. Quais páginas foram criadas;
3. Quais fluxos simulados estão disponíveis;
4. Que não há backend real, apenas front-end visual beta.
