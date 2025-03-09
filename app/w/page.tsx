'use client'

import { useEffect } from 'react'
import Github from './_components/Github'
import Navigators from './_components/Navigators'
import Services from './_components/Services'
import Skills from './_components/Skills'
import Title from './_components/Title'

const W = () => {
  useEffect(() => {
    const navBar = document.getElementById("nav-bar") as HTMLElement

    let currentScroll: number
    window.addEventListener('scroll', function() {
      const pageHeight = document.documentElement.scrollTop // How far the view has traveled
      const dy = pageHeight - currentScroll

      if(dy > 0) {
        navBar.style.transform = 'translate(0px, -5rem)'
      } else {
        navBar.style.transform = 'translate(0px, 0px)'
      }

      currentScroll = pageHeight
      
  });
  }, [])

  return (
    <>
      <Title />
      <Github />
      <Skills />
      <Services />
      <Navigators />
    </>
  )
}

export default W
