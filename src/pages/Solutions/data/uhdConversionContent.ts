import type { SolutionTestimonialData } from "../../../components/foundation/SolutionTestimonial/SolutionTestimonial";

export type SolutionNavItem = {
  href: string;
  label: string;
};

export type SolutionFeature = {
  description: string;
  title: string;
};

export type SolutionAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export const uhdConversionPageContent = {
  breadcrumb: [
    { label: "首页", href: "/" },
    { label: "解决方案", href: "/#solutions" },
    { label: "超高清转制解决方案", href: "/solutions/uhd-conversion" },
  ],
  title: "超高清转制解决方案",
  description:
    "利用AI算法，将标准动态范围SDR视频内容实时转化为高动态范围HDR，提升色彩表现和对比度，释放超高清生态潜能。",
  sectionNav: [
    { label: "Overview", href: "#overview" },
    { label: "技术特色", href: "#features" },
    { label: "使用场景", href: "#use-cases" },
    { label: "案例分析", href: "#cases" },
    { label: "Documentation", href: "#documentation" },
    { label: "开放API", href: "#open-api" },
  ] satisfies SolutionNavItem[],
  overview:
    "标准动态范围（SDR）视频在现代显示器上通常显得平淡。我们的解决方案使用先进的AI算法将SDR内容转换为高动态范围（HDR），增强色彩和对比度，从而提供更生动、更沉浸式的观看体验。",
  highlightTitle: "将SDR内容转换为HDR质量",
  highlightImage: "/assets/solutions/uhd-conversion/hero-image-1.png",
  highlightFeatures: [
    {
      title: "增强视觉效果",
      description:
        "通过释放HDR显示器的全部潜力，为SDR内容注入新的活力，为观众提供更丰富、更细腻的画面。",
    },
    {
      title: "改善沉浸感",
      description:
        "通过增强的色彩深度和对比度，将观众更深地吸引到内容中，创造更具吸引力和真实感的视觉体验。",
    },
    {
      title: "更广泛的兼容性",
      description:
        "确保SDR内容在HDR屏幕上呈现最佳效果，消除色彩暗淡，最大限度地发挥现代显示技术的性能。",
    },
  ] satisfies SolutionFeature[],
  secondaryImage: "/assets/solutions/uhd-conversion/hero-image-2.png",
  documentation:
    "The Hue value is defined as the range [0, 179] for a total of 180 possible values, since [0, 359] is not possible for an 8-bit unsigned array. The hue is actually a degree on the HSV color cylinder, and both saturation and value are defined on the range [0, 255].",
  openApiDescription:
    "提供可扩展的服务能力和接入文档，支持多种上云、播控、内容生产和终端显示场景的快速集成。",
  ctaTitle: "与实验室技术专家交流",
  ctaDescription: "Stay in the loop with everything you need to know.",
  ctaPrivacyPrefix: "We care about your data in our ",
  ctaPrivacyLabel: "privacy policy",
  ctaPrivacySuffix: ".",
  ctaPlaceholder: "Enter your email",
  ctaButton: "Subscribe",
  companyProofLabel: "Join 4,000+ companies already growing",
  companyNames: ["Boltshift", "Lightbox", "FeatherDev", "Spherule", "GlobalBank", "Nietzsche"],
  testimonial: {
    quote: "马栏山音视频实验室对双 Vivid 技术的国产化应用有非常突出的贡献",
    author: "姜文波",
    role: "UWA理事会理事长",
    image: "/assets/solutions/uhd-conversion/testimonial-person.png",
    dotCount: 3,
    activeDot: 0,
    backgroundColor: "#53389e",
    maxWidth: 1200,
    height: 448,
    imageWidth: 480,
    imagePosition: "center top",
  } satisfies SolutionTestimonialData,
  openApiActions: [
    { label: "下载文档", href: "#", variant: "secondary" },
    { label: "申请接入", href: "#", variant: "primary" },
  ] satisfies SolutionAction[],
};
