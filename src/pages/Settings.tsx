import { Building2, Clock, DatabaseBackup, Shield, SlidersHorizontal } from "lucide-react";
import PermissionGuard from "../components/brc/PermissionGuard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import Input from "../components/ui/Input";
import PageHeader from "../components/ui/PageHeader";
import Select from "../components/ui/Select";
import { useDemoAction } from "../hooks/useDemoAction";

export default function Settings() {
  const { isPending, runDemoAction } = useDemoAction();

  return (
    <PermissionGuard permission="settings">
      <div className="page">
        <PageHeader
          eyebrow="Configurações"
          title="Configurações"
          description="Dados da unidade, horários, regras e aparência."
          actions={<Button icon={<SlidersHorizontal size={16} />} loading={isPending("settings-save")} onClick={() => runDemoAction("settings-save", "Configurações visuais salvas para a apresentação.")}>Salvar visualmente</Button>}
        />

        <div className="page-grid">
          <div className="span-6">
            <SectionCard title="Dados da unidade" eyebrow="Bruno Ribeiro Concept">
              <div className="compact-form">
                <label>Nome da unidade<Input defaultValue="Bruno Ribeiro Concept" /></label>
                <label>Posicionamento<Input defaultValue="Beauty experience" /></label>
                <label>Instagram<Input defaultValue="@brunoribeiroconcept" /></label>
              </div>
            </SectionCard>
          </div>
          <div className="span-6">
            <SectionCard title="Horários de funcionamento" eyebrow="Agenda">
              <div className="compact-form">
                <label>Segunda a sexta<Input defaultValue="08:30 às 21:00" /></label>
                <label>Sábado<Input defaultValue="09:00 às 19:00" /></label>
                <label>Regras de encaixe<Select defaultValue="Somente gerente"><option>Somente gerente</option><option>Recepção autorizada</option></Select></label>
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="page-grid">
          {[
            { title: "Serviços", icon: Building2, text: "Valores, duração, sinal e avaliação obrigatória." },
            { title: "Regras de sinal", icon: Clock, text: "Percentual por categoria e política de remarcação." },
            { title: "LGPD", icon: Shield, text: "Termos de imagem, procedimento químico e consentimento." },
            { title: "Backup visual", icon: DatabaseBackup, text: "Rotina demonstrativa sem backend real." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div className="span-3 report-card card" key={item.title}>
                <Icon size={22} color="#D6B56D" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

        <SectionCard title="Preferências de aparência" eyebrow="Identidade BRC">
          <div className="mini-grid">
            <div className="report-card"><strong>Paleta</strong><p>Preto, off-white e champagne.</p></div>
            <div className="report-card"><strong>Modo</strong><p>Administrativo escuro premium.</p></div>
            <div className="report-card"><strong>Logo</strong><p>Fallback CSS BRC circular quando não há arquivo.</p></div>
          </div>
        </SectionCard>
      </div>
    </PermissionGuard>
  );
}
