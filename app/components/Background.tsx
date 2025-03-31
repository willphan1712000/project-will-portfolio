import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <div className="background">
        <div className='size-[50%] py-0 px-[0.5rem] rounded-[10rem] overflow-hidden max-w-[360px]'>
          <Image draggable="false" src={`/assets/self.png`} alt="will_background_img" width="300" height="300" priority/>
        </div>
    </div>
  )
}

export default Background

// To opt out of static rendering
export const dynamic = 'force-dynamic'

// To revalidate
export const revalidate = 60