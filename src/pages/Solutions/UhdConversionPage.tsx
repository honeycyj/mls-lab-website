import { useState } from "react";
import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SolutionSectionNav } from "../../components/foundation/SolutionSectionNav/SolutionSectionNav";
import { SolutionTestimonial } from "../../components/foundation/SolutionTestimonial/SolutionTestimonial";
import { useActiveSectionHref } from "../../hooks/useActiveSectionHref";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { announcement } from "../Home/homePageContent";
import { uhdConversionPageContent, type SolutionAction } from "./data/uhdConversionContent";

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function SolutionActions({ actions }: { actions: SolutionAction[] }) {
  return (
    <div className="solution-template__actions">
      {actions.map((action) => (
        <a
          key={`${action.label}-${action.href}`}
          className={`solution-template__action solution-template__action--${action.variant ?? "secondary"}`}
          href={action.href}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}

export function UhdConversionPage() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const activeSectionHref = useActiveSectionHref(
    uhdConversionPageContent.sectionNav.map((item) => item.href),
  );

  return (
    <div className="solution-template">
      {showAnnouncement ? (
        <PageIntro className="solution-template__announcement">
          <div className="solution-template__announcement-inner">
            <div className="solution-template__announcement-copy">
              <p>{announcement}</p>
              <a href="#overview">立刻了解</a>
            </div>
            <button type="button" aria-label="关闭公告" onClick={() => setShowAnnouncement(false)}>
              <CloseIcon />
            </button>
          </div>
        </PageIntro>
      ) : null}

      <SiteHeader />

      <main className="solution-template__main">
        <section className="solution-template__intro">
          <PageIntro className="solution-template__intro-inner" delay={0.06}>
            <nav className="solution-template__breadcrumbs" aria-label="面包屑">
              {uhdConversionPageContent.breadcrumb.map((item, index) => (
                <span key={item.label}>
                  {index > 0 ? <span>/</span> : null}
                  <a href={item.href}>{item.label}</a>
                </span>
              ))}
            </nav>
            <h1>{uhdConversionPageContent.title}</h1>
            <p>{uhdConversionPageContent.description}</p>
          </PageIntro>
        </section>

        <section className="solution-template__body">
          <div className="solution-template__layout">
            <PageReveal as="aside" className="solution-template__sidebar" delay={0.1}>
              <SolutionSectionNav
                items={uhdConversionPageContent.sectionNav}
                activeHref={activeSectionHref}
              />
            </PageReveal>

            <div className="solution-template__content">
              <PageReveal as="section" className="solution-template__section" id="overview" delay={0.08}>
                <p className="solution-template__section-label">Overview</p>
                <div className="solution-template__section-copy">
                  <h2>{uhdConversionPageContent.title}</h2>
                  <p>{uhdConversionPageContent.overview}</p>
                </div>
              </PageReveal>

              <PageReveal as="section" className="solution-template__section" id="features" delay={0.12}>
                <h3>{uhdConversionPageContent.highlightTitle}</h3>
                <div className="solution-template__image-frame">
                  <img src={uhdConversionPageContent.highlightImage} alt={uhdConversionPageContent.highlightTitle} />
                </div>
              </PageReveal>

              <PageReveal as="section" className="solution-template__feature-grid" id="use-cases" delay={0.16}>
                {uhdConversionPageContent.highlightFeatures.map((item) => (
                  <article key={item.title} className="solution-template__feature-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </PageReveal>

              <PageReveal as="section" className="solution-template__section" id="cases" delay={0.2}>
                <div className="solution-template__image-frame solution-template__image-frame--secondary">
                  <img src={uhdConversionPageContent.secondaryImage} alt="色彩空间案例图" />
                </div>
              </PageReveal>

              <PageReveal as="section" className="solution-template__section" id="documentation" delay={0.24}>
                <p className="solution-template__documentation">{uhdConversionPageContent.documentation}</p>
              </PageReveal>

              <PageReveal as="section" className="solution-template__section solution-template__section--api" id="open-api" delay={0.28}>
                <div className="solution-template__api-card">
                  <div>
                    <p className="solution-template__section-label">开放API</p>
                    <h3>开放接口快速接入业务系统</h3>
                    <p>{uhdConversionPageContent.openApiDescription}</p>
                  </div>
                  <SolutionActions actions={uhdConversionPageContent.openApiActions} />
                </div>
              </PageReveal>
            </div>
          </div>
        </section>

        <section className="solution-template__cta">
          <PageReveal className="solution-template__cta-inner" delay={0.08}>
            <div className="solution-template__cta-copy">
              <h2>{uhdConversionPageContent.ctaTitle}</h2>
              <p>{uhdConversionPageContent.ctaDescription}</p>
            </div>
            <form className="solution-template__cta-form">
              <label className="solution-template__cta-field">
                <input type="email" placeholder={uhdConversionPageContent.ctaPlaceholder} />
              </label>
              <button type="button">{uhdConversionPageContent.ctaButton}</button>
              <p>
                {uhdConversionPageContent.ctaPrivacyPrefix}
                <a href="/#contact">{uhdConversionPageContent.ctaPrivacyLabel}</a>
                {uhdConversionPageContent.ctaPrivacySuffix}
              </p>
            </form>
          </PageReveal>
        </section>

        <section className="solution-template__proof">
          <PageReveal className="solution-template__proof-inner" delay={0.08}>
            <p>{uhdConversionPageContent.companyProofLabel}</p>
            <div className="solution-template__proof-logos">
              {uhdConversionPageContent.companyNames.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </PageReveal>
        </section>

        <section className="solution-template__testimonial">
          <PageReveal delay={0.1}>
            <SolutionTestimonial testimonial={uhdConversionPageContent.testimonial} />
          </PageReveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
