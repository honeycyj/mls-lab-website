import { PageIntro } from "../PageMotion/PageMotion";
import "./pageSectionIntro.css";

type PageSectionIntroProps = {
  className?: string;
  delay?: number;
  description: string;
  eyebrow: string;
  title: string;
};

export function PageSectionIntro({
  className = "",
  delay = 0.06,
  description,
  eyebrow,
  title,
}: PageSectionIntroProps) {
  return (
    <section className={`page-section-intro ${className}`.trim()}>
      <PageIntro className="page-section-intro__inner" delay={delay}>
        <p className="page-section-intro__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-section-intro__description">{description}</p>
      </PageIntro>
    </section>
  );
}
