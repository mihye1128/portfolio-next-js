import type { CoreSkill } from "@/types";

export default function CoreSkillCard({ skill }: { skill: CoreSkill }) {
  return (
    <div className="core-skill">
      <div className="core-skill-label">
        <span>{skill.label}</span>
        <span className="skill-icon">{skill.icon}</span>
      </div>
      <p className="skill-value">
        {skill.value}
        <span>+</span>
        <small>{skill.unit}</small>
      </p>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
}
