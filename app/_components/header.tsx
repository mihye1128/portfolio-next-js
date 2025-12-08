import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SITE_NAME, AUTHOR, NAVIGATION_ITEMS } from "@/constants/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center bg-background/90 px-5 py-2 md:px-6">
      <p className="font-rajdhani text-sm font-medium tracking-wide">
        <Link
          href="/"
          className="-ml-4 block rounded-[2px] px-4 py-2 ring-offset-background transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {SITE_NAME}
        </Link>
      </p>
      <nav className="font-rajdhani ml-auto -mr-[10px] flex items-center gap-1">
        <ul className="hidden gap-1 text-sm tracking-wide sm:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.label}>
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
          <Link href={AUTHOR.github} target="_blank" rel="noreferrer noopener">
            <SiGithub className="size-5" />
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
}
