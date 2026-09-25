import type { CoreSkill } from "@/types";

export default function CoreSkillCard({ skill }: { skill: CoreSkill }) {
  return (
    <div className="core-skill">
      <h4 className="core-skill-label">
        <span className="core-skill-icon" aria-hidden="true">
          {skill.icon}
        </span>
        {skill.label}
      </h4>
      <div>
        <p className="skill-description">{skill.description}</p>
        <p className="skill-experience">
          実務経験 {skill.value}
          {skill.unit}
        </p>
      </div>
    </div>
  );
}
