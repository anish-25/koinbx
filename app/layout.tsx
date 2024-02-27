import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Providers from "@/components/providers";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets:["cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const title = "KoinBX | Dashboard";
const description = "";
const url = "https://www.koinbx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords:
    ["KoinBX","Cryptocurrency"],
  authors: [{ name: "KoinBX" }],
  creator: "KoinBX",
  icons: {
    icon: "https://koinbx.com/favicon.ico?v=4",
    shortcut: "https://koinbx.com/favicon.ico?v=4",
    apple: "https://koinbx.com/favicon.ico?v=4",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={ibm_plex_sans.className} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
