import { PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { PageSectionIntro } from "../../components/foundation/PageSectionIntro/PageSectionIntro";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { archiveIssues, featuredIssue, voicePageIntro, type VoiceIssue } from "./data/voicePageContent";

function VoiceIssueActions({ actions }: { actions: VoiceIssue["actions"] }) {
  return (
    <div className="voice-page__issue-actions">
      {actions.map((action) => (
        <a
          key={`${action.label}-${action.href}`}
          className={`voice-page__action voice-page__action--${action.variant ?? "secondary"}`}
          href={action.href}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}

function ArchiveIssueCard({ delay = 0, issue }: { delay?: number; issue: VoiceIssue }) {
  return (
    <PageReveal as="article" className="voice-page__archive-card" delay={delay}>
      <div className="voice-page__archive-cover">
        <img src={issue.image} alt={issue.title} loading="lazy" />
      </div>
      <div className="voice-page__archive-copy">
        <h3>{issue.title}</h3>
        <VoiceIssueActions actions={issue.actions} />
      </div>
    </PageReveal>
  );
}

export function VoicePage() {
  return (
    <div className="voice-page">
      <SiteHeader />

      <main className="voice-page__main">
        <PageSectionIntro
          className="voice-page__hero"
          eyebrow={voicePageIntro.eyebrow}
          title={voicePageIntro.title}
          description={voicePageIntro.description}
        />

        <section className="voice-page__featured">
          <PageReveal className="voice-page__featured-inner" delay={0.1}>
            <div className="voice-page__featured-cover">
              <img src={featuredIssue.image} alt={featuredIssue.title} />
            </div>
            <div className="voice-page__featured-copy">
              <h2>{featuredIssue.title}</h2>
              <p>{featuredIssue.description}</p>
              <VoiceIssueActions actions={featuredIssue.actions} />
            </div>
          </PageReveal>
        </section>

        <section className="voice-page__archive">
          <PageReveal as="h2" className="voice-page__archive-title" delay={0.08}>
            往期季刊
          </PageReveal>
          <div className="voice-page__archive-grid">
            {archiveIssues.map((issue, index) => (
              <ArchiveIssueCard
                key={`${issue.title}-${index}`}
                issue={issue}
                delay={0.12 + index * 0.04}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
