import Link from "next/link";

import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function WorkItem({
  work,
}: {
  work: {
    title: string[];
    description: string[];
    category: string;
    releaseDate: string;
    skills: JSX.Element[];
    image?: string;
    href?: string;
  };
}) {
  const thumbnailImage = work.image
    ? { backgroundImage: `url(${work.image})` }
    : {};
  return (
    <article
      className={cn([
        "relative row-span-4 grid grid-rows-subgrid gap-2 overflow-hidden rounded-sm bg-card pb-6 shadow group",
        work.href
          ? "hover:shadow-lg transition-shadow hover:cursor-pointer"
          : "",
      ])}
    >
      <h3 className="order-2 px-6 pt-6 font-bold">
        {work.title.map((item, j) => (
          <span key={`title_${j}`} className="block">
            {item}
          </span>
        ))}
      </h3>
      <div className="order-3 px-6 text-sm leading-[1.75]">
        {work.description.map((item, j) => (
          <p key={`description_${j}`}>{item}</p>
        ))}
      </div>
      <dl className="order-4 flex items-center px-6 text-sm">
        <dt className="mr-3 rounded-sm bg-foreground/10 px-2 py-[2px]">
          公開時期
        </dt>
        <dd>{work.releaseDate}</dd>
      </dl>
      <div className="relative order-1 overflow-hidden">
        <div
          style={thumbnailImage}
          className={cn([
            "relative aspect-video w-full bg-cover after:absolute after:inset-0 after:bg-foreground/20 dark:after:bg-background/20 after:content-['']",
            work.href ? "group-hover:scale-110 duration-150" : "",
          ])}
        >
          {!work.image && (
            <p
              className={cn([
                rajdhani.className,
                "absolute inset-0 bg-foreground/10 flex items-center justify-center tracking-wide",
              ])}
            >
              Secret
            </p>
          )}
        </div>
        <p className="absolute bottom-0 left-0 rounded-tr-sm bg-foreground/90 px-3 py-1 text-sm text-background">
          {work.category}
        </p>
        {work.skills && work.skills.length > 0 && (
          <ul className="absolute right-0 top-0 flex gap-2 px-4 py-2">
            {work.skills.map((skill, i) => (
              <li key={`skill_${i}`} className="text-white [&>*]:w-5">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
      {work.href && (
        <Link
          href={work.href}
          className="absolute inset-0 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          rel="noreferrer noopener"
          target="_blank"
        ></Link>
      )}
    </article>
  );
}
