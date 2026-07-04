import { AlertTriangle, Download, PackageCheck, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import PermissionGuard from "../components/brc/PermissionGuard";
import StockStatusBadge from "../components/brc/StockStatusBadge";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import Input from "../components/ui/Input";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import StatCard from "../components/ui/StatCard";
import { products } from "../data/mockData";
import type { Product } from "../types";
import { currency } from "../utils/format";

export default function Stock() {
  const [type, setType] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesType = type === "Todos" || product.type === type;
        const matchesQuery = `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase());
        return matchesType && matchesQuery;
      }),
    [query, type],
  );

  return (
    <PermissionGuard permission="stock">
      <div className="page">
        <PageHeader
          eyebrow="Estoque técnico"
          title="Produtos, insumos e descartáveis com status operacional."
          description="Controle visual por gramas, mililitros, unidade e pacote, com alertas de baixo estoque e vencimento."
          actions={<><Button variant="secondary" icon={<Download size={16} />}>Exportar visual</Button><Button icon={<Plus size={16} />}>Novo item</Button></>}
        />

        <div className="page-grid">
          <div className="span-3"><StatCard label="Produtos cadastrados" value={String(products.length)} trend="20 itens mockados" /></div>
          <div className="span-3"><StatCard label="Estoque baixo" value={String(products.filter((p) => p.status === "Baixo").length)} trend="comprar nos próximos 7 dias" /></div>
          <div className="span-3"><StatCard label="Críticos" value={String(products.filter((p) => p.status === "Crítico").length)} trend="risco operacional" /></div>
          <div className="span-3"><StatCard label="Vencendo" value={String(products.filter((p) => p.status === "Vencendo").length)} trend="priorizar consumo" /></div>
        </div>

        <div className="page-grid">
          <div className="span-8">
            <SectionCard title="Tabela principal" eyebrow={`${filtered.length} itens`}>
              <div className="filter-bar" style={{ marginBottom: 16 }}>
                <label>Busca<Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Produto, marca ou categoria" /></label>
                <label>Tipo<Select value={type} onChange={(event) => setType(event.target.value)}><option>Todos</option><option>Venda</option><option>Uso interno</option><option>Insumo técnico</option><option>Descartável</option></Select></label>
                <Button variant="secondary" icon={<PackageCheck size={16} />}>Baixa por serviço</Button>
                <Button variant="ghost" icon={<AlertTriangle size={16} />}>Ver críticos</Button>
              </div>
              <DataTable<Product>
                rows={filtered}
                columns={[
                  { header: "Produto", cell: (row) => <strong>{row.name}</strong> },
                  { header: "Marca", cell: (row) => row.brand },
                  { header: "Categoria", cell: (row) => row.category },
                  { header: "Tipo", cell: (row) => row.type },
                  { header: "Unidade", cell: (row) => row.unit },
                  { header: "Estoque atual", cell: (row) => `${row.stock}${row.unit === "unidade" || row.unit === "pacote" ? "" : row.unit}` },
                  { header: "Mínimo", cell: (row) => row.minimumStock },
                  { header: "Custo", cell: (row) => currency(row.cost) },
                  { header: "Venda", cell: (row) => row.salePrice ? currency(row.salePrice) : "Uso interno" },
                  { header: "Margem", cell: (row) => row.margin ? `${row.margin}%` : "-" },
                  { header: "Validade", cell: (row) => row.expiresAt },
                  { header: "Status", cell: (row) => <StockStatusBadge status={row.status} /> },
                ]}
              />
            </SectionCard>
          </div>
          <div className="span-4">
            <SectionCard title="Consumo técnico do mês" eyebrow="g/ml">
              <div className="drawer-grid" style={{ gridTemplateColumns: "1fr" }}>
                <div><span>Pó descolorante</span><strong>3.8kg</strong></div>
                <div><span>Oxidante</span><strong>12.4L</strong></div>
                <div><span>Tratamentos</span><strong>5.1kg</strong></div>
              </div>
            </SectionCard>
            <SectionCard title="Produtos críticos" eyebrow="Ação de compra">
              {products.filter((p) => p.status === "Crítico" || p.status === "Baixo").slice(0, 6).map((product) => (
                <div className="line-item" key={product.id}><span>{product.name}<br />Estoque {product.stock}</span><StockStatusBadge status={product.status} /></div>
              ))}
              <div className="notice">Alertas: estoque baixo, crítico, próximo do vencimento, consumo acima do padrão e comprar nos próximos 7 dias.</div>
            </SectionCard>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
