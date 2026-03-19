import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type EditableLinkAnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href?: string;
};

function preventEmptyLinkNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

export function EditableLinkAnchor({
  href = "",
  onClick,
  ...props
}: EditableLinkAnchorProps) {
  if (href) {
    return <a href={href} onClick={onClick} {...props} />;
  }

  return <a href="#" onClick={onClick ?? preventEmptyLinkNavigation} {...props} />;
}
