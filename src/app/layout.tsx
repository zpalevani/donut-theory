import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Donut Theory by Zara",
  description: "High-end handcrafted donuts in Donut Land.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} bg-stone-50 text-stone-800 font-sans antialiased`}
      >
        <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            <Link
              href="/"
              className="font-serif text-2xl tracking-widest font-bold text-amber-900 uppercase"
            >
              Donut Theory by Zara
            </Link>

            <div className="flex space-x-8 text-sm tracking-widest uppercase font-semibold text-stone-600">
              <Link href="/" className="hover:text-amber-700 transition">
                Collection
              </Link>
              <Link href="/about" className="hover:text-amber-700 transition">
                Philosophy
              </Link>
              <Link href="/contact" className="hover:text-amber-700 transition">
                Visit
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-stone-900 text-stone-400 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-serif text-xl text-stone-200">Donut Theory</h4>
              <p className="text-xs tracking-wider mt-2">
                EST. 2024 • DONUT LAND
              </p>
            </div>

            <div className="text-xs tracking-widest">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
