import type { NewsArticle } from "./newsSchema";

export const FEATURED_NEWS_ARTICLE_SLUG = "ai-audio-quality-user-experience";
export const GAS_AWARDS_ARTICLE_SLUG = "mlslab-gas-2026-awards";
export const HUNAN_RESEARCH_ARTICLE_SLUG = "ding-xuexiang-hunan-advanced-manufacturing";
export const CES_CAMERA_ARTICLE_SLUG = "mlslab-ai-camera-ces-2026";

export const newsArticles: NewsArticle[] = [
  {
    slug: HUNAN_RESEARCH_ARTICLE_SLUG,
    title: "丁薛祥在湖南调研时强调 以科技创新引领产业创新 打造国家重要先进制造业高地",
    publishedAt: "2025年9月25日",
    summary:
      "新华社长沙2025年9月25日电。丁薛祥在湖南调研时强调，要深入学习贯彻习近平总书记在湖南考察时的重要讲话精神，以科技创新引领产业创新，加快培育和发展新质生产力，打造国家重要先进制造业高地。",
    heroImage: {
      src: "/assets/home/media-main.png",
      alt: "首页媒体聚焦的大图新闻封面",
    },
    source: {
      label: "中国政府网",
      url: "https://www.gov.cn/yaowen/liebiao/202509/content_7042232.htm",
    },
    homeMedia: {
      lead: {
        image: "/assets/home/media-main.png",
        cta: "阅读文章",
      },
    },
    blocks: [
      {
        id: "hunan-opening",
        type: "text",
        tone: "lead",
        paragraphs: [
          "官方消息显示，丁薛祥于9月23日在湖南调研，重点了解新型研发机构运行、文化与科技融合、北斗产业发展以及先进制造业转型升级等情况。他强调，要把科技创新和产业创新更紧密地贯通起来，加快培育发展新质生产力。",
        ],
      },
      {
        id: "hunan-divider-1",
        type: "divider",
      },
      {
        id: "hunan-quote-1",
        type: "quote",
        quote: "以科技创新引领产业创新，加快培育和发展新质生产力。",
        author: {
          avatar: "/assets/news/ceic-2025/quote-avatar-image.png",
          name: "新华社消息",
          title: "中国政府网转载",
        },
      },
      {
        id: "hunan-body-1",
        type: "text",
        heading: "聚焦新型研发机构与文化科技融合",
        paragraphs: [
          "在湖南先进技术研究院和马栏山音视频实验室调研时，丁薛祥重点了解了新型研发机构运行机制、公共技术服务能力以及文化与科技融合的推进情况。他指出，新型研发机构要持续总结经验，在探索体制机制创新、提升市场化运行效率、统筹创新资源和供需对接等方面进一步发力。",
          "围绕湖南文化资源优势，调研强调要继续推动文化建设数字化赋能和智能化转型，不断培育新型文化业态。对实验室这类兼具科研转化和产业连接属性的平台来说，这一导向也意味着更高水平的技术服务能力和更强的成果落地能力。",
        ],
      },
      {
        id: "hunan-body-2",
        type: "text",
        heading: "突出北斗应用与先进制造升级",
        paragraphs: [
          "在湖南中电星河电子有限公司调研北斗产业发展和规模应用时，丁薛祥提出，要坚定走自主创新道路，集中攻克关键核心技术，推动北斗与卫星互联网协同发展，并通过整合产学研资源、发挥龙头企业作用，提升全产业链发展水平。",
          "在中联重科股份有限公司调研时，他进一步强调，制造业是立国之本、强国之基，要统筹推动传统产业升级、新兴产业壮大和未来产业培育，围绕原创性、引领性关键技术持续突破，以智能化、绿色化和高端化推动产业体系升级。",
        ],
      },
      {
        id: "hunan-body-3",
        type: "text",
        heading: "对湖南高质量发展的整体要求",
        paragraphs: [
          "综合整篇报道，调研释放出一个清晰信号：湖南要继续把科技创新放在更加突出的位置，通过科研平台建设、关键技术攻关、产业协同和场景应用，形成更强的先进制造业竞争力。",
          "报道最后指出，希望湖南牢记习近平总书记嘱托，在推动中部地区崛起和长江经济带发展中奋勇争先，奋力谱写中国式现代化湖南篇章。",
        ],
      },
      {
        id: "hunan-summary-1",
        type: "summary",
        title: "总结",
        paragraphs: [
          "这篇新闻更适合作为政策导向型资讯来呈现，重点不在单一事件本身，而在其对科研平台、产业融合、先进制造和技术成果转化的整体指向。",
          "对当前网站模板来说，这类新闻可以继续沿用同一套详情页结构，只需更换标题、日期、摘要和正文区块内容，就能快速形成一致的资讯发布页面。",
        ],
      },
    ],
  },
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
    homeMedia: {
      card: {
        image: "/assets/home/media-card-1.png",
        description:
          "《FutureSound》对全球音频工程师进行了调研，结果显示，AI技术在音频领域的应用正在迅速普及，并为用户带来了前所未有的听觉体验。",
        cta: "深入了解",
      },
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
  {
    slug: GAS_AWARDS_ARTICLE_SLUG,
    title: "荣誉揭晓！马栏山音视频实验室三项成果斩获GAS 2026消费电子科创优秀案例",
    publishedAt: "2026年1月29日",
    summary:
      "2026中国国际音频产业大会（GAS）“消费电子科创优秀案例”获选名单正式公布。经专业评审层层遴选，马栏山音视频实验室凭借AI陪伴解决方案、菁彩声家庭智能硬件解决方案和AI翻译三项成果入选，集中展现了实验室在音频消费电子方向的创新能力。",
    heroImage: {
      src: "/assets/home/media-card-2.png",
      alt: "实验室音频消费电子方向的新闻配图",
    },
    source: {
      label: "马栏山音视频实验室",
      url: "https://www.mlslabs.com.cn/xinwendongtai/shiyanshiyaowen/",
    },
    homeMedia: {
      card: {
        image: "/assets/home/media-card-2.png",
        description:
          "实验室三项成果入选GAS 2026消费电子科创优秀案例，覆盖AI陪伴、菁彩声家庭智能硬件和AI翻译方向。",
        cta: "深入了解",
      },
    },
    blocks: [
      {
        id: "gas-opening",
        type: "text",
        tone: "lead",
        paragraphs: [
          "根据实验室官方发布的信息，2026年1月29日，GAS 2026“消费电子科创优秀案例”名单正式公布。马栏山音视频实验室共有三项成果入选，说明实验室在消费电子与音频智能化方向上的研发成果已开始获得行业层面的集中认可。",
        ],
      },
      {
        id: "gas-divider-1",
        type: "divider",
      },
      {
        id: "gas-quote-1",
        type: "quote",
        quote: "一举拿下三项大奖，覆盖AI陪伴、菁彩声家庭智能硬件和AI翻译三大方向。",
        author: {
          avatar: "/assets/news/ceic-2025/quote-avatar-image.png",
          name: "实验室官方要闻",
          title: "发布时间 2026/01/29",
        },
      },
      {
        id: "gas-body-1",
        type: "text",
        heading: "三项成果指向同一条技术落地路径",
        paragraphs: [
          "从官方摘要可以看到，本次入选的三项成果分别对应AI陪伴解决方案、菁彩声家庭智能硬件解决方案和AI翻译。这三类方向覆盖了终端硬件、音频能力与AI应用三个层面，也体现出实验室并不是只停留在底层技术研究，而是在尝试把算法、标准和产品体验一体化推进。",
          "尤其是菁彩声家庭智能硬件方向，与当前家庭影音、空间音频和智能终端升级趋势高度相关，说明实验室在“实验室研发”与“面向家庭用户的产品化方案”之间已经建立起更清晰的连接。",
        ],
      },
      {
        id: "gas-body-2",
        type: "text",
        heading: "从技术验证走向消费电子场景",
        paragraphs: [
          "GAS作为音频产业的重要行业会议，奖项结果在一定程度上反映了市场和产业链对创新方向的关注重点。实验室此次获选的三项成果，既有面向家庭场景的硬件方案，也有偏向内容与交互体验的AI能力，这种组合说明实验室正在围绕消费电子真实使用场景组织技术能力，而不是孤立地推进单点研究。",
          "对网站新闻模板来说，这类文章的价值在于可以把“技术方向”翻译成更容易理解的产品与应用叙事，让用户快速知道实验室当前重点布局的创新赛道。",
        ],
      },
      {
        id: "gas-summary-1",
        type: "summary",
        title: "总结",
        paragraphs: [
          "这条新闻最重要的信息不是单个奖项本身，而是实验室在AI音频消费电子方向上形成了更成体系的成果矩阵。",
          "后续如果继续补内容，围绕这三项成果分别扩展出更细的产品介绍、应用场景和测试验证案例，会比停留在获奖消息层面更有传播价值。",
        ],
      },
    ],
  },
  {
    slug: CES_CAMERA_ARTICLE_SLUG,
    title: "马栏山音视频实验室AI双目直播相机亮相CES 2026",
    publishedAt: "2026年1月9日",
    summary:
      "2026年1月6日至9日，国际消费电子展（CES 2026）在美国拉斯维加斯举行。实验室官方介绍称，本届CES以人工智能为核心驱动力，集中呈现AI在影像、机器人、数字健康和智能终端等领域的深度应用，实验室AI双目直播相机也在展会上亮相。",
    heroImage: {
      src: "/assets/home/media-card-3.png",
      alt: "实验室AI双目直播相机相关新闻配图",
    },
    source: {
      label: "马栏山音视频实验室",
      url: "https://www.mlslabs.com.cn/xinwendongtai/shiyanshiyaowen/",
    },
    homeMedia: {
      card: {
        image: "/assets/home/media-card-3.png",
        description:
          "实验室AI双目直播相机亮相CES 2026，展示AI在影像终端与智能硬件中的场景化落地能力。",
        cta: "深入了解",
      },
    },
    blocks: [
      {
        id: "ces-opening",
        type: "text",
        tone: "lead",
        paragraphs: [
          "实验室官网要闻显示，CES 2026于1月6日至9日在美国拉斯维加斯举行。作为全球最具影响力的科技展会之一，CES长期被视作消费电子与智能硬件的重要风向标。实验室选择在这一节点展示AI双目直播相机，本身就意味着其产品定位已经不仅是内部研发样机，而是面向全球技术趋势和产业场景的阶段性成果。",
        ],
      },
      {
        id: "ces-divider-1",
        type: "divider",
      },
      {
        id: "ces-quote-1",
        type: "quote",
        quote: "AI正全面融入物理世界，成为各类硬件产品的底层能力。",
        author: {
          avatar: "/assets/news/ceic-2025/quote-avatar-image.png",
          name: "实验室官方要闻",
          title: "CES 2026 现场动态",
        },
      },
      {
        id: "ces-body-1",
        type: "text",
        heading: "AI影像终端进入更真实的应用场景",
        paragraphs: [
          "从官方摘要可见，本届CES把人工智能放在了极其核心的位置，涉及影像、机器人、数字健康和智能终端等多个方向。AI双目直播相机能够出现在这样的展会环境中，说明其实验重点已经不只是摄像能力本身，而是围绕识别、跟拍、理解与交互构建一整套更智能的影像终端体验。",
          "这类产品特别适合内容创作、轻量直播、移动记录和智能拍摄辅助等场景。双目结构本身也为更丰富的景深理解、主体识别和空间计算提供了基础条件，使设备从“采集工具”逐步转向“具备判断和响应能力的终端”。",
        ],
      },
      {
        id: "ces-body-2",
        type: "text",
        heading: "从实验室成果走向国际技术舞台",
        paragraphs: [
          "CES汇集全球科技企业、创新机构和产业领袖，能否在这一场合展示，本身就是产品成熟度与传播价值的一个信号。对马栏山音视频实验室来说，AI双目直播相机亮相CES，进一步强化了实验室在“AI+音视频硬件”方向的对外形象，也说明其研发成果正在朝更国际化、更产品化的方向推进。",
          "与网站现有新闻模板结合来看，这类内容非常适合在媒体聚焦区承担“产品创新”类新闻入口，让用户快速感知实验室不仅做底层标准，也在做具象的终端与场景创新。",
        ],
      },
      {
        id: "ces-summary-1",
        type: "summary",
        title: "总结",
        paragraphs: [
          "AI双目直播相机亮相CES 2026，反映的是实验室在影像终端智能化方向上的持续推进，而不只是一次参展动态。",
          "后续如果补充更完整的参数、场景演示和用户体验案例，这篇新闻还能继续扩展为更完整的产品介绍页或成果专题页。",
        ],
      },
    ],
  },
];
