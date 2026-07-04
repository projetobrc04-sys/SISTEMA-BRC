import { Plus, ReceiptText } from "lucide-react";
import { useState } from "react";
import CommandDrawer from "../components/brc/CommandDrawer";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { commands } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { useAppContext } from "../state/AppContext";
import type { Command } from "../types";
import { calculateCommandTotal, calculateTechnicalCost } from "../utils/calculations";
import { currency } from "../utils/format";

const columns = [
  { label: "Abertas", match: (command: Command) => command.status === "Aberta" },
  { label: "Em atendimento", match: (command: Command) => command.status === "Em atendimento" },
  { label: "Aguardando pagamento", match: (command: Command) => command.status === "Aguardando pagamento" },
  { label: "Finalizadas", match: (command: Command) => command.status === "Paga" },
];

export default function Commands() {
  const { showToast } = useAppContext();
  const { isPending, runDemoAction } = useDemoAction();
  const [selected, setSelected] = useState<Command | undefined>();

  const openCommand = (command: Command) => {
    setSelected(command);
    showToast(`Comanda ${command.id} aberta no drawer visual.`, "info");
  };

  return (
    <PermissionGuard permission="commands">
      <div className="page">
        <PageHeader
          eyebrow="Comandas e checkout manual"
          title="Fluxo operacional com consumo de insumos por gramas e mililitros."
          description="A tela demonstra o problema central da operação: serviço, produto vendido, baixa técnica, custo e pagamento na mesma visão."
          actions={
            <Button
              icon={<Plus size={16} />}
              loading={isPending("command-new")}
              onClick={() => runDemoAction("command-new", "Comanda visual aberta para novo atendimento.", { onComplete: () => setSelected(commands[0]) })}
            >
              Abrir comanda
            </Button>
          }
        />

        <div className="kpi-strip">
          <div className="report-card"><span>Comandas abertas</span><strong>{commands.filter((c) => c.status !== "Paga" && c.status !== "Cancelada").length}</strong></div>
          <div className="report-card"><span>Aguardando pagamento</span><strong>{commands.filter((c) => c.status === "Aguardando pagamento").length}</strong></div>
          <div className="report-card"><span>Custo técnico visual</span><strong>{currency(commands.reduce((total, command) => total + calculateTechnicalCost(command.supplies), 0))}</strong></div>
          <div className="report-card"><span>Total em comandas</span><strong>{currency(commands.reduce((total, command) => total + calculateCommandTotal(command), 0))}</strong></div>
        </div>

        <div className="kanban">
          {columns.map((column) => (
            <section className="kanban-column" key={column.label}>
              <h3>{column.label}</h3>
              {commands.filter(column.match).map((command) => (
                <article
                  className="command-card"
                  key={command.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openCommand(command)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openCommand(command);
                    }
                  }}
                >
                  <div className="appointment-main">
                    <strong>{command.clientName}</strong>
                    <StatusBadge status={command.status} />
                  </div>
                  <p>{command.professionalName}</p>
                  <p>{command.services.map((service) => service.name).join(" + ")}</p>
                  <div className="line-item">
                    <span>{command.id} · {command.startedAt}</span>
                    <strong>{currency(calculateCommandTotal(command))}</strong>
                  </div>
                  <Button
                    variant="secondary"
                    icon={<ReceiptText size={15} />}
                    loading={isPending(`drawer-${command.id}`)}
                    onClick={(event) => {
                      event.stopPropagation();
                      runDemoAction(`drawer-${command.id}`, `Comanda ${command.id} carregada no drawer.`, { tone: "info", onComplete: () => setSelected(command) });
                    }}
                  >
                    Abrir drawer
                  </Button>
                </article>
              ))}
            </section>
          ))}
        </div>

        <CommandDrawer
          open={Boolean(selected)}
          command={selected}
          onClose={() => setSelected(undefined)}
          onFinishPayment={() => setSelected(undefined)}
        />
      </div>
    </PermissionGuard>
  );
}
