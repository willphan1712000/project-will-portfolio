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
      <BigTitle content={{up: "My travel", down: "begins"}}/>
      <InfoStream contents={pictureContent}/>
      <Card />
    </>
  );
}
