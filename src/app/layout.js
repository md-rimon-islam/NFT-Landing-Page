import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from 'next/font/google'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NFT Marketplace",
  description: "Created By Ashik",
};


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className=" mx-auto bg-[#161730] font-(Roboto:--sans-serif)">
        <Navbar />
        <main className="relative overflow-hidden ">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
