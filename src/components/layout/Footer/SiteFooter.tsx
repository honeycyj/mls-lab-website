import {
  footerCopyright,
  footerDescription,
  footerLinks,
  footerTitle,
  legalLinks,
  socialLinks,
} from "./footerContent";

type SiteFooterProps = {
  anchorHref: string;
};

export function SiteFooter({ anchorHref }: SiteFooterProps) {
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
            <h2>{footerTitle}</h2>
            <p>{footerDescription}</p>
          </div>
        </div>

        <div className="site-footer__bar">
          <div className="site-footer__links">
            <img className="site-footer__mini-logo" src="/assets/footer/logo-mini.svg" alt="" />
            <div>
              {footerLinks.map((item) => (
                <a key={item} href={anchorHref}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="site-footer__socials" aria-label="社交平台">
            {socialLinks.map((item) => (
              <a key={item.alt} href={anchorHref} aria-label={item.alt}>
                <img src={item.src} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__legal">
          <div>
            {legalLinks.map((item) => (
              <a key={item} href={anchorHref}>
                {item}
              </a>
            ))}
          </div>
          <p>{footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
