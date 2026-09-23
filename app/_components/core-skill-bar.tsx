import type { CoreSkill } from "@/types";

interface CoreSkillBarProps {
  skill: CoreSkill;
}

export default function CoreSkillBar({ skill }: CoreSkillBarProps) {
  return (
    <div>
      <div className="font-rajdhani mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-base font-semibold">{skill.label}</span>
        <span className="text-muted-foreground">{skill.years}</span>
      </div>
      <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
        <div
          className="bg-primary h-full rounded-full"
          style={{ width: `${skill.levelPercent}%` }}
        />
      </div>
    </div>
  );
}
