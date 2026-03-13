export const navigationItems = [
  { label: "关于", href: "#about" },
  { label: "方案", href: "#solutions" },
  { label: "联系", href: "#contact" },
];

export const heroStats = [
  { value: "12+", label: "设计 token" },
  { value: "4", label: "基础页面区块" },
  { value: "0", label: "复杂业务依赖" },
];

export const aboutPoints = [
  {
    title: "统一样式入口",
    description: "颜色、间距、字体和阴影集中管理，开发时可以直接引用语义变量。",
  },
  {
    title: "保留轻量动效",
    description: "只保留首屏进入、卡片悬停和背景漂浮这些高收益、低维护成本的动态效果。",
  },
  {
    title: "适合静态内容扩展",
    description: "更适合官网、实验室介绍页、能力展示页，不提前引入复杂状态管理。",
  },
];

export const solutionCards = [
  {
    title: "Foundation",
    description: "按钮、容器、标题这类底层组件单独维护，页面区块不会和基础样式耦合。",
  },
  {
    title: "Layout",
    description: "头部和底部独立成层，后续切换导航、品牌信息或备案信息时更稳定。",
  },
  {
    title: "Sections",
    description: "首页区块按主题拆开，后续新增页面时可以复制结构而不是重写整页。",
  },
];

export const contactActions = [
  { label: "发起设计讨论", href: "mailto:hello@mls-lab.local" },
  { label: "查看组件目录", href: "#solutions" },
];
