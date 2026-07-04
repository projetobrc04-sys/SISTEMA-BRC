import { CalendarPlus, Clock, ListChecks } from "lucide-react";
import { useMemo, useState } from "react";
import AppointmentCard from "../components/brc/AppointmentCard";
import CommandDrawer from "../components/brc/CommandDrawer";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import { appointments, commands, professionals } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { useAppContext } from "../state/AppContext";
import type { Appointment, Command } from "../types";

const calendarDays = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default function Agenda() {
  const { showToast } = useAppContext();
  const { isPending, runDemoAction } = useDemoAction();
  const [status, setStatus] = useState("Todos");
  const [professional, setProfessional] = useState("Todos");
  const [mode, setMode] = useState("Dia");
  const [query, setQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState("03");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerCommand, setDrawerCommand] = useState<Command | undefined>();

  const filtered = useMemo(
    () =>
      appointments.filter((appointment) => {
        const haystack = `${appointment.clientName} ${appointment.professionalName} ${appointment.services.join(" ")}`.toLowerCase();
        return (
          (status === "Todos" || appointment.status === status) &&
          (professional === "Todos" || appointment.professionalName === professional) &&
          haystack.includes(query.toLowerCase())
        );
      }),
    [professional, query, status],
  );

  const handleCheckIn = (appointment: Appointment) => {
    setDrawerCommand(commands.find((command) => command.clientName === appointment.clientName) ?? commands[0]);
  };

  const handleOpenCommand = (appointment: Appointment) => {
    setDrawerCommand(commands.find((command) => command.clientName === appointment.clientName) ?? commands[1]);
  };

  return (
    <PermissionGuard permission="agenda">
      <div className="page">
        <PageHeader
          eyebrow="Agenda inteligente"
          title="Agenda"
          description="32 agendamentos hoje · 6 profissionais em operação."
          actions={<Button icon={<CalendarPlus size={16} />} onClick={() => setModalOpen(true)}>Novo agendamento</Button>}
        />

        <SectionCard title="Filtros da operação" eyebrow={`Julho 2026 - dia ${selectedDay}`}>
          <div className="filter-bar">
            <label>Visualização<Select value={mode} onChange={(event) => setMode(event.target.value)}><option>Dia</option><option>Semana</option></Select></label>
            <label>Status<Select value={status} onChange={(event) => setStatus(event.target.value)}><option>Todos</option><option>Confirmado</option><option>Aguardando sinal</option><option>Cliente chegou</option><option>Em atendimento</option><option>Finalizado</option><option>Cancelado</option><option>No-show</option><option>Reagendado</option></Select></label>
            <label>Profissional<Select value={professional} onChange={(event) => setProfessional(event.target.value)}><option>Todos</option>{professionals.slice(0, 6).map((item) => <option key={item.id}>{item.name}</option>)}</Select></label>
            <label>Busca rápida<Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cliente, telefone ou serviço" /></label>
          </div>
        </SectionCard>

        <div className="split-row">
          <SectionCard title={`Agenda ${mode.toLowerCase()} - ${selectedDay}/07/2026`} eyebrow={`${filtered.length} itens visíveis`}>
            <div className="card-list">
              {filtered.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onCheckIn={handleCheckIn}
                  onOpenCommand={handleOpenCommand}
                />
              ))}
            </div>
          </SectionCard>
          <div className="card-list">
            <SectionCard title="Mini calendário" eyebrow="Julho 2026">
              <div className="mini-grid">
                {calendarDays.map((day) => (
                  <button
                    type="button"
                    className={day === selectedDay ? "payment-method active" : "payment-method"}
                    key={day}
                    onClick={() => {
                      setSelectedDay(day);
                      showToast(`Agenda visual alterada para ${day}/07/2026.`, "info");
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </SectionCard>
            <SectionCard title="Lista de espera" eyebrow="Prioridade">
              {["Vanessa Pires - mechas premium", "Isabela Martins - corte", "Thais Araújo - raiz"].map((item) => (
                <div className="line-item" key={item}><span>{item}</span><ListChecks size={16} color="#D6B56D" /></div>
              ))}
            </SectionCard>
            <SectionCard title="Próximos check-ins" eyebrow="30 min">
              {appointments.slice(2, 6).map((item) => (
                <div className="line-item" key={item.id}><span>{item.time} - {item.clientName}</span><Clock size={16} /></div>
              ))}
            </SectionCard>
          </div>
        </div>

        <Modal open={modalOpen} title="Novo agendamento visual" onClose={() => setModalOpen(false)}>
          <div className="compact-form">
            <label>Cliente<Input defaultValue="Amanda Soares" /></label>
            <label>Serviço<Select defaultValue="Corte feminino premium"><option>Corte feminino premium</option><option>Morena iluminada premium</option><option>Tratamento Wella Fusion</option></Select></label>
            <label>Profissional<Select defaultValue="Bruno Ribeiro"><option>Bruno Ribeiro</option><option>Marina Costa</option><option>Rafael Mendes</option></Select></label>
            <label>Horário<Input defaultValue="09:00" /></label>
            <div className="notice">Possível duplicidade encontrada: já existe uma cliente com este telefone.</div>
            <Button
              loading={isPending("agenda-save")}
              onClick={() => runDemoAction("agenda-save", "Agendamento visual criado para apresentação.", { onComplete: () => setModalOpen(false) })}
            >
              Salvar agendamento visual
            </Button>
          </div>
        </Modal>

        <CommandDrawer
          open={Boolean(drawerCommand)}
          command={drawerCommand}
          onClose={() => setDrawerCommand(undefined)}
          onFinishPayment={() => setDrawerCommand(undefined)}
        />
      </div>
    </PermissionGuard>
  );
}
