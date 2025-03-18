import { JSX } from 'react'
import Logo from './Logo'
import { CgLogIn } from 'react-icons/cg'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { VscSignIn } from 'react-icons/vsc'

const year = new Date().getFullYear()

type Social = | 'facebook' | 'instagram' | 'youtube' | 'linkedin' | 'github' | 'resume'

export const link: Record<Social, string> = {
  'facebook': 'https://www.facebook.com/phanthanhnha123200',
  'instagram': 'https://www.instagram.com/phanthanhnha_0117',
  'youtube': 'https://www.youtube.com/channel/UCzDvuSIvBA05Hf9snlmS3TA',
  'linkedin': 'https://www.linkedin.com/in/thanh-nha-phan-53715313a',
  'github': 'https://github.com/willphan1712000',
  'resume': 'https://drive.google.com/file/d/1w6iEcipTuqCP_Cwy943RP1k3oE8LBymn/view?usp=sharing'
}

const icon: Record<string, JSX.Element> = {
  'facebook': <i className="fa-brands fa-facebook"></i>,
  'instagram': <i className="fa-brands fa-instagram"></i>,
  'youtube': <i className="fa-brands fa-youtube"></i>,
  'linkedin': <i className="fa-brands fa-linkedin"></i>,
  'github': <i className="fa-brands fa-github"></i>
}

const Footer = () => {
  const { status, data: session } = useSession()

  return (
    <div id="footer" className='relative'>
        <div className="logo"><Logo /></div>
        <h3>Portfolio {year} All rights reserved</h3>
        <div className="social">
          {Object.keys(link).map(item => <a key={item} href={link[item as Social]} target="_blank">{icon[item]}</a>)}
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