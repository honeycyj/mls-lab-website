export type HeaderMenuItem = {
  href?: string;
  label: string;
};

export type HeaderNavItem = {
  href?: string;
  label: string;
  menuItems?: HeaderMenuItem[];
  menuType?: "dropdown" | "industry";
};

export const headerNavItems: HeaderNavItem[] = [
  {
    label: "实验室概况",
    menuType: "dropdown",
    menuItems: [
      { label: "实验室简介", href: "/about" },
      { label: "管理团队", href: "/team" },
      { label: "联系我们" },
    ],
  },
  { label: "能力引擎", href: "#capabilities" },
  { label: "产业赋能", href: "#solutions", menuType: "industry" },
  { label: "测试服务", href: "#media" },
  {
    label: "人才发展",
    menuType: "dropdown",
    menuItems: [
      { label: "科研团队", href: "/about" },
      { label: "人才政策", href: "/team" },
      { label: "加入我们" },
      { label: "员工风采" },
      { label: "党建活动" },
    ],
  },
  { label: "新闻动态", href: "#media" },
  {
    label: "实验室资源",
    menuType: "dropdown",
    menuItems: [
      { label: "新闻活动", href: "/about" },
      { label: "音视之声", href: "/voices" },
      { label: "资源下载" },
    ],
  },
];
