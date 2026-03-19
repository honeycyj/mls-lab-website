import { PageReveal } from "../../../components/foundation/PageMotion/PageMotion";
import {
  mediaCards,
  mediaLead,
  mediaMoreLink,
  newsLinks,
} from "../homePageContent";
import { EditableLinkAnchor } from "./EditableLinkAnchor";

export function HomeMediaSection() {
  return (
    <PageReveal as="section" className="section section--media" id="media">
      <PageReveal className="section__heading" delay={0.04}>
        <h2>媒体聚焦</h2>
        <p>了解实验室最新科研动态、媒体活动</p>
      </PageReveal>

      <div className="media-grid">
        <PageReveal as="article" className="media-lead" delay={0.08}>
          <div className="media-lead__media">
            <img src={mediaLead.image} alt="媒体报道" />
          </div>
          <div className="media-lead__overlay">
            <h3>{mediaLead.title}</h3>
            <EditableLinkAnchor href={mediaLead.href}>{mediaLead.cta}</EditableLinkAnchor>
          </div>
        </PageReveal>

        <PageReveal as="aside" className="media-aside" delay={0.12}>
          <EditableLinkAnchor className="media-aside__more" href={mediaMoreLink.href}>
            <span>{mediaMoreLink.label}</span>
            <span>→</span>
          </EditableLinkAnchor>
          <div className="media-aside__links">
            {newsLinks.map((item, index) => (
              <EditableLinkAnchor key={`${item.label}-${index}`} href={item.href}>
                {item.label}
              </EditableLinkAnchor>
            ))}
          </div>
        </PageReveal>
      </div>

      <div className="media-cards">
        {mediaCards.map((card, index) => (
          <PageReveal as="article" key={card.title} className="media-card" delay={0.08 + index * 0.08}>
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
                <EditableLinkAnchor href={card.href}>{card.cta}</EditableLinkAnchor>
              </div>
            </div>
          </PageReveal>
        ))}
      </div>
    </PageReveal>
  );
}
