import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import "./button.css";

export type ButtonVariant = "primary" | "secondary" | "text" | "accent";
export type ButtonTone = "default" | "inverse";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonSharedProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

type ButtonAsAnchorProps = ButtonSharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

type ButtonAsNativeProps = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchorProps | ButtonAsNativeProps;

function preventDisabledAnchorNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

function buildButtonClassName({
  className,
  fullWidth,
  size,
  tone,
  variant,
}: Pick<ButtonSharedProps, "className" | "fullWidth" | "size" | "tone" | "variant">) {
  return [
    "ui-button",
    `ui-button--${variant ?? "primary"}`,
    `ui-button--${tone ?? "default"}`,
    `ui-button--${size ?? "md"}`,
    fullWidth ? "ui-button--full-width" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      children,
      className,
      disabled = false,
      fullWidth = false,
      href,
      onClick,
      size = "md",
      tone = "default",
      variant = "primary",
      ...restProps
    } = props;

    const resolvedClassName = buildButtonClassName({
      className,
      fullWidth,
      size,
      tone,
      variant,
    });

    return (
      <a
        {...restProps}
        className={resolvedClassName}
        href={href}
        aria-disabled={disabled || undefined}
        onClick={
          disabled
            ? (event) => {
                preventDisabledAnchorNavigation(event);
                onClick?.(event);
              }
            : onClick
        }
        tabIndex={disabled ? -1 : props.tabIndex}
      >
        <span className="ui-button__label">{children}</span>
      </a>
    );
  }

  const {
    children,
    className,
    disabled = false,
    fullWidth = false,
    onClick,
    size = "md",
    tone = "default",
    type = "button",
    variant = "primary",
    ...restProps
  } = props;

  const resolvedClassName = buildButtonClassName({
    className,
    fullWidth,
    size,
    tone,
    variant,
  });

  return (
    <button
      {...restProps}
      className={resolvedClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span className="ui-button__label">{children}</span>
    </button>
  );
}
