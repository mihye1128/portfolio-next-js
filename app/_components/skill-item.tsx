import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function SkillItem({
  skill,
}: {
  skill: {
    label: string;
    description: string | ReactNode;
    icon: ReactNode;
  };
}) {
  return (
    <dl className="h-full rounded-sm border bg-card px-5 pb-6 pt-8 md:px-6">
      <dt className={cn([rajdhani.className, "text-center text-xl mb-2"])}>
        <div className="mb-2 flex items-center justify-center">
          {skill.icon}
        </div>
        {skill.label}
      </dt>
      <dd className="text-sm leading-[1.75]">{skill.description}</dd>
    </dl>
  );
}
