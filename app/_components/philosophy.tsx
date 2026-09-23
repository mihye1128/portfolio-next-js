import type { PhilosophyItem as PhilosophyItemType } from "@/types";
import Section from "@/components/section";
import PhilosophyItem from "./philosophy-item";

const PHILOSOPHY_SECTION_TITLE = "Philosophy";
const PHILOSOPHY_SECTION_DESCRIPTION =
  "開発や仕事において、大切にしていることです。";

const PHILOSOPHY_ITEMS: PhilosophyItemType[] = [
  {
    number: "01",
    title: "画面の外まで考える",
    description:
      "見えている画面の実装だけでなく、その先にあるユーザーの導線や運用まで考えて設計します。仕様書だけでは分からない部分は、ユーザー視点や実装コストをふまえて仕様改善を提案することもあります。",
  },
  {
    number: "02",
    title: "使い心地にもこだわる",
    description:
      "機能が動くことだけでなく、使っていて気持ちがいいかどうかを大事にしています。使いやすさやアクセシビリティにも気を配りながら、実際に触れる人が心地よく感じられるものづくりを心がけています。",
  },
  {
    number: "03",
    title: "チームの空気も大切にする",
    description:
      "気持ちよく働けるチームは、良いものづくりにもつながると思っています。声をかけやすい空気づくりや、困っていそうな人へのフォローを心がけ、みんなが楽しく仕事できる関係を大切にしています。",
  },
  {
    number: "04",
    title: "コードにもデザインを",
    description:
      "使う人には見えないコードも、Webをつくる大切な一部だと考えています。読みやすく、直しやすく、育てやすい実装を意識し、テストやCI、依存関係の健全性にも同じだけの熱量で向き合います。",
  },
  {
    number: "05",
    title: "必要なだけつくる",
    description:
      "機能や技術を増やすこと自体を目的にせず、必要なものを見極めます。生成AIを活用して実装スピードを高めながら、最終的な判断は自分の目で確認して行っています。",
  },
];

export default function Philosophy() {
  return (
    <Section
      title={PHILOSOPHY_SECTION_TITLE}
      description={PHILOSOPHY_SECTION_DESCRIPTION}
      id="philosophy"
    >
      <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
        {PHILOSOPHY_ITEMS.map((item) => (
          <PhilosophyItem item={item} key={item.number} />
        ))}
      </div>
    </Section>
  );
}
