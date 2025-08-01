/**
 * 多语言配置文件
 * 包含导航栏、页面文本等所有需要翻译的内容
 */

// 导航栏多语言配置
const navBarConfig = {
  zh: [
    { name: "首页", href: "/" },
    { name: "关于", href: "/about" },
    { name: "联系", href: "/contact" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

// 页面文本多语言配置
const heroTextConfig = {
  zh: {
    siteName: "芥子",
    heroTitle: "这是芥子",
  },
  en: {
    siteName: "JieziSpace",
    heroTitle: "JieziSpace",
  },
};

// 支持的语言列表
const languages = [
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export { navBarConfig, heroTextConfig, languages };