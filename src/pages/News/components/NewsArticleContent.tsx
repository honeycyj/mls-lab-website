import { PageReveal } from "../../../components/foundation/PageMotion/PageMotion";
import type { NewsArticleBlock } from "../data/newsSchema";

type NewsArticleContentProps = {
  blocks: NewsArticleBlock[];
};

export function NewsArticleContent({ blocks }: NewsArticleContentProps) {
  return (
    <div className="news-article__content">
      {blocks.map((block, index) => {
        const delay = Math.min(0.08 + index * 0.04, 0.3);

        if (block.type === "divider") {
          return <PageReveal key={block.id} className="news-article__divider" delay={delay} aria-hidden="true" />;
        }

        if (block.type === "quote") {
          return (
            <PageReveal key={block.id} className="news-article__quote" delay={delay}>
              <div className="news-article__quote-accent" aria-hidden="true" />
              <div className="news-article__quote-wrap">
                <p className="news-article__quote-text">“ {block.quote} ”</p>
                <div className="news-article__quote-author">
                  <div className="news-article__quote-avatar">
                    <img src={block.author.avatar} alt={block.author.name} />
                  </div>
                  <div className="news-article__quote-meta">
                    <p>{block.author.name}</p>
                    <span>{block.author.title}</span>
                  </div>
                </div>
              </div>
            </PageReveal>
          );
        }

        if (block.type === "image") {
          return (
            <PageReveal key={block.id} className="news-article__figure" delay={delay}>
              <div className="news-article__figure-media">
                <img src={block.src} alt={block.alt} />
              </div>
              {block.caption ? <p className="news-article__figure-caption">{block.caption}</p> : null}
            </PageReveal>
          );
        }

        if (block.type === "summary") {
          return (
            <PageReveal key={block.id} className="news-article__summary" delay={delay}>
              <h2>{block.title}</h2>
              <div className="news-article__summary-copy">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </PageReveal>
          );
        }

        return (
          <PageReveal
            key={block.id}
            className={`news-article__text-block${block.tone === "lead" ? " news-article__text-block--lead" : ""}`}
            delay={delay}
          >
            {block.heading ? <h2>{block.heading}</h2> : null}
            <div className={`news-article__rich-text${block.tone === "lead" ? " is-lead" : ""}`}>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.orderedList ? (
                <ol>
                  {block.orderedList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </PageReveal>
        );
      })}
    </div>
  );
}
