import { getHomeMediaCollection } from "../News/data/newsRepository";

type EditableLink = {
  href: string;
};

type MediaLead = EditableLink & {
  cta: string;
  image: string;
  title: string;
};

type MediaMoreLink = EditableLink & {
  label: string;
};

type MediaNewsLink = EditableLink & {
  label: string;
};

type MediaCard = EditableLink & {
  cta: string;
  date: string;
  description: string;
  image: string;
  title: string;
};

type TeamStat = {
  label: string;
  value: string;
};

const homeMediaCollection = getHomeMediaCollection();

export const mediaLead: MediaLead = {
  title: homeMediaCollection.lead.title,
  image: homeMediaCollection.lead.image,
  cta: homeMediaCollection.lead.cta,
  href: homeMediaCollection.lead.href,
};

export const mediaMoreLink: MediaMoreLink = {
  label: homeMediaCollection.moreLink.label,
  href: homeMediaCollection.moreLink.href,
};

export const newsLinks: MediaNewsLink[] = homeMediaCollection.links;

export const mediaCards: MediaCard[] = homeMediaCollection.cards;

export const solutionTabs = ["短剧行业", "智能ITO", "音视频技术", "星闪"];

export const teamStats: TeamStat[] = [
  { value: "80%", label: "硕博员工占比" },
  { value: "2/3", label: "非本地员工" },
  { value: "70%", label: "来自世界 500 强企业" },
  { value: "100+", label: "实验室成员" },
];

export const environmentImages = [
  "/assets/home/environment-1.png",
  "/assets/home/environment-2.png",
  "/assets/home/environment-3.png",
  "/assets/home/environment-4.png",
];

export const awardLogos = [
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-2.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-3.png",
  "/assets/home/award-logo-1.png",
  "/assets/home/award-logo-4.png",
  "/assets/home/award-logo-1.png",
];
