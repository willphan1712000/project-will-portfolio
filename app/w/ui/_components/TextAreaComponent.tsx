'use client'

import { TextArea } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { TextArea } from '@willphan1712000/frontend';
import { useState } from 'react';

const TextAreaExample = () => {
  const [value, setValue] = useState<string>('')

  return (
    <TextArea
      label="Bio"
      value={value}
      setValue={(v) => setValue(v ?? '')}
      description="Tell us about yourself"
      styling={{
        focusColor: '#1a73e8',
        backgroundColor: '#ffffff',
        textColor: '#202124',
        borderColor: '#dadce0'
      }}
    />
  )
}`

const TextAreaComponent = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <SectionHeading id='textArea' />
      <Code filename='TextArea.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <div className='w-[400px]'>
          <TextArea
            label="Bio"
            value={value}
            setValue={(v) => setValue(v ?? '')}
            description="Tell us about yourself"
            styling={{
              focusColor: '#1a73e8',
              backgroundColor: '#ffffff',
              textColor: '#202124',
              borderColor: '#dadce0'
            }}
          />
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default TextAreaComponent
