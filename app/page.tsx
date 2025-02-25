'use client'

import { useEffect } from "react"
import Intro from "./components/Intro"
import PictureSection from "./components/PictureSection"
import SecondTitle from "./components/SecondTitle"
import { pictureContent, pictures } from "./components/pictureContent"
import homepage from "./execute"
import Subbackground from "./components/Subbackground"

export default function Home() {
  useEffect(() => {
    homepage()
  }, [])

  return (
    <>
      <Subbackground />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="md:!h-[800vh] max-w-[1500px] w-full">
            <Intro />
            <SecondTitle content={{up: "Full stack journey", down: "begins here"}}/>
            <PictureSection pictureContent={pictureContent} pictures={pictures}/>
        </div>
      </div>
    </>
  );
}
