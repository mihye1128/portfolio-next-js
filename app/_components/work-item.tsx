import type { Work } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface WorkItemProps {
  work: Work;
}
export default function WorkItem({ work }: WorkItemProps) {
  return (
    <article className="work-item">
      <div className="work-period">{work.period}</div>
      <div>
        <p className="work-category">{work.category}</p>
        <h3>
          {work.href ? (
            <a href={work.href} target="_blank" rel="noreferrer noopener">
              {work.title}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ) : (
            work.title
          )}
        </h3>
        <ul className="work-description" aria-label="担当内容">
          {work.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {work.skills && (
          <ul className="work-skills" aria-label="使用技術・開発環境">
            {work.skills.map((skill) => (
              <li key={skill.label}>
                <span aria-hidden="true">{skill.icon}</span>
                <span>{skill.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
