import type { SkillTag as SkillTagType } from "@/types";

export default function SkillTag({ skill }: { skill: SkillTagType }) {
  return (
    <div className="skill-tag">
      <span className="skill-icon">{skill.icon}</span>
      <span>{skill.label}</span>
    </div>
  );
}
