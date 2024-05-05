import Section from "@/components/ui/section";
import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAstro,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiWordpress,
  SiPhp,
  SiLocal,
  SiDocker,
  SiVisualstudiocode,
  SiGit,
  SiAdobexd,
  SiFigma,
  SiJamstack,
  SiMake,
  SiFirebase,
  SiCloudflare,
} from "@icons-pack/react-simple-icons";
import SkillItem from "./skill-item";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

const contents = {
  title: "Skills",
  description: "下記の技術を用いた開発が可能です。",
  content: {
    skillset: [
      {
        title: "Mark up",
        skillItems: [
          {
            icon: <SiHtml5 color="default" size={40} />,
            label: "HTML",
            description: "プリプロセッサ（EJS）を採用するケースもあります。",
          },
          {
            icon: <SiCss3 color="default" size={40} />,
            label: "CSS",
            description:
              "CSSフレームワークを採用しない場合、Sassを導入します。",
          },
          {
            icon: <SiTailwindcss color="default" size={40} />,
            label: "Tailwind CSS",
            description: "CSSフレームワークは主にTailwind CSSを採用します。",
          },
          {
            icon: <SiAstro color="default" size={40} />,
            label: "Astro",
            description: "静的サイト実装、JAMstackサイトの実装に採用します。",
          },
        ],
      },
      {
        title: "JavaScript",
        skillItems: [
          {
            icon: <SiTypescript color="default" size={40} />,
            label: "TypeScript",
            description:
              "フレームワークを採用する際は、合わせてTypescriptを採用します。",
          },
          {
            icon: <SiReact color="default" size={40} />,
            label: "React",
            description: "webサイト実装にて、採用することがあります。",
          },
          {
            icon: <SiNextdotjs size={40} />,
            label: "Next.js",
            description: "Next.js, Typescriptを採用した開発経験があります。",
          },
          {
            icon: <SiAngular size={40} />,
            label: "Angular",
            description: "Angular, AngularMaterialを採用した開発が可能です。",
          },
        ],
      },
      {
        title: "WordPress",
        skillItems: [
          {
            icon: <SiWordpress color="default" size={40} />,
            label: "WordPress",
            description:
              "サービスサイト、ポータルサイトなどの開発経験が豊富です。",
          },
          {
            icon: <SiPhp color="default" size={40} />,
            label: "PHP",
            description:
              "WordPressテーマ開発に必要な基本的な構文を習得しています。",
          },
          {
            icon: <SiLocal color="default" size={40} />,
            label: "Local",
            description:
              "コーダーが参画する案件で、ローカル環境構築に採用しています。",
          },
          {
            icon: <SiDocker color="default" size={40} />,
            label: "Docker",
            description:
              "エンジニアが参画する案件で、ローカル環境構築に採用しています。",
          },
        ],
      },
      {
        title: "Developer tools",
        skillItems: [
          {
            icon: <SiVisualstudiocode color="default" size={40} />,
            label: "VSCode",
            description: "コーディング時に採用しているエディタは、VSCodeです。",
          },
          {
            icon: <SiGit color="default" size={40} />,
            label: "Git",
            description: "GitHub, Backlog, Bitbucketを利用した経験があります。",
          },
          {
            icon: <SiAdobexd color="default" size={40} />,
            label: "Adobe XD",
            description: "コーディングの際に必要な基本的な操作が可能です。",
          },
          {
            icon: <SiFigma color="default" size={40} />,
            label: "Figma",
            description: "コーディングの際に必要な基本的な操作が可能です。",
          },
        ],
      },
      {
        title: "Other",
        skillItems: [
          {
            icon: <SiJamstack color="default" size={40} />,
            label: "Jamstack",
            description: "headressCMSを使用した静的サイトの実装が可能です。",
          },
          {
            icon: <SiMake color="default" size={40} />,
            label: "Make",
            description:
              "一部のバックエンド処理をMakeにて実装することが可能です。",
          },
          {
            icon: <SiFirebase color="default" size={40} />,
            label: "Firebase",
            description: "バックエンド開発の際に採用しています。",
          },
          {
            icon: <SiCloudflare color="default" size={40} />,
            label: "Cloudflare",
            description: "Cloudflare Pagesを利用しています。",
          },
        ],
      },
    ],
  },
};

export default function Skills() {
  return (
    <Section
      title={contents.title}
      description={contents.description}
      id="skills"
    >
      <div className="grid gap-8">
        {contents.content.skillset.map((item) => (
          <div key={item.title}>
            <h3 className={cn([rajdhani.className, "text-2xl mb-3"])}>
              {item.title}
            </h3>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
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
