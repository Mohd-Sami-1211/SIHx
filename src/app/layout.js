import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footers from "@/components/Footers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="sticky px-2">
        <Navbar/>
        </div>
        {children}
        <Footers/>
        <Footer />
      </body>
    </html>
  );
}
