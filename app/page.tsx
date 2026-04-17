'use client'

import { useEffect } from "react"
import Intro from "./components/Intro/Intro"
import InfoStream from "./components/InfoStream/InfoStream"
import BigTitle from "./components/BigTitle"
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
      <div className="flex justify-center items-center w-full">
        <div id="main" className="max-w-[1500px] w-full">
            <Intro />
            <BigTitle content={{up: home.up, down: home.down}}/>
            <InfoStream contents={homePictureContent} />
        </div>
      </div>
    </>
  );
}
