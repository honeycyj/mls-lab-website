import { useParams } from "react-router";
import { PageIntro, PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import { NotFoundPage } from "../NotFound/NotFoundPage";
import { NewsArticleContent } from "./components/NewsArticleContent";
import { getNewsArticleBySlug } from "./data/newsRepository";

export function NewsArticlePage() {
  const { slug } = useParams();

  const article = slug ? getNewsArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="news-page">
      <SiteHeader />

      <main className="news-page__main" id="top">
        <section className="news-page__hero" data-node-id="1187:7068">
          <div className="news-page__hero-inner">
            <div className="news-page__hero-copy" data-node-id="1187:7070">
              <div className="news-page__title-group" data-node-id="1187:7072">
                <PageIntro as="h1" className="news-page__title" delay={0.06} data-node-id="1187:7074">
                  {article.title}
                </PageIntro>
                <PageIntro as="p" className="news-page__date" delay={0.12} data-node-id="1330:5232">
                  {article.publishedAt}
                </PageIntro>
              </div>
              <PageIntro as="p" className="news-page__summary" delay={0.18} data-node-id="1187:7075">
                {article.summary}
              </PageIntro>
            </div>

            <PageIntro className="news-page__hero-media" delay={0.24} data-node-id="1233:5012">
              <img src={article.heroImage.src} alt={article.heroImage.alt} />
            </PageIntro>
          </div>
        </section>

        <section className="news-page__body" data-node-id="1187:7092">
          <div className="news-page__body-inner">
            <div className="news-page__article" data-node-id="1187:7094">
              <NewsArticleContent blocks={article.blocks} />
            </div>
          </div>
        </section>
      </main>

      <PageReveal delay={0.02}>
        <SiteFooter />
      </PageReveal>
    </div>
  );
}
