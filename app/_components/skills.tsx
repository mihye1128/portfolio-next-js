import type { Skill } from "@/types";
import {
  SiAlgolia,
  SiAngular,
  SiAstro,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiHtml5,
  SiLocal,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiStimulus,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import Section from "@/components/section";
import SkillItem from "./skill-item";

const SKILLS_SECTION_TITLE = "Skills";
const SKILLS_SECTION_DESCRIPTION = "下記の技術を用いた開発が可能です。";

interface SkillCategory {
  title: string;
  skillItems: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "JavaScript",
    skillItems: [
      {
        icon: <SiTypescript color="default" size={40} />,
        label: "TypeScript",
        description: "型安全を考慮し、基本的にTypeScriptを採用します。",
      },
      {
        icon: <SiReact color="default" size={40} />,
        label: "React",
        description: "React, React Nativeを使用した開発経験があります。",
      },
      {
        icon: <SiNextdotjs className="text-nextjs" size={40} />,
        label: "Next.js",
        description: "Next.js, TypeScriptを採用した開発経験があります。",
      },
      {
        icon: <SiAngular className="text-angular" size={40} />,
        label: "Angular",
        description: "Angular, AngularMaterialでの開発経験があります。",
      },
      {
        icon: <SiExpo className="text-expo" size={40} />,
        label: "Expo",
        description: "Expoを採用したモバイルアプリ開発経験があります。",
      },
      {
        icon: <SiStorybook color="default" size={40} />,
        label: "Storybook",
        description: "UIコンポーネントの開発・管理に使用しています。",
      },
      {
        icon: <SiVitest color="default" size={40} />,
        label: "Vitest",
        description: "ユニットテストに使用しています。",
      },
      {
        icon: <SiStimulus color="default" size={40} />,
        label: "Stimulus",
        description: "Rails環境で動的UI実装に使用した経験があります。",
      },
    ],
  },
  {
    title: "Mark up",
    skillItems: [
      {
        icon: <SiHtml5 color="default" size={40} />,
        label: "HTML",
        description: "プリプロセッサ（EJSなど）採用も可能です。",
      },
      {
        icon: <SiCss color="default" size={40} />,
        label: "CSS",
        description: "Sassを採用した実装も可能です。",
      },
      {
        icon: <SiTailwindcss color="default" size={40} />,
        label: "Tailwind CSS",
        description: "主要CSSフレームワークとして使用しています。",
      },
      {
        icon: <SiAstro color="default" size={40} />,
        label: "Astro",
        description: "静的サイト実装に活用しています。",
      },
    ],
  },
  {
    title: "Backend & Environment",
    skillItems: [
      {
        icon: <SiWordpress color="default" size={40} />,
        label: "WordPress",
        description: "各種サイトの構築経験があります。",
      },
      {
        icon: <SiPhp color="default" size={40} />,
        label: "PHP",
        description: "WPテーマ制作に必要な基本的な構文が可能です。",
      },
      {
        icon: <SiDocker color="default" size={40} />,
        label: "Docker",
        description: "ローカル環境構築に採用しています。",
      },
      {
        icon: <SiLocal color="default" size={40} />,
        label: "Local",
        description: "案件規模やチーム構成を考慮して採用します。",
      },
    ],
  },
  {
    title: "Other",
    skillItems: [
      {
        icon: <SiFigma color="default" size={40} />,
        label: "Figma",
        description: "コーディングの際に必要な基本的な操作が可能です。",
      },
      {
        icon: <SiFirebase color="default" size={40} />,
        label: "Firebase",
        description: "アプリのバックエンドとして使用経験があります。",
      },
      {
        icon: <SiCloudflare color="default" size={40} />,
        label: "Cloudflare",
        description: "Pages / Workersの使用経験があります。",
      },
      {
        icon: <SiAlgolia color="default" size={40} />,
        label: "Algolia",
        description: "検索機能の実装に使用しました。",
      },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      title={SKILLS_SECTION_TITLE}
      description={SKILLS_SECTION_DESCRIPTION}
      id="skills"
    >
      <div className="grid gap-8">
        {SKILL_CATEGORIES.map((item) => (
          <div key={item.title}>
            <h3 className="font-rajdhani mb-3 text-2xl">{item.title}</h3>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {item.skillItems.map((skill) => (
                <li key={skill.label}>
                  <SkillItem skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
