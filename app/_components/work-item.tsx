import Link from "next/link";
import type { Work } from "@/types";
import { ExternalLink } from "lucide-react";

interface WorkItemProps {
  work: Work;
  isLast?: boolean;
}

export default function WorkItem({ work, isLast = false }: WorkItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[140px_1fr] md:gap-8">
      <div className="font-rajdhani hidden text-right text-base leading-tight font-semibold tracking-wide md:block">
        {work.period}
      </div>

      <div className="relative pb-12">
        {!isLast && (
          <div className="bg-border absolute top-0 left-0 h-full w-px"></div>
        )}
        <div className="bg-primary ring-background absolute top-1.5 left-0 h-2 w-2 -translate-x-1/2 rounded-full ring-4"></div>

        <div className="pl-6 md:pl-8">
          <div className="font-rajdhani mb-2 text-sm font-semibold tracking-wide md:hidden">
            {work.period}
          </div>

          <h3 className="mb-2 leading-tight font-bold">
            {work.href ? (
              <Link
                href={work.href}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500 focus-visible:underline focus-visible:outline-none"
              >
                {work.title}
                <ExternalLink className="h-4 w-4" />
              </Link>
            ) : (
              work.title
            )}
          </h3>

          <p className="bg-foreground text-background mb-3 inline-block rounded-sm px-2 py-1 text-xs">
            {work.category}
          </p>

          <div className="mb-4 text-sm leading-relaxed">
            {work.description.map((item, j) => (
              <p key={`description_${j}`}>{item}</p>
            ))}
          </div>

          {work.skills && work.skills.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {work.skills.map((skill, i) => (
                <li key={`skill_${i}`} className="opacity-80 *:h-5 *:w-5">
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
