import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrcLogo from "../components/brc/BrcLogo";
import PremiumAura from "../components/effects/PremiumAura";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import { professionals, services } from "../data/mockData";
import { useDemoAction } from "../hooks/useDemoAction";
import { currency } from "../utils/format";

const steps = ["Serviço", "Profissional", "Data e horário", "Seus dados", "Confirmação"];
const slots = ["04/07 10:00", "04/07 14:00", "05/07 09:30", "05/07 16:00", "06/07 11:00", "06/07 18:00"];

export default function OnlineBooking() {
  const navigate = useNavigate();
  const { isPending, runDemoAction } = useDemoAction();
  const [step, setStep] = useState(0);
  const [service, setService] = useState(services[6].name);
  const [professional, setProfessional] = useState("Marina Costa");
  const [slot, setSlot] = useState(slots[0]);

  const continueFlow = () => {
    if (step === 4) {
      runDemoAction("booking-confirm", "Reserva visual confirmada. Nenhuma agenda real foi alterada.");
      return;
    }

    setStep((current) => Math.min(4, current + 1));
  };

  return (
    <main className="booking-shell">
      <div className="booking-container">
        <header className="booking-header">
          <BrcLogo />
          <Button variant="secondary" onClick={() => navigate("/login")}>Voltar ao sistema</Button>
        </header>
        <section className="booking-hero">
          <div className="brc-hero subtle-grid">
            <PremiumAura />
            <div className="brc-hero-content">
              <BrcLogo size="lg" withText={false} />
              <h1>Agende sua beauty experience.</h1>
              <p>Um link público com identidade BRC para selecionar serviço, profissional e horário sem cara de sistema genérico.</p>
            </div>
          </div>
          <div className="booking-panel">
            <div className="tabs">
              {steps.map((item, index) => (
                <button key={item} className={index === step ? "tab active" : "tab"} onClick={() => setStep(index)} type="button">{index + 1}. {item}</button>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              {step === 0 && (
                <div className="card-list">
                  {services.slice(0, 8).map((item) => (
                    <button className={item.name === service ? "command-card payment-method active" : "command-card payment-method"} key={item.id} onClick={() => setService(item.name)} type="button">
                      <strong>{item.name}</strong>
                      <span>{item.duration} - {currency(item.price)}</span>
                    </button>
                  ))}
                </div>
              )}
              {step === 1 && (
                <div className="card-list">
                  {professionals.slice(0, 6).map((item) => (
                    <button className={item.name === professional ? "command-card payment-method active" : "command-card payment-method"} key={item.id} onClick={() => setProfessional(item.name)} type="button">
                      <strong>{item.name}</strong>
                      <span>{item.role} - avaliação {item.rating}</span>
                    </button>
                  ))}
                </div>
              )}
              {step === 2 && (
                <div className="mini-grid">
                  {slots.map((item) => (
                    <button className={item === slot ? "payment-method active" : "payment-method"} key={item} onClick={() => setSlot(item)} type="button">{item}</button>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div className="compact-form">
                  <label>Nome completo<Input defaultValue="Mariana Alves" /></label>
                  <label>WhatsApp<Input defaultValue="(11) 98841-2031" /></label>
                  <label>Instagram<Input defaultValue="@marialvesbeauty" /></label>
                  <label>Observação<Select defaultValue="Quero manter natural"><option>Quero manter natural</option><option>Preciso de avaliação</option><option>Tenho evento próximo</option></Select></label>
                </div>
              )}
              {step === 4 && (
                <SectionCard title="Seu horário foi reservado." eyebrow="Confirmação">
                  <p className="muted">Nossa equipe entrará em contato para confirmar os detalhes da sua beauty experience.</p>
                  <div className="notice">{service} com {professional} em {slot}. Sinal e confirmação são apenas visuais neste beta.</div>
                </SectionCard>
              )}
            </div>
            <div className="button-row" style={{ marginTop: 20 }}>
              <Button variant="ghost" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}>Voltar</Button>
              <Button icon={step === 4 ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />} loading={isPending("booking-confirm")} onClick={continueFlow}>
                {step === 4 ? "Confirmar reserva" : "Continuar"}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
