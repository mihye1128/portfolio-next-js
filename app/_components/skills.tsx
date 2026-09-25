import type { CoreSkill } from "@/types";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import ScrollReveal from "@/components/scroll-reveal";
import Section from "@/components/section";
import CoreSkillCard from "./core-skill-card";

const CORE_SKILLS: CoreSkill[] = [
  {
    label: "TypeScript",
    icon: <SiTypescript aria-hidden="true" />,
    value: "3",
    unit: "年以上",
    description:
      "React / Next.js、Angularを用いたフロントエンド開発で使用。画面実装やAPI連携、既存機能の改修を担当。",
  },
  {
    label: "React",
    icon: <SiReact aria-hidden="true" />,
    value: "4",
    unit: "年以上",
    description:
      "Webサイト・WebアプリケーションのUI実装、コンポーネント開発、フォーム・API連携で使用。",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs aria-hidden="true" />,
    value: "4",
    unit: "年以上",
    description:
      "Webサービス、メディアサイト、管理画面の開発で使用。画面実装、API連携、既存機能の改修・UI改善を担当。",
  },
  {
    label: "JavaScript",
    icon: <SiJavascript aria-hidden="true" />,
    value: "8",
    unit: "年以上",
    description:
      "Web制作からWebアプリケーション開発まで継続して使用。DOM操作、イベント処理、非同期通信を伴うUI実装を担当。",
  },
  {
    label: "HTML / CSS",
    icon: <SiHtml5 aria-hidden="true" />,
    value: "8",
    unit: "年以上",
    description:
      "Webサイト・Webアプリケーションの画面実装で使用。WordPressテーマ制作、共通レイアウト、レスポンシブ対応、既存CSSの改修を担当。",
  },
];

const OTHER_TECHNOLOGIES = [
  {
    title: "UI / Frontend Development",
    description:
      "Tailwind CSS（実務経験 4年以上）、Sass、Storybook、React Hook Form、TanStack Query、Zod、MUI、shadcn/ui、Axios、Vitest、OpenAPI",
  },
  {
    title: "Other Experience",
    description:
      "案件ごとに使用してきた技術：Angular / Angular Material、Vue.js、React Native / Expo、Astro、WordPress、jQuery。Spring Boot / Thymeleaf環境での画面実装、Ruby on Rails / Stimulus.js環境でのフロントエンド実装も担当。",
  },
  { title: "サービス連携", description: "Firebase、SendGrid、Algolia" },
  {
    title: "開発環境・支援ツール",
    description:
      "Git、GitHub、GitHub Actions、Vite、Webpack、Biome、Docker。Claude Code、ChatGPT、Figma MCPを実装・レビューなどの開発支援に活用。",
  },
];

export default function Skills() {
  return (
    <Section
      title="Skills"
      description="フロントエンドの実務で継続して使用してきた技術と、その用途。"
      id="skills"
    >
      <ScrollReveal
        className="skills-content"
        targets=".core-skill, .skills-supporting"
      >
        <div>
          <h3>Core Technologies</h3>
          <div className="core-skills-list">
            {CORE_SKILLS.map((skill) => (
              <CoreSkillCard skill={skill} key={skill.label} />
            ))}
          </div>
        </div>
        <dl className="skills-supporting">
          {OTHER_TECHNOLOGIES.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </Section>
  );
}
