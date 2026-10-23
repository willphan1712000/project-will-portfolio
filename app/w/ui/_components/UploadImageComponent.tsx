'use client'

import { Image, UploadImage } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Image, UploadImage } from '@willphan1712000/frontend';
import { useState } from 'react';

const UploadImageExample = () => {
  // UploadImage converts the chosen file to a base64 src
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')

  return (
    <>
      {/* UploadImage renders a hidden input, so open it with a label */}
      <UploadImage id="upload-image-input" setSrc={setSrc} />
      <label htmlFor="upload-image-input">Choose an image</label>

      {/* Image wraps <img> with a default alt text and draggable={false} */}
      <Image src={src} style={{ width: 200, height: 200, objectFit: 'cover' }} />
    </>
  )
}`

const UploadImageComponent = () => {
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')

  return (
    <div>
      <SectionHeading id='uploadImage' />
      <Code filename='UploadImage.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-col items-center gap-4'>
        <UploadImage id="upload-image-input" setSrc={setSrc} />
        <label htmlFor="upload-image-input" className='cursor-pointer rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100'>
          Choose an image
        </label>
        <Image src={src} style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 12 }} />
      </div>
      <br></br>
    </div>
  )
}

export default UploadImageComponent
