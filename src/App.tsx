import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { CapabilitiesSection } from "./components/sections/Capabilities/CapabilitiesSection";

const announcement =
  "ICASSP 2026 马栏山音视频实验室发布声纹识别领域最新创新成果";

const navItems = [
  { label: "实验室概况", href: "#overview" },
  { label: "能力引擎", href: "#capabilities" },
  { label: "产业赋能", href: "#solutions" },
  { label: "测试服务", href: "#media" },
  { label: "人才发展", href: "#team" },
  { label: "新闻动态", href: "#media" },
  { label: "实验室资源", href: "#contact" },
];

const newsLinks = [
  "干事创业 政绩观至关重要",
  "热解读｜“马不停蹄”勇向前",
  "中共中央国务院举行春节团拜会",
  "实验室主任涂永峰新年致辞",
  "热解读｜“马不停蹄”勇向前",
];

const mediaCards = [
  {
    tag: "AI音频处理",
    title: "研究：AI技术如何提升音频质量和用户体验",
    description:
      "《FutureSound》对全球音频工程师进行了调研，结果显示，AI技术在音频领域的应用正在迅速普及，并为用户带来了前所未有的听觉体验。",
    image: "/assets/home/media-card-1.png",
    cta: "探索更多",
  },
  {
    tag: "智能音频",
    title: "研究：智能音频技术在智能家居中的应用与发展",
    description:
      "《SmartHome Tech》发布报告，深入探讨了智能音频技术如何与智能家居系统融合，为用户提供更加便捷、舒适的生活体验。",
    image: "/assets/home/media-card-2.png",
    cta: "深入了解",
  },
  {
    tag: "Vivid生态应用",
    title: "2026马年春晚，马栏山音视频实验室助力Vivid生态应用",
    description:
      "除夕夜，观众在沉浸式视听体验中感受技术与艺术的交融，实验室能力贯穿晚会多项声画创新应用。",
    image: "/assets/home/media-card-3.png",
    cta: "发现更多",
  },
];

const solutionTabs = ["短剧行业", "智能ITO", "音视频技术", "星闪"];

const environmentImages = [
  "/assets/home/environment-1.png",
  "/assets/home/environment-2.png",
  "/assets/home/environment-3.png",
];

const awardLogos = [
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-2.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-3.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-4.png",
  "/assets/home/award-logo-1.png",
];

const footerLinks = ["关于我们", "联系我们", "招聘精英"];
const legalLinks = ["隐私权政策", "使用条款", "网站问题反馈"];
const socialLinks = ["微", "B", "红", "信", "抖"];
const easeOut = [0, 0.62, 0.5, 1] as const;

function HomePage() {
  const reduceMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0, amount = 0.2) => ({
    initial: { opacity: 0, ...(reduceMotion ? {} : { y: 48 }) },
    whileInView: { opacity: 1, ...(reduceMotion ? {} : { y: 0 }) },
    viewport: { once: true, amount },
    transition: { duration: reduceMotion ? 0.35 : 0.7, ease: easeOut, delay },
  });

  const intro = (delay = 0) => ({
    initial: { opacity: 0, ...(reduceMotion ? {} : { y: 24 }) },
    animate: { opacity: 1, ...(reduceMotion ? {} : { y: 0 }) },
    transition: { duration: reduceMotion ? 0.35 : 0.6, ease: easeOut, delay },
  });

  return (
    <div className="homepage">
      <motion.div className="homepage__announcement" {...intro(0)}>
        <div className="homepage__announcement-inner">
          <p>{announcement}</p>
          <a href="#media">立刻了解</a>
          <button type="button" aria-label="关闭公告">
            ×
          </button>
        </div>
      </motion.div>

      <motion.header className="homepage__header" {...intro(0.05)}>
        <div className="homepage__header-inner">
          <a className="homepage__logo" href="#top" aria-label="马栏山音视频实验室">
            <img src="/assets/home/nav-logo.png" alt="" />
          </a>
          <nav className="homepage__nav" aria-label="主导航">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="homepage__header-actions">
            <button type="button" aria-label="搜索">
              搜
            </button>
            <button type="button" aria-label="语言">
              中
            </button>
            <a className="homepage__login" href="#contact">
              登录
            </a>
          </div>
        </div>
      </motion.header>

      <main id="top">
        <section className="hero" id="overview">
          <div className="hero__content">
            <motion.p className="hero__eyebrow" {...intro(0.1)}>
              技术创新
            </motion.p>
            <motion.h1 {...intro(0.18)}>马栏山音视频获国际图像压缩挑战赛奖项</motion.h1>
            <motion.p className="hero__description" {...intro(0.26)}>
              首次参赛的马栏山音视频实验室夺得视频压缩赛道第二名
            </motion.p>
            <motion.a className="hero__button" href="#media" {...intro(0.34)}>
              了解更多
            </motion.a>
          </div>
          <motion.div className="hero__dots" aria-hidden="true" {...intro(0.42)}>
            <span className="is-active" />
            <span />
            <span />
          </motion.div>
        </section>

        <motion.section className="section section--media" id="media" {...reveal()}>
          <motion.div className="section__heading" {...reveal(0.04)}>
            <h2>媒体聚焦</h2>
            <p>了解实验室最新科研动态、媒体活动</p>
          </motion.div>

          <div className="media-grid">
            <motion.article className="media-lead" {...reveal(0.08)}>
              <img src="/assets/home/media-main.png" alt="媒体报道" />
              <div className="media-lead__overlay">
                <h3>丁薛祥在湖南调研时强调 以科技创新引领产业创新 打造国家重要先进制造业高地</h3>
                <a href="#contact">阅读文章</a>
              </div>
            </motion.article>

            <motion.aside className="media-aside" {...reveal(0.12)}>
              <a className="media-aside__more" href="#contact">
                <span>更多动态</span>
                <span>→</span>
              </a>
              <div className="media-aside__links">
                {newsLinks.map((item, index) => (
                  <a key={`${item}-${index}`} className={index === 2 ? "is-active" : ""} href="#contact">
                    {item}
                  </a>
                ))}
              </div>
            </motion.aside>
          </div>

          <div className="media-cards">
            {mediaCards.map((card, index) => (
              <motion.article key={card.title} className="media-card" {...reveal(0.08 + index * 0.08)}>
                <img src={card.image} alt="" />
                <div className="media-card__body">
                  <p className="media-card__tag">{card.tag}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="#contact">{card.cta}</a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <CapabilitiesSection />

        <section className="story-band">
          <motion.div className="story-band__inner" {...reveal()}>
            <div>
              <h2>用媒体技术丰富人们的生活</h2>
              <p>关于马栏山音视频实验室</p>
            </div>
            <a className="story-band__button" href="#contact">
              <span>了解更多</span>
              <span>↗</span>
            </a>
          </motion.div>
        </section>

        <motion.section className="section section--solutions" id="solutions" {...reveal()}>
          <motion.div className="section__heading section__heading--center" {...reveal(0.04)}>
            <h2>音视频各领域解决方案</h2>
            <p>从基础研究到产业应用的全链路创新体系</p>
          </motion.div>

          <motion.div className="solutions-panel" {...reveal(0.08)}>
            <div className="solutions-tabs" role="tablist" aria-label="解决方案类型">
              {solutionTabs.map((tab, index) => (
                <button key={tab} type="button" className={index === 0 ? "is-active" : ""} role="tab" aria-selected={index === 0}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="solutions-content">
              <motion.div className="solutions-copy" {...reveal(0.12)}>
                <div>
                  <h3>手持云台设备</h3>
                  <p>云相册焕新升级！仅需轻触快门，照片即刻上传至云端，助力企业实时捕捉活动现场，快速完成内容生成。</p>
                </div>
                <div>
                  <h3>AI 视频翻译</h3>
                  <p>
                    智马翻译是实验室打造的智能译制平台，实现像素级字幕擦除与声纹级高情感配音，支持英、日、韩等 20+
                    语种批量替换。
                  </p>
                </div>
                <a href="#contact">了解更多</a>
              </motion.div>

              <motion.div className="solutions-visual" {...reveal(0.18)}>
                <img src="/assets/home/solutions-device.png" alt="手持云台设备" />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <section className="team" id="team">
          <motion.div className="team__visual" {...reveal()}>
            <img src="/assets/home/team-photo.png" alt="人才团队" />
            <a href="#contact">
              <span>人才团队</span>
              <span>↗</span>
            </a>
          </motion.div>
          <div className="team__stats">
            <motion.div {...reveal(0.04)}>
              <strong>63%</strong>
              <span>employees with master&apos;s degree</span>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <strong>10+</strong>
              <span>employees</span>
            </motion.div>
            <motion.div {...reveal(0.16)}>
              <strong>1/2</strong>
              <span>Non-local staff</span>
            </motion.div>
            <motion.div {...reveal(0.22)}>
              <strong>50%</strong>
              <span>Fortune 500 experience</span>
            </motion.div>
          </div>
        </section>

        <motion.section className="section section--environment" {...reveal()}>
          <motion.div className="section__heading section__heading--wide" {...reveal(0.04)}>
            <h2>实验室环境</h2>
            <div className="environment__controls" aria-hidden="true">
              <button type="button">‹</button>
              <button type="button">›</button>
            </div>
          </motion.div>
          <div className="environment__gallery">
            {environmentImages.map((image, index) => (
              <motion.img key={image} src={image} alt={`实验室环境 ${index + 1}`} {...reveal(0.08 + index * 0.08)} />
            ))}
          </div>
          <motion.div className="environment__dots" aria-hidden="true" {...reveal(0.12)}>
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
            <span />
          </motion.div>
        </motion.section>

        <section className="awards">
          <motion.div className="awards__inner" {...reveal()}>
            <motion.h2 {...reveal(0.04)}>荣誉和奖项</motion.h2>
            <div className="awards__grid">
              {awardLogos.map((logo, index) => (
                <motion.img key={`${logo}-${index}`} src={logo} alt="" {...reveal(0.08 + (index % 3) * 0.06)} />
              ))}
            </div>
          </motion.div>
        </section>

        <section className="contact-cta" id="contact">
          <motion.div className="contact-cta__inner" {...reveal()}>
            <motion.p className="contact-cta__eyebrow" {...reveal(0.02)}>
              Contact
            </motion.p>
            <motion.h2 {...reveal(0.08)}>联系我们，掌握最新产品功能、版本发布、应用场景、专家视频对话及学习机会。</motion.h2>
            <motion.a href="mailto:honeycyj@live.com" {...reveal(0.14)}>
              <span>Get In Touch</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </section>
      </main>

      <motion.footer className="site-footer-home" {...reveal()}>
        <motion.div className="site-footer-home__intro" {...reveal(0.04)}>
          <h2>马栏山音视频实验室</h2>
          <p>
            马栏山音视频实验室由湖南省政府和长沙市政府联合共建，定位为新型研发机构。致力于推动全球领先的音视频技术研发与创新，构建音视频“采、编、播、传、显”全链条科技创新体系。
          </p>
        </motion.div>

        <motion.div className="site-footer-home__bar" {...reveal(0.08)}>
          <div className="site-footer-home__links">
            <img src="/assets/home/nav-logo.png" alt="" />
            <div>
              {footerLinks.map((item) => (
                <a key={item} href="#contact">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="site-footer-home__socials" aria-label="社交平台">
            {socialLinks.map((item) => (
              <a key={item} href="#contact">
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div className="site-footer-home__legal" {...reveal(0.12)}>
          <div>
            {legalLinks.map((item) => (
              <a key={item} href="#contact">
                {item}
              </a>
            ))}
          </div>
          <p>Copyright © 2026 马栏山音视频实验室 版权所有</p>
          <p>粤ICP备2022092332号</p>
        </motion.div>
      </motion.footer>
    </div>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HomePage />
    </MotionConfig>
  );
}

export default App;
