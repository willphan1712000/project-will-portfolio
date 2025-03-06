'use client'

import Prism from 'prismjs'
import "prismjs/themes/prism-okaidia.css"
import "prismjs/components/prism-typescript"
import React, { useEffect } from 'react'

const PrismLoader = () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
  return (
    <div className='hidden'></div>
  )
}

export default PrismLoader
