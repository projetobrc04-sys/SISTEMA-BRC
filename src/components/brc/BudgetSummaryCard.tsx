import { CheckCircle2, Copy, FileOutput, RefreshCcw, Send } from "lucide-react";
import type { Budget } from "../../types";
import { currency } from "../../utils/format";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

export default function BudgetSummaryCard({ budget, onApprove }: { budget: Budget; onApprove: () => void }) {
  return (
    <section className="budget-summary card champagne-line">
      <div className="budget-header">
        <div>
          <span className="eyebrow">Orçamento visual</span>
          <h2>{budget.serviceName}</h2>
          <p>{budget.clientName} - {budget.professionalName}</p>
        </div>
        <StatusBadge status={budget.status} />
      </div>
      <div className="budget-kpis">
        <div>
          <span>Custo estimado de insumos</span>
          <strong>{currency(budget.technicalCost)}</strong>
        </div>
        <div>
          <span>Tempo previsto</span>
          <strong>{budget.estimatedTime}</strong>
        </div>
        <div>
          <span>Valor sugerido</span>
          <strong>{currency(budget.suggestedPrice)}</strong>
        </div>
        <div>
          <span>Margem estimada</span>
          <strong>{budget.estimatedMargin}%</strong>
        </div>
      </div>
      <div className="product-list">
        {budget.products.map((product) => (
          <div className="line-item" key={product.productName}>
            <span>
              {product.productName} - {product.quantity}
              {product.unit}
            </span>
            <strong>{currency(product.cost)}</strong>
          </div>
        ))}
      </div>
      <div className="button-row">
        <Button variant="secondary" icon={<Send size={16} />}>
          Enviar para comanda
        </Button>
        <Button icon={<CheckCircle2 size={16} />} onClick={onApprove}>
          Cliente aprovou
        </Button>
        <Button variant="ghost" icon={<RefreshCcw size={16} />}>
          Cliente solicitou alteração
        </Button>
        <Button variant="ghost" icon={<FileOutput size={16} />}>
          Gerar proposta visual
        </Button>
        <Button variant="ghost" icon={<Copy size={16} />}>
          Duplicar orçamento
        </Button>
      </div>
    </section>
  );
}
