import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
  className?: string;
}
const numbers: Record<string, string> = {
  skills: "01",
  philosophy: "02",
  works: "03",
  profile: "04",
};
export default function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn("editorial-section container", className)}
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="section-heading">
        <div className="section-title">
          <span className="section-number">{id ? numbers[id] : "—"}</span>
          <h2 id={id ? `${id}-title` : undefined}>
            {title}
            <span className="accent">.</span>
          </h2>
        </div>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </section>
  );
}
