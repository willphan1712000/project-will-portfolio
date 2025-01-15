import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <div className="background">
        <div className='size-[50%] py-0 px-[0.5rem] rounded-[10rem] overflow-hidden'>
          <Image draggable="false" src={'/assets/self.png'} alt="" width="300" height="300" priority/>
        </div>
    </div>
  )
}

export default Background
