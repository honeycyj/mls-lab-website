import {
  CES_CAMERA_ARTICLE_SLUG,
  FEATURED_NEWS_ARTICLE_SLUG,
  GAS_AWARDS_ARTICLE_SLUG,
  HUNAN_RESEARCH_ARTICLE_SLUG,
  newsArticles,
} from "./newsArticles";
import type { NewsArticle } from "./newsSchema";

export type HomeMediaLeadArticle = {
  cta: string;
  href: string;
  image: string;
  title: string;
};

export type HomeMediaCardArticle = {
  cta: string;
  date: string;
  description: string;
  href: string;
  image: string;
  title: string;
};

export type HomeMediaLink = {
  href: string;
  label: string;
};

export type HomeMediaCollection = {
  cards: HomeMediaCardArticle[];
  lead: HomeMediaLeadArticle;
  links: HomeMediaLink[];
  moreLink: HomeMediaLink;
};

function buildArticlesBySlug(articles: NewsArticle[]) {
  const entries = articles.map((article) => [article.slug, article] as const);
  const uniqueSlugs = new Set(entries.map(([slug]) => slug));

  if (uniqueSlugs.size !== entries.length) {
    throw new Error("Duplicate news article slug detected.");
  }

  return Object.freeze(Object.fromEntries(entries) as Record<string, NewsArticle>);
}

function requireArticle(slug: string) {
  const article = newsArticlesBySlug[slug];

  if (!article) {
    throw new Error(`Unknown news article slug: ${slug}`);
  }

  return article;
}

export function getNewsArticleHref(slug: string) {
  return `/news/${slug}`;
}

export function getNewsArticleBySlug(slug: string) {
  return newsArticlesBySlug[slug];
}

export function requireHomeMediaLeadArticle(slug: string): HomeMediaLeadArticle {
  const article = requireArticle(slug);

  if (!article.homeMedia?.lead) {
    throw new Error(`News article ${slug} is missing home lead media configuration.`);
  }

  return {
    title: article.title,
    image: article.homeMedia.lead.image,
    cta: article.homeMedia.lead.cta,
    href: getNewsArticleHref(article.slug),
  };
}

export function requireHomeMediaCardArticle(slug: string): HomeMediaCardArticle {
  const article = requireArticle(slug);

  if (!article.homeMedia?.card) {
    throw new Error(`News article ${slug} is missing home card media configuration.`);
  }

  return {
    title: article.title,
    description: article.homeMedia.card.description,
    image: article.homeMedia.card.image,
    date: article.publishedAt,
    cta: article.homeMedia.card.cta,
    href: getNewsArticleHref(article.slug),
  };
}

const homeMediaCardSlugs = [
  FEATURED_NEWS_ARTICLE_SLUG,
  GAS_AWARDS_ARTICLE_SLUG,
  CES_CAMERA_ARTICLE_SLUG,
] as const;

const homeMediaLinks: HomeMediaLink[] = [
  { label: "听见差异，建立标准｜实验室金耳朵队伍持续壮大", href: "" },
  { label: "荣誉揭晓！马栏山音视频实验室三项成果斩获GAS 2026消费电子科创优秀案例", href: getNewsArticleHref(GAS_AWARDS_ARTICLE_SLUG) },
  { label: "马栏山音视频实验室首位博士后开题报告会顺利召开", href: "" },
  { label: "ICASSP 2026 | 实验室发布声纹识别领域最新创新成果", href: "" },
];

export function getHomeMediaCollection(): HomeMediaCollection {
  return {
    lead: requireHomeMediaLeadArticle(HUNAN_RESEARCH_ARTICLE_SLUG),
    cards: homeMediaCardSlugs.map(requireHomeMediaCardArticle),
    links: homeMediaLinks,
    moreLink: {
      label: "更多动态",
      href: "",
    },
  };
}

export const newsArticlesBySlug = buildArticlesBySlug(newsArticles);
