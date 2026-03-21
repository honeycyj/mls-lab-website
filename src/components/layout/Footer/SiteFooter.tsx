import {
  siteFooterContent,
} from "../../../content/site/footer";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <img
            className="site-footer__brand site-footer__brand--desktop"
            src="/assets/footer/brand-mark.svg"
            alt=""
          />
          <div className="site-footer__intro-copy">
            <img
              className="site-footer__brand site-footer__brand--mobile"
              src="/assets/footer/logo-mini.svg"
              alt=""
            />
            <h2>{siteFooterContent.title}</h2>
            <p>{siteFooterContent.description}</p>
          </div>
        </div>

        <div className="site-footer__bar">
          <div className="site-footer__links">
            <img className="site-footer__mini-logo" src="/assets/footer/logo-mini.svg" alt="" />
            <div>
              {siteFooterContent.primaryLinks.map((item) => (
                <a key={item.label} href={item.href} rel={item.rel} target={item.target}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="site-footer__socials" aria-label="社交平台">
            {siteFooterContent.socialLinks.map((item) => (
              <a key={item.alt} href={item.href} aria-label={item.alt} rel={item.rel} target={item.target}>
                <img src={item.src} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__legal">
          <div>
            {siteFooterContent.legalLinks.map((item) => (
              <a key={item.label} href={item.href} rel={item.rel} target={item.target}>
                {item.label}
              </a>
            ))}
          </div>
          <p>{siteFooterContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
