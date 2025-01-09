import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div id="introduction" className='lg:flex-row flex-col'>
        <div className="img"><Image draggable="false" src={'/assets/self1.jpg'} alt="will_intro" width="300" height="200"/></div>
        <div className="text">
            <div className="heading">I graduated from Kennesaw State University, Georgia</div>
            <div className="des">I am seeking happiness within myself. Then I will have power to explore the world, I have gone through so many tough situations that I want to share right here. Due to hard working, I am able to stand up to continue my journey in the United States, and I am who I am now. Let&apos;s begin</div>
        </div>
    </div>
  )
}

export default Intro
