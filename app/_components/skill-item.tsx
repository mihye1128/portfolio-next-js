import type { Skill } from "@/types";

export default function SkillItem({ skill }: { skill: Skill }) {
  return (
    <dl className="ai-skill">
      <dt>
        <span className="skill-icon">{skill.icon}</span>
        {skill.label}
      </dt>
      <dd>{skill.description}</dd>
    </dl>
  );
}
