import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
    <html lang="en" className={`${poppins.variable} ${poppins.variable}`}>
      
      <body>{children}</body>
    </html>
  );
}
