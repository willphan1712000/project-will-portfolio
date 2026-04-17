import Image from 'next/image'
import React from 'react'
import styles from './InfoStream.module.css'

type Props = {
  src?: string,
  isActive?: boolean
}

const InfoPicture = ({ src, isActive = false }: Props) => {
  return (
    <div key={src} className={styles.infoPicture} style={{ opacity : isActive ? 1 : 0 }}>
      <Image draggable="false" src={src ?? ''} alt="will_picture" width="1000" height="1000" />
    </div>
  )
}

export default InfoPicture
