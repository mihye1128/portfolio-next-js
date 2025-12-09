import Section from "@/components/section";
import ProfileCard from "./profile-card";

const PROFILE_SECTION_TITLE = "Profile";

const PROFILE_CONTENT = {
  name: "Mitsui",
  description: (
    <>
      <p>広島県広島市在住。</p>
      <p>
        前職では会計事務所にて法人経理を担当していましたが、より専門性の高いITスキルを身につけたいと考え、Web業界へ転身しました。
      </p>
      <p>
        独立後はフロントエンドエンジニアとしてWebサイト・Webアプリの開発に携わりつつ、コミュニティ運営や初学者向けプログラミング学習サービスでのメンターを経験しました。
        <br />
        現在は開発案件に参画し、フロントエンド実装を担当しています。
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
