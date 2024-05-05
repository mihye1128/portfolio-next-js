import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function ProfileHistoryItem({
  data,
}: {
  data: {
    title: string;
    description: string | JSX.Element;
  };
}) {
  return (
    <div className="grid grid-cols-[5em,1fr] border-b py-3 text-sm leading-[1.75]">
      <dt className={rajdhani.className}>{data.title}</dt>
      <dd>{data.description}</dd>
    </div>
  );
}
