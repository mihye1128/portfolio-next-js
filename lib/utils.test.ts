import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("クラス名を結合する", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("falsyな値を除外する", () => {
    expect(cn("foo", null, undefined, false, "bar")).toBe("foo bar");
  });

  it("条件付きオブジェクトを処理する", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("競合するTailwindクラスは後勝ちでマージする", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });
});
