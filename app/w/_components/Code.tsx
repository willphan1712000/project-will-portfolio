'use client'

import React from 'react'
import styles from './style.module.css'
import PrismLoader from './PrismLoader'

interface Props {
    filename?: string,
    code?: string
}

const Code = ({filename, code}: Props) => {
  return (
    <div className={`shadow-2xl rounded-xl ${styles.code} p-3 m-5`}>
      <div className='flex flex-row w-full justify-between'><span>{filename}</span> <MacButtons /></div>
      <pre className='language-ts' tabIndex={0} style={{overflowX: "auto", overflowY: "hidden"}}>
        <code className='p-5 language-ts'>
          {!code ? "Code goes here" : code}
        </code>
      </pre>
      <PrismLoader />
    </div>
  )
}

const MacButtons = () => {
    return (
        <div className='flex flex-row gap-2'>
            <div className='rounded-full bg-[#ef4444] w-[1rem] h-[1rem]'></div>
            <div className='rounded-full bg-[#febc2e] w-[1rem] h-[1rem]'></div>
            <div className='rounded-full bg-[#28c841] w-[1rem] h-[1rem]'></div>
        </div>
    )
}

export default Code
