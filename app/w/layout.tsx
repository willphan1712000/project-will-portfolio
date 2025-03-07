import React from 'react'

interface Props {
  children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='bg-[--dark-color] text-white p-5 flex items-center justify-center'>
      <div className='max-w-[1100px] w-full'>
        {children}
      </div>
    </div>
  )
}

export default layout
