import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Title from './Title/Title'
import Avatar from './Avatar/Avatar'
import config from '@/app/static/config'
import styles from './subbackground.module.css'

const Greeting = () => {
  const goToNextPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!goToNextPageRef.current) return;
    goToNextPageRef.current.addEventListener('click', () => {
        const intro = document.getElementById("introduction")
        const pictureSection = document.querySelector(".picture-section")

        if(intro !== null) {
            intro.scrollIntoView({behavior: "smooth"})
        } else {
            pictureSection!.scrollIntoView({behavior: "smooth"})
        }
    })
  }, [])

  return (
    <div className={styles.subbackgroundContainer} style={{'--max-width': config.maxWidth} as React.CSSProperties}>
      <div className={styles.subbackgroundWrapper} style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
        <div className={styles.subbackground} style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
            <Avatar />
            <Title />
            <div ref={goToNextPageRef} className={styles.subbackground__goToNext} title='Jump to next page' tabIndex={0}>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Greeting
