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
        <div className="work-description">
          {work.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {work.skills && (
          <ul className="work-skills">
            {work.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
