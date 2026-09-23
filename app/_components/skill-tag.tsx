import type { SkillTag as SkillTagType } from "@/types";

interface SkillTagProps {
  skill: SkillTagType;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className="bg-card flex w-max items-center gap-2 rounded-full border px-4 py-2 text-sm [&>svg]:size-4 [&>svg]:shrink-0">
      {skill.icon}
      <span className="whitespace-nowrap">{skill.label}</span>
    </div>
  );
}
