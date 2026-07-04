import { Menu, Search, ShieldCheck } from "lucide-react";
import type { Role } from "../../types";
import { useAppContext } from "../../state/AppContext";
import { roleDescription } from "../../utils/permissions";
import BrcLogo from "../brc/BrcLogo";
import Button from "../ui/Button";
import Select from "../ui/Select";

const roles: Role[] = ["Admin", "Gerente", "Recepção", "Profissional", "Estoque"];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { role, setRole, showToast } = useAppContext();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Button className="mobile-only" variant="ghost" icon={<Menu size={19} />} onClick={onMenuClick} aria-label="Abrir menu" />
        <div className="topbar-logo">
          <BrcLogo size="sm" withText={false} />
        </div>
        <div>
          <span className="eyebrow">BRC BeautyOS</span>
          <strong>Operação BRC Concept</strong>
        </div>
      </div>
      <button className="topbar-search" type="button" onClick={() => showToast("Busca global visual: cliente Mariana Alves, comanda #1022 e orçamento ORC-0883 encontrados.", "info")}>
        <Search size={16} />
        <span>Buscar cliente, comanda ou orçamento</span>
      </button>
      <label className="role-switcher">
        <span>Visualizando como</span>
        <Select
          value={role}
          onChange={(event) => {
            const nextRole = event.target.value as Role;
            setRole(nextRole);
            showToast(`Perfil alterado para ${nextRole}. A interface foi ajustada visualmente.`, "info");
          }}
        >
          {roles.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>
      </label>
      <div className="role-context">
        <ShieldCheck size={16} />
        <span>{roleDescription[role]}</span>
      </div>
    </header>
  );
}
