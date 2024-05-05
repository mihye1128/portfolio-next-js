import Section from "@/components/ui/section";
import ProfileHistoryItem from "./profile-history-item";
import ProfileCard from "./profile-card";

const contents = {
  title: "Profile",
  content: {
    profile: {
      name: "Mitsui",
      description: (
        <>
          <p>広島県広島市在住。</p>
          <p>
            Web業界への転職前は、会計事務所にて法人経理を担当していました。
            <br />
            経理の仕事は嫌いではなかったものの、新しいチャレンジを求め、転職を決意しました。
          </p>
          <p>
            独立後は、フロントエンドエンジニア勉強会の運営を経て、初学者向けプログラミング学習サービスでのメンターを経験しました。
          </p>
          <p>
            一部の業務をチーム体制へ移行する機に、株式会社Taupeを設立しました。
          </p>
          <p>
            ポートフォリオサイトを閲覧いただき、ありがとうございます。
            <br />
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
    },
    history: [
      {
        title: "2017.07",
        description: "職業訓練校webクリエイター養成科(6ヶ月)へ入所。",
      },
      {
        title: "2018.03",
        description: (
          <>
            Webアプリ開発・Web制作会社へ就職。
            <br />
            主にHTML/CSSコーディング、WordPressテーマ作成業務を担当。
          </>
        ),
      },
      {
        title: "2019.04",
        description: (
          <>
            フリーランスのフロントエンドエンジニアとして活動開始。
            <br />
            WordPressやMakeshopなどのテーマ開発案件へ参画。
          </>
        ),
      },
      {
        title: "2021.04",
        description: (
          <>
            受託開発会社にて、ディレクションを担当。
            <br />
            プログラミング学習サービスにて、メンターを担当。
          </>
        ),
      },
      {
        title: "2022.02",
        description: "受託開発会社にて、フロントエンド開発を担当。",
      },
      {
        title: "2022.07",
        description: (
          <>
            サービスサイト開発・保守案件へ参画。
            <br />
            サイトリプレースや新機能開発を担当。
          </>
        ),
      },
      {
        title: "2024.04",
        description: <>株式会社Taupeを設立。</>,
      },
    ],
  },
};

export default function Profile() {
  return (
    <Section title={contents.title} id="profile">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <ProfileCard profile={contents.content.profile} />
        <dl className="border-t">
          {contents.content.history.map((item) => (
            <ProfileHistoryItem key={item.title} data={item} />
          ))}
        </dl>
      </div>
    </Section>
  );
}
