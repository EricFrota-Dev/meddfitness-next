import type { Metadata } from "next";
import "./globals.css";
import Navegation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Montserrat, Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { whatsapp } from "@/assets/images/logos";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
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
        <Link
          passHref
          href={"https://wa.me/17996621639?text=Ol%C3%A1%20"}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed flex items-center bg-dark-100 shadow-md shadow-darker p-4 rounded-full flex-col bottom-10 right-5 md:right-15 xl:right-30 hover:scale-105 opacity-30 hover:opacity-100 transition-all duration-200"
        >
          <Image src={whatsapp} alt="whatsapp" width={40} />
        </Link>
      </body>
    </html>
  );
}
