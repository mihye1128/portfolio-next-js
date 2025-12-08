import type { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <dl className="h-full rounded-sm border bg-card px-5 pb-6 pt-8 md:px-6">
      <dt className="font-rajdhani text-center text-xl mb-2">
        <div className="mb-2 flex items-center justify-center">
          {skill.icon}
        </div>
        {skill.label}
      </dt>
      <dd className="text-sm leading-[1.75]">{skill.description}</dd>
    </dl>
  );
}
