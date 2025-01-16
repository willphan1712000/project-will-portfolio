import Image from 'next/image'
import React from 'react'
import { link } from './Footer'
import Project from './Project'

const Intro = () => {
  const btn_wraper = `p-[0.13rem] rounded-[1rem] bg-black hover:shadow-2xl transition-all duration-100 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 w-[7rem] h-[3rem]`
  const btn = `flex bg-black size-full rounded-[1rem] justify-center items-center`

  return (
    <>
      <div id="introduction" className='lg:flex-row flex-col'>
          <div className="img"><Image draggable="false" src={'/assets/self1.jpg'} alt="will_intro" width="300" height="200"/></div>
          <div className="text">
              <div className="heading">I am about to graduate from Kennesaw State University, Georgia in May 2026</div>
              <div className="des">I am seeking happiness within myself. Then I will have power to explore the world, I have gone through so many tough situations that I want to share right here. Due to hard working, I am able to stand up to continue my journey in the United States, and I am who I am now. Let&apos;s begin</div>
          </div>
          <div className="p-[2rem] flex flex-col justify-center items-center">
              <div className="mb-[0.5rem] text-[1.5rem]">Reach out to me from</div>
              <div className="flex items-center justify-center md:flex-row gap-3 text-white">
                <div className={btn_wraper}>
                  <a href={link.linkedin} className={btn} target="_blank">Linkedin</a>
                </div>
                <div className={btn_wraper}>
                  <a href={link.github} className={btn} target="_blank">Github</a>
                </div>
              </div>
          </div>
      </div>

      <Project />
    </>
  )
}

export default Intro
