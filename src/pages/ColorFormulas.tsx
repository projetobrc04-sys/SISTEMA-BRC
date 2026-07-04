import { FlaskConical } from "lucide-react";
import FormulaSuggestionCard from "../components/brc/FormulaSuggestionCard";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import Input from "../components/ui/Input";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import { formulaComparison, formulas } from "../data/mockData";
import { currency } from "../utils/format";

interface FormulaRow {
  brand: string;
  products: string;
  cost: number;
  suggested: number;
  margin: number;
  stock: string;
}

export default function ColorFormulas() {
  return (
    <PermissionGuard permission="formulas">
      <div className="page">
        <PageHeader
          eyebrow="Fórmulas de coloração"
          title="Sugestão técnica comparando qualidade, margem e estoque."
          description="A decisão final segue sendo do profissional, mas o sistema mostra alternativas com custo técnico e disponibilidade."
          actions={<Button icon={<FlaskConical size={16} />}>Simular fórmula</Button>}
        />

        <SectionCard title="Briefing técnico" eyebrow="Entrada visual">
          <div className="filter-bar">
            <label>Cliente<Select defaultValue="Mariana Alves"><option>Mariana Alves</option><option>Patrícia Sales</option><option>Vanessa Pires</option></Select></label>
            <label>Tom atual<Input defaultValue="Castanho claro com reflexo quente" /></label>
            <label>Altura de tom<Select defaultValue="6"><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></Select></label>
            <label>Resultado desejado<Input defaultValue="Morena iluminada champagne" /></label>
            <label>Marca preferida<Select defaultValue="Wella"><option>Wella</option><option>L'Oréal</option><option>Schwarzkopf</option></Select></label>
            <label>Tempo disponível<Input defaultValue="4h30" /></label>
            <label>Orçamento máximo<Input defaultValue="R$ 720,00" /></label>
            <label>Produtos disponíveis<Input defaultValue="Blondor, Color Touch, Ox 30" /></label>
          </div>
        </SectionCard>

        <div className="page-grid">
          {formulas.map((formula) => (
            <div className="span-4" key={formula.title}>
              <FormulaSuggestionCard formula={formula} />
            </div>
          ))}
        </div>

        <SectionCard title="Comparativo de marcas" eyebrow="Custo, margem e estoque">
          <DataTable<FormulaRow>
            rows={formulaComparison}
            columns={[
              { header: "Marca", cell: (row) => row.brand },
              { header: "Produtos", cell: (row) => row.products },
              { header: "Custo técnico", cell: (row) => currency(row.cost) },
              { header: "Valor sugerido", cell: (row) => currency(row.suggested) },
              { header: "Margem estimada", cell: (row) => `${row.margin}%` },
              { header: "Estoque", cell: (row) => row.stock },
            ]}
          />
          <div className="notice" style={{ marginTop: 16 }}>
            Sugestão demonstrativa. A decisão técnica final é sempre do profissional.
          </div>
        </SectionCard>
      </div>
    </PermissionGuard>
  );
}
