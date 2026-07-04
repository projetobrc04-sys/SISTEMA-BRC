import { KeyRound, ShieldCheck } from "lucide-react";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { auditLogs, permissionMatrix, professionals } from "../data/mockData";

interface PermissionRow {
  area: string;
  Admin: boolean | string;
  Gerente: boolean | string;
  Recepção: boolean | string;
  Profissional: boolean | string;
  Estoque: boolean | string;
}

const renderAccess = (value: boolean | string) => {
  if (value === true) return <StatusBadge status="Confirmado" />;
  if (value === false) return <StatusBadge status="Cancelado" />;
  return <StatusBadge status={String(value)} />;
};

export default function Permissions() {
  return (
    <PermissionGuard permission="permissions">
      <div className="page">
        <PageHeader
          eyebrow="Permissões visuais"
          title="Perfis de acesso por função sem autenticação real."
          description="O seletor do header demonstra como a interface muda para Admin, Gerente, Recepção, Profissional e Estoque."
          actions={<Button icon={<KeyRound size={16} />}>Novo usuário visual</Button>}
        />

        <div className="page-grid">
          {["Admin", "Gerente", "Recepção", "Profissional", "Estoque"].map((role) => (
            <div className="span-3 report-card card" key={role}>
              <ShieldCheck size={20} color="#D6B56D" />
              <h3>{role}</h3>
              <p>{role === "Admin" ? "Acesso total" : role === "Gerente" ? "Gestão operacional" : role === "Recepção" ? "Agenda, clientes e caixa" : role === "Profissional" ? "Prontuário e produção própria" : "Insumos e alertas"}</p>
            </div>
          ))}
        </div>

        <SectionCard title="Tabela de permissões" eyebrow="Toggle visual">
          <DataTable<PermissionRow>
            rows={permissionMatrix}
            columns={[
              { header: "Área", cell: (row) => row.area },
              { header: "Admin", cell: (row) => renderAccess(row.Admin) },
              { header: "Gerente", cell: (row) => renderAccess(row.Gerente) },
              { header: "Recepção", cell: (row) => renderAccess(row.Recepção) },
              { header: "Profissional", cell: (row) => renderAccess(row.Profissional) },
              { header: "Estoque", cell: (row) => renderAccess(row.Estoque) },
            ]}
          />
        </SectionCard>

        <div className="page-grid">
          <div className="span-6">
            <SectionCard title="Usuários" eyebrow="Mock">
              {professionals.map((professional) => (
                <div className="line-item" key={professional.id}><span>{professional.name}<br />{professional.role}</span><StatusBadge status={professional.status} /></div>
              ))}
            </SectionCard>
          </div>
          <div className="span-6">
            <SectionCard title="Auditoria fictícia" eyebrow="Logs">
              {auditLogs.map((log) => (
                <div className="line-item" key={log}><span>{log}</span><KeyRound size={15} /></div>
              ))}
            </SectionCard>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
