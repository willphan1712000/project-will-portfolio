import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Background from './Background'

const Subbackground = () => {
  return (
    <div className="subbackground md:!h-screen">
        <Background />
        <div className="title">
          <h1>My</h1>
          <h1>Portfolio</h1>
          <h1>I am Will - I am Software Engineer</h1>
        </div>
        <div className="subbackground__goToNext">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
    </div>
  )
}

export default Subbackground
