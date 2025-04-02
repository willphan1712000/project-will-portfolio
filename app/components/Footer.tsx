import { Social } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { JSX } from 'react'
import useMyContext from '../context/Context'
import EditLink from './EditLink'
import Logo from './Logo'

const year = new Date().getFullYear()

const icon: Record<string, JSX.Element> = {
  'facebook': <i className="fa-brands fa-facebook"></i>,
  'instagram': <i className="fa-brands fa-instagram"></i>,
  'youtube': <i className="fa-brands fa-youtube"></i>,
  'linkedin': <i className="fa-brands fa-linkedin"></i>,
  'github': <i className="fa-brands fa-github"></i>
}

const Footer = () => {
  const data = useMyContext()
  const social = data.social
  const { status } = useSession()

  return (
    <div id="footer" className='relative'>
        <div className="logo"><Logo /></div>
        <h3>Portfolio {year} All rights reserved</h3>
        <div className={`social`}>
          {Object.keys(icon).map(item => <EditLink key={item} api={`/api/main/${item}`} edit={status=='authenticated'} name={item} value={social !== null ? social![item as keyof Social]! : ''}><a href={social !== null ? social![item as keyof Social]! : ''} target="_blank">{icon[item]}</a></EditLink>)}
        </div>
    </div>
  )
}

export default Footer