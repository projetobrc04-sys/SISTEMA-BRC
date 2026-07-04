import { useState } from "react";
import type { Client } from "../../types";
import { currency } from "../../utils/format";
import StatusBadge from "../ui/StatusBadge";
import Tabs from "../ui/Tabs";

const items = [
  { id: "overview", label: "Visão geral" },
  { id: "history", label: "Histórico técnico" },
  { id: "formulas", label: "Fórmulas e colorações" },
  { id: "photos", label: "Fotos antes/depois" },
  { id: "commands", label: "Comandas" },
  { id: "payments", label: "Pagamentos" },
  { id: "notes", label: "Observações internas" },
  { id: "marketing", label: "Marketing/retorno" },
];

export default function ClientProfileTabs({ client }: { client: Client }) {
  const [active, setActive] = useState("overview");

  return (
    <section className="card client-tabs">
      <Tabs items={items} active={active} onChange={setActive} />
      {active === "overview" && (
        <div className="profile-grid">
          <div>
            <span className="eyebrow">Dados pessoais</span>
            <h3>{client.name}</h3>
            <p>{client.phone} - {client.instagram}</p>
            <p>ID único: {client.id}</p>
          </div>
          <div>
            <span className="eyebrow">Preferências</span>
            <p>Profissional preferido: {client.preferredProfessional}</p>
            <p>Serviços favoritos: {client.favoriteServices.join(", ")}</p>
          </div>
          <div>
            <span className="eyebrow">Valor</span>
            <p>Ticket médio: {currency(client.averageTicket)}</p>
            <p>Total gasto: {currency(client.totalSpent)}</p>
            <p>Pontos de fidelidade: {client.loyaltyPoints}</p>
          </div>
          <div className="badge-row">{client.status.map((status) => <StatusBadge key={status} status={status} />)}</div>
        </div>
      )}
      {active === "history" && (
        <div className="timeline">
          <div><strong>Histórico capilar</strong><p>{client.hairHistory}</p></div>
          <div><strong>Alergias</strong><p>{client.allergies}</p></div>
          <div><strong>Contraindicações</strong><p>{client.contraindications}</p></div>
          <div><strong>Produtos preferidos</strong><p>{client.preferredProducts.join(", ")}</p></div>
        </div>
      )}
      {active === "formulas" && (
        <div className="profile-grid">
          <div><span className="eyebrow">Tons aplicados</span><h3>{client.tones.join(" / ")}</h3><p>Última revisão técnica validada pelo profissional.</p></div>
          <div><span className="eyebrow">Próxima sugestão</span><h3>Gloss frio + reconstrução</h3><p>Retorno sugerido em 35 dias para preservar brilho.</p></div>
        </div>
      )}
      {active === "photos" && (
        <div className="photo-grid">
          {client.beforeAfter.map((label) => (
            <div className="photo-placeholder" key={label}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      {active === "commands" && <div className="timeline"><div><strong>Comanda recente</strong><p>Serviço técnico com baixa de insumos e home care sugerido.</p></div><div><strong>Pacotes</strong><p>Sem pacote vencido. Próxima oportunidade: manutenção de brilho.</p></div></div>}
      {active === "payments" && <div className="profile-grid"><div><span className="eyebrow">Status</span><h3>Sem pendências</h3><p>Último pagamento via PIX confirmado.</p></div><div><span className="eyebrow">Termos</span><h3>2 termos assinados</h3><p>Imagem e procedimento químico.</p></div></div>}
      {active === "notes" && <div className="notice">{client.internalNotes}</div>}
      {active === "marketing" && <div className="profile-grid"><div><span className="eyebrow">Retorno sugerido</span><h3>{client.nextAppointment}</h3><p>Enviar lembrete com referência visual do último atendimento.</p></div><div><span className="eyebrow">Campanha</span><h3>Beauty experience VIP</h3><p>Aniversário: {client.birthday}. Pontos: {client.loyaltyPoints}.</p></div></div>}
    </section>
  );
}
