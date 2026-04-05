import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tactixly",
  description:
    "Tactixly is a modern tic-tac-toe game built with Next.js, TypeScript, and Tailwind CSS. It features player vs player mode, an AI opponent powered by the Minimax algorithm, and real-time multiplayer via WebSockets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
