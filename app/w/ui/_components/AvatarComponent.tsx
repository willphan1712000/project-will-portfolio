'use client'

import { Avatar } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Avatar } from '@willphan1712000/frontend';
import { useState } from 'react';

const AvatarExample = () => {
  // Avatar renders nothing until value has a src
  // Image URLs must be same-origin (or CORS-enabled) to be converted to base64
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')

  return (
    <Avatar
      value={src}
      setValue={setSrc}
      config={{ default: '/assets/logo.png' }}
    />
  )
}`

const AvatarComponent = () => {
  const [src, setSrc] = useState<string | undefined>('/assets/logo.png')

  return (
    <div>
      <SectionHeading id='avatar' />
      <Code filename='Avatar.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <div className='w-[250px]'>
          <Avatar
            value={src}
            setValue={setSrc}
            config={{ default: '/assets/logo.png' }}
          />
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default AvatarComponent
