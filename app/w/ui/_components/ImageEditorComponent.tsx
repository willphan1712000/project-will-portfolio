'use client'

import { Button, Image, ImageEditor } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Button, Image, ImageEditor } from '@willphan1712000/frontend';
import { useState } from 'react';

const ImageEditorExample = () => {
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      {/* Drag, resize and rotate the image, then Accept to write the result back to src */}
      <ImageEditor
        src={src}
        setSrc={setSrc}
        isOpen={isOpen}
        setOpen={setOpen}
        isNew={false} // toggle this whenever a brand new image is loaded
      />
      <Image src={src} style={{ width: 200, height: 200, objectFit: 'contain' }} />
      <Button buttonType="solid" content="Edit image" first="#673ab7" text="#fff" onClick={() => setOpen(true)} />
    </>
  )
}`

const ImageEditorComponent = () => {
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div>
      <SectionHeading id='imageEditor' />
      <Code filename='ImageEditor.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-col items-center gap-4'>
        <ImageEditor
          src={src}
          setSrc={setSrc}
          isOpen={isOpen}
          setOpen={setOpen}
          isNew={false}
        />
        <Image src={src} style={{ width: 200, height: 200, objectFit: 'contain' }} />
        <Button buttonType="solid" content="Edit image" first="#673ab7" text="#fff" onClick={() => setOpen(true)} />
      </div>
      <br></br>
    </div>
  )
}

export default ImageEditorComponent
