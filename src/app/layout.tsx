import type { Metadata } from "next";
import "./globals.css";
import Navegation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Montserrat, Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Meddfitness",
  description: "Meddfitness",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body>
        <Navegation />
        <main className="pt-30 min-h-230">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
