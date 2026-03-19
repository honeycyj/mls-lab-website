const footerLinks = ["关于我们", "联系我们", "招聘精英"];
const legalLinks = ["隐私权政策", "使用条款", "网站问题反馈"];
const socialLinks = ["微", "B", "红", "信", "抖"];

type SiteFooterProps = {
  anchorHref: string;
};

export function SiteFooter({ anchorHref }: SiteFooterProps) {
  return (
    <footer className="site-footer-home">
      <div className="site-footer-home__intro">
        <h2>马栏山音视频实验室</h2>
        <p>
          马栏山音视频实验室由湖南省政府和长沙市政府联合共建，定位为新型研发机构。致力于推动全球领先的音视频技术研发与创新，构建音视频“采、编、播、传、显”全链条科技创新体系。
        </p>
      </div>

      <div className="site-footer-home__bar">
        <div className="site-footer-home__links">
          <img src="/assets/home/nav-logo.svg" alt="" />
          <div>
            {footerLinks.map((item) => (
              <a key={item} href={anchorHref}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer-home__socials" aria-label="社交平台">
          {socialLinks.map((item) => (
            <a key={item} href={anchorHref}>
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer-home__legal">
        <div>
          {legalLinks.map((item) => (
            <a key={item} href={anchorHref}>
              {item}
            </a>
          ))}
        </div>
        <p>Copyright © 2026 马栏山音视频实验室 版权所有</p>
        <p>粤ICP备2022092332号</p>
      </div>
    </footer>
  );
}
