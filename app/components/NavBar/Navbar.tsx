'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { VscSignIn } from 'react-icons/vsc'
import Logo from '../Logo'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

const href: Record<string, string> = {
  'Home': '/',
  'Library': '/w',
  'Blog': '/blog',
  'Travel': '/travel'
}

const Navbar = () => {
  const navBar = useRef<HTMLDivElement>(null);

  const { status, data: session } = useSession()
  const pathName = usePathname()

  useEffect(() => {
    let currentScroll: number
    window.addEventListener('scroll', function() {
      if(!navBar.current) return;

      const pageHeight = document.documentElement.scrollTop // How far the view has traveled
      const dy = pageHeight - currentScroll

      if(dy > 0) navBar.current.style.transform = 'translate(0px, -5rem)'
      else navBar.current.style.transform = 'translate(0px, 0px)'

      currentScroll = pageHeight
      
  });
  }, [])
  
  return (
    <div className={styles.navBarContainer} ref={navBar}>
      <div className={styles.navBar}>
        <div className={styles.navBarLogo}>
            <Logo />
        </div>
        <div className={styles.navBarInfo}>
            <ul>
              {Object.keys(href).map(key => <li key={key}><Link href={href[key]}><span className={styles.element} style={pathName === href[key] ? { background: 'black', color: 'white' } : {}}>{key}</span></Link></li>)}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar