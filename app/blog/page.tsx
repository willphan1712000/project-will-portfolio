'use client'

import InfoStream from "../components/InfoStream/InfoStream"
import BigTitle from "../components/BigTitle/BigTitle"
import Subbackground from "../components/Greeting/Greeting"
import pictureContent from "./pictureContent";

export default function Blog() {
  return (
    <>
      <Subbackground />
      <BigTitle content={{up: "My journey", down: "begins"}}/>
      <InfoStream contents={pictureContent} />
    </>
  );
}
