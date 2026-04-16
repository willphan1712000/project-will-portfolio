import Image from 'next/image'
import React from 'react'
import styles from './avatar.module.css';
import config from '@/app/static/config';

const Avatar = () => {
  return (
    <div className={styles.background}>
        <div className={styles.avatar} style={{
          "--primary-color": config.primaryColor
        } as React.CSSProperties}>
            <Image draggable="false" src={`/assets/self.png`} alt="will_background_img" width="300" height="300" priority/>
        </div>
    </div>
  )
}

export default Avatar
