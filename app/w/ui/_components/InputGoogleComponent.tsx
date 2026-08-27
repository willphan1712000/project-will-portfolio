'use client'

import { InputGoogle } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import { tableList } from './TableOfContents'

const code = `import { InputGoogle } from '@willphan1712000/frontend';
import { useState } from 'react';

const InputGoogleExample = () => {
  const [value, setValue] = useState<string>('')

  return (
    <InputGoogle
      label="Google Style Input"
      value={value}
      setValue={(v) => setValue(v ?? '')}
      description="Google style text input component"
      styling={{
        focusColor: '#000',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        borderColor: '#cccccc'
      }}
    />
  )
}`

const InputGoogleComponent = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <h1 id={tableList[4].id} className='text-2xl'>{tableList[4].table.name}</h1>
      <Code filename='InputGoogle.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <div className='w-[300px]'>
          <InputGoogle
            label="Google Style Input"
            value={value}
            setValue={(v) => setValue(v ?? '')}
            description="Google style text input component"
            styling={{
              focusColor: '#000',
              backgroundColor: '#ffffff',
              textColor: '#000000',
              borderColor: '#cccccc'
            }}
          />
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default InputGoogleComponent
