import React from 'react'
import styles from './title.module.css'
import home from '@/app/static/home'
import Buttons from '@/app/components/Subbackground/Buttons/Buttons'

const Title = () => {
  return (
    <div className={styles.title}>
        <h1 className='text-[2rem] md:text-[3rem]'>My Portfolio</h1>
        <h1 className='text-[1.5rem] md:text-[2rem]'>{home.heading}</h1>
        <div className='pl-5'>
            {home.titles.map((title, index) => (
                <h1 key={index} className='text-[1rem] md:text-[1.5rem] text-black'>{title}</h1>
            ))}
        </div>
        <Buttons />
    </div>
  )
}

export default Title
