import { AlertTriangle, CalendarDays, Crown, Gift, Package, ReceiptText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import HeatmapGrid from "../components/ui/HeatmapGrid";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import { appointments, commands, dashboardMetrics, professionals, serviceMix, weeklyRevenue } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { useAppContext } from "../state/AppContext";
import { currency } from "../utils/format";
import { calculateCommandTotal } from "../utils/calculations";

export default function Dashboard() {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const { isPending, runDemoAction } = useDemoAction();
  const openCommands = commands.filter((command) => command.status !== "Paga" && command.status !== "Cancelada");

  return (
    <PermissionGuard permission="dashboard">
      <div className="page">
        <PageHeader
          eyebrow="Dashboard executivo"
          title="Dashboard"
          description="Hoje: 32 agendamentos · 7 comandas abertas · R$ 8.740 no caixa."
          actions={
            <Button
              icon={<CalendarDays size={16} />}
              loading={isPending("dashboard-new-appointment")}
              onClick={() => runDemoAction("dashboard-new-appointment", "Abrindo agenda para novo agendamento visual.", { tone: "info", onComplete: () => { showToast("Agenda pronta para cadastrar horário.", "success"); navigate("/agenda"); } })}
            >
              Novo agendamento
            </Button>
          }
        />

        <div className="page-grid dashboard-kpis">
          {dashboardMetrics.map((metric, index) => {
            const variant = index === 1 ? "primary" : index === 0 ? "accent" : "secondary";
            const span = index === 1 ? "span-6" : "span-3";

            return (
              <div className={span} key={metric.label}>
                <StatCard label={metric.label} value={metric.value} trend={metric.trend} variant={variant} />
              </div>
            );
          })}
        </div>

        <div className="page-grid">
          <div className="span-8">
            <SectionCard title="Faturamento semanal" eyebrow="Receita e volume">
              <div style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyRevenue}>
                    <defs>
                      <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="#D6B56D" stopOpacity={0.55} />
                        <stop offset="95%" stopColor="#D6B56D" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                    <XAxis dataKey="label" tick={{ fill: "#A3A3A3" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#101010", border: "1px solid #2B2B2B", borderRadius: 14 }}
                      formatter={(value) => currency(Number(value))}
                    />
                    <Area dataKey="value" stroke="#D6B56D" strokeWidth={3} fill="url(#revenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Sistema proprietário BRC" eyebrow="Motivo estratégico" className="champagne-line">
              <p className="muted">
                Uma experiência operacional criada para agenda, clientes, comandas,
                estoque técnico e gestão premium do Bruno Ribeiro Concept.
              </p>
              <div className="card-list">
                {[
                  "Prontuário técnico por cliente",
                  "Controle de insumos por gramas/ml",
                  "Orçamentos rápidos no atendimento",
                  "Permissões por função",
                  "Relatórios para decisão",
                ].map((item) => (
                  <div className="line-item" key={item}>
                    <span>{item}</span>
                    <Crown size={16} color="#D6B56D" />
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="page-grid">
          <div className="span-4">
            <SectionCard title="Agenda de hoje" eyebrow="32 agendamentos">
              <div className="card-list">
                {appointments.slice(0, 6).map((item) => (
                  <div className="line-item" key={item.id}>
                    <span>{item.time} - {item.clientName}<br />{item.services[0]}</span>
                    <StatusBadge status={item.status} />
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Comandas em aberto" eyebrow="Fluxo de caixa">
              <div className="card-list">
                {openCommands.slice(0, 5).map((command) => (
                  <div className="line-item" key={command.id}>
                    <span>{command.id} - {command.clientName}<br />{command.professionalName}</span>
                    <strong>{currency(calculateCommandTotal(command))}</strong>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Alertas críticos" eyebrow="Ação da gestão">
              <div className="card-list">
                <div className="line-item"><span>Wella Blondor abaixo do mínimo</span><Package color="#F59E0B" size={17} /></div>
                <div className="line-item"><span>2 no-shows aguardando remarcação</span><AlertTriangle color="#EF4444" size={17} /></div>
                <div className="line-item"><span>4 orçamentos sem aprovação</span><ReceiptText color="#D6B56D" size={17} /></div>
                <div className="line-item"><span>3 aniversariantes para campanha VIP</span><Gift color="#D6B56D" size={17} /></div>
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="page-grid">
          <div className="span-4">
            <SectionCard title="Serviços mais vendidos" eyebrow="Mix do mês">
              {serviceMix.map((item) => (
                <div className="line-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Profissionais em destaque" eyebrow="Performance">
              {professionals.slice(0, 5).map((professional) => (
                <div className="line-item" key={professional.id}>
                  <span>{professional.name}<br />Ocupação {professional.occupancy}%</span>
                  <strong>{currency(professional.revenue)}</strong>
                </div>
              ))}
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Mapa de calor de horários" eyebrow="Ocupação">
              <HeatmapGrid />
            </SectionCard>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
