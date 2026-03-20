export type IndustryMenuGroup = {
  items: string[];
  title: string;
};

export type IndustryMenuCollaboration = {
  description: string;
  featured?: boolean;
  title: string;
};

export const industryMenuGroups: IndustryMenuGroup[] = [
  {
    title: "视频技术",
    items: ["超高清转制解决方案", "制作域转码解决方案", "CR 图像识别解决方案"],
  },
  {
    title: "视频技术",
    items: ["超高清转制解决方案", "制作域转码解决方案", "CR 图像识别解决方案"],
  },
  {
    title: "AI 应用",
    items: [
      "AI 视频翻译工具",
      "AI 动漫/影视制作流工具",
      "AI陪伴智能交互",
      "4DGS体积视频制播全链路",
    ],
  },
  {
    title: "智能语音 IOT",
    items: ["语音交互机器人解决方案"],
  },
  {
    title: "星闪与GPMI",
    items: ["GPMI微型插入式机顶盒", "GPMI信号转换方案"],
  },
];

export const industryCollaborations: IndustryMenuCollaboration[] = [
  {
    title: "代理伙伴",
    description: "负责实验室音视频技术方案的推广及商业化。",
  },
  {
    title: "品牌合作伙伴",
    description: "联合合作，助力产品规模化落地",
    featured: true,
  },
  {
    title: "科研技术伙伴",
    description: "科研协同，承接课题、项目及音视频行业标准编制",
  },
];

export const industryMenuFeature = {
  title: "两轨云台解决方案",
  description:
    "飞书AI全新升级，深度融合企业知识和业务流程，为业务带来全新AI生产力。",
  video: "/assets/header/industry-menu-feature.mp4",
  cta: "全部解决方案",
};
