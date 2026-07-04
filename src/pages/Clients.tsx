import { Plus, Search, UserRoundCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import { clients } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { useAppContext } from "../state/AppContext";
import type { Client } from "../types";
import { currency } from "../utils/format";

export default function Clients() {
  const { showToast } = useAppContext();
  const { isPending, runDemoAction } = useDemoAction();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(
    () =>
      clients.filter((client) => {
        const haystack = `${client.name} ${client.phone} ${client.instagram}`.toLowerCase();
        const matchesQuery = haystack.includes(query.toLowerCase());
        const matchesStatus = status === "Todos" || client.status.includes(status as Client["status"][number]);
        return matchesQuery && matchesStatus;
      }),
    [query, status],
  );

  const stats = [
    { label: "Total de clientes", value: String(clients.length), trend: "base ativa demonstrativa" },
    { label: "VIPs", value: String(clients.filter((client) => client.status.includes("VIP")).length), trend: "alto potencial de retorno" },
    { label: "Inativas", value: String(clients.filter((client) => client.status.includes("Inativa")).length), trend: "campanha de reativação" },
    { label: "Pacotes ativos", value: String(clients.filter((client) => client.status.includes("Pacote ativo")).length), trend: "receita recorrente visual" },
    { label: "Aniversariantes", value: "3", trend: "03/07/2026" },
  ];

  return (
    <PermissionGuard permission="clients">
      <div className="page">
        <PageHeader
          eyebrow="CRM e prontuário"
          title="Base de clientes com contexto comercial e técnico."
          description="A recepção vê dados de contato, a gestão enxerga valor, e o profissional abre o prontuário capilar sem depender de memória."
          actions={<Button icon={<Plus size={16} />} onClick={() => setModalOpen(true)}>Nova cliente</Button>}
        />

        <div className="page-grid">
          {stats.map((item) => (
            <div className="span-3" key={item.label}>
              <StatCard label={item.label} value={item.value} trend={item.trend} />
            </div>
          ))}
        </div>

        <SectionCard title="Clientes" eyebrow={`${filtered.length} resultados`}>
          <div className="filter-bar" style={{ marginBottom: 16 }}>
            <label>Busca<Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome, telefone ou Instagram" /></label>
            <label>Status<Select value={status} onChange={(event) => setStatus(event.target.value)}><option>Todos</option><option>Nova</option><option>Recorrente</option><option>VIP</option><option>Inativa</option><option>Alto ticket</option><option>Pacote ativo</option></Select></label>
            <Button
              variant="secondary"
              icon={<Search size={16} />}
              loading={isPending("client-search")}
              onClick={() => runDemoAction("client-search", `${filtered.length} clientes encontrados com os filtros atuais.`, { tone: "info" })}
            >
              Buscar
            </Button>
            <Button
              variant="ghost"
              icon={<UserRoundCheck size={16} />}
              loading={isPending("client-segment")}
              onClick={() => runDemoAction("client-segment", "Segmento de retorno montado com clientes inativas.", { tone: "info", onComplete: () => setStatus("Inativa") })}
            >
              Segmentar retorno
            </Button>
          </div>
          <DataTable<Client>
            rows={filtered}
            columns={[
              { header: "ID", cell: (row) => row.id },
              { header: "Cliente", cell: (row) => <Link to={`/clientes/${row.id}`}><strong>{row.name}</strong></Link> },
              { header: "Telefone", cell: (row) => row.phone },
              { header: "Instagram", cell: (row) => row.instagram },
              { header: "Última visita", cell: (row) => row.lastVisit },
              { header: "Próximo atendimento", cell: (row) => row.nextAppointment },
              { header: "Profissional", cell: (row) => row.preferredProfessional },
              { header: "Ticket médio", cell: (row) => currency(row.averageTicket) },
              { header: "Status", cell: (row) => <div className="badge-row">{row.status.map((item) => <StatusBadge key={item} status={item} />)}</div> },
            ]}
          />
        </SectionCard>

        <Modal open={modalOpen} title="Nova cliente visual" onClose={() => setModalOpen(false)}>
          <div className="compact-form">
            <label>Nome<Input defaultValue="Mariana Alves" /></label>
            <label>Telefone<Input defaultValue="(11) 98841-2031" /></label>
            <div className="notice">Possível duplicidade encontrada: já existe uma cliente com este telefone.</div>
            <Button
              loading={isPending("client-save")}
              onClick={() => runDemoAction("client-save", "Cliente visual salva. Nenhum cadastro real foi criado.", { onComplete: () => { setModalOpen(false); showToast("CRM atualizado para a apresentação.", "success"); } })}
            >
              Salvar cliente
            </Button>
          </div>
        </Modal>
      </div>
    </PermissionGuard>
  );
}
