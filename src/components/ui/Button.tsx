import { Link } from "react-router-dom";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "ivory" | "outline-ivory" | "ghost";
type Size = "md" | "sm";

const buttonClass = (variant: Variant, size: Size, className?: string) =>
  cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "outline" && "btn-outline",
    variant === "ivory" && "btn-ivory",
    variant === "outline-ivory" && "btn-outline-ivory",
    variant === "ghost" && "btn-ghost",
    size === "sm" && "btn-sm",
    className,
  );

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClass(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  to: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  state?: unknown;
};

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
  state,
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      state={state}
      className={buttonClass(variant, size, className)}
    >
      {children}
    </Link>
  );
}

type ButtonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonAnchorProps) {
  return (
    <a className={buttonClass(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
