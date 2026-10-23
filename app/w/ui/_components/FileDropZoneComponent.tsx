'use client'

import { FileDropZone } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { FileDropZone } from '@willphan1712000/frontend';
import { useState } from 'react';

const FileDropZoneExample = () => {
  const [file, setFile] = useState<File | undefined>(undefined)

  return (
    <FileDropZone
      label="Drop a JSON file here or click to browse"
      value={file}
      setValue={setFile}
      config={{ accept: '.json' }}
      description="Only .json files are accepted"
      styling={{
        backgroundColor: '#fafafa',
        borderColor: '#1a73e8',
        textColor: '#3c4043',
        destructive: '#d93025'
      }}
    />
  )
}`

const FileDropZoneComponent = () => {
  const [file, setFile] = useState<File | undefined>(undefined)

  return (
    <div>
      <SectionHeading id='fileDropZone' />
      <Code filename='FileDropZone.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-col items-center gap-4'>
        <div className='w-[400px] max-w-full'>
          <FileDropZone
            label="Drop a JSON file here or click to browse"
            value={file}
            setValue={setFile}
            config={{ accept: '.json' }}
            description="Only .json files are accepted"
            styling={{
              backgroundColor: '#fafafa',
              borderColor: '#1a73e8',
              textColor: '#3c4043',
              destructive: '#d93025'
            }}
          />
        </div>
        <p className='text-sm text-gray-500'>Selected: <code>{file ? `${file.name} (${file.size} bytes)` : '(none)'}</code></p>
      </div>
      <br></br>
    </div>
  )
}

export default FileDropZoneComponent
