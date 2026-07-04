import { Banknote, CreditCard, LockKeyhole, WalletCards } from "lucide-react";
import { useState } from "react";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import { cashierMovements, commands } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { currency } from "../utils/format";
import { calculateCommandTotal } from "../utils/calculations";

interface Movement {
  time: string;
  description: string;
  method: string;
  amount: number;
  type: string;
}

export default function Cashier() {
  const { isPending, runDemoAction } = useDemoAction();
  const [cashierOpen, setCashierOpen] = useState(true);

  return (
    <PermissionGuard permission="cashier">
      <div className="page">
        <PageHeader
          eyebrow="Caixa e recebimentos"
          title="Fluxo operacional de abertura, recebimentos, sangria e fechamento."
          description="Recepção opera o caixa sem acessar DRE, lucro líquido ou dados estratégicos."
          actions={
            <>
              <Button
                variant="secondary"
                icon={<WalletCards size={16} />}
                loading={isPending("cashier-open")}
                onClick={() => runDemoAction("cashier-open", "Caixa aberto visualmente com saldo inicial de R$ 400,00.", { onComplete: () => setCashierOpen(true) })}
              >
                Abrir caixa
              </Button>
              <Button
                icon={<LockKeyhole size={16} />}
                loading={isPending("cashier-close")}
                onClick={() => runDemoAction("cashier-close", "Fechamento visual conferido sem divergência.", { onComplete: () => setCashierOpen(false) })}
              >
                Fechar caixa
              </Button>
            </>
          }
        />

        <div className="notice">Status do caixa: {cashierOpen ? "aberto para operação visual" : "fechado visualmente"}.</div>

        <div className="page-grid">
          <div className="span-3"><StatCard label="Entradas do dia" value="R$ 8.740,00" trend="PIX, dinheiro, débito e crédito" /></div>
          <div className="span-3"><StatCard label="PIX recebido" value="R$ 3.120,00" trend="35,6% do caixa" /></div>
          <div className="span-3"><StatCard label="Cartões" value="R$ 4.280,00" trend="débito + crédito" /></div>
          <div className="span-3"><StatCard label="Diferença de caixa" value="R$ 0,00" trend="sem divergência visual" /></div>
        </div>

        <div className="page-grid">
          <div className="span-7">
            <SectionCard title="Movimentações do dia" eyebrow="03/07/2026">
              <DataTable<Movement>
                rows={cashierMovements}
                columns={[
                  { header: "Hora", cell: (row) => row.time },
                  { header: "Descrição", cell: (row) => row.description },
                  { header: "Método", cell: (row) => row.method },
                  { header: "Tipo", cell: (row) => <StatusBadge status={row.type} /> },
                  { header: "Valor", cell: (row) => currency(row.amount) },
                ]}
              />
            </SectionCard>
          </div>
          <div className="span-5">
            <SectionCard title="Comandas aguardando pagamento" eyebrow="Checkout">
              {commands.filter((command) => command.status === "Aguardando pagamento").map((command) => (
                <div className="line-item" key={command.id}><span>{command.id} - {command.clientName}<br />{command.paymentMethod}</span><strong>{currency(calculateCommandTotal(command))}</strong></div>
              ))}
              <div className="button-row">
                <Button variant="secondary" icon={<Banknote size={16} />} loading={isPending("cashier-withdraw")} onClick={() => runDemoAction("cashier-withdraw", "Sangria visual registrada no caixa.")}>Sangria</Button>
                <Button variant="secondary" icon={<CreditCard size={16} />} loading={isPending("cashier-supply")} onClick={() => runDemoAction("cashier-supply", "Suprimento visual adicionado ao caixa.")}>Suprimento</Button>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
