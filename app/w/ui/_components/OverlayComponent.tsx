'use client'

import { Button, Overlay } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Button, Overlay } from '@willphan1712000/frontend';
import { useState } from 'react';

const OverlayExample = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button buttonType="solid" content="Open overlay" onClick={() => setOpen(true)} />

      {/* Clicking outside the child closes the overlay */}
      <Overlay
        open={open}
        close={() => setOpen(false)}
        options={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div style={{ padding: 24, background: '#fff', borderRadius: 12 }}>
          <h3>Overlay content</h3>
          <p>Click anywhere outside this box to close it.</p>
        </div>
      </Overlay>
    </>
  )
}`

const OverlayComponent = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <SectionHeading id='overlay' />
      <Code filename='Overlay.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <Button buttonType="solid" content="Open overlay" first="#673ab7" text="#fff" onClick={() => setOpen(true)} />
        <Overlay
          open={open}
          close={() => setOpen(false)}
          options={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className='text-black' style={{ padding: 24, background: '#fff', borderRadius: 12 }}>
            <h3 className='text-xl font-bold'>Overlay content</h3>
            <p>Click anywhere outside this box to close it.</p>
          </div>
        </Overlay>
      </div>
      <br></br>
    </div>
  )
}

export default OverlayComponent
