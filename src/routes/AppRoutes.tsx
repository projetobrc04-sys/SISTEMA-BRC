import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Agenda from "../pages/Agenda";
import Budgets from "../pages/Budgets";
import Cashier from "../pages/Cashier";
import ClientProfile from "../pages/ClientProfile";
import Clients from "../pages/Clients";
import ColorFormulas from "../pages/ColorFormulas";
import Commands from "../pages/Commands";
import Dashboard from "../pages/Dashboard";
import Financial from "../pages/Financial";
import Login from "../pages/Login";
import OnlineBooking from "../pages/OnlineBooking";
import Permissions from "../pages/Permissions";
import Presentation from "../pages/Presentation";
import Professionals from "../pages/Professionals";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Stock from "../pages/Stock";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/agendamento-online" element={<OnlineBooking />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/clientes/:id" element={<ClientProfile />} />
        <Route path="/comandas" element={<Commands />} />
        <Route path="/orcamentos" element={<Budgets />} />
        <Route path="/formulas-coloracao" element={<ColorFormulas />} />
        <Route path="/estoque" element={<Stock />} />
        <Route path="/profissionais" element={<Professionals />} />
        <Route path="/caixa" element={<Cashier />} />
        <Route path="/financeiro" element={<Financial />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/permissoes" element={<Permissions />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/apresentacao" element={<Presentation />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
