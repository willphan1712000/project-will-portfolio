import React from 'react'
import { pictureContent, pictures } from './pictureContent'
import Image from 'next/image'

const PictureSection = () => {
  return (
    <div className="picture-section md:!flex-row md:!sticky md:!h-screen">
        <div className="picture-section__text md:!overflow-hidden">
          {pictureContent.map(item => (
              <div key={item.heading} className="picture-section__text--section md:!h-full">
                <div className="heading"><h1 className='text-[30px]'>{item.heading}</h1></div>
                <div className="des"><h3 className='text-[22px]'>{item.des}</h3></div>
              </div>
          ))}
        </div>
        <div className="picture-section__pics md:!flex">
          {pictures.map(item => (
            <div key={item} className="picture-section__pics--section active">
              <Image draggable="false" src={item} alt="will_picture" width="300" height="200" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default PictureSection
