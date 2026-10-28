import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "../../lib/cn";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({
  items,
  allowMultiple = true,
  className,
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>(() =>
    items.filter((item) => item.defaultOpen).map((item) => item.id),
  );

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      return allowMultiple ? [...current, id] : [id];
    });
  };

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id} className="accordion-item">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <Plus
                  size={16}
                  strokeWidth={1.1}
                  aria-hidden="true"
                  className="accordion-icon"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("accordion-panel", isOpen && "is-open")}
            >
              <div>
                <div className="accordion-body" inert={!isOpen}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
