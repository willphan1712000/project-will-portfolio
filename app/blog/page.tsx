'use client'

import InfoStream from "../components/InfoStream/InfoStream"
import BigTitle from "../components/BigTitle/BigTitle"
import Subbackground from "../components/Greeting/Greeting"
import pictureContent from "./pictureContent";

export default function Blog() {
  return (
    <>
      <Subbackground />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="max-w-[1500px] w-full">
            <BigTitle content={{up: "My journey", down: "begins"}}/>
            <InfoStream contents={pictureContent} />
        </div>
      </div>
    </>
  );
}
