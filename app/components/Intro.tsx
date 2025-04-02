import { useSession } from 'next-auth/react'
import Image from 'next/image'
import useMyContext from '../context/Context'
import EditLink from './EditLink'

const btn_wraper = `p-[0.13rem] rounded-[0.55rem] bg-black hover:shadow-2xl transition-all duration-100 w-[7rem] h-[3rem]`
const btn = `flex bg-black size-full rounded-[0.55rem] justify-center items-center`

const Intro = () => {
  const data = useMyContext()
  const social = data.social

  const {status} = useSession()

  return (
    <>
      <div className='bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 m-[2rem] rounded-[0.7rem] p-[0.15rem]'>
        <div className='bg-white lg:flex-row flex-col' id="introduction">
          <div className="img md:p-[1rem]"><Image draggable="false" src={'/assets/ksu.png'} alt="will_intro" width="300" height="200"/></div>
          <div className="text">
              <div className="heading">I am about to graduate from Kennesaw State University, Georgia in May 2026, and seeking an internship to level up my experience in tech industry.</div>
              <div className="des">I am seeking happiness within myself. Then I will have power to explore the world, I have gone through so many tough situations that I want to share right here. Due to hard working, I am able to stand up to continue my journey in the United States, and I am who I am now. Let&apos;s begin !</div>
          </div>
          <div className="p-[2rem] flex flex-col justify-center items-center">
              <div className="mb-[0.5rem] text-[1.5rem]">Reach out to me from</div>
              <div className="flex items-center justify-center md:flex-row gap-3 text-white">
                <EditLink edit={status == 'authenticated'} api="/api/main/linkedin" name="Linkedin" value={social?.linkedin ?? ""}>
                  <div className={btn_wraper}>
                    <a href={social?.linkedin ?? ""} className={btn} target="_blank">Linkedin</a>
                  </div>
                </EditLink>
                <EditLink edit={status == 'authenticated'} api="/api/main/github" name="Github" value={social?.github ?? ""}>
                  <div className={btn_wraper}>
                    <a href={social?.github ?? ""} className={btn} target="_blank">Github</a>
                  </div>
                </EditLink>
              </div>
              <br></br>
              <div className="flex items-center justify-center md:flex-row gap-3 text-white">
                <EditLink edit={status == 'authenticated'} api="/api/main/resume" name="Resume" value={social?.resume ?? ""}>
                  <div className={btn_wraper}>
                    <a href={social?.resume ?? ""} className={btn} target="_blank">Resume</a>
                  </div>
                </EditLink>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
