'use client'

import { useEffect } from "react"
import Intro from "./components/Intro/Intro"
import InfoStream from "./components/InfoStream"
import BigTitle from "./components/BigTitle"
import Greeting from "./components/Greeting/Greeting"
import { homePictureContent, pictures } from "./static/homePictureContent"
import Project from "./components/Project/Project"
import home from "./static/home"

export default
 function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Greeting />
      <div className="flex justify-center items-center w-full">
        <div id="main" className="md:!h-[800vh] max-w-[1500px] w-full">
            <Intro />
            <Project />
            <BigTitle content={{up: home.up, down: home.down}}/>
            <InfoStream pictureContent={homePictureContent} pictures={pictures}/>
        </div>
      </div>
    </>
  );
}
