import { LockKeyhole, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BrcLogo from "../components/brc/BrcLogo";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useAppContext } from "../state/AppContext";
import type { Role } from "../types";

const quickProfiles: { label: Role; email: string }[] = [
  { label: "Admin", email: "admin@brc.com" },
  { label: "Recep\u00e7\u00e3o", email: "recepcao@brc.com" },
  { label: "Profissional", email: "profissional@brc.com" },
  { label: "Estoque", email: "estoque@brc.com" },
];

export default function Login() {
  const navigate = useNavigate();
  const { setRole, showToast } = useAppContext();

  const enter = (role: Role = "Admin") => {
    setRole(role);
    showToast(`Acesso visual iniciado como ${role}.`, "success");
    navigate("/dashboard");
  };

  return (
    <main className="login-shell subtle-grid">
      <section className="login-brand">
        <BrcLogo size="lg" />
        <div>
          <span className="eyebrow">Beauty experience operacional</span>
          <h1>BRC BeautyOS</h1>
          <p>
            Sistema proprietário de gestão premium para agenda, clientes, comandas,
            estoque técnico, orçamento e decisão executiva do Bruno Ribeiro Concept.
          </p>
        </div>
        <div className="mini-grid">
          <div className="report-card"><strong>Prontuário capilar</strong><p>Histórico técnico por cliente.</p></div>
          <div className="report-card"><strong>Insumos por g/ml</strong><p>Baixa técnica visual na comanda.</p></div>
          <div className="report-card"><strong>Gestão por perfil</strong><p>Visão executiva e operação separadas.</p></div>
        </div>
      </section>

      <section className="login-card">
        <BrcLogo />
        <h2>Entrar no sistema</h2>
        <p>Gestão premium para o Bruno Ribeiro Concept.</p>
        <form
          className="compact-form"
          onSubmit={(event) => {
            event.preventDefault();
            enter("Admin");
          }}
        >
          <label>
            E-mail
            <Input defaultValue="admin@brc.com" type="email" />
          </label>
          <label>
            Senha
            <Input defaultValue="visual-beta" type="password" />
          </label>
          <Button type="submit" icon={<LockKeyhole size={17} />}>
            Entrar no sistema
          </Button>
        </form>
        <div className="drawer-section" style={{ marginTop: 18 }}>
          <h4>Acesso rápido com perfis</h4>
          <div className="mini-grid">
            {quickProfiles.map((profile) => (
              <Button
                key={profile.label}
                variant="secondary"
                icon={<Sparkles size={15} />}
                onClick={() => enter(profile.label)}
                title={profile.email}
              >
                {profile.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="notice" style={{ marginTop: 16 }}>
          Credenciais fictícias: admin@brc.com, recepcao@brc.com, profissional@brc.com, estoque@brc.com.
        </div>
      </section>
    </main>
  );
}


