import { BarChart3, Download } from "lucide-react";
import { useState } from "react";
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, Cell, XAxis, CartesianGrid } from "recharts";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import HeatmapGrid from "../components/ui/HeatmapGrid";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import { products, professionals, serviceMix, weeklyRevenue } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { currency } from "../utils/format";

const colors = ["#D6B56D", "#E7D3A0", "#A3A3A3", "#FFFFFF", "#7C6A43"];

export default function Reports() {
  const { isPending, runDemoAction } = useDemoAction();
  const [periodLabel, setPeriodLabel] = useState("Últimos 7 dias");

  return (
    <PermissionGuard permission="reports">
      <div className="page">
        <PageHeader
          eyebrow="Relatórios e BI"
          title="Relatórios"
          description="Período semanal · agenda, estoque, margem e recorrência."
          actions={
            <>
              <Button variant="secondary" icon={<Download size={16} />} loading={isPending("reports-export")} onClick={() => runDemoAction("reports-export", "PDF visual preparado para a apresentação.")}>Exportar PDF visual</Button>
              <Button icon={<BarChart3 size={16} />} loading={isPending("reports-period")} onClick={() => runDemoAction("reports-period", "Período atualizado visualmente para leitura executiva.", { onComplete: () => setPeriodLabel("Julho 2026 atualizado") })}>Atualizar período</Button>
            </>
          }
        />

        <div className="page-grid">
          <div className="span-3"><StatCard label="Clientes novas" value="42" trend="+18% no mês" /></div>
          <div className="span-3"><StatCard label="Clientes recorrentes" value="318" trend="68% da receita" /></div>
          <div className="span-3"><StatCard label="No-show" value="2,8%" trend="-0,9 p.p." /></div>
          <div className="span-3"><StatCard label="Cancelamentos" value="6" trend="R$ 2.180 em risco" /></div>
        </div>

        <div className="page-grid">
          <div className="span-6">
            <SectionCard title="Faturamento por período" eyebrow={periodLabel}>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyRevenue}>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                    <XAxis dataKey="label" tick={{ fill: "#A3A3A3" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#101010", border: "1px solid #2B2B2B", borderRadius: 14 }} formatter={(value) => currency(Number(value))} />
                    <Line type="monotone" dataKey="value" stroke="#D6B56D" strokeWidth={3} dot={{ fill: "#D6B56D" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </div>
          <div className="span-6">
            <SectionCard title="Serviços mais vendidos" eyebrow="Mix">
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={serviceMix} dataKey="value" nameKey="label" outerRadius={105} innerRadius={62} paddingAngle={4}>
                      {serviceMix.map((_, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#101010", border: "1px solid #2B2B2B", borderRadius: 14 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="page-grid">
          <div className="span-4">
            <SectionCard title="Agenda por profissional" eyebrow="Ocupação">
              {professionals.slice(0, 6).map((professional) => (
                <div className="line-item" key={professional.id}><span>{professional.name}</span><strong>{professional.occupancy}%</strong></div>
              ))}
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Produtos mais consumidos" eyebrow="Estoque por serviço">
              {products.slice(0, 6).map((product) => (
                <div className="line-item" key={product.id}><span>{product.name}</span><strong>{product.stock}{product.unit}</strong></div>
              ))}
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Mapa de calor por horário" eyebrow="BI agenda">
              <HeatmapGrid />
            </SectionCard>
          </div>
        </div>

        <SectionCard title="Relatórios disponíveis" eyebrow="Biblioteca">
          <div className="mini-grid">
            {[
              "Faturamento por período",
              "Agenda por profissional",
              "Taxa de ocupação",
              "Produtos mais vendidos",
              "Clientes inativas",
              "Consumo de estoque por serviço",
              "Consumo de estoque por profissional",
              "Margem por serviço",
            ].map((item) => (
              <div className="report-card" key={item}><strong>{item}</strong><p>Relatório visual preenchido com dados mockados.</p></div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PermissionGuard>
  );
}
