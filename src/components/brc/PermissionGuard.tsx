import type { ReactNode } from "react";
import { useAppContext } from "../../state/AppContext";
import { canAccess } from "../../utils/permissions";
import AccessDeniedCard from "../ui/AccessDeniedCard";

export default function PermissionGuard({ permission, children }: { permission: string; children: ReactNode }) {
  const { role } = useAppContext();
  if (!canAccess(role, permission)) return <AccessDeniedCard />;
  return <>{children}</>;
}
