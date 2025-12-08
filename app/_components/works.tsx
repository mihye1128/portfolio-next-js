import type { Work } from "@/types";
import {
  SiAlgolia,
  SiAngular,
  SiAstro,
  SiCss,
  SiExpo,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMake,
  SiMaterialdesign,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import Section from "@/components/section";
import WorkItem from "./work-item";

const WORKS_SECTION_TITLE = "Works";
const WORKS_SECTION_DESCRIPTION = (
  <>
    制作・開発に携わった案件を一部ご紹介致します。
    <br />
    守秘義務の都合上、公開できない案件が多数あります。
  </>
);

const WORK_ITEMS: Work[] = [
  {
    title: ["【非公開案件】", "ホテル会員向けアプリ"],
    description: [
      "React Nativeを採用したモバイルアプリ開発案件に参画。管理画面側はNext.jsを採用しました。",
    ],
    category: "モバイルアプリ開発（React Native）",
    releaseDate: "2025年 3月頃",
    skills: [
      <SiExpo />,
      <SiNextdotjs />,
      <SiReact />,
      <SiTypescript />,
      <SiTailwindcss />,
      <SiShadcnui />,
    ],
  },
  {
    title: ["Mitsui's portfolio", "ポートフォリオサイトリニューアル"],
    description: ["当サイトです。フレームワークにNext.jsを使用しています。"],
    category: "個人開発（Next.js）",
    releaseDate: "2024年 5月頃",
    skills: [
      <SiNextdotjs />,
      <SiReact />,
      <SiTypescript />,
      <SiTailwindcss />,
      <SiShadcnui />,
    ],
    image: "/images/works/mitsuisite.png",
    href: "https://github.com/mihye1128/portfolio-next-js",
  },
  {
    title: ["【非公開案件】", "サービスサイトリプレース"],
    description: [
      "WordPressサイトをAstroを採用した静的サイトへリプレースしました。",
    ],
    category: "サイトリプレース（Astro）",
    releaseDate: "2024年 3月頃",
    skills: [
      <SiAstro />,
      <SiReact />,
      <SiTypescript />,
      <SiMake />,
      <SiTailwindcss />,
    ],
  },
  {
    title: ["【非公開案件】", "セミナー購入サイトテンプレート制作"],
    description: [
      "Makeshopテンプレートのカスタマイズを行い、オリジナルサイトを作成しました。",
    ],
    category: "Makeshopテンプレートカスタマイズ",
    releaseDate: "2024年 2月頃",
    skills: [
      <SiSass />,
      <SiJquery />,
      <SiJavascript />,
      <SiHtml5 />,
      <SiCss />,
    ],
  },
  {
    title: ["【非公開案件】", "販売管理システム開発"],
    description: [
      "Angular, AngularMaterialを採用した案件にて、フロントエンドの実装を担当しました。",
    ],
    category: "システム開発(Angular）",
    releaseDate: "（未定）",
    skills: [<SiAngular />, <SiTypescript />, <SiMaterialdesign />],
  },
  {
    title: ["TEDORI", "給与試算ツール開発"],
    description: ["Angular, Firebase, Algoliaを用いて開発しました。", ""],
    category: "個人開発(Angular)",
    releaseDate: "2020年 11月頃",
    skills: [
      <SiAngular />,
      <SiTypescript />,
      <SiMaterialdesign />,
      <SiFirebase />,
      <SiAlgolia />,
    ],
  },
];

export default function Works() {
  return (
    <Section
      title={WORKS_SECTION_TITLE}
      description={WORKS_SECTION_DESCRIPTION}
      id="works"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {WORK_ITEMS.map((work, i) => (
          <WorkItem work={work} key={`work_${i}`} />
        ))}
      </div>
    </Section>
  );
}
