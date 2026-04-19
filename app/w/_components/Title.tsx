import React from 'react'
import style from './style.module.css'

type Props = { 
  title?: string
}

const Title = ({ title }: Props) => {
  return (
    <p className={`${style.text} flex w-full justify-center items-center my-14`}>{title}</p>
  )
}

export default Title
