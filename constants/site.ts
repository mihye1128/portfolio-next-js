/**
 * サイト全体で使用する定数
 */

export const SITE_NAME = "Mitsui's portfolio";
export const SITE_URL = "https://mitsui.site";
export const SITE_DESCRIPTION =
  "フロントエンドエンジニア mitsuiのポートフォリオサイトです。";

export const AUTHOR = {
  name: "Mitsui",
  github: "https://github.com/mihye1128/",
  twitter: "@mitsui_mk",
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Works",
    href: "/#works",
  },
  {
    label: "Profile",
    href: "/#profile",
  },
] as const;
