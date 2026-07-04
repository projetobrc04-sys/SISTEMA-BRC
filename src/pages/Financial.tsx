import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import { dreRows, serviceMix, weeklyRevenue } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { currency } from "../utils/format";

interface DreRow {
  label: string;
  value: number;
  tone: string;
}

export default function Financial() {
  const { isPending, runDemoAction } = useDemoAction();
  const [generatedAt, setGeneratedAt] = useState("DRE mock financeiro");

  return (
    <PermissionGuard permission="financial">
      <div className="page">
        <PageHeader
          eyebrow="Financeiro e DRE visual"
          title="Financeiro"
          description="Área restrita Admin/Gerente · margem visual 29,8%."
          actions={<Button icon={<BarChart3 size={16} />} loading={isPending("financial-dre")} onClick={() => runDemoAction("financial-dre", "DRE visual recalculada com dados mockados.", { onComplete: () => setGeneratedAt("DRE atualizada para apresentação executiva") })}>Gerar DRE visual</Button>}
        />

        <div className="page-grid">
          <div className="span-3"><StatCard label="Faturamento bruto" value="R$ 126.380" trend="mês atual" /></div>
          <div className="span-3"><StatCard label="Faturamento líquido" value="R$ 118.140" trend="após descontos" /></div>
          <div className="span-3"><StatCard label="Lucro estimado" value="R$ 35.280" trend="29,8% margem visual" /></div>
          <div className="span-3"><StatCard label="Custos de insumos" value="R$ 14.860" trend="12,5% da receita líquida" /></div>
        </div>

        <div className="page-grid">
          <div className="span-7">
            <SectionCard title="DRE gerencial visual" eyebrow={generatedAt}>
              <DataTable<DreRow>
                rows={dreRows}
                columns={[
                  { header: "Linha", cell: (row) => row.label },
                  { header: "Valor", cell: (row) => <strong style={{ color: row.value >= 0 ? "#86efac" : "#fca5a5" }}>{currency(row.value)}</strong> },
                  { header: "Tipo", cell: (row) => row.tone },
                ]}
              />
            </SectionCard>
          </div>
          <div className="span-5">
            <SectionCard title="Margem por categoria" eyebrow="Serviços">
              <div style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceMix}>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                    <XAxis dataKey="label" tick={{ fill: "#A3A3A3" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#A3A3A3" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#101010", border: "1px solid #2B2B2B", borderRadius: 14 }} />
                    <Bar dataKey="value" fill="#D6B56D" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </div>
        </div>

        <SectionCard title="Faturamento por período" eyebrow="Últimos 7 dias">
          <div className="mini-grid">
            {weeklyRevenue.map((item) => (
              <div className="report-card" key={item.label}><span>{item.label}</span><strong>{currency(item.value)}</strong><p>{item.secondary} atendimentos</p></div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PermissionGuard>
  );
}
