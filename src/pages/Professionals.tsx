import { CalendarClock, Lock, Settings2, Star } from "lucide-react";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { professionals } from "../data/mockData";
import { useAppContext } from "../state/AppContext";
import { currency } from "../utils/format";

export default function Professionals() {
  const { role } = useAppContext();
  const sensitive = role === "Admin" || role === "Gerente";

  return (
    <PermissionGuard permission="professionals">
      <div className="page">
        <PageHeader
          eyebrow="Profissionais e comissões"
          title="Produção, agenda, ocupação e metas por profissional."
          description="Admin vê comissões e regras. Recepção fica na visão operacional, sem dados estratégicos."
          actions={sensitive ? <Button icon={<Settings2 size={16} />}>Configurar regras</Button> : <Button variant="ghost" icon={<Lock size={16} />}>Regras restritas</Button>}
        />

        <div className="page-grid">
          {professionals.slice(0, 6).map((professional) => (
            <article className="span-4 pro-card card" key={professional.id}>
              <div className="appointment-main">
                <div>
                  <div className="brc-logo-mark" style={{ width: 48, height: 48 }}><span>{professional.avatar}</span></div>
                  <h3 style={{ marginTop: 12 }}>{professional.name}</h3>
                  <p>{professional.role}</p>
                </div>
                <StatusBadge status={professional.status} />
              </div>
              <div className="drawer-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div><span>Agenda do dia</span><strong>{professional.todaySchedule}</strong></div>
                <div><span>Ocupação</span><strong>{professional.occupancy}%</strong></div>
                <div><span>Avaliação</span><strong>{professional.rating}<Star size={14} /></strong></div>
                <div><span>Serviços</span><strong>{professional.servicesDone}</strong></div>
                {sensitive && <div><span>Faturamento</span><strong>{currency(professional.revenue)}</strong></div>}
                {sensitive && <div><span>Comissão estimada</span><strong>{currency(professional.estimatedCommission)}</strong></div>}
              </div>
              {!sensitive && <div className="notice">Recepção visualiza apenas informações operacionais.</div>}
            </article>
          ))}
        </div>

        <div className="page-grid">
          <div className="span-6">
            <SectionCard title="Ranking de produção" eyebrow="Admin/Gerente">
              {professionals.slice(0, 5).map((professional) => (
                <div className="line-item" key={professional.id}><span>{professional.name}<br />Meta {currency(professional.target)}</span><strong>{sensitive ? currency(professional.revenue) : "Restrito"}</strong></div>
              ))}
            </SectionCard>
          </div>
          <div className="span-6">
            <SectionCard title="Horários bloqueados" eyebrow="Agenda">
              {["Bruno Ribeiro - 13:00 reunião técnica", "Marina Costa - 16:00 formulação", "Rafael Mendes - 12:30 intervalo"].map((item) => (
                <div className="line-item" key={item}><span>{item}</span><CalendarClock size={16} /></div>
              ))}
            </SectionCard>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
