import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <p className={style.text}>Technology</p>
      <Image src={'/assets/tech/ts.png'} width="150" height="150" className='w-auto' alt='tech'/>
    </div>
  )
}

export default Skills
