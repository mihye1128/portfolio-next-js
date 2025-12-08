import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { AUTHOR, NAVIGATION_ITEMS, SITE_NAME } from "@/constants/site";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background/90 sticky top-0 z-50 flex min-h-[60px] w-full items-center px-5 py-2 md:px-6">
      <p className="font-rajdhani text-sm font-medium tracking-wide">
        <Link
          href="/"
          className="ring-offset-background focus-visible:ring-ring -ml-4 block rounded-[2px] px-4 py-2 transition-colors hover:text-orange-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {SITE_NAME}
        </Link>
      </p>
      <nav className="font-rajdhani -mr-[10px] ml-auto flex items-center gap-1">
        <ul className="hidden gap-1 text-sm tracking-wide sm:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="ring-offset-background focus-visible:ring-ring block rounded-[2px] px-3 py-2 transition-colors hover:text-orange-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
