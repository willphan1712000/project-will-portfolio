'use client'

import Github from './_components/Github'
import Navigators from './_components/Navigators'
import Services from './_components/Services'
import Skills from './_components/Skills'
import Title from './_components/Title'

const W = () => {
  return (
    <div className='bg-[--dark-color] text-white p-10'>
      <Title />
      <Github />
      <Skills />
      <Services />
      <Navigators />
    </div>
  )
}

export default W
