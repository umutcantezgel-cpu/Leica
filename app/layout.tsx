import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const heading = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Leica Welt – Das Erlebnis- und Besucherzentrum am Leitz-Park Wetzlar",
  description:
    "Erleben Sie die Welt von Leica hautnah: Museum, Manufakturtouren, Ausstellungen, Workshops, Shopping und Gastronomie — alles an einem Ort.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body text-leica-dark bg-white min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
