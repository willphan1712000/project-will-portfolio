import Image from 'next/image'
import home from '../../static/home'
import config from '@/app/static/config'

import styles from './intro.module.css'
import { useEffect, useRef } from 'react'
import { useStore } from '@/app/components/Store'

const Intro = () => {
  const intro = useRef<HTMLDivElement>(null)
  const setIntro = useStore(state => state.setIntro)
  useEffect(() => {
    setIntro(intro)
  }, [])

  return (
    <div className='p-[30px]' ref={intro}>
      <div className={styles.border} style={{
            "--primary-color": config.primaryColor,
            "--second-color": config.secondColor
        } as React.CSSProperties}>
        <div className={styles.introduction}>
          <div className={styles.img}><Image draggable="false" src={'/assets/self1.JPEG'} alt="will_intro" width="300" height="200"/></div>
          <div className={styles.text}>
              <div className={styles.heading}>{home.intro}</div>
              <div className={styles.des}>{home.des}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
