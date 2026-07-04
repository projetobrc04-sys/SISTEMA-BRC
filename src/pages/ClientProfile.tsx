import { ArrowLeft, CalendarPlus, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ClientProfileTabs from "../components/brc/ClientProfileTabs";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { clients, commands } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { currency } from "../utils/format";

export default function ClientProfile() {
  const { id } = useParams();
  const { isPending, runDemoAction } = useDemoAction();
  const client = clients.find((item) => item.id === id) ?? clients[0];
  const clientCommands = commands.filter((command) => command.clientId === client.id);

  return (
    <PermissionGuard permission="clients">
      <div className="page">
        <PageHeader
          eyebrow={client.id}
          title={client.name}
          description={`${client.phone} · ${client.instagram} · Profissional preferido: ${client.preferredProfessional}`}
          actions={
            <>
              <Link to="/clientes"><Button variant="ghost" icon={<ArrowLeft size={16} />}>Voltar</Button></Link>
              <Button
                variant="secondary"
                icon={<MessageCircle size={16} />}
                loading={isPending("client-whatsapp")}
                onClick={() => runDemoAction("client-whatsapp", `Mensagem visual preparada para ${client.name}.`, { tone: "info" })}
              >
                WhatsApp visual
              </Button>
              <Button
                icon={<CalendarPlus size={16} />}
                loading={isPending("client-return")}
                onClick={() => runDemoAction("client-return", `Retorno sugerido criado para ${client.nextAppointment}.`)}
              >
                Novo retorno
              </Button>
            </>
          }
        />

        <div className="page-grid">
          <div className="span-4">
            <SectionCard title="Resumo da cliente" eyebrow="Visão comercial">
              <div className="badge-row">{client.status.map((status) => <StatusBadge key={status} status={status} />)}</div>
              <div className="drawer-grid" style={{ gridTemplateColumns: "1fr" }}>
                <div><span>Ticket médio</span><strong>{currency(client.averageTicket)}</strong></div>
                <div><span>Total gasto</span><strong>{currency(client.totalSpent)}</strong></div>
                <div><span>Pontos de fidelidade</span><strong>{client.loyaltyPoints}</strong></div>
              </div>
              <div className="notice">Próximo retorno sugerido: {client.nextAppointment}</div>
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Histórico capilar" eyebrow="Prontuário técnico">
              <p className="muted">{client.hairHistory}</p>
              <div className="line-item"><span>Tons aplicados</span><strong>{client.tones.join(" / ")}</strong></div>
              <div className="line-item"><span>Contraindicações</span><strong>{client.contraindications}</strong></div>
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Comandas e pagamentos" eyebrow="Operação">
              {clientCommands.length ? clientCommands.map((command) => (
                <div className="line-item" key={command.id}><span>{command.id} - {command.status}</span><Sparkles size={16} color="#D6B56D" /></div>
              )) : <p className="muted">Sem comandas abertas nesta demonstração.</p>}
              <div className="notice">Termos assinados: imagem e procedimento químico.</div>
            </SectionCard>
          </div>
        </div>

        <ClientProfileTabs client={client} />
      </div>
    </PermissionGuard>
  );
}
