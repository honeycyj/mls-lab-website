import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    const { children: _children, className: _className, variant: _variant, ...anchorProps } = props;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
