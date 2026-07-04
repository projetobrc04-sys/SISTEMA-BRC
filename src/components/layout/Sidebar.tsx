import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileBarChart,
  FlaskConical,
  Gauge,
  KeyRound,
  Package,
  ReceiptText,
  Settings,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../state/AppContext";
import { canAccess } from "../../utils/permissions";
import BrcLogo from "../brc/BrcLogo";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: Gauge, permission: "dashboard" },
  { label: "Agenda", to: "/agenda", icon: CalendarDays, permission: "agenda" },
  { label: "Clientes", to: "/clientes", icon: Users, permission: "clients" },
  { label: "Comandas", to: "/comandas", icon: ReceiptText, permission: "commands" },
  { label: "Orçamentos", to: "/orcamentos", icon: ClipboardList, permission: "budgets" },
  { label: "Fórmulas", to: "/formulas-coloracao", icon: FlaskConical, permission: "formulas" },
  { label: "Estoque", to: "/estoque", icon: Package, permission: "stock" },
  { label: "Profissionais", to: "/profissionais", icon: Sparkles, permission: "professionals" },
  { label: "Caixa", to: "/caixa", icon: WalletCards, permission: "cashier" },
  { label: "Financeiro", to: "/financeiro", icon: CreditCard, permission: "financial" },
  { label: "Relatórios", to: "/relatorios", icon: BarChart3, permission: "reports" },
  { label: "Permissões", to: "/permissoes", icon: KeyRound, permission: "permissions" },
  { label: "Configurações", to: "/configuracoes", icon: Settings, permission: "settings" },
  { label: "Apresentação", to: "/apresentacao", icon: FileBarChart, permission: "presentation" },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { role } = useAppContext();

  return (
    <aside className="sidebar">
      <BrcLogo />
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const allowed = canAccess(role, item.permission);
          return (
            <NavLink key={item.to} to={item.to} onClick={onNavigate} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              <Icon size={18} />
              <span>{item.label}</span>
              {!allowed && <small>Restrito</small>}
            </NavLink>
          );
        })}
      </nav>
      <div className="sidebar-foot">
        <span>Beauty experience</span>
        <strong>Visual beta executivo</strong>
      </div>
    </aside>
  );
}
