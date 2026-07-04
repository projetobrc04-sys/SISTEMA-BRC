import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Role } from "../types";

type ToastTone = "success" | "warning" | "danger" | "info";

interface Toast {
  id: number;
  message: string;
  tone: ToastTone;
}

interface AppContextValue {
  role: Role;
  setRole: (role: Role) => void;
  showToast: (message: string, tone?: ToastTone) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const initialRole = (): Role => {
  const stored = window.localStorage.getItem("brc-role") as Role | null;
  return stored ?? "Admin";
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>(initialRole);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const setRole = useCallback((nextRole: Role) => {
    window.localStorage.setItem("brc-role", nextRole);
    setRoleState(nextRole);
  }, []);

  const showToast = useCallback((message: string, tone: ToastTone = "info") => {
    const id = Date.now();
    setToasts((current) => [...current, { id, message, tone }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => ({ role, setRole, showToast }), [role, setRole, showToast]);

  return (
    <AppContext.Provider value={value}>
      {children}
      <div className="toast-stack" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.tone}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
