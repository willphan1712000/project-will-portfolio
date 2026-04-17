import { useEffect, useRef, useState } from 'react'
import InfoCard from './InfoCard'
import InfoPicture from './InfoPicture'
import styles from './InfoStream.module.css'

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
    /**
     * 
     * @returns [distance to the top, how far the top of the screen is scrolled in %]
     */
    function getScrollVar() {
        const htmlElement = document.documentElement
        const width = window.innerWidth
        const height = window.innerHeight
        return { scroll: htmlElement.scrollTop, width, height }
    }

    const infoStream = infoStreamRef.current;
    let init_scroll = document.documentElement.scrollTop
    let transform = 0

    const secondTitle = document.querySelector(".title__second") as HTMLElement | undefined
    // Configure Scroll function
    document.addEventListener("scroll", handler)

    function handler() {
        const { scroll, width, height } = getScrollVar()

        if(width <= 768) return
        if(!secondTitle || !infoStream) return;

        if(init_scroll + height >= secondTitle.offsetTop) {
          const d = scroll - init_scroll
          transform += d
          handleSecondTitle(transform)
        }

        const k = (init_scroll - infoStream.offsetTop + height / 2) / height | 0;
        setActive(k);

        init_scroll = scroll;
    }

    function handleSecondTitle(transform: number): void {
        const up = document.querySelector(".title__second .up") as HTMLElement
        const down = document.querySelector(".title__second .down") as HTMLElement

        up.style.transform = `translateX(${transform * 0.9}px)`
        down.style.transform = `translateX(${-transform * 0.9}px)`
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
