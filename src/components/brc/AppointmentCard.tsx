import { CalendarClock, CheckCircle2, FileText, ReceiptText } from "lucide-react";
import { useDemoAction } from "../../hooks/useDemoAction";
import type { Appointment } from "../../types";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";

export default function AppointmentCard({
  appointment,
  onCheckIn,
  onOpenCommand,
}: {
  appointment: Appointment;
  onCheckIn: (appointment: Appointment) => void;
  onOpenCommand: (appointment: Appointment) => void;
}) {
  const { isPending, runDemoAction } = useDemoAction();

  return (
    <article className="appointment-card">
      <div className="appointment-time">
        <CalendarClock size={16} />
        <strong>{appointment.time}</strong>
      </div>
      <div className="appointment-main">
        <div>
          <h3>{appointment.clientName}</h3>
          <p>{appointment.services.join(" + ")}</p>
        </div>
        <StatusBadge status={appointment.status} />
      </div>
      <div className="appointment-meta">
        <span>Profissional: {appointment.professionalName}</span>
        <span>{appointment.room}</span>
      </div>
      <div className="appointment-actions">
        <Button
          variant="secondary"
          icon={<CheckCircle2 size={15} />}
          loading={isPending(`checkin-${appointment.id}`)}
          onClick={() => runDemoAction(`checkin-${appointment.id}`, "Check-in realizado. Comanda pronta para abertura.", { onComplete: () => onCheckIn(appointment) })}
        >
          Check-in
        </Button>
        <Button
          variant="ghost"
          icon={<FileText size={15} />}
          loading={isPending(`profile-${appointment.id}`)}
          onClick={() => runDemoAction(`profile-${appointment.id}`, `Ficha técnica de ${appointment.clientName} aberta em modo visual.`, { tone: "info" })}
        >
          Ver ficha
        </Button>
        <Button
          variant="ghost"
          icon={<ReceiptText size={15} />}
          loading={isPending(`command-${appointment.id}`)}
          onClick={() => runDemoAction(`command-${appointment.id}`, "Comanda visual aberta para demonstração.", { onComplete: () => onOpenCommand(appointment) })}
        >
          Abrir comanda
        </Button>
      </div>
    </article>
  );
}
