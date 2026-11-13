import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Irene Dev | Frontend Developer",
  description:
    "Discover Irene Dev, a frontend developer creating modern, responsive and engaging digital experiences using HTML, CSS, JavaScript and React.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Irene Dev | Frontend Developer",
    description:
      "Creative frontend developer crafting immersive digital experiences in React and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
