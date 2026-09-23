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
  SiJquery,
  SiMaterialdesign,
  SiMui,
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
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { Mail, MessageSquare } from "lucide-react";
import Section from "@/components/section";
import CoreSkillBar from "./core-skill-bar";
import SkillItem from "./skill-item";
import SkillTag from "./skill-tag";

const SKILLS_SECTION_TITLE = "Skills";
const SKILLS_SECTION_DESCRIPTION =
  "TypeScript / React / Next.jsを中心に、下記の技術を用いた開発が可能です。";

const CORE_SKILLS_TITLE = "Core Skills";

const CORE_SKILLS: CoreSkill[] = [
  { label: "TypeScript", years: "3年以上", levelPercent: 40 },
  { label: "React", years: "4年以上", levelPercent: 50 },
  { label: "Next.js", years: "4年以上", levelPercent: 50 },
  { label: "JavaScript", years: "8年以上", levelPercent: 100 },
  { label: "HTML / CSS", years: "8年以上", levelPercent: 100 },
];

const AI_SKILLS_TITLE = "AI / 開発支援";
const AI_SKILLS_DESCRIPTION =
  "設計・実装・レビュー・テスト作成まで、生成AIを日常的に活用して開発効率の向上に取り組んでいます。";

const AI_SKILLS: Skill[] = [
  {
    icon: <SiClaude color="default" size={40} />,
    label: "Claude Code",
    description: "設計・実装・レビュー・テスト作成まで日常的に活用。",
  },
  {
    icon: <MessageSquare className="text-foreground" size={40} />,
    label: "ChatGPT",
    description: "実装方針の壁打ちやコードレビューの補助に活用。",
  },
  {
    icon: <SiFigma color="default" size={40} />,
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
      { icon: <SiTailwindcss color="default" />, label: "Tailwind CSS" },
      { icon: <SiShadcnui color="default" />, label: "shadcn/ui" },
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
      { icon: <Mail className="text-foreground" />, label: "SendGrid" },
      { icon: <SiAlgolia color="default" />, label: "Algolia" },
    ],
  },
  {
    title: "Development",
    skillItems: [
      { icon: <SiGit color="default" />, label: "Git" },
      { icon: <SiGithub color="default" />, label: "GitHub" },
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
      <div className="grid gap-12">
        <div>
          <h3 className="font-rajdhani mb-4 text-2xl">{CORE_SKILLS_TITLE}</h3>
          <div className="mx-auto grid max-w-2xl gap-4">
            {CORE_SKILLS.map((skill) => (
              <CoreSkillBar skill={skill} key={skill.label} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-rajdhani mb-1 text-2xl">{AI_SKILLS_TITLE}</h3>
          <p className="mb-3 text-sm leading-[1.75]">{AI_SKILLS_DESCRIPTION}</p>
          <ul className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-3">
            {AI_SKILLS.map((skill) => (
              <li key={skill.label}>
                <SkillItem skill={skill} />
              </li>
            ))}
          </ul>
        </div>

        {SKILL_TAG_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="font-rajdhani mb-3 text-2xl">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skillItems.map((skill) => (
                <li key={skill.label}>
                  <SkillTag skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
