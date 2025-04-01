import { Social } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { JSX } from 'react'
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
  const { status } = useSession()
  const {data: info, error, isLoading} = useQuery<Social>({
    queryKey: ['info'],
    queryFn: () => axios.get("/api/main").then(res => res.data),
    staleTime: 60 * 1000, // 60 seconds,
    retry: 3,
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
    </div>
  )
}

export default Footer