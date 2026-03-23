import type { ReactNode } from "react";
import "./sectionHeading.css";

type SectionHeadingProps = {
  align?: "left" | "center";
  aside?: ReactNode;
  className?: string;
  layout?: "stacked" | "split";
  subtitle?: string;
  subtitleAs?: "h3" | "p";
  title: string;
  titleAs?: "h2" | "h3";
};

export function SectionHeading({
  align = "left",
  aside,
  className = "",
  layout = "stacked",
  subtitle,
  subtitleAs = "p",
  title,
  titleAs = "h2",
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const SubtitleTag = subtitleAs;

  return (
    <header
      className={["section-heading", `section-heading--${layout}`, `section-heading--${align}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-heading__copy">
        <TitleTag className="section-heading__title">{title}</TitleTag>
        {subtitle ? <SubtitleTag className="section-heading__subtitle">{subtitle}</SubtitleTag> : null}
      </div>
      {aside ? <div className="section-heading__aside">{aside}</div> : null}
    </header>
  );
}
