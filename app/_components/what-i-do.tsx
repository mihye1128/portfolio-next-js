import {
  AppWindow,
  FilePenLine,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import Section from "@/components/section";

const AREAS = [
  {
    title: "画面・コンポーネントの実装",
    icon: PanelsTopLeft,
    description:
      "デザイン・仕様をもとに、WebサイトやWebアプリケーションの画面・共通コンポーネントを実装。",
  },
  {
    title: "Webアプリケーションの開発",
    icon: AppWindow,
    description:
      "フォーム、API連携、状態に応じて表示が変わるUIなど、Webアプリケーションのフロントエンドを実装。",
  },
  {
    title: "既存サービスの改修・改善",
    icon: FilePenLine,
    description:
      "既存コードや仕様を確認しながら、機能追加・UI改善・不具合修正を担当。",
  },
  {
    title: "チームでの開発",
    icon: UsersRound,
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
            <div className="what-i-do-mark" aria-hidden="true">
              <area.icon size={28} strokeWidth={1.25} />
              <span className="what-i-do-number">0{index + 1}</span>
            </div>
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
