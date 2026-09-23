import Section from "@/components/section";
import ProfileCard from "./profile-card";

const PROFILE_SECTION_TITLE = "Profile";

const PROFILE_CONTENT = {
  name: "Mitsui",
  tagline: "フロントエンドエンジニア / 広島県広島市在住",
  highlights: [
    {
      label: "UI・仕様改善の提案",
      description:
        "ユーザー視点や実装コストを踏まえ、仕様・UI改善を能動的に提案します。",
    },
    {
      label: "UI設計・実装",
      description:
        "デザインデータがない状態からでも、仕様書をもとにUI設計・実装まで対応します。",
    },
    {
      label: "チーム開発",
      description:
        "小規模チームでのサブリーダーとして、タスク管理・メンバー支援を経験しています。",
    },
  ],
  description: (
    <>
      <p>
        TypeScript / React /
        Next.jsを中心に、Webサービス・管理画面・スマホアプリ・Webサイトなど幅広いフロントエンド開発に携わってきました。UI実装を主軸としながら、仕様改善の提案や開発環境の構築、テスト、運用まで、プロジェクトに応じてフロントエンド周辺の業務にも幅広く対応しています。
      </p>
      <p>
        Firebase等のBaaSを活用したAPI・サーバーサイド機能・DB連携の実装や、Spring
        Boot / Rails環境でのフロントエンド・UI実装の経験もあります。
      </p>
      <p>
        Claude
        Code等の生成AIを設計・実装・レビュー・テスト作成に日常的に活用しています。実装スピードを上げる一方で、依存関係の健全性やCI整備、リスクのあるアップデートを見送る判断など、地味だけれど後々効いてくる部分の意思決定は自分の目で確認して行うようにしています（本サイトも、そうしたやり方でClaude
        Codeと協働しながら継続的にメンテナンスしています）。
      </p>
      <p>
        前職では会計事務所で法人経理を担当していましたが、より専門性の高いITスキルを身につけたいと考えWeb業界へ転身しました。フリーランスとして独立後はコミュニティ運営や初学者向けプログラミング学習サービスでのメンター経験もあります。
      </p>
      <p>
        お問い合わせについては、各種SNSよりご連絡ください。
        <br />
      </p>
    </>
  ),
  sns: {
    x: "https://twitter.com/mitsui_mk",
    facebook: "https://www.facebook.com/mitsui1128",
    github: "https://github.com/mihye1128/",
  },
};

export default function Profile() {
  return (
    <Section title={PROFILE_SECTION_TITLE} id="profile">
      <ProfileCard profile={PROFILE_CONTENT} />
    </Section>
  );
}
