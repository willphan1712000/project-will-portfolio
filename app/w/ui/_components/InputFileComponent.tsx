'use client'

import { InputFile } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { InputFile } from '@willphan1712000/frontend';
import { useState } from 'react';

const InputFileExample = () => {
  const [file, setFile] = useState<File | undefined>(undefined)

  return (
    <InputFile
      id="resume-input"
      file={file}
      acceptType="application/pdf"
      onChoose={(file) => setFile(file)}
      onCancel={() => setFile(undefined)}
    />
  )
}`

const InputFileComponent = () => {
  const [file, setFile] = useState<File | undefined>(undefined)

  return (
    <div>
      <SectionHeading id='inputFile' />
      <Code filename='InputFile.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-col items-center gap-4'>
        <InputFile
          id="resume-input"
          file={file}
          acceptType="application/pdf"
          onChoose={(file) => setFile(file)}
          onCancel={() => setFile(undefined)}
        />
        <p className='text-sm text-gray-500'>Selected: <code>{file ? file.name : '(none)'}</code></p>
      </div>
      <br></br>
    </div>
  )
}

export default InputFileComponent
