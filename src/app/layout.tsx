import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavMenu from "~/components/nav-menu";

export const metadata: Metadata = {
  title: "MemoMate",
  description: "Helps you 'memo'rize!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
          <NavMenu />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
