'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { BsAirplane } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'
import { IoLibrary } from 'react-icons/io5'
import { VscSignIn } from 'react-icons/vsc'
import Logo from './Logo'

const href: Record<string, string> = {
  'Home': '/',
  'Library': '/w',
  'Blog': '/blog',
  'Travel': '/travel'
}

const icon: Record<string, React.ReactNode> = {
  'Home': <FaHome />,
  'Library': <IoLibrary />,
  'Blog': <ImBlog />,
  'Travel': <BsAirplane />
}

const Navbar = () => {
  const { status, data: session } = useSession()
  useEffect(() => {
    const navBar = document.getElementById("nav-bar") as HTMLElement

    let currentScroll: number
    window.addEventListener('scroll', function() {
      const pageHeight = document.documentElement.scrollTop // How far the view has traveled
      const dy = pageHeight - currentScroll

      if(dy > 0) {
        navBar.style.transform = 'translate(0px, -5rem)'
      } else {
        navBar.style.transform = 'translate(0px, 0px)'
      }

      currentScroll = pageHeight
      
  });
  }, [])
  
  return (
    <div id="nav-bar" className='fixed top-0 md:relative flex flex-col md:flex-row items-center justify-center p-[5px] z-[3] bg-white w-full h-20 transition-all'>
        <div className="nav-bar__logo mr-[40px] hidden md:flex">
            <Logo />
        </div>
        <div className="nav-bar__info">
            <ul>
              {Object.keys(href).map(key => <li key={key}><Link href={href[key]}><span className='py-[10px] px-[10px] md:px-[20px] rounded-[10px] hover:bg-[#f0f0f0] text-[1rem] md:text-[1.25rem] flex flex-row justify-center items-center gap-2'>{icon[key]}{key}</span></Link></li>)}
            </ul>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
          { status === 'authenticated' && (
            <>
              <img src={ session.user?.image! } alt='' width="25" height="25" className='rounded-full'/>
              <p>{session.user?.name}</p>
              <Link className='cursor-pointer' href={'/api/auth/signout'}><VscSignIn size={20} /></Link>
            </>
        )}
        </div>
    </div>
  )
}

export default Navbar