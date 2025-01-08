'use client'

import { useEffect } from "react"
import Background from "./components/Background"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import PictureSection from "./components/PictureSection"
import SecondTitle from "./components/SecondTitle"
import Subbackground from "./components/Subbackground"
import homepage from "./execute"
import Footer from "./components/Footer"
import Script from "next/script"


export default function Home() {
  useEffect(() => {
    homepage()
  }, [])

  return (
    <>
      <Script src="https://kit.fontawesome.com/960d33c629.js" crossOrigin="anonymous" />
      <div id="main">
          <Navbar />
          <Background />
          <Subbackground />
          <Intro />
          <SecondTitle />
          <PictureSection />

      </div>
      <Footer />
    </>
  );
}
