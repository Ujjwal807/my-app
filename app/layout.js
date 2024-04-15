import { Inter, Cedarville_Cursive, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "@/app/components/Footer";


const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Online Sentence Counter",
  description:
    "Accurate online sentence counter with word count, character count, and readability metrics for optimized writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={lato.className}
        style={{
          background: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
