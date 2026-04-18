import { useEffect, useRef, useState } from 'react'
import InfoCard from './InfoCard'
import InfoPicture from './InfoPicture'
import styles from './InfoStream.module.css'
import getScrollVar from '@/app/utilities/getScrollVar'

export type Content = {
    title?: string,
    tech?: string[],
    date?: string[],
    des?: string[],
    link?: string,
    picture?: string
}

export type Picture = string[] | undefined

const InfoStream = ({ contents }: { contents: Content[] }) => {
  const infoStreamRef = useRef<HTMLDivElement>(null);
  const [isActive, setActive] = useState<number>(-1);

  useEffect(() => {
    const infoStream = infoStreamRef.current;
    let init_scroll = document.documentElement.scrollTop

    document.addEventListener("scroll", handler)
    
    function handler() {
      const { scroll, width, height } = getScrollVar()
      
      if(width <= 768) return
      if(!infoStream) return;

      const k = (init_scroll - infoStream.offsetTop + height / 2) / height | 0;
      setActive(k);

      init_scroll = scroll;
    }

    return () => document.removeEventListener("scroll", handler)
  }, [])
  
  return (
    <div className={styles.infoStream} ref={infoStreamRef}>
        <div className={styles.infoCardContainer}>
          {contents.map((item, index) => (
              <InfoCard key={index} item={item} />
          ))}
        </div>
        <div className={styles.infoPictureContainer}>
          {contents.map((item, index) => (
            <InfoPicture key={index} src={item.picture} isActive={index === isActive} />
          ))}
        </div>
    </div>
  )
}

export default InfoStream
