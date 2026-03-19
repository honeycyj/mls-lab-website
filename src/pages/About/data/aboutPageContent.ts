export const aboutAnchorLinks = [
  { label: "实验室简介", href: "#about-intro" },
  { label: "组织架构", href: "#about-organization" },
  { label: "里程碑", href: "#about-milestones" },
  { label: "价值观和文化", href: "#about-values" },
];

export const heroImage = "/assets/home/life-bg.png";
export const introVideo = "/assets/about/lab-intro.mp4";
export const certLogo =
  "https://www.figma.com/api/mcp/asset/177af340-e26b-419b-a0dd-dedb01071723";

const valueImages = [
  "https://www.figma.com/api/mcp/asset/c3d6fd43-7cea-4b24-95be-0af1bffe295b",
  "https://www.figma.com/api/mcp/asset/c58a5978-f912-4b87-a6e9-9e365d73490b",
  "https://www.figma.com/api/mcp/asset/0d89cf8e-cfe2-4958-a6f0-290874b78153",
  "https://www.figma.com/api/mcp/asset/8dd9a22a-3dee-4c0c-bfaf-a41ac8242229",
];

export const aboutIntroParagraphs = [
  "马栏山音视频实验室由湖南省政府和长沙市政府联合共建，定位为新型研发机构。致力于推动全球领先的音视频技术研发与创新，紧密结合国际前沿科技与满足国内产业需求，构建音视频“采、编、播、传、显”全链条科技创新体系。",
  "实验室围绕“0-1-10-N”产业关键技术布局，探索基础与前沿技术，孵化创新应用场景，赋能产业升级。打造一支由院士专家、杰出领军人才、中青年骨干、博士生团队组成的多层次合理人才队伍。未来五年，将建设成为顶尖的音视频技术研究中心、产业联合创新平台和产业赋能基地，实现“中心、平台、基地”三位一体的全面发展。",
  "作为长沙全力建设全球研发中心城市的标志性项目，实验室也是打造全球音视频产业技术创新策源地的关键抓手。秉承党中央和习近平总书记赋予湖南文化科技融合的使命，聚焦基础和应用领域，通过强化科技攻关，突破关键核心技术，力争成为世界一流的音视频实验室。",
];

type OrganizationCard = {
  title: string;
  description: string;
  hoverDescription?: string;
};

export const organizationCards: OrganizationCard[] = [
  {
    title: "产业生态发展部",
    description: "国产标准生态发展及实验室成果转化",
    hoverDescription:
      "产业技术赋能，标准验证测试\n产业生态合作，产品需求管理\n品牌建设管理，市场空间趋势洞察\n实验室成果转化落地",
  },
  {
    title: "产品创新部",
    description: "AI 硬件创新、原型机研发与联合产品孵化",
    hoverDescription:
      "影像、影音和星闪音频等 AI 硬件创新\n软件和端侧算法解决方案和原型机研发\n通过产业资源整合进行联合产品创新和商业孵化",
  },
  {
    title: "媒体应用使能部",
    description: "音视频 AI 核心技术研发与落地",
    hoverDescription:
      "影像、影音和星闪音频等 AI 硬件创新\n软件和端侧算法解决方案和原型机研发\n通过产业资源整合进行联合产品创新和商业孵化",
  },
  {
    title: "音视频技术研究部",
    description: "音视频关键技术",
    hoverDescription:
      "影像、影音和星闪音频等 AI 硬件创新\n软件和端侧算法解决方案和原型机研发\n通过产业资源整合进行联合产品创新和商业孵化",
  },
  {
    title: "综合管理部",
    description: "HR、采购、财经、行政",
    hoverDescription:
      "影像、影音和星闪音频等 AI 硬件创新\n软件和端侧算法解决方案和原型机研发\n通过产业资源整合进行联合产品创新和商业孵化",
  },
];

export const milestones = [
  {
    year: "2026",
    title: "2026 展望｜持续突破关键核心技术",
    body:
      "围绕世界一流音视频实验室目标，持续推进高质量科研成果转化与国际合作布局，形成更强的产业牵引能力。",
  },
  {
    year: "2025",
    title: "2025 年 6 月｜关键成果进入加速转化阶段",
    body:
      "围绕音视频生成、处理、编解码与终端体验等方向，实验室推动重点成果进入验证与转化阶段，逐步形成技术、产品与场景协同推进机制。",
  },
  {
    year: "2025",
    title: "2025 年底｜夯实基础能力，明确技术方向",
    body:
      "实验室围绕音视频采集、处理、生成与智能应用等关键技术方向，完成整体技术体系与研发架构规划，逐步搭建核心技术能力与实验环境，同步启动重点技术攻关与应用场景布局。",
    notes: [
      "团队规模突破 100 人，博士后创新创业实践基地获批",
      "深度参与双Vivid、AVS、GPMI 等国产标准制定，成为 AVS 副理事单位",
      "发明专利 200+，授权 28 项，CLIC2025 深度学习图像压缩挑战赛 GPU 图像组全球第 2 名",
      "链接 300+ 行业生态伙伴，商业转化金额超千万",
      "内部管理及运营体系完善，通过 ISO9001 与 ISO27001 双认证",
    ],
  },
  {
    year: "2025",
    title: "2025 年初｜人才梯队与研发体系同步成型",
    body:
      "实验室持续引进院士专家、领军人才和青年骨干，完善跨学科研发组织方式，围绕关键方向建立长期稳定的项目推进机制。",
  },
  {
    year: "2024",
    title: "2024 年 10 月｜应用场景与生态合作同步启动",
    body:
      "围绕媒体内容生产、终端交互、标准生态与产业赋能等重点领域，实验室联合合作伙伴推进首批试点项目与联合研发方向。",
  },
  {
    year: "2024",
    title: "2024 年 7 月｜实验室乘势而生",
    body:
      "马栏山音视频实验室乘势而生，致力于服务湖南省文化与科技深度融合的战略需求，推动音视频技术创新与产业落地。",
  },
  {
    year: "2024",
    title: "2024 年 8 月｜核心团队与平台建设正式展开",
    body:
      "实验室启动组织搭建、平台规划与基础设施建设，围绕音视频全链路技术布局科研资源，为后续攻关和转化奠定基础。",
  },
  {
    year: "2024",
    title: "2024 年底｜实验环境与重点项目并行推进",
    body:
      "实验室持续建设实验环境与协同机制，推动重点项目进入稳定推进周期，逐步形成研发、验证、应用协同联动的工作模式。",
  },
];

export const researchStats = [
  { value: "75%", label: "研发人员占比75%" },
  { value: "75%", label: "75% 非本地员工" },
  { value: "100+", label: "参与标准制定 60+ 项、提交提案 100+ 篇" },
  { value: "200+", label: "专利提交200+项，授权30+" },
];

export const certificationCards = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  title: "检验和校准实验室",
}));

export const valueSlides = [
  {
    eyebrow: "我们的愿景",
    title: "用媒体技术丰富人们的生活",
    body:
      "世界是由信息和能量组成的，一般认为人类获取信息80%来自视觉，10%来自听觉，眼睛经济和耳朵经济扑面而来，势不可挡，人们对物质层面的需求相对有限，而对精神层面的需求是无限的，音视频业务主要满足日益增长的精神层面需求，未来可期。",
    image: valueImages[0],
    imageLeft: false,
  },
  {
    eyebrow: "我们的使命",
    title: "成为世界一流的音视频实验室",
    body:
      "实验室坚持终局思维，以终为始，经常自问十年后我们会成为什么样子，用长期目标来决定当前投入，抵御诱惑、聚焦价值创造，坚持长期主义，不在非战略节点浪费战略资源。",
    image: valueImages[1],
    imageLeft: true,
  },
  {
    eyebrow: "价值观",
    title: "用媒体技术丰富人们的生活",
    body:
      "以创新驱动、开放合作和产业落地为核心，坚持围绕真实问题开展研发，推动技术、产品与生态协同演进，形成长期持续的社会价值。",
    image: valueImages[2],
    imageLeft: false,
  },
  {
    eyebrow: "文化",
    title: "成为世界一流的音视频实验室",
    body:
      "以面向未来的技术判断和敢于突破的团队文化，持续建设高水平人才梯队与高效率协作机制，让实验室的品牌与技术影响力共同增长。",
    image: valueImages[3],
    imageLeft: true,
  },
];
