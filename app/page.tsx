'use client'

import { useEffect } from "react"
import Intro from "./components/Intro/Intro"
import InfoStream from "./components/InfoStream/InfoStream"
import BigTitle from "./components/BigTitle/BigTitle"
import Greeting from "./components/Greeting/Greeting"
import home from "./static/home"
import homePictureContent from "./static/homePictureContent"

export default
 function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Greeting />
      <Intro />
      <BigTitle content={{up: home.up, down: home.down}}/>
      <InfoStream contents={homePictureContent} />
    </>
  );
}
