import React from 'react'
import { useSession } from 'next-auth/react'
import useMyContext from '@/app/context/Context'
import EditLink from '@/app/components/EditLink'
import Button from '../../Button/Button'

const Buttons = () => {
    const data = useMyContext()
    const social = data.social

    const {status} = useSession()
  return (
    <div className="p-[2rem] flex flex-col justify-center items-center z-[2]">
        <div className="flex items-center justify-center md:flex-row gap-3 text-white">
            <EditLink edit={status == 'authenticated'} api="/api/main/linkedin" name="Linkedin" value={social?.linkedin ?? ""}>
                <Button link={social?.linkedin ?? ""} name='Linkedin'/>
            </EditLink>
            <EditLink edit={status == 'authenticated'} api="/api/main/github" name="Github" value={social?.github ?? ""}>
                <Button link={social?.github ?? "" } name='Github' />
            </EditLink> 
            <EditLink edit={status == 'authenticated'} api="/api/main/resume" name="Resume" value={social?.resume ?? ""}>
                <Button link={social?.resume ?? "" } name='Resume' />
            </EditLink>
        </div>
    </div>
  )
}

export default Buttons
