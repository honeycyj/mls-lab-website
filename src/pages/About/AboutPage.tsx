import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type WheelEvent } from "react";
import { Button } from "../../components/foundation/Button/Button";
import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { AboutOrganizationCard } from "./components/AboutOrganizationCard";
import { AboutResearchStat } from "./components/AboutResearchStat";
import { AboutSectionContent } from "./components/AboutSectionContent";
import {
  aboutAnchorLinks,
  aboutIntroParagraphs,
  certLogo,
  certificationCards,
  heroImage,
  introVideo,
  milestones,
  organizationCards,
  researchStats,
  valueSlides,
} from "./data/aboutPageContent";

export function AboutPage() {
  const reduceMotion = useReducedMotion() ?? false;
  const visibleMilestoneYearSlots = 3;
  const milestoneYears = Array.from(new Set(milestones.map((item) => item.year)));
  const newestMilestoneYear = Number(milestoneYears[0]);
  const oldestMilestoneYear = Number(milestoneYears[milestoneYears.length - 1]);
  const timelineYears = [
    String(newestMilestoneYear + 1),
    ...milestoneYears,
    String(oldestMilestoneYear - 1),
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredOrganization, setHoveredOrganization] = useState<number | null>(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const activeMilestoneYear = milestones[activeMilestoneIndex]?.year ?? milestoneYears[0] ?? "";
  const activeMilestoneYearIndex = Math.max(timelineYears.indexOf(activeMilestoneYear), 0);
  const [milestoneYearStep, setMilestoneYearStep] = useState(() => {
    const availableHeight = 700 - 132;
    return availableHeight / Math.max(visibleMilestoneYearSlots - 1, 1);
  });
  const milestoneListRef = useRef<HTMLDivElement | null>(null);
  const milestoneRefs = useRef<Array<HTMLElement | null>>([]);
  const yearsViewportRef = useRef<HTMLDivElement | null>(null);

  const showPrev = () => {
    setActiveSlide((current) => (current - 1 + valueSlides.length) % valueSlides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % valueSlides.length);
  };

  const handleMilestoneWheel = (event: WheelEvent<HTMLDivElement>) => {
    const milestoneList = milestoneListRef.current;

    if (!milestoneList) {
      return;
    }

    const scrollDelta =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (scrollDelta === 0) {
      return;
    }

    const maxScrollTop = milestoneList.scrollHeight - milestoneList.clientHeight;
    const nextScrollTop = Math.min(
      Math.max(milestoneList.scrollTop + scrollDelta, 0),
      Math.max(maxScrollTop, 0),
    );

    if (Math.abs(nextScrollTop - milestoneList.scrollTop) < 0.5) {
      return;
    }

    event.preventDefault();
    milestoneList.scrollTop = nextScrollTop;
  };

  const previousSlide = valueSlides[(activeSlide - 1 + valueSlides.length) % valueSlides.length];
  const currentSlide = valueSlides[activeSlide];
  const nextSlide = valueSlides[(activeSlide + 1) % valueSlides.length];

  useEffect(() => {
    const updateMilestoneYearStep = () => {
      const yearsViewport = yearsViewportRef.current;

      if (!yearsViewport) {
        return;
      }

      const computedStyle = window.getComputedStyle(yearsViewport);
      const verticalPadding =
        parseFloat(computedStyle.paddingTop || "0") + parseFloat(computedStyle.paddingBottom || "0");
      const availableHeight = yearsViewport.clientHeight - verticalPadding;
      const nextStep = availableHeight / Math.max(visibleMilestoneYearSlots - 1, 1);

      setMilestoneYearStep((current) => (Math.abs(current - nextStep) < 1 ? current : nextStep));
    };

    updateMilestoneYearStep();

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            updateMilestoneYearStep();
          });

    if (resizeObserver && yearsViewportRef.current) {
      resizeObserver.observe(yearsViewportRef.current);
    }

    window.addEventListener("resize", updateMilestoneYearStep);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateMilestoneYearStep);
    };
  }, [visibleMilestoneYearSlots]);

  useEffect(() => {
    let frameId = 0;

    const updateActiveMilestone = () => {
      const milestoneList = milestoneListRef.current;
      const milestoneElements = milestoneRefs.current.filter(
        (element): element is HTMLElement => element !== null,
      );

      if (!milestoneList || !milestoneElements.length) {
        return;
      }

      if (milestoneList.scrollTop <= 8) {
        setActiveMilestoneIndex(0);
        return;
      }

      const listRect = milestoneList.getBoundingClientRect();
      const viewportCenter = listRect.top + listRect.height / 2;
      let nextActiveIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      milestoneElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextActiveIndex = index;
        }
      });

      setActiveMilestoneIndex((current) => (current === nextActiveIndex ? current : nextActiveIndex));
    };

    const requestMilestoneSync = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveMilestone();
      });
    };

    updateActiveMilestone();
    const milestoneList = milestoneListRef.current;

    milestoneList?.addEventListener("scroll", requestMilestoneSync, { passive: true });
    window.addEventListener("resize", requestMilestoneSync);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      milestoneList?.removeEventListener("scroll", requestMilestoneSync);
      window.removeEventListener("resize", requestMilestoneSync);
    };
  }, []);

  return (
    <div className="homepage about-page">
      <SiteHeader />

      <main className="about-page__main">
        <section className="about-hero">
          <div className="about-hero__bg">
            <img src={heroImage} alt="" />
          </div>
          <div className="about-hero__overlay" />
          <PageIntro className="about-hero__content" delay={0.08}>
            <h1>用媒体技术丰富人们的生活</h1>
            <p>关于马栏山音视频实验室</p>
          </PageIntro>
        </section>

        <PageIntro as="nav" className="about-subnav" aria-label="关于我们页面导航" delay={0.14}>
          <div className="about-subnav__inner">
            {aboutAnchorLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </PageIntro>

        <PageReveal as="section" className="about-section about-intro" id="about-intro">
          <div className="about-section__inner">
            <PageReveal as="h2" delay={0.04}>
              实验室简介
            </PageReveal>
            <PageReveal className="about-intro__copy" delay={0.08}>
              {aboutIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </PageReveal>
            <PageReveal className="about-intro__media" delay={0.12}>
              <video
                src={introVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="实验室简介影像"
              />
            </PageReveal>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-section about-organization" id="about-organization">
          <div className="about-section__inner">
            <PageReveal className="about-section__heading" delay={0.04}>
              <h2>实验室组织架构</h2>
              <p>在理事会领导下，实行主任负责制，构建协同高效的组织体系</p>
            </PageReveal>
            <div className="about-organization__grid">
              {organizationCards.map((item, index) => (
                <AboutOrganizationCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  hoverDescription={item.hoverDescription}
                  delay={0.08 + index * 0.06}
                  isHovered={hoveredOrganization === index}
                  onHoverStart={() => setHoveredOrganization(index)}
                  onHoverEnd={() =>
                    setHoveredOrganization((current) => (current === index ? null : current))
                  }
                />
              ))}
            </div>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-section about-milestones" id="about-milestones">
          <div className="about-section__inner about-milestones__inner">
            <PageReveal className="about-section__heading about-section__heading--center" delay={0.04}>
              <h2>实验室发展历程</h2>
            </PageReveal>
            <div className="about-milestones__content">
              <div
                ref={milestoneListRef}
                className="about-milestones__list"
                onWheel={handleMilestoneWheel}
              >
                {milestones.map((item, index) => (
                  <PageReveal key={item.year} className="about-milestone-reveal" delay={0.08 + index * 0.06}>
                    <AboutSectionContent
                      ref={(element) => {
                        milestoneRefs.current[index] = element;
                      }}
                      title={item.title}
                      body={item.body}
                      notes={item.notes}
                    />
                  </PageReveal>
                ))}
              </div>
              <PageReveal
                className="about-milestones__years"
                aria-hidden="true"
                delay={0.12}
                onWheel={handleMilestoneWheel}
              >
                <div ref={yearsViewportRef} className="about-milestones__years-viewport">
                  {timelineYears.map((year, yearIndex) => (
                    <div key={year} className="about-milestones__year-shell">
                      <motion.span
                        className={`about-milestones__year${
                          year === activeMilestoneYear ? " is-active" : ""
                        }`}
                        animate={{
                          y: (yearIndex - activeMilestoneYearIndex) * milestoneYearStep,
                          color:
                            year === activeMilestoneYear
                              ? "var(--about-milestones-year-active)"
                              : "var(--about-milestones-year-inactive)",
                        }}
                        transition={{
                          duration: reduceMotion ? 0.2 : 0.42,
                          ease: [0, 0.62, 0.5, 1],
                        }}
                      >
                        {year}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </PageReveal>
            </div>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-research">
          <div className="about-research__background" aria-hidden="true" />
          <div className="about-section__inner about-research__inner">
            <PageReveal as="h2" delay={0.04}>
              研究和创新
            </PageReveal>
            <div className="about-research__stats">
              {researchStats.map((item, index) => (
                <PageReveal
                  key={item.label}
                  className="about-research__stat"
                  delay={0.08 + index * 0.05}
                >
                  <AboutResearchStat value={item.value} label={item.label} />
                </PageReveal>
              ))}
            </div>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-section about-certifications">
          <div className="about-section__inner">
            <PageReveal className="about-section__heading about-section__heading--center" delay={0.04}>
              <h2>实验室荣誉资质</h2>
            </PageReveal>
            <div className="about-certifications__track">
              {certificationCards.map((item, index) => (
                <PageReveal as="article" key={item.id} className="about-cert-card" delay={0.08 + index * 0.04}>
                  <div className="about-cert-card__frame">
                    <img src={certLogo} alt="" />
                    <span>{item.title}</span>
                  </div>
                </PageReveal>
              ))}
            </div>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-section about-values" id="about-values">
          <div className="about-section__inner">
            <PageReveal className="about-section__heading about-section__heading--center" delay={0.04}>
              <h2>愿景，使命，价值观，文化</h2>
            </PageReveal>
            <PageReveal className="about-values__stage" delay={0.08}>
              <div className="about-values__peek">
                <img src={previousSlide.image} alt="" />
              </div>
              <article className={`about-values__slide${currentSlide.imageLeft ? " is-reversed" : ""}`}>
                <div className="about-values__copy">
                  <p>{currentSlide.eyebrow}</p>
                  <h3>{currentSlide.title}</h3>
                  <span>{currentSlide.body}</span>
                </div>
                <div className="about-values__image">
                  <img src={currentSlide.image} alt={currentSlide.title} />
                </div>
              </article>
              <div className="about-values__peek">
                <img src={nextSlide.image} alt="" />
              </div>
            </PageReveal>
            <PageReveal className="about-values__controls" delay={0.12}>
              <button type="button" aria-label="上一项" onClick={showPrev}>
                ‹
              </button>
              <button type="button" aria-label="下一项" onClick={showNext}>
                ›
              </button>
            </PageReveal>
          </div>
        </PageReveal>

        <PageReveal as="section" className="about-contact" id="about-contact">
          <PageReveal className="about-contact__card" delay={0.04}>
            <div>
              <h2>与实验室专家交流</h2>
              <p>Stay in the loop with everything you need to know.</p>
            </div>
            <form className="about-contact__form">
              <label className="about-contact__field">
                <input type="email" placeholder="Enter your email" />
                <span>
                  We care about your data in our <a href="#about-contact">privacy policy</a>.
                </span>
              </label>
              <Button size="lg" type="submit" variant="accent">
                Subscribe
              </Button>
            </form>
          </PageReveal>
        </PageReveal>
      </main>

      <PageReveal delay={0.02}>
        <SiteFooter />
      </PageReveal>
    </div>
  );
}
