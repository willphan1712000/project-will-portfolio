import { Social } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import EditLink from './EditLink'
import Project from './Project'

const Intro = () => {
  const btn_wraper = `p-[0.13rem] rounded-[0.55rem] bg-black hover:shadow-2xl transition-all duration-100 w-[7rem] h-[3rem]`
  const btn = `flex bg-black size-full rounded-[0.55rem] justify-center items-center`

  const {status} = useSession()

  const {data: info, error, isLoading} = useQuery<Social>({
    queryKey: ['info'],
    queryFn: () => axios.get("/api/main").then(res => res.data),
    staleTime: 60 * 1000, // 60 seconds,
    retry: 3,
  })

  if(error) return null

  if(isLoading) return <p>Loading...</p>

  return (
    <>
      <div className='bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 m-[2rem] rounded-[0.7rem] p-[0.15rem]'>
        <div className='bg-white lg:flex-row flex-col' id="introduction">
          <div className="img md:p-[1rem]"><Image draggable="false" src={'/assets/ksu.png'} alt="will_intro" width="300" height="200"/></div>
          <div className="text">
              <div className="heading">I am about to graduate from Kennesaw State University, Georgia in May 2026</div>
              <div className="des">I am seeking happiness within myself. Then I will have power to explore the world, I have gone through so many tough situations that I want to share right here. Due to hard working, I am able to stand up to continue my journey in the United States, and I am who I am now. Let&apos;s begin !</div>
          </div>
          <div className="p-[2rem] flex flex-col justify-center items-center">
              <div className="mb-[0.5rem] text-[1.5rem]">Reach out to me from</div>
              <div className="flex items-center justify-center md:flex-row gap-3 text-white">
                <EditLink edit={status == 'authenticated'} api="/api/main/linkedin" name="Linkedin" value={info?.linkedin ?? ""}>
                  <div className={btn_wraper}>
                    <a href={info?.linkedin ?? ""} className={btn} target="_blank">Linkedin</a>
                  </div>
                </EditLink>
                <EditLink edit={status == 'authenticated'} api="/api/main/github" name="Github" value={info?.github ?? ""}>
                  <div className={btn_wraper}>
                    <a href={info?.github ?? ""} className={btn} target="_blank">Github</a>
                  </div>
                </EditLink>
              </div>
              <br></br>
              <div className="flex items-center justify-center md:flex-row gap-3 text-white">
                <EditLink edit={status == 'authenticated'} api="/api/main/resume" name="Resume" value={info?.resume ?? ""}>
                  <div className={btn_wraper}>
                    <a href={info?.resume ?? ""} className={btn} target="_blank">Resume</a>
                  </div>
                </EditLink>
              </div>
          </div>
        </div>
      </div>

      <Project />
    </>
  )
}

export default Intro
