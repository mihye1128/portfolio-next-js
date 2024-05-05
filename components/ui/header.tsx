import Link from "next/link";
import { Rajdhani } from "next/font/google";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });
const headerContents = {
  glovalNavigationItems: [
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Works",
      href: "/#works",
    },
    {
      label: "Profile",
      href: "/#profile",
    },
    // {
    //   label: "Contact",
    //   href: "/contact",
    // },
  ],
  githubUrl: "https://github.com/mihye1128/",
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center bg-background/90 px-5 py-2 md:px-6">
      <p
        className={cn([
          rajdhani.className,
          "text-sm font-medium tracking-wide",
        ])}
      >
        <Link
          href="/"
          className="-ml-4 block rounded-[2px] px-4 py-2 ring-offset-background transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Mitsui&apos;s portfolio
        </Link>
      </p>
      <nav
        className={cn([
          rajdhani.className,
          "ml-auto -mr-[10px] flex items-center gap-1",
        ])}
      >
        <ul className="hidden gap-1 text-sm tracking-wide sm:flex">
          {headerContents.glovalNavigationItems.map((item) => (
            <li
              key={item.label}
              className={cn([
                "relative",
                "[&:not(:last-child)]:after:absolute",
              ])}
            >
              <Link
                href={item.href}
                className="block rounded-[2px] px-3 py-2 ring-offset-background transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="ghost" size="icon" asChild>
          <Link
            href={headerContents.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGithub className="size-5" />
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
}
