'use client'

import { useEffect, useRef } from 'react'
import Github from './_components/Github'
import Navigators from './_components/Navigators'
import Services from './_components/Services'
import Skills from './_components/Skills'
import Title from './_components/Title'

const W = () => {
  const inner = useRef<HTMLDivElement>(null)
  const outer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // inner.current?.addEventListener('click', e => {
    //   console.log("inner")
    // }, {
    //   capture: false
    // })
    outer.current?.addEventListener('click', e => {
      console.log("outer")
    }, {
      capture: false
    })
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
