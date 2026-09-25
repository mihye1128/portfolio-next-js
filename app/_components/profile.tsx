import { COMPANY_URL, CONTACT_FORM_URL } from "@/constants/site";
import Section from "@/components/section";
import ProfileCard from "./profile-card";

const PROFILE_SECTION_TITLE = "Profile";
const PROFILE_SECTION_DESCRIPTION =
  "経歴と、いまの仕事への向き合い方について紹介します。";

const PROFILE_CONTENT = {
  name: "Mitsui",
  tagline: "フロントエンドエンジニア / 広島県広島市在住",
  highlights: [
    {
      label: "UI・仕様改善の提案",
      description:
        "ユーザー導線や実装コストを踏まえ、PM・デザイナーへの仕様・UI改善の提案を経験。",
    },
    {
      label: "UI設計・実装",
      description: "仕様書をもとにした管理画面のUI設計・実装を担当。",
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
        Web制作からWebアプリケーション開発まで、UI・フロントエンドの実装を継続して担当してきました。TypeScript
        / React / Next.jsを中心に、AngularやWordPress、Spring Boot /
        Thymeleaf、Ruby on Rails /
        Stimulus.jsなど、案件ごとに異なる環境でも画面実装や既存機能の改修に携わっています。
      </p>
      <p>
        画面の使い心地と、その先のユーザー導線や運用を大切にしています。仕様が曖昧な部分はチームと確認し、実装コストも踏まえて進め方を相談しています。読みやすく直しやすいコードを意識し、テストや開発環境の整備にも取り組んでいます。
      </p>
      <p>
        チームでは、声をかけやすく相談しやすい関係を心がけています。生成AIも開発支援に活用しながら、実装内容や技術選定の判断は自分で確認しています。
      </p>
      <p>
        前職では会計事務所で法人経理を担当していましたが、より専門性の高いITスキルを身につけたいと考えWeb業界へ転身しました。2019年よりフリーランスとして独立し、コミュニティ運営や初学者向けプログラミング学習サービスでのメンター経験も積みました。2024年には法人化し、
        <a
          href={COMPANY_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4"
        >
          株式会社Taupe<span className="sr-only">（新しいタブで開く）</span>
        </a>
        を設立しました。
      </p>
      <p>
        お問い合わせは、
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4"
        >
          Googleフォーム<span className="sr-only">（新しいタブで開く）</span>
        </a>
        よりご連絡ください。
      </p>
    </>
  ),
  sns: {
    github: "https://github.com/mihye1128/",
  },
};

export default function Profile() {
  return (
    <Section
      title={PROFILE_SECTION_TITLE}
      description={PROFILE_SECTION_DESCRIPTION}
      id="profile"
    >
      <ProfileCard profile={PROFILE_CONTENT} />
    </Section>
  );
}
