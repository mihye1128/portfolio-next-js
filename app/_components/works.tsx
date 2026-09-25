import type { Work } from "@/types";
import {
  SiAlgolia,
  SiAngular,
  SiAstro,
  SiClaude,
  SiCline,
  SiExpo,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMake,
  SiMaterialdesign,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPosthog,
  SiReact,
  SiReacthookform,
  SiRuby,
  SiRubyonrails,
  SiSass,
  SiShadcnui,
  SiSpringboot,
  SiStimulus,
  SiStorybook,
  SiSwagger,
  SiTailwindcss,
  SiTanstack,
  SiThymeleaf,
  SiTypescript,
  SiVitest,
  SiVuedotjs,
  SiWordpress,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { OpenAiIcon } from "@/components/icons/openai-icon";
import ScrollReveal from "@/components/scroll-reveal";
import Section from "@/components/section";
import WorkItem from "./work-item";

const WORKS_SECTION_TITLE = "Works";
const WORKS_SECTION_DESCRIPTION =
  "Web制作からWebアプリケーションまで、異なる開発環境で担当してきたUI・フロントエンド実装の事例です。";

const WORK_ITEMS: Work[] = [
  {
    title: "公共団体向け条文投稿システムのリプレイス・追加開発",
    description: [
      "Clineを活用した仕様書の把握・実装計画の作成・実装を担当。",
      "JavaScript / jQueryによる画面イベント・入力制御、Thymeleafを用いたサーバーサイドレンダリングでのデータ埋め込みを実装。",
      "Ajax通信によるControllerとのデータ送受信と、取得データを用いた画面の動的描画を実装。",
      "CSS関連の不具合に対し、アクセシビリティ・レスポンシブを考慮した修正・共通化を実施。",
    ],
    category: "Spring Boot / Thymeleaf環境での画面実装",
    period: "2026.07 - 2026.10",
    skills: [
      { label: "JavaScript", icon: <SiJavascript color="default" /> },
      { label: "jQuery", icon: <SiJquery color="default" /> },
      { label: "Spring Boot（環境）", icon: <SiSpringboot color="default" /> },
      { label: "Thymeleaf", icon: <SiThymeleaf color="default" /> },
      { label: "MySQL（環境）", icon: <SiMysql color="default" /> },
      { label: "Cline", icon: <SiCline className="text-foreground" /> },
    ],
  },
  {
    title: "SNSプラットフォームのクリエイター向けダッシュボード開発",
    description: [
      "Claude Codeを活用した機能実装・テストコードの作成を担当。",
      "フォロワー・課金者向けメール一斉送信機能の改修（テンプレート追加、一覧画面のUI改善）を実装。",
      "OpenAPIによるAPI仕様を確認しながらのサーバー連携実装、PostHogによるイベント計測の実装を担当。",
      "Figmaをもとにした実装に際し、着手前にユーザー導線と実装コストを確認。PM・デザイナーと仕様改善や実装範囲の見直しを提案。",
    ],
    category: "SaaSダッシュボード開発（Next.js）",
    period: "2026.02 - 2026.05",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-nextjs" /> },
      { label: "React Hook Form", icon: <SiReacthookform color="default" /> },
      {
        label: "TanStack Query",
        icon: <SiTanstack className="text-foreground" />,
      },
      { label: "Zod", icon: <SiZod color="default" /> },
      { label: "Vitest", icon: <SiVitest color="default" /> },
      { label: "PostHog", icon: <SiPosthog className="text-foreground" /> },
      { label: "Claude Code", icon: <SiClaude color="default" /> },
    ],
  },
  {
    title: "転職情報メディアサイトの開発",
    description: [
      "Claude Code / Figma MCPを活用したUI実装の効率化に取り組みながら、Next.js / MicroCMSを用いた開発環境を構築。",
      "共通レイアウト・各画面のUI実装、Storybookの導入・設定を担当。",
      "ユニットテストの実装およびテスト自動化を推進。",
    ],
    category: "メディアサイト開発（Next.js）",
    period: "2025.11 - 2026.01",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-nextjs" /> },
      { label: "Storybook", icon: <SiStorybook color="default" /> },
      { label: "Vitest", icon: <SiVitest color="default" /> },
      { label: "Claude Code", icon: <SiClaude color="default" /> },
    ],
  },
  {
    title: "求人マッチングプラットフォーム開発",
    description: [
      "各画面・管理画面のUI実装を担当。Stimulus.jsを用いたインタラクティブ機能（求人情報検索、適職診断、求職者管理画面）を実装。",
      "CSS設計および保守性向上のためのリファクタリングを実施。",
    ],
    category: "Ruby on Rails / Stimulus.js環境でのフロントエンド実装",
    period: "2025.04 - 2026.01",
    skills: [
      { label: "Ruby（環境）", icon: <SiRuby color="default" /> },
      {
        label: "Ruby on Rails（環境）",
        icon: <SiRubyonrails color="default" />,
      },
      { label: "JavaScript", icon: <SiJavascript color="default" /> },
      { label: "Stimulus.js", icon: <SiStimulus color="default" /> },
    ],
  },
  {
    title: "ホテル会員向けアプリ・管理画面開発",
    description: [
      "VS CodeのChatGPTプラグインを活用した機能実装・コードレビュー・管理画面のUI設計を担当。",
      "React Native / Expoを用いたスマホアプリのUI実装。",
      "Firebaseを利用したログイン・抽選・クーポン等の機能実装、Next.jsを用いた管理画面のUI設計・実装。",
      "管理画面ではデザインデータがない状態から、仕様書をもとにUI設計・実装まで担当。",
    ],
    category: "モバイルアプリ開発（React Native）",
    period: "2024.12 - 2025.03",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Expo", icon: <SiExpo className="text-expo" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-nextjs" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss color="default" /> },
      { label: "shadcn/ui", icon: <SiShadcnui className="text-shadcnui" /> },
      { label: "Firebase", icon: <SiFirebase color="default" /> },
      { label: "ChatGPT", icon: <OpenAiIcon className="text-foreground" /> },
    ],
  },
  {
    title: "ポートフォリオサイトリニューアル",
    description: [
      "当サイト。フレームワークにNext.jsを採用。",
      "Vitestによるテスト自動化、Storybookでのコンポーネント管理を継続的に整備し、Claude Codeを活用した保守・改善を行っています。",
    ],
    category: "個人開発（Next.js）",
    period: "2024.05 -",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-nextjs" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss color="default" /> },
      { label: "shadcn/ui", icon: <SiShadcnui className="text-shadcnui" /> },
      { label: "Vitest", icon: <SiVitest color="default" /> },
      { label: "Storybook", icon: <SiStorybook color="default" /> },
      { label: "Claude Code", icon: <SiClaude color="default" /> },
    ],
    image: "/images/works/mitsuisite.png",
    href: "https://github.com/mihye1128/portfolio-next-js",
  },
  {
    title: "コーポレートサイト等のリプレース・運用、学習管理システム開発",
    description: [
      "v0を活用したLPの実装、WordPressサイトのリプレース（Shifter / Astro + React）を担当。",
      "フォーム機能の実装（Salesforce等の外部サービス連携を含む）、サイト内検索機能の実装。",
      "学習管理システムのダッシュボードUI実装。",
      "コードレビュー、デプロイ自動化、サイト運用・保守も担当。",
      "WordPressの脆弱性対策を目的としたリプレースに際し、Astroを選定・導入。",
    ],
    category: "サイトリプレース（Astro）",
    period: "2022.09 - 2024.11",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Astro", icon: <SiAstro color="default" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss color="default" /> },
      { label: "Make", icon: <SiMake color="default" /> },
      { label: "Algolia", icon: <SiAlgolia color="default" /> },
      { label: "Firebase", icon: <SiFirebase color="default" /> },
    ],
  },
  {
    title: "販売管理在庫パッケージのフロントエンド実装",
    description: [
      "Angular, TypeScriptを用いた販売管理・在庫管理画面のUI実装を担当。",
      "Swaggerで定義されたAPI仕様に基づくフロントエンド実装、Angular Materialを用いたUIコンポーネントの実装。",
    ],
    category: "システム開発（Angular）",
    period: "2021.12 - 2022.06",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "Angular", icon: <SiAngular className="text-angular" /> },
      { label: "Angular Material", icon: <SiMaterialdesign color="default" /> },
      { label: "Swagger", icon: <SiSwagger color="default" /> },
      { label: "MySQL（環境）", icon: <SiMysql color="default" /> },
    ],
  },
  {
    title: "ビジネスマッチングアプリ開発ディレクション",
    description: [
      "クリエイター・講師と企業のマッチングアプリ開発プロジェクトにディレクターとして参画。",
      "業務委託エンジニア・オフショアチームのタスク管理、クライアントとの仕様確認・進捗調整を担当。",
      "コードレビュー・動作確認などの品質管理、一部画面のUI実装・LPのデザイン実装。",
    ],
    category: "システム開発（Angular）",
    period: "2021.04 - 2021.09",
    skills: [
      { label: "TypeScript", icon: <SiTypescript color="default" /> },
      { label: "Angular", icon: <SiAngular className="text-angular" /> },
      { label: "Angular Material", icon: <SiMaterialdesign color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-nextjs" /> },
      { label: "Firebase", icon: <SiFirebase color="default" /> },
      { label: "Algolia", icon: <SiAlgolia color="default" /> },
    ],
  },
  {
    title: "サービスサイトのリプレース・保守",
    description: [
      "Ferret OneからWordPressへのサイトリプレースを担当。",
      "お問い合わせフォーム、決済機能を含むユーザー新規登録フォームの実装。",
      "新規ページの実装、既存ページの改修・WordPress保守。",
    ],
    category: "サイトリプレース（WordPress）",
    period: "2020.12 - 2021.03",
    skills: [
      { label: "PHP", icon: <SiPhp color="default" /> },
      { label: "JavaScript", icon: <SiJavascript color="default" /> },
      { label: "WordPress", icon: <SiWordpress color="default" /> },
      { label: "Sass", icon: <SiSass color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Firebase", icon: <SiFirebase color="default" /> },
    ],
  },
  {
    title: "各種サイトのリプレース・保守",
    description: [
      "フリーランスのフロントエンドエンジニアとして活動開始。",
      "WordPressやMakeshopなどのテーマ開発案件へ参画。",
      "ECサイトの開発や求人ポータルのテーマ開発などを担当。",
    ],
    category: "Webサイト制作（WordPress）",
    period: "2019.04 - 2020.11",
    skills: [
      { label: "JavaScript", icon: <SiJavascript color="default" /> },
      { label: "PHP", icon: <SiPhp color="default" /> },
      { label: "HTML", icon: <SiHtml5 /> },
      { label: "WordPress", icon: <SiWordpress color="default" /> },
      { label: "jQuery", icon: <SiJquery color="default" /> },
      { label: "React", icon: <SiReact color="default" /> },
      { label: "Vue.js", icon: <SiVuedotjs color="default" /> },
    ],
  },
  {
    title: "各種サイトのリプレース・保守",
    description: [
      "Webアプリ開発・Web制作会社へ就職。",
      "主にHTML/CSSコーディング、WordPressテーマ作成業務を担当。",
    ],
    category: "サイトリプレース（WordPress）",
    period: "2018.03 - 2019.03",
    skills: [
      { label: "JavaScript", icon: <SiJavascript color="default" /> },
      { label: "PHP", icon: <SiPhp color="default" /> },
      { label: "HTML", icon: <SiHtml5 /> },
      { label: "WordPress", icon: <SiWordpress color="default" /> },
      { label: "jQuery", icon: <SiJquery color="default" /> },
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
      <ScrollReveal className="works-list" targets=":scope > article">
        {WORK_ITEMS.map((work, i) => (
          <WorkItem work={work} key={`work_${i}`} />
        ))}
      </ScrollReveal>
    </Section>
  );
}
