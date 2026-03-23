import { Button } from "../../components/foundation/Button/Button";
import { CapabilityShowcaseSection } from "../../components/sections/Capabilities/CapabilityShowcaseSection";
import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { testingServicesPageContent } from "./data/testingServicesContent";

const testingServicesSectionContent = {
  title: "提供各类测试认证服务",
};

export function TestingServicesPage() {
  return (
    <div className="testing-page">
      <SiteHeader />

      <main className="testing-page__main" id="top">
        <section className="testing-hero">
          <div className="testing-hero__pattern" aria-hidden="true" />
          <div className="testing-hero__inner">
            <PageIntro className="testing-hero__copy" delay={0.08}>
              <h1>{testingServicesPageContent.hero.title}</h1>
              <p>{testingServicesPageContent.hero.description}</p>
              <Button className="testing-hero__button" href="#testing-contact" size="lg" variant="accent">
                {testingServicesPageContent.hero.ctaLabel}
              </Button>
            </PageIntro>

            <PageReveal className="testing-hero__visual" delay={0.18}>
              <img src="/assets/testing/hero-lab.png" alt="音视频测试实验室" />
            </PageReveal>

            <PageReveal className="testing-hero__dots" delay={0.24} aria-hidden="true">
              <span className="is-active" />
              <span />
              <span />
            </PageReveal>
          </div>
        </section>

        <section className="testing-qualifications" aria-labelledby="testing-qualifications-title">
          <PageReveal as="h2" className="testing-qualifications__title" id="testing-qualifications-title" delay={0.04}>
            {testingServicesPageContent.qualifications.title}
          </PageReveal>

          <div className="testing-qualifications__rail">
            {testingServicesPageContent.qualifications.items.map((qualification, index) => (
              <PageReveal key={qualification.id} className="testing-qualification-card" delay={0.08 + index * 0.05}>
                <div className="testing-qualification-card__surface">
                  <div className="testing-qualification-card__badge">CNAS</div>
                  <p>{qualification.title}</p>
                </div>
              </PageReveal>
            ))}
          </div>
        </section>

        <CapabilityShowcaseSection
          cards={testingServicesPageContent.services.cards}
          className="testing-services"
          gridClassName="capability-grid testing-services__grid"
          headingClassName="testing-services__heading"
          headingAside={
            <span className="testing-services__indicator" aria-hidden="true">
              ↓
            </span>
          }
          headingLayout="split"
          id="services"
          title={testingServicesSectionContent.title}
        />

        <section className="testing-contact" id="testing-contact">
          <PageReveal className="testing-contact__card" delay={0.08}>
            <div className="testing-contact__copy">
              <h2>{testingServicesPageContent.cta.title}</h2>
              <p>{testingServicesPageContent.cta.description}</p>
            </div>

            <form className="testing-contact__form">
              <label className="testing-contact__field">
                <input type="email" placeholder={testingServicesPageContent.cta.emailPlaceholder} />
              </label>
              <Button size="lg" type="button" variant="accent">
                {testingServicesPageContent.cta.buttonLabel}
              </Button>
              <p>
                {testingServicesPageContent.cta.privacyPrefix}
                <a href="#testing-contact">{testingServicesPageContent.cta.privacyLabel}</a>
                {testingServicesPageContent.cta.privacySuffix}
              </p>
            </form>
          </PageReveal>
        </section>
      </main>

      <PageReveal delay={0.04}>
        <SiteFooter />
      </PageReveal>
    </div>
  );
}
