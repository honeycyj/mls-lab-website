export type VoiceIssueAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type VoiceIssue = {
  actions: VoiceIssueAction[];
  description?: string;
  image: string;
  title: string;
};

export const voicePageIntro = {
  eyebrow: "内部刊物",
  title: "实验室季刊",
  description:
    "季刊凝练了实验室的战略定位、近期成果、行业思考、团队风采等，旨在构建一个持续的知识沉淀与交流平台",
};

export const featuredIssue: VoiceIssue = {
  title: "2026年第一季",
  description:
    "2024年，马栏山全体员工努力应对各种外部挑战，持续提升产品质量、经营质量和运作效率，经营结果符合预期。感谢全球客户的信任，感谢全球供应商、合作伙伴、开发者的协同，感谢消费者的认可，感谢全体员工的付出以及每一位家属的支持。",
  image: "/assets/voice/book-02.png",
  actions: [
    { label: "在线预览", href: "#", variant: "primary" },
    { label: "下载 PDF", href: "#", variant: "secondary" },
  ],
};

export const archiveIssues: VoiceIssue[] = [
  {
    title: "2025年第四季",
    image: "/assets/voice/book-01.png",
    actions: [{ label: "下载 PDF", href: "#", variant: "secondary" }],
  },
  {
    title: "2025年第四季",
    image: "/assets/voice/book-01.png",
    actions: [{ label: "下载 PDF", href: "#", variant: "secondary" }],
  },
];
