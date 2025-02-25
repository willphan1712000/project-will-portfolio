'use client'

import Image from 'next/image'
import Link from 'next/link'

const href: Record<string, string> = {
  'Home': '/',
  'Will Library': '/w',
  'Blog': '/blog',
  'Travel Collection': '/travel'
}

const Navbar = () => {

  return (
    <div id="nav-bar">
        <div className="nav-bar__logo mr-[40px]">
            <Image draggable="false" src={'/assets/logo.png'} alt="will_logo" width="300" height="200"/>
        </div>
        <div className="nav-bar__info">
            <ul className='flex gap-4'>
              {Object.keys(href).map(key => <li key={key}><Link className='p-[10px] rounded-[10px] hover:bg-[#f0f0f0]' href={href[key]}>{key}</Link></li>)}
            </ul>
        </div>
    </div>
  )
}

export default Navbar