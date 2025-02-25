import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/homepage.css";
import "./css/universal.css";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Will Portfolio",
  description: "My journey to tech industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://kit.fontawesome.com/960d33c629.js" crossOrigin="anonymous" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
