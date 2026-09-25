import ScrollReveal from "@/components/scroll-reveal";
import Section from "@/components/section";

const AREAS = [
  {
    title: "UI Implementation",
    description:
      "デザイン・仕様をもとに、WebサイトやWebアプリケーションの画面・共通コンポーネントを実装。",
  },
  {
    title: "Web Application",
    description:
      "フォーム、API連携、状態に応じて表示が変わるUIなど、Webアプリケーションのフロントエンドを実装。",
  },
  {
    title: "Existing Products",
    description:
      "既存コードや仕様を確認しながら、機能追加・UI改善・不具合修正を担当。",
  },
  {
    title: "Team Development",
    description:
      "デザイナー・バックエンドエンジニア・PMと連携し、仕様確認や実装範囲の調整を行いながら開発。",
  },
];

export default function WhatIDo() {
  return (
    <Section
      id="what-i-do"
      title="What I Do"
      description="UI実装を軸に、プロジェクトごとの開発環境で担当してきたこと。"
    >
      <ScrollReveal className="what-i-do-list" targets=":scope > div">
        {AREAS.map((area, index) => (
          <div className="what-i-do-item" key={area.title}>
            <span className="what-i-do-number" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}
