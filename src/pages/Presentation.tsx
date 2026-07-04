import { ArrowRight, Crown } from "lucide-react";
import BrcHero from "../components/brc/BrcHero";
import PermissionGuard from "../components/brc/PermissionGuard";
import PresentationCard from "../components/brc/PresentationCard";
import Button from "../components/ui/Button";
import { SectionCard } from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

const argumentsList = [
  ["Agenda e atendimento em uma só visão", "Recepção acompanha confirmação, check-in, lista de espera, ficha e abertura de comanda sem troca de sistema."],
  ["Comanda com baixa de estoque técnico", "Cada atendimento mostra consumo em gramas e mililitros, custo técnico e aviso de baixa automática futura."],
  ["Prontuário capilar completo da cliente", "Histórico técnico, fórmulas, tons, alergias, fotos antes/depois, pagamentos e retorno sugerido."],
  ["Orçamento rápido dentro do atendimento", "Profissional simula produto, quantidade, tempo, custo, margem e valor antes da cliente aprovar."],
  ["Controle financeiro por permissão", "Admin e gerente veem DRE; recepção opera caixa sem lucro líquido ou margem estratégica."],
  ["Relatórios para decisão", "Ocupação, no-show, mix de serviços, consumo de estoque e margem por categoria em painéis executivos."],
  ["Sistema proprietário com identidade BRC", "Interface preta, branca e champagne, com linguagem do salão e fluxos adaptados à rotina real."],
];

export default function Presentation() {
  return (
    <PermissionGuard permission="presentation">
      <div className="page">
        <BrcHero
          title="BRC BeautyOS"
          subtitle="A nova base operacional do Bruno Ribeiro Concept."
        />

        <PageHeader
          eyebrow="Modo apresentação"
          title="O argumento é simples: parar de adaptar o salão ao sistema e adaptar o sistema ao salão."
          description="Esta página concentra os pontos que uma diretoria precisa ver para entender valor, controle e diferenciação."
          actions={<Button icon={<ArrowRight size={16} />}>Iniciar demonstração</Button>}
        />

        <div className="page-grid">
          {argumentsList.map(([title, text]) => (
            <div className="span-4" key={title}>
              <PresentationCard title={title}>{text}</PresentationCard>
            </div>
          ))}
        </div>

        <SectionCard title="Antes e depois" eyebrow="Comparativo conceitual" className="champagne-line">
          <div className="page-grid">
            <div className="span-6 report-card">
              <Crown size={22} color="#A3A3A3" />
              <h3>Antes</h3>
              <p>Sistema genérico, fluxos adaptados manualmente, controle limitado de insumos e pouco contexto técnico por cliente.</p>
            </div>
            <div className="span-6 report-card">
              <Crown size={22} color="#D6B56D" />
              <h3>Depois</h3>
              <p>Sistema próprio BRC, fluxo pensado para o salão, prontuário técnico, baixa de insumos e gestão premium.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="O que este beta demonstra" eyebrow="Sem backend real">
          <div className="mini-grid">
            {["Login fictício", "Dashboard", "Agenda", "CRM", "Comandas", "Orçamentos", "Fórmulas", "Estoque", "Caixa", "Financeiro", "Relatórios", "Permissões"].map((item) => (
              <div className="line-item" key={item}><span>{item}</span><Crown size={15} color="#D6B56D" /></div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PermissionGuard>
  );
}
