import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"], 
  variable: "--font-montserrat", 
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Sağlık Turizmi Gündemi",
  description: "Ahmet Kandemir ile Sağlık Turizmi Gündemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dancing.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}