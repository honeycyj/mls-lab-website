export type TeamMember = {
  image: string;
  name: string;
  role: string;
};

export const teamPageIntro = {
  eyebrow: "领导团队",
  title: "实验室领导团队",
  description:
    "为实现实验室的目标与使命，我们需要一批充满热情的领导者。了解在马栏山音视频实验室中引领方向的团队。",
};

export const featuredLeader: TeamMember = {
  name: "涂永峰",
  role: "马栏山音视频实验室主任",
  image: "/assets/team/leadphoto-01.jpg",
};

export const leadershipTeam: TeamMember[] = [
  {
    name: "许雯",
    role: "马栏山音视频实验室党支部书记",
    image: "/assets/team/leadphoto-02.jpg",
  },
  {
    name: "朱伟",
    role: "首席战略官",
    image: "/assets/team/leadphoto-03.jpg",
  },
  {
    name: "Lisa",
    role: "综合管理部部长",
    image: "/assets/team/leadphoto-04.jpg",
  },
  {
    name: "姜博",
    role: "技术研究部部长",
    image: "/assets/team/leadphoto-05.jpg",
  },
];

export const departmentLeads: TeamMember[] = [
  {
    name: "李绍军",
    role: "产品创新部部长",
    image: "/assets/team/leadphoto-06.jpg",
  },
  {
    name: "甘博",
    role: "媒体应用使能部部长",
    image: "/assets/team/leadphoto-07.jpg",
  },
  {
    name: "胡广",
    role: "生态发展部部长",
    image: "/assets/team/leadphoto-08.jpg",
  },
];
