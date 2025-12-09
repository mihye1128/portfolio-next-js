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
  SiPhp,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiShadcnui,
  SiStimulus,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiVuedotjs,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import Section from "@/components/section";
import WorkItem from "./work-item";

const WORKS_SECTION_TITLE = "Works";
const WORKS_SECTION_DESCRIPTION = (
  <>
    これまでに参画した主要なプロジェクトを
    <br />
    一部抜粋してご紹介いたします。
  </>
);

const WORK_ITEMS: Work[] = [
  {
    title: "転職情報メディアサイトの開発",
    description: [
      "Next.js, MicroCMSを使用した転職情報メディアサイト開発を担当。",
      "Storybookでのコンポーネント管理、Vitestでのテストを実装。",
    ],
    category: "メディアサイト開発（Next.js）",
    period: "2025.11 -",
    skills: [
      <SiTypescript />,
      <SiReact />,
      <SiNextdotjs />,
      <SiStorybook />,
      <SiVitest />,
    ],
  },
  {
    title: "転職支援プラットフォーム開発",
    description: [
      "Ruby on Rails, Turbo Rails, Stimulus.jsを使用した転職支援プラットフォーム開発のUI実装を担当。求人情報検索、適職診断、求職者管理画面などを実装。",
    ],
    category: "Webアプリ開発（Ruby on Rails）",
    period: "2025.04 -",
    skills: [<SiRuby />, <SiRubyonrails />, <SiJavascript />, <SiStimulus />],
  },
  {
    title: "ホテル会員向けアプリ",
    description: [
      "ホテル会員向けスマホアプリおよび管理画面の新規開発に参画。",
      "モバイルアプリは React Native + Expo を用いて実装。",
      "管理画面は Next.js を採用し、UI実装やコードレビューを担当。",
    ],
    category: "モバイルアプリ開発（React Native）",
    period: "2024.12 - 2025.03",
    skills: [
      <SiTypescript />,
      <SiReact />,
      <SiExpo />,
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiShadcnui />,
      <SiFirebase />,
    ],
  },
  {
    title: "ポートフォリオサイトリニューアル",
    description: ["当サイト。フレームワークにNext.jsを採用。"],
    category: "個人開発（Next.js）",
    period: "2024.05",
    skills: [
      <SiTypescript />,
      <SiReact />,
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiShadcnui />,
    ],
    image: "/images/works/mitsuisite.png",
    href: "https://github.com/mihye1128/portfolio-next-js",
  },
  {
    title: "サービスサイトリプレース・保守",
    description: [
      "WordPressで構築されたサイトの静的サイトへのリプレースを担当。",
      "引き続きWordPressを使用するサイトにはShifterを導入。",
      "その他はAstroを採用し、静的サイトへリプレース。",
      "Algoliaを用いた検索機能の実装や、Salesforceなどへの外部連携も担当。",
    ],
    category: "サイトリプレース（Astro）",
    period: "2022.09 - 2024.11",
    skills: [
      <SiTypescript />,
      <SiReact />,
      <SiAstro />,
      <SiTailwindcss />,
      <SiMake />,
      <SiAlgolia />,
    ],
  },
  {
    title: "販売管理システム開発",
    description: [
      "Angular, AngularMaterialを採用した案件にて、フロントエンドの実装を担当。",
    ],
    category: "システム開発(Angular）",
    period: "2021.12 - 2022.06",
    skills: [<SiTypescript />, <SiAngular />, <SiMaterialdesign />],
  },
  {
    title: "ビジネスマッチングアプリ開発 ",
    description: [
      "ビジネスマッチングアプリの開発プロジェクトにディレクターとして参画。",
      "エンジニアのタスク管理、クライアントMTG、コードレビューなどの品質管理を担当。",
    ],
    category: "システム開発(Angular)",
    period: "2021.04 - 2021.09",
    skills: [
      <SiTypescript />,
      <SiAngular />,
      <SiMaterialdesign />,
      <SiFirebase />,
      <SiAlgolia />,
    ],
  },
  {
    title: "各種サイトのリプレース・保守 ",
    description: [
      "フリーランスのフロントエンドエンジニアとして活動開始。",
      "WordPressやMakeshopなどのテーマ開発案件へ参画。",
      "ECサイトの開発や求人ポータルのテーマ開発などを担当。",
    ],
    category: "Webサイト制作(WordPress)",
    period: "2019.04 - 2021.03",
    skills: [
      <SiJavascript />,
      <SiPhp />,
      <SiHtml5 />,
      <SiCss />,
      <SiWordpress />,
      <SiJquery />,
      <SiReact />,
      <SiVuedotjs />,
    ],
  },
  {
    title: "各種サイトのリプレース・保守 ",
    description: [
      "Webアプリ開発・Web制作会社へ就職。",
      "主にHTML/CSSコーディング、WordPressテーマ作成業務を担当。",
    ],
    category: "サイトリプレース(WordPress)",
    period: "2018.03 - 2019.03",
    skills: [
      <SiJavascript />,
      <SiPhp />,
      <SiHtml5 />,
      <SiCss />,
      <SiWordpress />,
      <SiJquery />,
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
      <div className="mx-auto max-w-3xl">
        {WORK_ITEMS.map((work, i) => (
          <WorkItem
            work={work}
            key={`work_${i}`}
            isLast={i === WORK_ITEMS.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
