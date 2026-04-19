import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Title from './Title/Title'
import Avatar from './Avatar/Avatar'
import config from '@/app/static/config'
import styles from './Greeting.module.css'
import { useStore } from '@/app/components/Store'

const Greeting = () => {
  const goToNextPageRef = useRef<HTMLDivElement>(null);
  const intro = useStore(state => state.intro)

  useEffect(() => {
    if(!goToNextPageRef.current) return;
    goToNextPageRef.current.addEventListener('click', () => {
      if(!intro || !intro.current) return;
      intro.current.scrollIntoView({ behavior: "smooth" })
    })
  }, [intro])

  return (
    <div className={styles.container} style={{'--max-width': config.maxWidth} as React.CSSProperties}>
      <div className={styles.wrapper} style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
        <div className={styles.background} style={{
          "--primary-color": config.primaryColor,
          "--second-color": config.secondColor
        } as React.CSSProperties}>
          <div className={styles.titleAvatar}>
            <Title />
            <Avatar />
          </div>
        </div>
        {/* <div ref={goToNextPageRef} className={styles.subbackground__goToNext} title='Jump to next page' tabIndex={0}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div> */}
      </div>
    </div>
  )
}

export default Greeting
