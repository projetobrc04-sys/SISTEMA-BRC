# BRC BeautyOS - Visual Beta

Protótipo front-end do sistema proprietário para administração do salão Bruno Ribeiro Concept.

Esta versão é 100% visual: usa dados fictícios, estados locais e feedbacks simulados. Não há backend real, banco de dados real, autenticação real, pagamento real ou integração WhatsApp real.

## O que a demo cobre

- Login fictício por perfil.
- Dashboard executivo com KPIs, gráficos, agenda, comandas e alertas.
- Agenda com filtros, busca, mini calendário, check-in, ficha e drawer de comanda.
- CRM de clientes e prontuário técnico.
- Comandas, checkout visual e baixa técnica simulada.
- Orçamentos, fórmulas de coloração, estoque, profissionais, caixa, financeiro, relatórios, permissões e configurações.
- Agendamento online público com seleção de serviço, profissional, horário e confirmação visual.
- Microinterações com Motion e efeitos premium moderados no estilo Aceternity UI.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse a URL exibida pelo Vite, normalmente:

```text
http://localhost:5173/
```

## Build de produção

```bash
npm run build
```

## Build para GitHub Pages

```bash
npm run build:github
```

## Deploy

- Vercel usa o build padrão `npm run build`, com assets na raiz `/assets/...`.
- GitHub Pages usa `npm run build:github`, com base `/SISTEMA-BRC/`.
- A aplicação usa rotas com hash para evitar 404 em hospedagem estática.

## Documentação operacional

- `DOCUMENTACAO DE RETOMADA.md`: histórico de solicitações, melhorias, validações, commits e pushs.
- `AUDITORIA_INTERATIVOS_BRC.md`: lista de botões/links auditados e corrigidos.
- `design-system/brc-beautyos/MASTER.md`: direção visual aprovada para a identidade BRC.
- `.migration/project.md`: verificação Radix → Base/shadcn.
