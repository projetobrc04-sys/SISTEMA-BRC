import { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "../state/AppContext";

type DemoTone = "success" | "warning" | "danger" | "info";

interface DemoActionOptions {
  delay?: number;
  tone?: DemoTone;
  onComplete?: () => void;
}

export function useDemoAction() {
  const { showToast } = useAppContext();
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const runDemoAction = useCallback(
    (action: string, message: string, options: DemoActionOptions = {}) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      setPendingAction(action);
      timerRef.current = window.setTimeout(() => {
        setPendingAction(null);
        showToast(message, options.tone ?? "success");
        options.onComplete?.();
      }, options.delay ?? 520);
    },
    [showToast],
  );

  return {
    pendingAction,
    runDemoAction,
    isPending: (action: string) => pendingAction === action,
  };
}
