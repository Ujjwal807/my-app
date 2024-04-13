import { Inter, Cedarville_Cursive, Montserrat } from "next/font/google";
import "./globals.css";

const cursive = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const monteserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description:
    "Accurate online sentence counter with word count, character count, and readability metrics for optimized writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={monteserrat.className}
        style={{
          background: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          
        }}
      >
        {children}
      </body>
    </html>
  );
}
