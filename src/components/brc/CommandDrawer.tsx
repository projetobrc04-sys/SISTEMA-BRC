import { useEffect, useState } from "react";
import { CreditCard, Plus, ReceiptText } from "lucide-react";
import { useDemoAction } from "../../hooks/useDemoAction";
import type { Command } from "../../types";
import { calculateCommandTotal, calculateEstimatedCommission, calculateTechnicalCost } from "../../utils/calculations";
import { currency } from "../../utils/format";
import Button from "../ui/Button";
import Drawer from "../ui/Drawer";
import StatusBadge from "../ui/StatusBadge";

const paymentMethods = ["Dinheiro", "PIX", "Débito", "Crédito", "Link de pagamento", "Gift card", "Pacote pré-pago", "Pagamento misto"];

export default function CommandDrawer({
  command,
  open,
  onClose,
  onFinishPayment,
}: {
  command?: Command;
  open: boolean;
  onClose: () => void;
  onFinishPayment: () => void;
}) {
  const { isPending, runDemoAction } = useDemoAction();
  const [selectedPayment, setSelectedPayment] = useState("PIX");

  useEffect(() => {
    if (command?.paymentMethod) {
      setSelectedPayment(command.paymentMethod);
    }
  }, [command?.paymentMethod]);

  if (!command) return null;

  const total = calculateCommandTotal(command);
  const technicalCost = calculateTechnicalCost(command.supplies);
  const commission = calculateEstimatedCommission(command);

  return (
    <Drawer open={open} title={`Comanda ${command.id}`} onClose={onClose}>
      <div className="drawer-content">
        <div className="command-head">
          <div>
            <span className="eyebrow">Cliente</span>
            <h3>{command.clientName}</h3>
            <p>Profissional responsável: {command.professionalName}</p>
          </div>
          <StatusBadge status={command.status} />
        </div>

        <div className="drawer-grid">
          <div>
            <span>Total da comanda</span>
            <strong>{currency(total)}</strong>
          </div>
          <div>
            <span>Custo técnico</span>
            <strong>{currency(technicalCost)}</strong>
          </div>
          <div>
            <span>Comissão estimada</span>
            <strong>{currency(commission)}</strong>
          </div>
        </div>

        <section className="drawer-section">
          <h4>Serviços adicionados</h4>
          {command.services.map((service) => (
            <div className="line-item" key={service.name}>
              <span>{service.name}</span>
              <strong>{currency(service.price)}</strong>
            </div>
          ))}
        </section>

        <section className="drawer-section">
          <h4>Produtos vendidos</h4>
          {command.productsSold.length ? (
            command.productsSold.map((product) => (
              <div className="line-item" key={product.name}>
                <span>
                  {product.name} x{product.quantity}
                </span>
                <strong>{currency(product.price * product.quantity)}</strong>
              </div>
            ))
          ) : (
            <p className="muted">Nenhum produto vendido nesta comanda.</p>
          )}
        </section>

        <section className="drawer-section">
          <h4>Insumos consumidos por g/ml</h4>
          {command.supplies.map((item) => (
            <div className="supply-row" key={`${item.productName}-${item.quantity}`}>
              <div>
                <strong>{item.productName}</strong>
                <span>
                  {item.quantity}
                  {item.unit} usados - estoque restante: {item.remaining}
                </span>
              </div>
              <strong>{currency(item.cost)}</strong>
            </div>
          ))}
          <div className="notice">
            Na versão final, essa baixa será automática no estoque ao fechar a comanda.
          </div>
        </section>

        <section className="drawer-section">
          <h4>Checkout visual</h4>
          <div className="payment-grid">
            {paymentMethods.map((method) => (
              <button
                type="button"
                className={method === selectedPayment ? "payment-method active" : "payment-method"}
                key={method}
                onClick={() => {
                  setSelectedPayment(method);
                  runDemoAction(`payment-${method}`, `Método ${method} selecionado para esta comanda.`, { tone: "info", delay: 280 });
                }}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        <div className="drawer-actions">
          <Button
            variant="secondary"
            icon={<Plus size={16} />}
            loading={isPending("drawer-service")}
            onClick={() => runDemoAction("drawer-service", "Serviço adicional lançado visualmente na comanda.")}
          >
            Adicionar serviço
          </Button>
          <Button
            variant="secondary"
            icon={<ReceiptText size={16} />}
            loading={isPending("drawer-supply")}
            onClick={() => runDemoAction("drawer-supply", "Insumo adicional lançado visualmente e refletido no custo técnico.")}
          >
            Adicionar insumo
          </Button>
          <Button
            icon={<CreditCard size={16} />}
            loading={isPending("drawer-finish")}
            onClick={() => runDemoAction("drawer-finish", "Pagamento finalizado visualmente. Nenhum pagamento real foi processado.", { onComplete: onFinishPayment })}
          >
            Finalizar pagamento
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
