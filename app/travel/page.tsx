'use client'

import InfoStream from "../components/InfoStream/InfoStream"
import BigTitle from "../components/BigTitle/BigTitle"
import Card from "./_components/Card"
import { pictureContent } from "./pictureContent"
import Greeting from "../components/Greeting/Greeting"


export default function Blog() {
  return (
    <>
      <Greeting />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="max-w-[1500px] w-[1500px]">
            <BigTitle content={{up: "My travel", down: "begins"}}/>
            <InfoStream contents={pictureContent}/>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Card />
      </div>
    </>
  );
}
