export type FooterLinkItem = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};

export type FooterSocialLinkItem = FooterLinkItem & {
  alt: string;
  src: string;
};

const primaryLinks: FooterLinkItem[] = [
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/#contact" },
  { label: "招聘精英", href: "/team" },
];

const legalLinks: FooterLinkItem[] = [
  { label: "隐私权政策", href: "/about" },
  { label: "使用条款", href: "/about" },
  {
    label: "网站问题反馈",
    href: "mailto:honeycyj@live.com?subject=%E7%BD%91%E7%AB%99%E9%97%AE%E9%A2%98%E5%8F%8D%E9%A6%88",
  },
];

const socialLinks: FooterSocialLinkItem[] = [
  {
    alt: "微信",
    label: "微信",
    href: "https://weixin.qq.com/",
    rel: "noreferrer",
    src: "/assets/footer/social-wechat.png",
    target: "_blank",
  },
  {
    alt: "微博",
    label: "微博",
    href: "https://weibo.com/",
    rel: "noreferrer",
    src: "/assets/footer/social-weibo.png",
    target: "_blank",
  },
  {
    alt: "抖音",
    label: "抖音",
    href: "https://www.douyin.com/",
    rel: "noreferrer",
    src: "/assets/footer/social-douyin.png",
    target: "_blank",
  },
  {
    alt: "哔哩哔哩",
    label: "哔哩哔哩",
    href: "https://www.bilibili.com/",
    rel: "noreferrer",
    src: "/assets/footer/social-bilibili.png",
    target: "_blank",
  },
  {
    alt: "小红书",
    label: "小红书",
    href: "https://www.xiaohongshu.com/",
    rel: "noreferrer",
    src: "/assets/footer/social-xiaohongshu.png",
    target: "_blank",
  },
];

export const siteFooterContent = {
  title: "马栏山音视频实验室",
  description:
    "马栏山音视频实验室由湖南省政府和长沙市政府联合共建，定位为新型研发机构。致力于推动全球领先的音视频技术研发与创新，紧密结合国际前沿科技与满足国内产业需求，构建音视频“采、编、播、传、显”全链条科技创新体系。",
  primaryLinks,
  legalLinks,
  socialLinks,
  copyright: "Copyright © 2026 马栏山音视频实验室 版权所有",
};
