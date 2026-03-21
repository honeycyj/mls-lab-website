import { PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { PageSectionIntro } from "../../components/foundation/PageSectionIntro/PageSectionIntro";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import {
  departmentLeads,
  featuredLeader,
  leadershipTeam,
  teamPageIntro,
  type TeamMember,
} from "./data/teamPageContent";

function TeamMemberCard({
  className = "",
  delay = 0,
  member,
}: {
  className?: string;
  delay?: number;
  member: TeamMember;
}) {
  return (
    <PageReveal as="article" className={`team-member ${className}`.trim()} delay={delay}>
      <div className="team-member__portrait">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>
      <div className="team-member__copy">
        <h2>{member.name}</h2>
        <p>{member.role}</p>
      </div>
    </PageReveal>
  );
}

export function TeamPage() {
  return (
    <div className="team-page">
      <SiteHeader />

      <main className="team-page__main">
        <PageSectionIntro
          className="team-page__hero"
          eyebrow={teamPageIntro.eyebrow}
          title={teamPageIntro.title}
          description={teamPageIntro.description}
        />

        <PageReveal className="team-page__divider" delay={0.1}>
          <div />
        </PageReveal>

        <section className="team-page__members-section">
          <div className="team-page__members-inner">
            <TeamMemberCard member={featuredLeader} className="team-member--featured" delay={0.08} />

            <div className="team-page__grid">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} delay={0.12 + index * 0.04} />
              ))}
            </div>

            <div className="team-page__grid team-page__grid--three">
              {departmentLeads.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} delay={0.2 + index * 0.04} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
