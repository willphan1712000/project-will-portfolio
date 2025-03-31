import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Background from './Background'

const Subbackground = () => {
  return (
    <div className="subbackground md:!h-screen">
        <Background />
        <div className="title">
          <h1 className='text-[2rem] md:text-[3rem]'>My</h1>
          <h1 className='text-[2rem] md:text-[3rem]'>Portfolio</h1>
          <h1 className='text-[1.5rem] md:text-[2rem]'>I am Will - I am a Full Stack Engineer, DevOps Engineer, and Machine Learning enthusiast</h1>
        </div>
        <div className="subbackground__goToNext">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
    </div>
  )
}

export default Subbackground
