import { Calculator, Plus } from "lucide-react";
import { useState } from "react";
import BudgetSummaryCard from "../components/brc/BudgetSummaryCard";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import { budgetMariana, budgets, clients, services } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import type { Budget } from "../types";
import { currency } from "../utils/format";

export default function Budgets() {
  const { isPending, runDemoAction } = useDemoAction();
  const [modalOpen, setModalOpen] = useState(false);
  const [approved, setApproved] = useState(false);
  const featuredBudget = approved ? { ...budgetMariana, status: "Aprovado para comanda" } : budgetMariana;

  return (
    <PermissionGuard permission="budgets">
      <div className="page">
        <PageHeader
          eyebrow="Simulador de orçamento"
          title="Orçamentos"
          description="4 orçamentos ativos · R$ 2.870 em potencial."
          actions={<Button icon={<Plus size={16} />} onClick={() => setModalOpen(true)}>Novo orçamento</Button>}
        />

        <BudgetSummaryCard
          budget={featuredBudget}
          onApprove={() => setApproved(true)}
        />

        <SectionCard title="Pipeline de orçamentos" eyebrow="Mock operacional">
          <DataTable<Budget>
            rows={budgets}
            columns={[
              { header: "ID", cell: (row) => row.id },
              { header: "Cliente", cell: (row) => row.clientName },
              { header: "Serviço", cell: (row) => row.serviceName },
              { header: "Profissional", cell: (row) => row.professionalName },
              { header: "Tempo", cell: (row) => row.estimatedTime },
              { header: "Custo técnico", cell: (row) => currency(row.technicalCost) },
              { header: "Valor sugerido", cell: (row) => currency(row.suggestedPrice) },
              { header: "Margem", cell: (row) => `${row.estimatedMargin}%` },
              { header: "Status", cell: (row) => row.status },
            ]}
          />
        </SectionCard>

        <Modal open={modalOpen} title="Novo orçamento visual" onClose={() => setModalOpen(false)}>
          <div className="compact-form">
            <label>Cliente<Select defaultValue="Mariana Alves">{clients.map((client) => <option key={client.id}>{client.name}</option>)}</Select></label>
            <label>Serviço<Select defaultValue="Morena iluminada premium">{services.map((service) => <option key={service.id}>{service.name}</option>)}</Select></label>
            <div className="drawer-grid">
              <div><span>Custo técnico</span><strong>R$ 86,40</strong></div>
              <div><span>Valor sugerido</span><strong>R$ 680,00</strong></div>
              <div><span>Margem</span><strong>62%</strong></div>
            </div>
            <Button
              icon={<Calculator size={16} />}
              loading={isPending("budget-calc")}
              onClick={() => runDemoAction("budget-calc", "Orçamento calculado visualmente.", { onComplete: () => setModalOpen(false) })}
            >
              Calcular orçamento
            </Button>
          </div>
        </Modal>
      </div>
    </PermissionGuard>
  );
}
