export type ContactCard = {
  title: string;
  value: string;
  href: string;
};

export type InquiryType = {
  id: "business" | "agency";
  label: string;
  recipient: string;
  subject: string;
};

export type ContactFormInputField = {
  autocomplete?: string;
  label: string;
  placeholder: string;
  type?: "tel" | "text";
};

const generalEmail = "mlslabs@mlslabs.com.cn";
const businessEmail = "liuchuchu@mlslabs.com.cn";

export const contactPageContent = {
  hero: {
    eyebrow: "联系我们",
    title: "我们很乐意倾听您的声音",
    description: "我们友好的团队随时为您服务。",
    image: {
      src: "/assets/contact/contact-hero-headset.png",
      alt: "联系我们页面头图",
    },
  },
  contactCards: [
    {
      title: "联系电话",
      value: "+86 (0731) 8898-8888",
      href: "tel:+8673188988888",
    },
    {
      title: "联系邮箱",
      value: generalEmail,
      href: `mailto:${generalEmail}`,
    },
    {
      title: "商务合作",
      value: businessEmail,
      href: `mailto:${businessEmail}`,
    },
  ] satisfies ContactCard[],
  office: {
    title: "办公地点",
    city: "中国，长沙",
    campus: "马栏山视频文创园",
    pinIconSrc: "/assets/contact/contact-location-pin.svg",
    image: {
      src: "/assets/contact/contact-office-location.png",
      alt: "马栏山视频文创园园区航拍",
    },
  },
  inquiryTypes: [
    {
      id: "business",
      label: "商务合作",
      recipient: businessEmail,
      subject: "商务合作 - 免费试用申请",
    },
    {
      id: "agency",
      label: "代理商咨询",
      recipient: generalEmail,
      subject: "代理商咨询 - 免费试用申请",
    },
  ] satisfies InquiryType[],
  form: {
    title: "免费试用",
    description: "请填写以下表单，我们的客户经理会尽快与您联系",
    privacyHref: "/about",
    privacyLabel: "《隐私协议》",
    submitLabel: "提交申请",
    fields: {
      name: {
        autocomplete: "name",
        label: "联系人姓名",
        placeholder: "请填写您的名字",
        type: "text",
      },
      phone: {
        autocomplete: "tel",
        label: "电话",
        placeholder: "请填写您的手机号",
        type: "tel",
      },
      company: {
        autocomplete: "organization",
        label: "公司名称",
        placeholder: "请输入您公司的名称",
        type: "text",
      },
      product: {
        label: "需要了解的产品",
        placeholder: "请填写您想了解的产品名称",
        type: "text",
      },
      message: {
        label: "请简单描述下您的需求",
        placeholder: "给我们留言...",
      },
      consent: "我已阅读并同意",
    },
  },
};
