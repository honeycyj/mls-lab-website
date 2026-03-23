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

export type NewsArticle = {
  blocks: NewsArticleBlock[];
  heroImage: {
    alt: string;
    src: string;
  };
  publishedAt: string;
  slug: string;
  summary: string;
  title: string;
};

export const FEATURED_NEWS_ARTICLE_SLUG = "ai-audio-quality-user-experience";

export function getNewsArticleHref(slug: string) {
  return `/news/${slug}`;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: FEATURED_NEWS_ARTICLE_SLUG,
    title: "研究：AI技术如何提升音频质量和用户体验",
    publishedAt: "2026年1月22日",
    summary:
      "《FutureSound》对全球音频工程师与内容平台进行了调研，结果显示，AI正在从音频降噪、空间感增强、个性化听感适配到多终端分发等环节持续提升用户体验，并推动专业能力以更低门槛进入家庭影音与智能设备场景。",
    heroImage: {
      src: "/assets/news/ceic-2025/hero-image.png",
      alt: "实验室创新产品在户外场景中的展示画面",
    },
    blocks: [
      {
        id: "opening",
        type: "text",
        tone: "lead",
        paragraphs: [
          "调研显示，音频行业对AI的关注点已从“单点工具提效”转向“完整体验升级”。无论是家庭影院、移动内容创作，还是智能家居终端，用户更关注的是声音是否更清晰、操作是否更直觉、设备是否能在不同场景下自动给出合适的音频表现。",
        ],
      },
      {
        id: "divider-1",
        type: "divider",
      },
      {
        id: "quote-1",
        type: "quote",
        quote:
          "AI并不是替代创作者或工程师，而是在复杂声场校准、内容理解和交互链路上，把专业级音频体验更稳定地交付给普通用户。",
        author: {
          avatar: "/assets/news/ceic-2025/quote-avatar-image.png",
          name: "FutureSound 研究团队",
          title: "全球音频工程调研项目",
        },
      },
      {
        id: "body-1",
        type: "text",
        paragraphs: [
          "从平台侧看，AI让语音增强、环境噪声识别、音量均衡与回声消除从后期处理能力，逐步前移为实时体验能力。对用户而言，这意味着在听音乐、看视频、进行远程会议或直播互动时，设备可以更快理解当前环境，并基于场景动态调优参数。",
        ],
      },
      {
        id: "heading-1",
        type: "text",
        heading: "AI正在重塑家庭影音体验",
        paragraphs: [
          "在家庭场景中，AI音频技术最直接的价值体现在“听得更清楚”和“操作更省心”两个层面。系统可以结合房间空间、扬声器布局与内容类型自动优化声音路径，也能针对老人、儿童或高频内容消费用户给出更个性化的声音风格建议。",
          "当音频质量提升与交互门槛下降同时发生时，用户对设备的容忍度会下降，对整体体验的一致性要求会显著提高。这也是越来越多厂商开始把AI能力布局到芯片、系统和内容服务三层的核心原因。",
        ],
      },
      {
        id: "heading-2",
        type: "text",
        heading: "从专业算法到简单易用并存",
        paragraphs: [
          "调研样本中，多数团队认为，真正推动AI音频普及的不是某一项炫技功能，而是“专业效果”和“低学习成本”能够同时成立。越来越多产品正在将复杂算法隐藏在易理解的交互之后，让用户通过更少步骤获得更稳定的结果。",
        ],
        orderedList: [
          "自动识别语音、音乐、影院等内容类型，动态切换最优音效策略。",
          "在多终端、多房间和多噪声环境下保持更稳定的音量、清晰度与空间感表现。",
          "将过去需要专业人员参与的校准流程压缩为可视化、可引导、可复用的日常操作。",
        ],
      },
      {
        id: "image-1",
        type: "image",
        src: "/assets/news/ceic-2025/body-image-2.png",
        alt: "用户在城市户外场景中使用智能设备进行内容创作",
        caption: "AI驱动的智能终端体验场景。",
      },
      {
        id: "body-2",
        type: "text",
        paragraphs: [
          "研究还指出，音频体验的竞争已经从单纯追求参数领先，转向围绕真实使用情境构建更完整的用户旅程。产品如果能够在初次上手、内容消费、多人共享和跨设备切换等环节持续减少摩擦，就更容易建立长期留存和口碑传播。",
          "这也意味着，未来的音频产品设计不只要关注声音本身，还需要将推荐、引导、控制与反馈统一为一个连贯系统，让用户在不同场景下都能感受到清晰、自然且可信赖的声音体验。",
        ],
      },
      {
        id: "summary-1",
        type: "summary",
        title: "总结",
        paragraphs: [
          "AI正持续推动音频行业从“功能叠加”走向“体验重构”。它既提升了降噪、增强、校准等核心音频能力，也重新定义了人与设备、人与内容之间的交互方式。",
          "对于新闻详情页这样的模板场景，未来只需替换标题、日期、摘要、正文区块与图片资源，即可复用同一套页面结构完成更新，同时保持统一的品牌视觉与阅读节奏。",
        ],
      },
    ],
  },
];

export const newsArticlesBySlug = Object.fromEntries(
  newsArticles.map((article) => [article.slug, article]),
) as Record<string, NewsArticle>;
