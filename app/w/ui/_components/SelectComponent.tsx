'use client'

import { DropdownSelect, MultiSelect } from '@willphan1712000/frontend';
import { useState } from 'react';
import Code from '../../_components/Code';
import { tableList } from './TableOfContents';

const options = [
  { label: <span>Nodejs</span>, labelContent: 'Nodejs', value: 'Nodejs' },
  { label: <span>Prisma</span>, labelContent: 'Prisma', value: 'Prisma' },
  { label: <span>React</span>, labelContent: 'React', value: 'React' },
  { label: <span>Typescript</span>, labelContent: 'Typescript', value: 'Typescript' },
  { label: <span>Express</span>, labelContent: 'Express', value: 'Express' },
  { label: <span>Mongodb</span>, labelContent: 'Mongodb', value: 'Mongodb' },
  { label: <span>Graphql</span>, labelContent: 'Graphql', value: 'Graphql' },
  { label: <span>Docker</span>, labelContent: 'Docker', value: 'Docker' },
  { label: <span>Nextjs</span>, labelContent: 'Nextjs', value: 'Nextjs' },
];

const single = `import { DropdownSelect } from '@willphan1712000/frontend';
import { useState } from 'react';

const options = [
  { label: <span>Nodejs</span>, labelContent: 'Nodejs', value: 'Nodejs' },
  { label: <span>Prisma</span>, labelContent: 'Prisma', value: 'Prisma' },
  { label: <span>React</span>, labelContent: 'React', value: 'React' },
]

const DropdownSelectExample = () => {
  const [value, setValue] = useState<string>('')

  return (
    <DropdownSelect 
      setValue={setValue}
      value={value}
      options={options}
      description="Dropdown Select Component"
    />
  )
}`

const multiple = `import { MultiSelect } from '@willphan1712000/frontend';
import { useState } from 'react';

const options = [
  { label: <span>Nodejs</span>, labelContent: 'Nodejs', value: 'Nodejs' },
  { label: <span>Prisma</span>, labelContent: 'Prisma', value: 'Prisma' },
  { label: <span>React</span>, labelContent: 'React', value: 'React' },
]

const MultiSelectExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <MultiSelect 
      setValue={setValue}
      value={value}
      options={options}
      description="MultiSelect Component"
    />
  )
}`

const SelectComponent = () => {
    const [singleValue, singleChange] = useState<string>('')
    const [multipleValue, multipleChange] = useState<string[]>([])
  return (
    <div>
        <h1 id={tableList[0].id} className='text-2xl'>{tableList[0].table.name}</h1>
        <Code filename='DropdownSelect.tsx' code={single} />
        <div className='bg-white flex items-start justify-center p-10 rounded-md m-5 h-[20rem] overflow-hidden text-black'>
          <div className='w-[300px]'>
            <DropdownSelect 
                setValue={(v) => singleChange(v ?? '')}
                value={singleValue}
                options={options}
                description="Dropdown Select Component"
            />
          </div>
        </div>
        <Code filename='MultiSelect.tsx' code={multiple} />
        <div className='bg-white flex items-start justify-center p-10 rounded-md m-5 h-[20rem] overflow-hidden text-black'>
          <div className="w-[300px]">
            <MultiSelect 
              setValue={(v) => multipleChange(v ?? [])}
              value={multipleValue}
              options={options}
              description="MultiSelect Component"
            />
          </div>
        </div>
        <br></br>
    </div>
  )
}

export default SelectComponent
