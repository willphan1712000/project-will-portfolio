import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Subbackground = () => {
  return (
    <div className="subbackground">
        <div className="title"></div>
        <a className="subbackground__goToNext">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
    </div>
  )
}

export default Subbackground
