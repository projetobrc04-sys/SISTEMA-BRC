import { CalendarClock, CheckCircle2, FileText, ReceiptText } from "lucide-react";
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
        <Button variant="secondary" icon={<CheckCircle2 size={15} />} onClick={() => onCheckIn(appointment)}>
          Check-in
        </Button>
        <Button variant="ghost" icon={<FileText size={15} />}>
          Ver ficha
        </Button>
        <Button variant="ghost" icon={<ReceiptText size={15} />} onClick={() => onOpenCommand(appointment)}>
          Abrir comanda
        </Button>
      </div>
    </article>
  );
}
