export type NewsArticleAuthor = {
  avatar: string;
  name: string;
  title: string;
};

type NewsBaseBlock = {
  id: string;
};

export type NewsTextBlock = NewsBaseBlock & {
  heading?: string;
  orderedList?: string[];
  paragraphs: string[];
  tone?: "body" | "lead";
  type: "text";
};

export type NewsDividerBlock = NewsBaseBlock & {
  type: "divider";
};

export type NewsQuoteBlock = NewsBaseBlock & {
  author: NewsArticleAuthor;
  quote: string;
  type: "quote";
};

export type NewsImageBlock = NewsBaseBlock & {
  alt: string;
  caption?: string;
  src: string;
  type: "image";
};

export type NewsSummaryBlock = NewsBaseBlock & {
  paragraphs: string[];
  title: string;
  type: "summary";
};

export type NewsArticleBlock =
  | NewsTextBlock
  | NewsDividerBlock
  | NewsQuoteBlock
  | NewsImageBlock
  | NewsSummaryBlock;

export type NewsArticleSource = {
  label: string;
  url: string;
};

export type NewsArticleHomeLead = {
  cta: string;
  image: string;
};

export type NewsArticleHomeCard = {
  cta: string;
  description: string;
  image: string;
};

export type NewsArticleHomeMedia = {
  card?: NewsArticleHomeCard;
  lead?: NewsArticleHomeLead;
};

export type NewsArticle = {
  blocks: NewsArticleBlock[];
  heroImage: {
    alt: string;
    src: string;
  };
  homeMedia?: NewsArticleHomeMedia;
  publishedAt: string;
  slug: string;
  source?: NewsArticleSource;
  summary: string;
  title: string;
};
