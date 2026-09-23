"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon aria-hidden="true" className="size-[1.2rem] dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-[1.2rem] dark:block" />
      <span className="sr-only dark:hidden">ダークモードに切り替え</span>
      <span className="sr-only hidden dark:block">ライトモードに切り替え</span>
    </Button>
  );
}
