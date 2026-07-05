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
  const [pendingActions, setPendingActions] = useState<Set<string>>(() => new Set());
  const timersRef = useRef(new Map<string, ReturnType<typeof window.setTimeout>>());

  useEffect(
    () => () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current.clear();
    },
    [],
  );

  const runDemoAction = useCallback(
    (action: string, message: string, options: DemoActionOptions = {}) => {
      const existingTimer = timersRef.current.get(action);
      if (existingTimer) {
        window.clearTimeout(existingTimer);
      }

      setPendingActions((current) => {
        const next = new Set(current);
        next.add(action);
        return next;
      });

      const timer = window.setTimeout(() => {
        timersRef.current.delete(action);
        setPendingActions((current) => {
          const next = new Set(current);
          next.delete(action);
          return next;
        });
        showToast(message, options.tone ?? "success");
        options.onComplete?.();
      }, options.delay ?? 520);

      timersRef.current.set(action, timer);
    },
    [showToast],
  );

  const isPending = useCallback((action: string) => pendingActions.has(action), [pendingActions]);
  const pendingAction = pendingActions.values().next().value ?? null;

  return {
    pendingAction,
    runDemoAction,
    isPending,
  };
}
