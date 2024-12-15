// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

import Anim from "../app/components/anim";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VYRA ",
  description: "Explore The Race Within You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e4e4e4] `}
      ><Anim>
        <Navbar />
        <div className="relative flex justify-center">
          <main className="container mx-[5vw] border-l border-r border-b border-[#9e9e9e] max-w-[90vw] mt-[-10]">
            {children}
          </main>

          <SocialLinks />
        </div>
        </Anim>
      </body>
    </html>
  );
}