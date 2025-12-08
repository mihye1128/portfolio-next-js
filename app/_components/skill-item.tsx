import type { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <dl className="bg-card h-full rounded-sm border px-5 pt-8 pb-6 md:px-6">
      <dt className="font-rajdhani mb-2 text-center text-xl">
        <div className="mb-2 flex items-center justify-center">
          {skill.icon}
        </div>
        {skill.label}
      </dt>
      <dd className="text-sm leading-[1.75]">{skill.description}</dd>
    </dl>
  );
}
