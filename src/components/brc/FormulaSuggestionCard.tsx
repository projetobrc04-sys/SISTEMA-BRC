import { FlaskConical } from "lucide-react";
import { currency } from "../../utils/format";
import Badge from "../ui/Badge";

export interface FormulaSuggestion {
  title: string;
  brand: string;
  formula: string;
  oxidant: string;
  proportion: string;
  quantity: string;
  cost: number;
  expected: string;
  badge: string;
}

export default function FormulaSuggestionCard({ formula }: { formula: FormulaSuggestion }) {
  return (
    <article className="formula-card">
      <div className="formula-icon">
        <FlaskConical size={22} />
      </div>
      <div className="formula-card-header">
        <div>
          <span className="eyebrow">{formula.brand}</span>
          <h3>{formula.title}</h3>
        </div>
        <Badge tone="champagne">{formula.badge}</Badge>
      </div>
      <p>{formula.formula}</p>
      <dl>
        <div><dt>Oxidante</dt><dd>{formula.oxidant}</dd></div>
        <div><dt>Proporção</dt><dd>{formula.proportion}</dd></div>
        <div><dt>Quantidade</dt><dd>{formula.quantity}</dd></div>
        <div><dt>Custo</dt><dd>{currency(formula.cost)}</dd></div>
      </dl>
      <strong>{formula.expected}</strong>
    </article>
  );
}
