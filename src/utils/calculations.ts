import type { Command, Product, SupplyUse } from "../types";

export const calculateTechnicalCost = (supplies: SupplyUse[]) =>
  supplies.reduce((total, item) => total + item.cost, 0);

export const calculateCommandTotal = (command: Command) => {
  const services = command.services.reduce((total, service) => total + service.price, 0);
  const products = command.productsSold.reduce((total, product) => total + product.price * product.quantity, 0);
  return services + products - command.discount;
};

export const calculateEstimatedCommission = (command: Command, rate = 0.35) =>
  command.services.reduce((total, service) => total + service.price * rate, 0);

export const calculateBudgetMargin = (suggestedPrice: number, technicalCost: number, commission = suggestedPrice * 0.28) =>
  Math.round(((suggestedPrice - technicalCost - commission) / suggestedPrice) * 100);

export const getStockStatus = (product: Pick<Product, "stock" | "minimumStock">) => {
  if (product.stock <= product.minimumStock * 0.4) return "Crítico";
  if (product.stock <= product.minimumStock) return "Baixo";
  return "Normal";
};
