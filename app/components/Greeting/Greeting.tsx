import { useStore } from '@/app/components/Store';
import config from '@/app/static/config';
import React, { useEffect, useRef } from 'react';
import Avatar from './Avatar/Avatar';
import styles from './Greeting.module.css';
import Title from './Title/Title';

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
      </div>
    </div>
  )
}

export default Greeting
