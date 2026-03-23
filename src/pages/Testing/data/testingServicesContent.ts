import type { CapabilityCardData } from "../../../components/sections/Capabilities/types";

const testingServiceInquiryHref = (topic: string) =>
  `mailto:honeycyj@live.com?subject=${encodeURIComponent(`测试服务咨询 - ${topic}`)}`;

const testingServiceCard = (title: string, description: string, inquiryTopic = title): CapabilityCardData => ({
  title,
  description,
  linkHref: testingServiceInquiryHref(inquiryTopic),
});

const testingQualificationItems = Array.from({ length: 5 }, (_, index) => ({
  id: `qualification-${index + 1}`,
  title: "检验和校准实验室",
}));

const testingServiceCards: CapabilityCardData[] = [
  testingServiceCard("光学实验室", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("IQ调试室测试", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("视频采编室测试", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("音频采编室测试", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("消声室测试", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("家庭影音室测试", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("HDR Vivid测试服务", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
  testingServiceCard("Audio Vivid测试服务", "整合核心技术、创新见解和以人为本的设计理念，引领未来娱乐体验的新趋势。"),
];

export const testingServicesPageContent = {
  hero: {
    title: "提供音视频领域的测试与认证服务，确保您的产品符合行业标准",
    description:
      "马栏山音视频实验室由湘江新区和岳麓区联合创建，是音视频技术领域的新型研发机构。我们专注于提供全面的测试服务，从标准符合性到性能优化，助力企业提升产品竞争力，推动音视频产业的创新发展。",
    ctaLabel: "Contact Us",
  },
  qualifications: {
    title: "测试资质",
    items: testingQualificationItems,
  },
  services: {
    cards: testingServiceCards,
  },
  cta: {
    title: "与实验室技术专家交流",
    description: "Stay in the loop with everything you need to know.",
    emailPlaceholder: "Enter your email",
    privacyPrefix: "We care about your data in our ",
    privacyLabel: "privacy policy",
    privacySuffix: ".",
    buttonLabel: "Subscribe",
  },
};
