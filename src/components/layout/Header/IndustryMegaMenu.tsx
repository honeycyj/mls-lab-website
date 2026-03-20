import {
  industryCollaborations,
  industryMenuFeature,
  industryMenuGroups,
} from "./industryMenuContent";

type IndustryMegaMenuProps = {
  contactHref: string;
  solutionsHref: string;
};

export function IndustryMegaMenu({ contactHref, solutionsHref }: IndustryMegaMenuProps) {
  const getLinkProps = (href?: string) => {
    const resolvedHref = href ?? solutionsHref;
    const isExternal = /^https?:\/\//.test(resolvedHref);

    return {
      href: resolvedHref,
      rel: isExternal ? "noreferrer" : undefined,
      target: isExternal ? "_blank" : undefined,
    };
  };

  return (
    <div className="site-header__industry-menu" aria-label="产业赋能菜单">
      <div className="site-header__industry-main">
        <section className="site-header__industry-section">
          <p className="site-header__industry-label">解决方案</p>
          <div className="site-header__industry-groups">
            {industryMenuGroups.map((group) => (
              <div
                key={group.title + group.items.map((item) => item.label).join("")}
                className="site-header__industry-group"
              >
                <p>{group.title}</p>
                <div>
                  {group.items.map((item) => (
                    <a key={item.label} {...getLinkProps(item.href)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="site-header__industry-section site-header__industry-section--collaboration">
          <p className="site-header__industry-label">与实验室合作</p>
          <div className="site-header__industry-collaborations">
            {industryCollaborations.map((item) => (
              <a key={item.title} className="site-header__industry-collab" href={contactHref}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <aside className="site-header__industry-feature">
        <div className="site-header__industry-feature-card">
          <div className="site-header__industry-feature-media">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              src={industryMenuFeature.video}
            />
          </div>
          <div className="site-header__industry-feature-copy">
            <h3>{industryMenuFeature.title}</h3>
            <p>{industryMenuFeature.description}</p>
          </div>
        </div>
        <a className="site-header__industry-cta" href={solutionsHref}>
          {industryMenuFeature.cta}
        </a>
      </aside>
    </div>
  );
}
