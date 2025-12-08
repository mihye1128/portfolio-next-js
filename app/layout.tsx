import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsui.site"),
  title: {
    template: "%s | Mitsui's portfolio",
    default: "Mitsui's portfolio",
  },
  description: "フロントエンドエンジニア mitsuiのポートフォリオサイトです。",
  keywords: [
    "フロントエンドエンジニア",
    "Webエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "ポートフォリオ",
    "Mitsui",
  ],
  authors: [{ name: "Mitsui" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mitsui.site",
    siteName: "Mitsui's portfolio",
    title: "Mitsui's portfolio",
    description: "フロントエンドエンジニア mitsuiのポートフォリオサイトです。",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mitsui_mk",
    creator: "@mitsui_mk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
