import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import getGoogleImage from '@/app/utilities/getGoogleImage'

const Skills = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <p className={style.text}>Technology</p>
      <Image src={getGoogleImage("1jZYZSwxyH5nNdKZ22TYJx-TkC1W7cC6i")} width="150" height="150" className='w-auto' alt='tech'/>
    </div>
  )
}

export default Skills
