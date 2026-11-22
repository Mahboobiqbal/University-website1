import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/components/providers/language-provider";

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "University of Swat | Aspiring for Quality Education with Relevance",
  description:
    "University of Swat was established in 2010 with the aim to impart quality and relevant education. 22 teaching departments, 49 academic programs, 2 sub-campuses.",
  openGraph: {
    title: "University of Swat",
    description: "Aspiring for Quality Education with Relevance",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${rubik.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}