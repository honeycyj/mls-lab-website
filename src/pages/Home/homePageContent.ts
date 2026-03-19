type EditableLink = {
  href: string;
};

type MediaLead = EditableLink & {
  cta: string;
  image: string;
  title: string;
};

type MediaMoreLink = EditableLink & {
  label: string;
};

type MediaNewsLink = EditableLink & {
  label: string;
};

type MediaCard = EditableLink & {
  cta: string;
  date: string;
  description: string;
  image: string;
  title: string;
};

const EMPTY_LINK = "";

export const announcement =
  "ICASSP 2026 马栏山音视频实验室发布声纹识别领域最新创新成果";

export const mediaLead: MediaLead = {
  title: "丁薛祥在湖南调研时强调 以科技创新引领产业创新 打造国家重要先进制造业高地",
  image: "/assets/home/media-main.png",
  cta: "阅读文章",
  href: EMPTY_LINK,
};

export const mediaMoreLink: MediaMoreLink = {
  label: "更多动态",
  href: EMPTY_LINK,
};

export const newsLinks: MediaNewsLink[] = [
  { label: "干事创业 政绩观至关重要", href: EMPTY_LINK },
  { label: "热解读｜“马不停蹄”勇向前", href: EMPTY_LINK },
  { label: "中共中央国务院举行春节团拜会", href: EMPTY_LINK },
  { label: "实验室主任涂永峰新年致辞", href: EMPTY_LINK },
  { label: "热解读｜“马不停蹄”勇向前", href: EMPTY_LINK },
];

export const mediaCards: MediaCard[] = [
  {
    title: "研究：AI技术如何提升音频质量和用户体验",
    description:
      "《FutureSound》对全球音频工程师进行了调研，结果显示，AI技术在音频领域的应用正在迅速普及，并为用户带来了前所未有的听觉体验。",
    image: "/assets/home/media-card-1.png",
    date: "2026年1月22日",
    cta: "深入了解",
    href: EMPTY_LINK,
  },
  {
    title: "研究：智能音频技术在智能家居中的应用与发展",
    description:
      "《SmartHome Tech》发布报告，深入探讨了智能音频技术如何与智能家居系统融合，为用户提供更加便捷、舒适的生活体验。",
    image: "/assets/home/media-card-2.png",
    date: "2026年1月22日",
    cta: "深入了解",
    href: EMPTY_LINK,
  },
  {
    title: "2026马年春晚，马栏山音视频实验室助力Vivid生态应用，点亮万家团圆时刻！",
    description:
      "除夕夜，万家灯火，《2026年中央广播电视总台春节联欢晚会》在观众热烈好评中圆满落幕。开场表演《马上有奇迹》以欢腾的歌舞画面、喜庆的视觉布景勾勒出龙马精神的新春画意。",
    image: "/assets/home/media-card-3.png",
    date: "2026年1月22日",
    cta: "深入了解",
    href: EMPTY_LINK,
  },
];

export const solutionTabs = ["短剧行业", "智能ITO", "音视频技术", "星闪"];

export const environmentImages = [
  "/assets/home/environment-1.png",
  "/assets/home/environment-2.png",
  "/assets/home/environment-3.png",
];

export const awardLogos = [
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
