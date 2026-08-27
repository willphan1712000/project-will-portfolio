'use client'

import { DynamicList } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import { tableList } from './TableOfContents'

const code = `import { DynamicList } from '@willphan1712000/frontend';
import { useState } from 'react';

const DynamicListExample = () => {
  const [items, setItems] = useState<string[]>(['TypeScript', 'Next.js', 'React'])

  return (
    <DynamicList
      value={items}
      setValue={(v) => setItems(v ?? [])}
      label="skill"
      description="Dynamic list component with add, remove, and reorder features"
      styling={{
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0',
        textColor: '#1a202c'
      }}
    />
  )
}`

const DynamicListComponent = () => {
  const [items, setItems] = useState<string[]>(['TypeScript', 'Next.js', 'React'])

  return (
    <div>
      <h1 id={tableList[5].id} className='text-2xl'>{tableList[5].table.name}</h1>
      <Code filename='DynamicList.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <div className='w-[400px]'>
          <DynamicList
            value={items}
            setValue={(v) => setItems(v ?? [])}
            label="skill"
            description="Dynamic list component with add, remove, and reorder features"
            styling={{
              backgroundColor: '#ffffff',
              borderColor: '#e2e8f0',
              textColor: '#1a202c'
            }}
          />
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default DynamicListComponent
