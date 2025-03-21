import { Social } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { JSX } from 'react'
import { CgLogIn } from 'react-icons/cg'
import { VscSignIn } from 'react-icons/vsc'
import Logo from './Logo'
import EditLink from './EditLink'

const year = new Date().getFullYear()

const icon: Record<string, JSX.Element> = {
  'facebook': <i className="fa-brands fa-facebook"></i>,
  'instagram': <i className="fa-brands fa-instagram"></i>,
  'youtube': <i className="fa-brands fa-youtube"></i>,
  'linkedin': <i className="fa-brands fa-linkedin"></i>,
  'github': <i className="fa-brands fa-github"></i>
}

const Footer = () => {
  const { status, data: session } = useSession()
  const {data: info, error, isLoading} = useQuery<Social>({
    queryKey: ['info']
  })

  if(error) return null

  if(isLoading) return <p>Loading...</p>

  return (
    <div id="footer" className='relative'>
        <div className="logo"><Logo /></div>
        <h3>Portfolio {year} All rights reserved</h3>
        <div className={`social`}>
          {Object.keys(icon).map(item => <EditLink key={item} api={`/api/main/${item}`} edit={status=='authenticated'} name={item} value={info !== null ? info![item as keyof Social]! : ''}><a href={info !== null ? info![item as keyof Social]! : ''} target="_blank">{icon[item]}</a></EditLink>)}
        </div>
        <div className='flex flex-row justify-center items-center absolute top-1 right-1 gap-2'>
          { status === 'loading' && <p>Loading...</p>}
          { status === 'unauthenticated' && <Link className='cursor-pointer' href={'/api/auth/signin'}><CgLogIn size={20}/></Link>}
          { status === 'authenticated' && (
            <>
              <p>{session.user?.name}</p>
              <Link className='cursor-pointer' href={'/api/auth/signout'}><VscSignIn size={20} /></Link>
            </>
        )}
        </div>
    </div>
  )
}

export default Footer