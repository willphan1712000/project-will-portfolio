import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <div className="background">
        <Image draggable="false" src={'/assets/self.png'} alt="" width="300" height="300" priority/>
    </div>
  )
}

export default Background
