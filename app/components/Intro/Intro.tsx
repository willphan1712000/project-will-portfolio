import Image from 'next/image'
import home from '../../static/home'
import styles from './intro.module.css'
import config from '@/app/static/config'

const Intro = () => {
  return (
    <>
      <div className={styles.border} style={{
            "--primary-color": config.primaryColor,
            "--second-color": config.secondColor
        } as React.CSSProperties}>
        <div className='bg-white lg:flex-row flex-col' id="introduction">
          <div className="img md:p-[1rem]"><Image draggable="false" src={'/assets/self1.JPEG'} alt="will_intro" width="300" height="200"/></div>
          <div className="text">
              <div className="heading">{home.intro}</div>
              <div className="des">{home.des}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
