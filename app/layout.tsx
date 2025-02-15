import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "@/components/marquee/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Sugar Blossom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
