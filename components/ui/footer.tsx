import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="sticky top-full px-6 py-5">
      <p
        className={cn([
          rajdhani.className,
          "text-center text-sm tracking-wide",
        ])}
      >
        &copy; 2025 Mitsui&apos;s portfolio.
      </p>
    </footer>
  );
}
