import Section from "@/components/ui/section";
import WorkItem from "./work-item";
import {
  SiReact,
  SiAstro,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiTypescript,
  SiMake,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiJavascript,
  SiSass,
  SiAngular,
  SiMaterialdesign,
  SiFirebase,
  SiAlgolia,
  SiWordpress,
  SiPhp,
} from "@icons-pack/react-simple-icons";

const contents = {
  title: "Works",
  description: (
    <>
      制作・開発に携わった案件を一部ご紹介致します。
      <br />
      守秘義務の都合上、公開できない案件が多数あります。
    </>
  ),
  content: {
    workItems: [
      {
        title: ["Mitsui's portfolio", "ポートフォリオサイトリニューアル"],
        description: [
          "当サイトです。フレームワークにNext.jsを使用しています。",
        ],
        category: "個人開発（Next.js）",
        releaseDate: "2024年 5月頃",
        skills: [
          <SiNextdotjs key={1} />,
          <SiReact key={2} />,
          <SiTypescript key={3} />,
          <SiTailwindcss key={4} />,
          <SiShadcnui key={5} />,
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
          <SiAstro key={1} />,
          <SiReact key={2} />,
          <SiTypescript key={3} />,
          <SiMake key={4} />,
          <SiTailwindcss key={5} />,
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
          <SiSass key={1} />,
          <SiJquery key={2} />,
          <SiJavascript key={3} />,
          <SiHtml5 key={4} />,
          <SiCss3 key={5} />,
        ],
      },
      {
        title: ["【非公開案件】", "販売管理システム開発"],
        description: [
          "Angular, AngularMaterialを採用した案件にて、フロントエンドの実装を担当しました。",
        ],
        category: "システム開発(Angular）",
        releaseDate: "（未定）",
        skills: [
          <SiAngular key={1} />,
          <SiTypescript key={2} />,
          <SiMaterialdesign key={3} />,
        ],
      },
      {
        title: ["TEDORI", "給与試算ツール開発"],
        description: ["Angular, Firebase, Algoliaを用いて開発しました。", ""],
        category: "個人開発(Angular)",
        releaseDate: "2020年 11月頃",
        skills: [
          <SiAngular key={1} />,
          <SiTypescript key={2} />,
          <SiMaterialdesign key={3} />,
          <SiFirebase key={4} />,
          <SiAlgolia key={5} />,
        ],
        image: "/images/works/tedori.png",
        href: "https://tedori.dev/",
      },
      {
        title: ["ナッツ工房メープル 様", "ECサイト リニューアル"],
        description: [
          "有料WordPressテーマとカートプラグインを利用し作成したECサイトです。",
        ],
        category: "WordPressテーマカスタマイズ",
        releaseDate: "2019年 10月頃",
        skills: [
          <SiWordpress key={1} />,
          <SiPhp key={2} />,
          <SiJquery key={3} />,
          <SiHtml5 key={4} />,
          <SiCss3 key={5} />,
        ],
        image: "/images/works/maple.png",
        href: "https://nutskobomaple.shop/",
      },
    ],
  },
};

export default function Works() {
  return (
    <Section
      title={contents.title}
      description={contents.description}
      id="works"
    >
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {contents.content.workItems.map((work, i) => (
          <WorkItem work={work} key={`work_${i}`} />
        ))}
      </div>
    </Section>
  );
}
