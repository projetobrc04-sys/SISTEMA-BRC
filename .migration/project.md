# Migração Radix para Base/shadcn

Data: 2026-07-04

## Resultado

Não havia migração pendente aplicável nesta base.

## Verificações

- `components.json`: ausente. O projeto ainda não está inicializado como shadcn/ui formal.
- Busca por Radix: `rg "@radix-ui|radix-ui" src package.json` não encontrou imports ou dependências Radix.
- Componentes atuais são internos (`src/components/ui`) e foram evoluídos sem introduzir Radix cru.

## Decisão

- Nenhum componente Radix foi migrado porque não existe Radix no código atual.
- Novos componentes desta rodada seguiram padrão interno compatível com shadcn/base: composição React, props explícitas, estados acessíveis, foco visível e sem dependência de backend.
- A inicialização formal de shadcn/ui fica para fase futura caso o produto precise consumir registry/blocks diretamente.
