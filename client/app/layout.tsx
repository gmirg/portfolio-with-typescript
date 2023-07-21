import "./globals.css";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

const myFont = localFont({
  src: "../../public/fonts/Montreal-Serial-Medium-Regular.woff2",
  display: "swap",
  variable: "--font-myfont",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Portfolio",
  description: "Gerardo Mir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${myFont.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
