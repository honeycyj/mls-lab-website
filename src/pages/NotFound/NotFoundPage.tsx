import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";

const NOT_FOUND_TITLE = "404 未找到页面";
const NOT_FOUND_DESCRIPTION =
  "在复杂的声场与光场中，并非每一次偏移都是错误，只是这一次，请求尚未对准它的频率。";

export function NotFoundPage() {
  return (
    <div className="not-found-shell">
      <SiteHeader />

      <main className="not-found-page" id="top">
        <div className="not-found-page__layout" data-node-id="306:1024">
          <PageIntro className="not-found-page__copy" delay={0.05} data-node-id="322:1077">
            <h1 data-node-id="322:1074">{NOT_FOUND_TITLE}</h1>
            <p data-node-id="322:1075">{NOT_FOUND_DESCRIPTION}</p>
          </PageIntro>

          <PageReveal
            as="img"
            className="not-found-page__art"
            src="/assets/notfound/ascii-art-404.png"
            alt=""
            delay={0.12}
            amount={0.3}
            aria-hidden="true"
            data-node-id="322:1079"
          />
        </div>
      </main>

      <PageReveal delay={0.02}>
        <SiteFooter anchorHref="/" />
      </PageReveal>
    </div>
  );
}
