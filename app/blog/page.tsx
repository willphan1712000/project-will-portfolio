'use client'

import { useEffect } from "react"
import PictureSection from "../components/PictureSection"
import SecondTitle from "../components/SecondTitle"
import homepage from "../execute"
import { pictureContent, pictures } from "./pictureContent"
import Subbackground from "../components/Subbackground"

export default function Blog() {
  useEffect(() => {
    homepage()
  }, [])

  return (
    <>
      <Subbackground />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="md:!h-[800vh] max-w-[1500px] w-full">
            <SecondTitle content={{up: "My journey", down: "begins"}}/>
            <PictureSection pictureContent={pictureContent} pictures={pictures}/>
        </div>
      </div>
    </>
  );
}
