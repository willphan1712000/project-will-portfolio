import React from 'react'
import { useSession } from 'next-auth/react'
import useMyContext from '@/app/context/Context'
import EditLink from '@/app/components/EditLink'
const btn_wraper = `p-[0.13rem] rounded-[0.55rem] bg-black hover:shadow-2xl transition-all duration-100 w-[7rem] h-[3rem]`
const btn = `flex bg-black size-full rounded-[0.55rem] justify-center items-center`

const Buttons = () => {
    const data = useMyContext()
    const social = data.social

    const {status} = useSession()
  return (
    <div className="p-[2rem] flex flex-col justify-center items-center z-[2]">
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
  )
}

export default Buttons
