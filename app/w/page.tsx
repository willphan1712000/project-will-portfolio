'use client'

import Github from './_components/Github'
import Navigators from './_components/Navigators'
import Services from './_components/Services'
import Skills from './_components/Skills'
import Title from './_components/Title'

const W = () => {
  return (
    <div className='bg-[--dark-color] text-white p-10 flex items-center justify-center'>
      <div className='max-w-[1500px] w-full'>
        <Title />
        <Github />
        <Skills />
        <Services />
        <Navigators />
      </div>
    </div>
  )
}

export default W
