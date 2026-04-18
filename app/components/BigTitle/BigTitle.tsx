import React, { useEffect, useRef } from 'react'
import getScrollVar from '../../utilities/getScrollVar'
import styles from './BigTitle.module.css'

interface Props {
  content: {
    up: string,
    down: string
  }
}

const BigTitle = ({ content }: Props) => {
  const up = useRef<HTMLDivElement>(null)
  const down = useRef<HTMLDivElement>(null)
  const bigTitle = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let init_scroll = document.documentElement.scrollTop
    let transform = 0
    
    document.addEventListener("scroll", handler)
    function handler() {
        const { scroll, width, height } = getScrollVar()

        if(width <= 768) return
        if(!bigTitle.current) return;

        if(init_scroll + height >= bigTitle.current.offsetTop) {
          transform += scroll - init_scroll
          if (up.current) up.current.style.transform = `translateX(${transform * 0.9}px)`
          if (down.current) down.current.style.transform = `translateX(${-transform * 0.9}px)`
        }

        init_scroll = scroll;
    }

    return () => document.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className={styles.bigTitle} ref={bigTitle}>
        <div className={styles.up} ref={up}>{content.up}</div>
        <div className={styles.down} ref={down}>{content.down}</div>
    </div>
  )
}

export default BigTitle
