import "@willphan1712000/w/dist/index.css";
import type { Metadata } from "next";
import Script from "next/script";
import AuthProvider from "./auth/AuthProvider";
import "./css/homepage.css";
import "./css/universal.css";
import "./globals.css";
import prisma from "@/prisma/client";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const project = await prisma.project.findMany()
  const social = await prisma.social.findUnique({
    where: {
      email: process.env.WILL_EMAIL
    }
  })

  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="mt-20 md:mt-0"
      >
        <Script src="https://kit.fontawesome.com/960d33c629.js" crossOrigin="anonymous" />
        
        <AuthProvider data={{
          project,
          social
        }}> 
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
