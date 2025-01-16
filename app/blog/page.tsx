'use client'

import { useEffect } from "react"
import PictureSection from "../components/PictureSection"
import SecondTitle from "../components/SecondTitle"
import homepage from "../execute"
import { pictureContent, pictures } from "./pictureContent"

export default function Blog() {
  useEffect(() => {
    homepage()
  }, [])

  return (
    <>
      <div id="main" className="md:!h-[800vh]">
          <SecondTitle content={{up: "My journey", down: "begins"}}/>
          <PictureSection pictureContent={pictureContent} pictures={pictures}/>
      </div>
    </>
  );
}
