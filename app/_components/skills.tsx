import type { CoreSkill, Skill, SkillTag as SkillTagType } from "@/types";
import {
  SiAlgolia,
  SiAngular,
  SiAstro,
  SiAxios,
  SiBiome,
  SiClaude,
  SiDocker,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMaterialdesign,
  SiMui,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiReact,
  SiReacthookform,
  SiRubyonrails,
  SiSass,
  SiShadcnui,
  SiSpringboot,
  SiStimulus,
  SiStorybook,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { OpenAiIcon } from "@/components/icons/openai-icon";
import { SendGridIcon } from "@/components/icons/sendgrid-icon";
import ScrollReveal from "@/components/scroll-reveal";
import Section from "@/components/section";
import CoreSkillCard from "./core-skill-card";
import SkillItem from "./skill-item";
import SkillTag from "./skill-tag";

const SKILLS_SECTION_TITLE = "Skills";
const SKILLS_SECTION_DESCRIPTION =
  "TypeScript / React / Next.jsを中心に、下記の技術を用いた開発が可能です。";

const CORE_SKILLS_TITLE = "Core Skills";

const CORE_SKILLS: CoreSkill[] = [
  {
    label: "TypeScript",
    value: "3",
    unit: "Years",
    icon: <SiTypescript color="default" />,
    description: "型安全性を意識した、堅牢で保守しやすい実装ができます。",
  },
  {
    label: "React",
    value: "4",
    unit: "Years",
    icon: <SiReact color="default" />,
    description: "コンポーネント設計から状態管理まで対応できます。",
  },
  {
    label: "Next.js",
    value: "4",
    unit: "Years",
    icon: <SiNextdotjs className="text-nextjs" />,
    description: "App RouterやSSR/ISRを活かした実装ができます。",
  },
  {
    label: "Tailwind CSS",
    value: "4",
    unit: "Years",
    icon: <SiTailwindcss color="default" />,
    description: "デザインに忠実で崩れにくいスタイリングができます。",
  },
  {
    label: "JavaScript",
    value: "8",
    unit: "Years",
    icon: <SiJavascript color="default" />,
    description: "DOM操作から非同期処理まで幅広く対応できます。",
  },
  {
    label: "HTML / CSS",
    value: "8",
    unit: "Years",
    icon: <SiHtml5 color="default" />,
    description: "セマンティックでアクセシブルなマークアップができます。",
  },
];

const AI_SKILLS_TITLE = "AI / 開発支援";
const AI_SKILLS_DESCRIPTION =
  "設計・実装・レビュー・テスト作成まで、生成AIを日常的に活用して開発効率の向上に取り組んでいます。";

const AI_SKILLS: Skill[] = [
  {
    icon: <SiClaude color="default" />,
    label: "Claude Code",
    description: "設計・実装・レビュー・テスト作成まで日常的に活用。",
  },
  {
    icon: <OpenAiIcon className="text-foreground" />,
    label: "ChatGPT",
    description: "実装方針の壁打ちやコードレビューの補助に活用。",
  },
  {
    icon: <SiFigma color="default" />,
    label: "Figma MCP",
    description: "Figmaのデザインデータをもとにした実装効率化に活用。",
  },
];

interface SkillTagCategory {
  title: string;
  skillItems: SkillTagType[];
}

const SKILL_TAG_CATEGORIES: SkillTagCategory[] = [
  {
    title: "UI / Styling",
    skillItems: [
      { icon: <SiShadcnui className="text-shadcnui" />, label: "shadcn/ui" },
      { icon: <SiMui color="default" />, label: "MUI" },
      { icon: <SiMaterialdesign color="default" />, label: "Angular Material" },
      { icon: <SiSass color="default" />, label: "Sass" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    skillItems: [
      { icon: <SiReact color="default" />, label: "React Native" },
      { icon: <SiExpo className="text-expo" />, label: "Expo" },
      { icon: <SiAngular className="text-angular" />, label: "Angular" },
      { icon: <SiVuedotjs color="default" />, label: "Vue.js" },
      { icon: <SiStimulus color="default" />, label: "Stimulus.js" },
      { icon: <SiJquery color="default" />, label: "jQuery" },
      { icon: <SiAstro color="default" />, label: "Astro" },
      { icon: <SiWordpress color="default" />, label: "WordPress" },
      { icon: <SiSpringboot color="default" />, label: "Spring Boot" },
      { icon: <SiRubyonrails color="default" />, label: "Ruby on Rails" },
    ],
  },
  {
    title: "Frontend Tooling",
    skillItems: [
      { icon: <SiReacthookform color="default" />, label: "React Hook Form" },
      {
        icon: <SiTanstack className="text-foreground" />,
        label: "TanStack Query",
      },
      { icon: <SiZod color="default" />, label: "Zod" },
      { icon: <SiAxios color="default" />, label: "Axios" },
      { icon: <SiBiome color="default" />, label: "Biome" },
      { icon: <SiVitest color="default" />, label: "Vitest" },
      { icon: <SiOpenapiinitiative color="default" />, label: "OpenAPI" },
      { icon: <SiStorybook color="default" />, label: "Storybook" },
    ],
  },
  {
    title: "Backend / Services",
    skillItems: [
      { icon: <SiFirebase color="default" />, label: "Firebase" },
      { icon: <SendGridIcon color="default" />, label: "SendGrid" },
      { icon: <SiAlgolia color="default" />, label: "Algolia" },
    ],
  },
  {
    title: "Development",
    skillItems: [
      { icon: <SiGit color="default" />, label: "Git" },
      { icon: <SiGithub className="text-github" />, label: "GitHub" },
      { icon: <SiGithubactions color="default" />, label: "GitHub Actions" },
      { icon: <SiVite color="default" />, label: "Vite" },
      { icon: <SiWebpack className="text-foreground" />, label: "Webpack" },
      { icon: <SiDocker color="default" />, label: "Docker" },
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
      <ScrollReveal
        className="skills-content"
        targets=":scope > div:first-child > h3, .core-skill, .skills-ai, .skill-category"
      >
        <div>
          <h3>{CORE_SKILLS_TITLE}</h3>
          <div className="core-skills-grid">
            {CORE_SKILLS.map((skill) => (
              <CoreSkillCard skill={skill} key={skill.label} />
            ))}
          </div>
        </div>

        <div className="skills-ai">
          <h3>{AI_SKILLS_TITLE}</h3>
          <p className="mb-3 text-sm leading-[1.75]">{AI_SKILLS_DESCRIPTION}</p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {AI_SKILLS.map((skill) => (
              <li key={skill.label}>
                <SkillItem skill={skill} />
              </li>
            ))}
          </ul>
        </div>

        {SKILL_TAG_CATEGORIES.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skillItems.map((skill) => (
                <li key={skill.label}>
                  <SkillTag skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}
