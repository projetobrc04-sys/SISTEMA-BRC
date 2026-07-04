export type Role = "Admin" | "Gerente" | "Recepção" | "Profissional" | "Estoque";

export type ClientStatus = "Nova" | "Recorrente" | "VIP" | "Inativa" | "Alto ticket" | "Pacote ativo";
export type AppointmentStatus =
  | "Confirmado"
  | "Aguardando sinal"
  | "Cliente chegou"
  | "Em atendimento"
  | "Finalizado"
  | "Cancelado"
  | "No-show"
  | "Reagendado";
export type CommandStatus = "Aberta" | "Em atendimento" | "Aguardando pagamento" | "Paga" | "Cancelada";
export type StockStatus = "Normal" | "Baixo" | "Crítico" | "Vencendo" | "Vencido";
export type PaymentStatus = "Pendente" | "Parcial" | "Pago" | "Estornado visual" | "Aguardando confirmação";

export interface Client {
  id: string;
  name: string;
  phone: string;
  instagram: string;
  status: ClientStatus[];
  lastVisit: string;
  nextAppointment: string;
  preferredProfessional: string;
  favoriteServices: string[];
  hairHistory: string;
  allergies: string;
  contraindications: string;
  tones: string[];
  preferredProducts: string[];
  averageTicket: number;
  totalSpent: number;
  loyaltyPoints: number;
  internalNotes: string;
  beforeAfter: string[];
  birthday: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "Disponível" | "Em atendimento" | "Intervalo" | "Ausente";
  todaySchedule: number;
  revenue: number;
  estimatedCommission: number;
  occupancy: number;
  rating: number;
  target: number;
  servicesDone: number;
}

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  category: string;
  recommendedProfessional: string;
  needsAssessment: boolean;
  needsDeposit: boolean;
  defaultSupplies: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: "Venda" | "Uso interno" | "Insumo técnico" | "Descartável";
  unit: "g" | "ml" | "unidade" | "pacote";
  stock: number;
  minimumStock: number;
  cost: number;
  salePrice?: number;
  margin?: number;
  expiresAt: string;
  status: StockStatus;
}

export interface Appointment {
  id: string;
  time: string;
  clientId: string;
  clientName: string;
  professionalId: string;
  professionalName: string;
  services: string[];
  status: AppointmentStatus;
  room: string;
  deposit: number;
  notes: string;
}

export interface SupplyUse {
  productName: string;
  quantity: number;
  unit: "g" | "ml" | "unidade" | "pacote";
  remaining: string;
  cost: number;
}

export interface Command {
  id: string;
  clientId: string;
  clientName: string;
  professionalName: string;
  services: { name: string; price: number }[];
  productsSold: { name: string; price: number; quantity: number }[];
  supplies: SupplyUse[];
  discount: number;
  paymentMethod: string;
  status: CommandStatus;
  startedAt: string;
  history: string[];
}

export interface Budget {
  id: string;
  clientName: string;
  serviceName: string;
  professionalName: string;
  estimatedTime: string;
  products: SupplyUse[];
  technicalCost: number;
  suggestedPrice: number;
  estimatedMargin: number;
  status: string;
}

export interface ReportPoint {
  label: string;
  value: number;
  secondary?: number;
}
