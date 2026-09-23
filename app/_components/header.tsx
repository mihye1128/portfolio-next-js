import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AUTHOR, NAVIGATION_ITEMS } from "@/constants/site";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <div className="header-inner container">
        <Link
          href="/"
          className="wordmark"
          aria-label="Mitsui's portfolio ホーム"
        >
          m<span className="accent">.</span>
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul>
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="nav-number">0{index + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a
            href={AUTHOR.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub（新しいタブで開く）"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
