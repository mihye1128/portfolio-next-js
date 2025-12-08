import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-24 text-center text-background">
      <div className="container">
        <h1 className={cn([rajdhani.className, "mb-1 text-5xl"])}>
          Mitsui&apos;s portfolio
        </h1>
        <p className={cn([rajdhani.className, "mb-4"])}>front-end engineer</p>
        <p className="text-sm leading-[1.75]">
          <span className="inline-block">
            ユーザビリティやメンテナンス性を考慮し、
          </span>
          <span className="inline-block">
            品質の高いコーディングを目指します。
          </span>
        </p>
      </div>
    </section>
  );
}
