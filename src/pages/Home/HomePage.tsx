import { useState } from "react";
import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { CapabilitiesSection } from "../../components/sections/Capabilities/CapabilitiesSection";
import { HomeMediaSection } from "./components/HomeMediaSection";
import {
  announcement,
  awardLogos,
  environmentImages,
  solutionTabs,
} from "./homePageContent";
function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function HomePage() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="homepage">
      {showAnnouncement ? (
        <PageIntro className="homepage__announcement">
          <div className="homepage__announcement-inner">
            <div className="homepage__announcement-copy">
              <p>{announcement}</p>
              <a href="#media">立刻了解</a>
            </div>
            <button type="button" aria-label="关闭公告" onClick={() => setShowAnnouncement(false)}>
              <CloseIcon />
            </button>
          </div>
        </PageIntro>
      ) : null}

      <SiteHeader />

      <main id="top">
        <section className="hero" id="overview">
          <div className="hero__content">
            <PageIntro as="p" className="hero__eyebrow" delay={0.1}>
              技术创新
            </PageIntro>
            <PageIntro as="h1" delay={0.18}>
              马栏山音视频获国际图像压缩挑战赛奖项
            </PageIntro>
            <PageIntro as="p" className="hero__description" delay={0.26}>
              首次参赛的马栏山音视频实验室夺得视频压缩赛道第二名
            </PageIntro>
            <PageIntro as="a" className="hero__button" href="#media" delay={0.34}>
              了解更多
            </PageIntro>
          </div>
          <PageIntro className="hero__dots" aria-hidden="true" delay={0.42}>
            <span className="is-active" />
            <span />
            <span />
          </PageIntro>
        </section>

        <HomeMediaSection />

        <CapabilitiesSection />

        <section className="story-band">
          <PageReveal className="story-band__inner">
            <div>
              <h2>用媒体技术丰富人们的生活</h2>
              <p>关于马栏山音视频实验室</p>
            </div>
            <a className="story-band__button" href="#contact">
              <span>了解更多</span>
              <span>↗</span>
            </a>
          </PageReveal>
        </section>

        <PageReveal as="section" className="section section--solutions" id="solutions">
          <PageReveal className="section__heading section__heading--center" delay={0.04}>
            <h2>音视频各领域解决方案</h2>
            <p>从基础研究到产业应用的全链路创新体系</p>
          </PageReveal>

          <PageReveal className="solutions-panel" delay={0.08}>
            <div className="solutions-tabs" role="tablist" aria-label="解决方案类型">
              {solutionTabs.map((tab, index) => (
                <button key={tab} type="button" className={index === 0 ? "is-active" : ""} role="tab" aria-selected={index === 0}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="solutions-content">
              <PageReveal className="solutions-copy" delay={0.12}>
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
              </PageReveal>

              <PageReveal className="solutions-visual" delay={0.18}>
                <img src="/assets/home/solutions-device.png" alt="手持云台设备" />
              </PageReveal>
            </div>
          </PageReveal>
        </PageReveal>

        <section className="team" id="team">
          <PageReveal className="team__visual">
            <img src="/assets/home/team-photo.png" alt="人才团队" />
            <a href="#contact">
              <span>人才团队</span>
              <span>↗</span>
            </a>
          </PageReveal>
          <div className="team__stats">
            <PageReveal delay={0.04}>
              <strong>63%</strong>
              <span>employees with master&apos;s degree</span>
            </PageReveal>
            <PageReveal delay={0.1}>
              <strong>10+</strong>
              <span>employees</span>
            </PageReveal>
            <PageReveal delay={0.16}>
              <strong>1/2</strong>
              <span>Non-local staff</span>
            </PageReveal>
            <PageReveal delay={0.22}>
              <strong>50%</strong>
              <span>Fortune 500 experience</span>
            </PageReveal>
          </div>
        </section>

        <PageReveal as="section" className="section section--environment">
          <PageReveal className="section__heading section__heading--wide" delay={0.04}>
            <h2>实验室环境</h2>
            <div className="environment__controls" aria-hidden="true">
              <button type="button">‹</button>
              <button type="button">›</button>
            </div>
          </PageReveal>
          <div className="environment__gallery">
            {environmentImages.map((image, index) => (
              <PageReveal
                as="img"
                key={image}
                src={image}
                alt={`实验室环境 ${index + 1}`}
                delay={0.08 + index * 0.08}
              />
            ))}
          </div>
          <PageReveal className="environment__dots" aria-hidden="true" delay={0.12}>
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
            <span />
          </PageReveal>
        </PageReveal>

        <section className="awards">
          <PageReveal className="awards__inner">
            <PageReveal as="h2" delay={0.04}>
              荣誉和奖项
            </PageReveal>
            <div className="awards__grid">
              {awardLogos.map((logo, index) => (
                <PageReveal as="img" key={`${logo}-${index}`} src={logo} alt="" delay={0.08 + (index % 3) * 0.06} />
              ))}
            </div>
          </PageReveal>
        </section>

        <section className="contact-cta" id="contact">
          <PageReveal className="contact-cta__inner">
            <PageReveal as="p" className="contact-cta__eyebrow" delay={0.02}>
              Contact
            </PageReveal>
            <PageReveal as="h2" delay={0.08}>
              联系我们，掌握最新产品功能、版本发布、应用场景、专家视频对话及学习机会。
            </PageReveal>
            <PageReveal as="a" href="mailto:honeycyj@live.com" delay={0.14}>
              <span>Get In Touch</span>
              <span>→</span>
            </PageReveal>
          </PageReveal>
        </section>
      </main>

      <PageReveal delay={0.02}>
        <SiteFooter anchorHref="#contact" />
      </PageReveal>
    </div>
  );
}
