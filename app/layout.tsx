import type { Metadata } from "next";
import { Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "CryptoFlow",
  description: "Modern Crypto Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${outfit.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/30 overflow-x-hidden w-full">
        <ClerkProvider>
          <Header />
          <main className="flex-1 flex flex-col relative">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
