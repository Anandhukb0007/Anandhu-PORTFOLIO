import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://anandhu-portfolio.vercel.app"),
  title: {
    default: "Anandhu K B | Full Stack Developer",
    template: "%s | Anandhu K B",
  },
  description:
    "Modern full stack portfolio of Anandhu K B, featuring MERN, PHP, and Next.js projects with a focus on performance and clean user experience.",
  openGraph: {
    title: "Anandhu K B | Full Stack Developer",
    description:
      "Explore projects, skills, and experience in MERN stack, PHP, and Next.js.",
    url: "https://anandhu-portfolio.vercel.app",
    siteName: "Anandhu Portfolio",
    type: "website",
    images: [
      {
        url: "/Hero.png",
        width: 1200,
        height: 630,
        alt: "Anandhu K B portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anandhu K B | Full Stack Developer",
    description:
      "Portfolio of Anandhu K B with projects, skills, and developer experience.",
    images: ["/Hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark h-full antialiased"
    >
      <body className={`min-h-full bg-background text-foreground ${inter.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
