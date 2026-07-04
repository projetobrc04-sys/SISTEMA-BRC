import { motion } from "motion/react";
import Badge, { type BadgeTone } from "./Badge";

const toneByStatus: Record<string, BadgeTone> = {
  Confirmado: "success",
  "Aguardando sinal": "warning",
  "Cliente chegou": "champagne",
  "Em atendimento": "info",
  Finalizado: "success",
  Cancelado: "danger",
  "No-show": "danger",
  Reagendado: "warning",
  Aberta: "champagne",
  "Aguardando pagamento": "warning",
  Paga: "success",
  Normal: "success",
  Baixo: "warning",
  "Crítico": "danger",
  Vencendo: "warning",
  Vencido: "danger",
  Nova: "info",
  Recorrente: "success",
  VIP: "champagne",
  Inativa: "neutral",
  "Alto ticket": "champagne",
  "Pacote ativo": "success",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <motion.span layout="position" initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Badge tone={toneByStatus[status] ?? "neutral"}>{status}</Badge>
    </motion.span>
  );
}