import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { lockBodyScroll, unlockBodyScroll } from "../../lib/scrollLock";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  variant?: "drawer-right" | "drawer-left" | "modal" | "search";
  className?: string;
  showTitle?: boolean;
  closeLabel?: string;
};

export function Dialog({
  open,
  onClose,
  title,
  children,
  variant = "modal",
  className,
  showTitle = false,
  closeLabel = "Close dialog",
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lockedRef = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      if (!lockedRef.current) {
        lockBodyScroll();
        lockedRef.current = true;
      }
    }

    if (!open && dialog.open) {
      dialog.close();
      if (lockedRef.current) {
        unlockBodyScroll();
        lockedRef.current = false;
      }
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      if (lockedRef.current) {
        unlockBodyScroll();
        lockedRef.current = false;
      }
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (lockedRef.current) {
        unlockBodyScroll();
        lockedRef.current = false;
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={cn("site-dialog", className)}
      data-variant={variant}
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
    >
      <div className="dialog-panel">
        <h2 id={titleId} className={showTitle ? "display-sm px-6 pt-6" : "sr-only"}>
          {title}
        </h2>
        <button
          type="button"
          className="dialog-close"
          aria-label={closeLabel}
          onClick={() => dialogRef.current?.close()}
        >
          <X size={18} strokeWidth={1.1} aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
