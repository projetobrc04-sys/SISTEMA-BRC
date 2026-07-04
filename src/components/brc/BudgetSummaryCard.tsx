import { CheckCircle2, Copy, FileOutput, RefreshCcw, Send } from "lucide-react";
import { useDemoAction } from "../../hooks/useDemoAction";
import type { Budget } from "../../types";
import { currency } from "../../utils/format";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

export default function BudgetSummaryCard({ budget, onApprove }: { budget: Budget; onApprove: () => void }) {
  const { isPending, runDemoAction } = useDemoAction();

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
        <Button
          variant="secondary"
          icon={<Send size={16} />}
          loading={isPending("budget-command")}
          onClick={() => runDemoAction("budget-command", "Orçamento enviado para a comanda visual.")}
        >
          Enviar para comanda
        </Button>
        <Button
          icon={<CheckCircle2 size={16} />}
          loading={isPending("budget-approved")}
          onClick={() => runDemoAction("budget-approved", "Cliente aprovou o orçamento visual.", { onComplete: onApprove })}
        >
          Cliente aprovou
        </Button>
        <Button
          variant="ghost"
          icon={<RefreshCcw size={16} />}
          loading={isPending("budget-change")}
          onClick={() => runDemoAction("budget-change", "Solicitação de alteração registrada no pipeline visual.", { tone: "info" })}
        >
          Cliente solicitou alteração
        </Button>
        <Button
          variant="ghost"
          icon={<FileOutput size={16} />}
          loading={isPending("budget-proposal")}
          onClick={() => runDemoAction("budget-proposal", "Proposta visual gerada para apresentação à cliente.")}
        >
          Gerar proposta visual
        </Button>
        <Button
          variant="ghost"
          icon={<Copy size={16} />}
          loading={isPending("budget-copy")}
          onClick={() => runDemoAction("budget-copy", "Orçamento duplicado visualmente.")}
        >
          Duplicar orçamento
        </Button>
      </div>
    </section>
  );
}
