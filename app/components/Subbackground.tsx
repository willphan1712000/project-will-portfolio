import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Title from './Title'
import Avatar from './Avatar/Avatar'
import config from '@/app/static/config'

const Subbackground = () => {
  return (
    <div className='subbackground-container'>
      <div className='subbackground-wrapper' style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
        <div className="subbackground md:!h-screen" style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
            <Avatar />
            <Title />
            <div className="subbackground__goToNext" title='Jump to next page' tabIndex={0}>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subbackground
