import Link from "next/link";
import type { Work } from "@/types";
import { cn } from "@/lib/utils";

interface WorkItemProps {
  work: Work;
}

export default function WorkItem({ work }: WorkItemProps) {
  const thumbnailImage = work.image
    ? { backgroundImage: `url(${work.image})` }
    : {};
  return (
    <article
      className={cn([
        "bg-card group relative row-span-4 grid grid-rows-subgrid gap-2 rounded-xl border pb-6 shadow",
        work.href
          ? "transition-shadow hover:cursor-pointer hover:shadow-lg"
          : "",
      ])}
    >
      <h3 className="order-2 px-5 pt-6 font-bold md:px-6">
        {work.href ? (
          <Link
            href={work.href}
            rel="noreferrer noopener"
            target="_blank"
            className="group focus-visible:outline-none"
          >
            {work.title.map((item, j) => (
              <span key={`title_${j}`} className="block">
                {item}
              </span>
            ))}
            <span className="group-focus-visible:ring-ring dark:group-focus-visible:ring-offset-background absolute inset-0 z-10 block rounded-xl transition-colors group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:outline-none"></span>
          </Link>
        ) : (
          <>
            {work.title.map((item, j) => (
              <span key={`title_${j}`} className="block">
                {item}
              </span>
            ))}
          </>
        )}
      </h3>
      <div className="order-3 px-5 text-sm leading-[1.75] md:px-6">
        {work.description.map((item, j) => (
          <p key={`description_${j}`}>{item}</p>
        ))}
      </div>
      <dl className="order-4 flex items-center px-5 text-sm md:px-6">
        <dt className="bg-foreground/10 mr-3 rounded-sm px-2 py-[2px]">
          公開時期
        </dt>
        <dd>{work.releaseDate}</dd>
      </dl>
      <div className="relative order-1 overflow-hidden rounded-t-xl">
        <div
          style={thumbnailImage}
          className={cn([
            "after:bg-foreground/20 dark:after:bg-background/20 relative aspect-video w-full bg-cover after:absolute after:inset-0 after:content-['']",
            work.href ? "duration-150 group-hover:scale-110" : "",
          ])}
        >
          {!work.image && (
            <p className="font-rajdhani bg-foreground/10 absolute inset-0 flex items-center justify-center tracking-wide">
              Secret
            </p>
          )}
        </div>
        <p className="bg-foreground/90 text-background absolute bottom-0 left-0 rounded-tr-sm px-3 py-1 text-sm">
          {work.category}
        </p>
        {work.skills && work.skills.length > 0 && (
          <ul className="absolute top-0 right-0 flex gap-2 px-4 py-2">
            {work.skills.map((skill, i) => (
              <li key={`skill_${i}`} className="text-white *:w-5">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
