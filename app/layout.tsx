import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  AUTHOR,
} from "@/constants/site";
import { rajdhani } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "フロントエンドエンジニア",
    "Webエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "ポートフォリオ",
    "Mitsui",
  ],
  authors: [{ name: AUTHOR.name }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: AUTHOR.twitter,
    creator: AUTHOR.twitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${rajdhani.variable} min-h-dvh`}>
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
