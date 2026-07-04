import type { Role } from "../types";

const permissions: Record<Role, string[]> = {
  Admin: [
    "dashboard",
    "agenda",
    "booking",
    "clients",
    "commands",
    "budgets",
    "formulas",
    "stock",
    "professionals",
    "cashier",
    "financial",
    "reports",
    "permissions",
    "settings",
    "presentation",
    "strategic",
  ],
  Gerente: [
    "dashboard",
    "agenda",
    "booking",
    "clients",
    "commands",
    "budgets",
    "formulas",
    "stock",
    "professionals",
    "cashier",
    "financial",
    "reports",
    "permissions",
    "presentation",
  ],
  ["Recep\u00e7\u00e3o"]: ["dashboard", "agenda", "booking", "clients", "commands", "professionals", "cashier", "presentation"],
  Profissional: ["agenda", "clients", "budgets", "formulas", "commands", "presentation"],
  Estoque: ["stock", "dashboard", "presentation"],
};

export const canAccess = (role: Role, permission: string) => permissions[role].includes(permission);

export const roleDescription: Record<Role, string> = {
  Admin: "Visao total da operacao, DRE, auditoria, permissoes e decisoes estrategicas.",
  Gerente: "Gestao quase completa, com foco em operacao, metas, caixa e relatorios.",
  ["Recep\u00e7\u00e3o"]: "Agenda, clientes, check-in, comandas, caixa operacional e agendamento online.",
  Profissional: "Agenda propria, prontuario tecnico, formulas, servicos e orcamentos.",
  Estoque: "Produtos, insumos, alertas, movimentacoes e baixa tecnica.",
};
