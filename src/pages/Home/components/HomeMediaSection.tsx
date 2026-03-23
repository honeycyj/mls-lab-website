import { SectionHeading } from "../../../components/foundation/SectionHeading/SectionHeading";
import { PageReveal } from "../../../components/foundation/PageMotion/PageMotion";
import {
  mediaCards,
  mediaLead,
  mediaMoreLink,
  newsLinks,
} from "../homePageContent";
import { EditableLinkAnchor } from "./EditableLinkAnchor";

const homeMediaSectionContent = {
  title: "媒体聚焦",
  subtitle: "了解实验室最新科研动态、媒体活动",
};

export function HomeMediaSection() {
  return (
    <PageReveal as="section" className="section section--media" id="media">
      <PageReveal delay={0.04}>
        <SectionHeading title={homeMediaSectionContent.title} subtitle={homeMediaSectionContent.subtitle} />
      </PageReveal>

      <div className="media-grid">
        <PageReveal delay={0.08}>
          <EditableLinkAnchor className="media-lead" href={mediaLead.href} aria-label={mediaLead.title}>
            <div className="media-lead__media">
              <img src={mediaLead.image} alt="媒体报道" />
            </div>
            <div className="media-lead__overlay">
              <h3>{mediaLead.title}</h3>
              <span className="media-lead__cta">{mediaLead.cta}</span>
            </div>
          </EditableLinkAnchor>
        </PageReveal>

        <PageReveal as="aside" className="media-aside" delay={0.12}>
          <EditableLinkAnchor className="media-aside__more" href={mediaMoreLink.href}>
            <span>{mediaMoreLink.label}</span>
            <span>→</span>
          </EditableLinkAnchor>
          <div className="media-aside__links">
            {newsLinks.map((item, index) => (
              <EditableLinkAnchor key={`${item.label}-${index}`} href={item.href}>
                <span className="media-aside__link-label">{item.label}</span>
              </EditableLinkAnchor>
            ))}
          </div>
        </PageReveal>
      </div>

      <div className="media-cards">
        {mediaCards.map((card, index) => (
          <PageReveal key={card.title} delay={0.08 + index * 0.08}>
            <EditableLinkAnchor className="media-card" href={card.href} aria-label={card.title}>
              <div className="media-card__media">
                <img src={card.image} alt="" />
              </div>
              <div className="media-card__body">
                <div className="media-card__copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="media-card__meta">
                  <span>{card.date}</span>
                  <span className="media-card__cta">{card.cta}</span>
                </div>
              </div>
            </EditableLinkAnchor>
          </PageReveal>
        ))}
      </div>
    </PageReveal>
  );
}
