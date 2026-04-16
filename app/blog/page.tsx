'use client'

import InfoStream from "../components/InfoStream"
import BigTitle from "../components/BigTitle"
import { pictureContent, pictures } from "./pictureContent"
import Subbackground from "../components/Greeting/Greeting"

export default function Blog() {
  return (
    <>
      <Subbackground />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="md:!h-[800vh] max-w-[1500px] w-full">
            <BigTitle content={{up: "My journey", down: "begins"}}/>
            <InfoStream pictureContent={pictureContent} pictures={pictures}/>
        </div>
      </div>
    </>
  );
}
