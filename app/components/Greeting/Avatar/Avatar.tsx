import Image from 'next/image'
import React from 'react'
import styles from './avatar.module.css';
import config from '@/app/static/config';
import home from '@/app/static/home';

const Avatar = () => {
  return (
    <div className={styles.avatar} style={{
      "--primary-color": config.primaryColor
    } as React.CSSProperties}>
        <Image draggable="false" src={home.avatar} alt="will_avatar" width="300" height="300" priority/>
    </div>
  )
}

export default Avatar
