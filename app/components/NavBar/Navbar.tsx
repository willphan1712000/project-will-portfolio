'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

const href: Record<string, string> = {
  'Home': '/',
  'Library': '/w',
  'Blog': '/blog',
  'Travel': '/travel'
}

/**
 * A tab is active on its own route and on every nested route under it (e.g. Library on /w and /w/ui)
 * Root '/' only matches exactly, otherwise Home would be active on every page
 */
function isActive(pathName: string, route: string) {
  if (route === '/') return pathName === '/'
  return pathName === route || pathName.startsWith(`${route}/`)
}

const Navbar = () => {
  const navBar = useRef<HTMLDivElement>(null);
  const pathName = usePathname()

  useEffect(() => {
    let currentScroll = document.documentElement.scrollTop

    function handler() {
      if(!navBar.current) return;

      const pageHeight = document.documentElement.scrollTop // How far the view has traveled
      const dy = pageHeight - currentScroll

      if(dy > 0) navBar.current.style.transform = 'translate(0px, -5rem)'
      else navBar.current.style.transform = 'translate(0px, 0px)'

      currentScroll = pageHeight
    }

    window.addEventListener('scroll', handler, { passive: true })

    return () => window.removeEventListener('scroll', handler)
  }, [])
  
  return (
    <div className={styles.navBarContainer} ref={navBar}>
      <div className={styles.navBar}>
        <div className={styles.navBarLogo}>
            <Logo />
        </div>
        <div className={styles.navBarInfo}>
            <ul>
              {Object.keys(href).map(key => <li key={key}><Link href={href[key]}><span className={styles.element} style={isActive(pathName, href[key]) ? { background: 'black', color: 'white' } : {}}>{key}</span></Link></li>)}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
