import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function SkillItem({
  skill,
}: {
  skill: {
    label: string;
    description: string | JSX.Element;
    icon: JSX.Element;
  };
}) {
  return (
    <dl className="row-span-3 grid h-full grid-rows-subgrid gap-2 rounded-sm border bg-card px-5 pb-6 pt-8 md:px-6">
      <div className="flex items-center justify-center">{skill.icon}</div>
      <dt className={cn([rajdhani.className, "text-center text-xl"])}>
        {skill.label}
      </dt>
      <dd className="text-sm leading-[1.75]">{skill.description}</dd>
    </dl>
  );
}
