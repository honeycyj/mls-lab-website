import type { CapabilityCardData } from "../../../components/sections/Capabilities/types";

const capabilityInquiryHref = (topic: string) =>
  `mailto:honeycyj@live.com?subject=${encodeURIComponent(`能力咨询 - ${topic}`)}`;

export const homeCapabilitiesCards: CapabilityCardData[] = [
  {
    title: "视频技术",
    description: "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。",
    linkHref: capabilityInquiryHref("视频技术"),
  },
  {
    title: "视频采集硬件",
    description: "面向感知端设备与实时采集链路，构建稳定、高质量的采集底座。",
    linkHref: capabilityInquiryHref("视频采集硬件"),
  },
  {
    title: "AIGC 视频翻译技术",
    description: "提供字幕擦除、声纹配音和多语种替换等高精度能力。",
    linkHref: capabilityInquiryHref("AIGC 视频翻译技术"),
  },
  {
    title: "数据传输",
    description: "围绕高带宽低延时链路和边缘协同，支撑复杂场景分发。",
    linkHref: capabilityInquiryHref("数据传输"),
  },
  {
    title: "智能音视技术",
    description: "通过计算感知与智能分析，形成内容理解与智能编排能力。",
    linkHref: capabilityInquiryHref("智能音视技术"),
  },
  {
    title: "空间全景声",
    description: "强化声音定位、层次和空间感，提升沉浸式听觉体验。",
    linkHref: capabilityInquiryHref("空间全景声"),
  },
  {
    title: "端侧 AI 交互控制技术",
    description: "让设备端具备更稳定、低功耗的智能交互能力。",
    linkHref: capabilityInquiryHref("端侧 AI 交互控制技术"),
  },
  {
    title: "空间音频技术",
    description: "从声场建模到感知优化，持续提升空间声音表达力。",
    linkHref: capabilityInquiryHref("空间音频技术"),
  },
  {
    title: "视频技术",
    description: "面向行业场景沉淀可快速复用的视频核心模块。",
    linkHref: capabilityInquiryHref("视频技术模块"),
  },
  {
    title: "视频技术",
    description: "围绕生产、传输与终端体验持续打磨应用级方案。",
    linkHref: capabilityInquiryHref("视频技术方案"),
  },
  {
    kind: "explore-more",
    title: "探索更多能力",
  },
];
