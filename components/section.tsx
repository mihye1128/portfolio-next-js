import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/constants/site";
import ScrollReveal from "./scroll-reveal";

interface SectionProps {
  id?: string;
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
  className?: string;
}

function getSectionNumber(id?: string): string {
  if (!id) return "—";
  const index = NAVIGATION_ITEMS.findIndex((item) => item.href === `/#${id}`);
  return index === -1 ? "—" : String(index + 1).padStart(2, "0");
}
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
      <ScrollReveal className="section-heading">
        <div className="section-title">
          <span className="section-number">{getSectionNumber(id)}</span>
          <h2 id={id ? `${id}-title` : undefined}>
            {title}
            <span className="accent">.</span>
          </h2>
        </div>
        {description && <p className="section-description">{description}</p>}
      </ScrollReveal>
      {children}
    </section>
  );
}
