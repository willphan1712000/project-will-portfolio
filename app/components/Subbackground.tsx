import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Subbackground = () => {
  return (
    <div className="subbackground">
        <div className="title">
          <h1>My</h1>
          <h1>Portfolio</h1>
          <h1>I am Will - I am Software Engineer</h1>
        </div>
        <a className="subbackground__goToNext">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
    </div>
  )
}

export default Subbackground
