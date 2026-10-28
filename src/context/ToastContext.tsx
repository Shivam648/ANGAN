import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AlertCircle, Check, X } from "lucide-react";
import { cn } from "../lib/cn";

type ToastTone = "default" | "success" | "error";

type Toast = {
  id: number;
  message: string;
  tone: ToastTone;
};

type ToastContextValue = {
  toast: (message: string, tone?: ToastTone) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, tone: ToastTone = "default") => {
      const id = ++counter.current;
      setToasts((current) => [...current.slice(-2), { id, message, tone }]);
      window.setTimeout(() => dismiss(id), 4200);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-0 bottom-5 z-[140] flex flex-col items-center gap-2 px-4"
      >
        {toasts.map((item) => (
          <div key={item.id} className={cn("toast w-full max-w-sm")}>
            <span className="flex-none">
              {item.tone === "success" ? (
                <Check size={15} aria-hidden="true" />
              ) : item.tone === "error" ? (
                <AlertCircle size={15} aria-hidden="true" />
              ) : (
                <span className="status-dot" aria-hidden="true" />
              )}
            </span>
            <span className="flex-1">{item.message}</span>
            <button
              type="button"
              onClick={() => dismiss(item.id)}
              aria-label="Dismiss notification"
              className="toast-dismiss flex-none opacity-70 transition-opacity hover:opacity-100"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
