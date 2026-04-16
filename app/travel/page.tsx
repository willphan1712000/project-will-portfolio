'use client'

import InfoStream from "../components/InfoStream"
import BigTitle from "../components/BigTitle"
import Card from "./_components/Card"
import { pictureContent, pictures } from "./pictureContent"
import Greeting from "../components/Greeting/Greeting"


export default function Blog() {
  return (
    <>
      <Greeting />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="md:!h-[800vh] max-w-[1500px] w-[1500px]">
            <BigTitle content={{up: "My travel", down: "begins"}}/>
            <InfoStream pictureContent={pictureContent} pictures={pictures}/>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Card />
      </div>
    </>
  );
}
