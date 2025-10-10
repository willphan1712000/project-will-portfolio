'use client'

import { DropdownSelect, MultiSelect } from '@willphan1712000/frontend';
import { useState } from 'react';
import Code from '../../_components/Code';
import { tableList } from './TableOfContents';

const options = [
  { label: 'Nodejs', value: 'Nodejs' },
  { label: 'Prisma', value: 'Prisma' },
  { label: 'React', value: 'React' },
  // { label: 'Typescript', value: 'Typescript' },
  // { label: 'Express', value: 'Express' },
  // { label: 'Mongodb', value: 'Mongodb' },
  // { label: 'Graphql', value: 'Graphql' },
  // { label: 'Docker', value: 'Docker' },
  // { label: 'Nextjs', value: 'Nextjs' },
  // { label: 'Tailwindcss', value: 'Tailwindcss' },
  // { label: 'Redux', value: 'Redux' },
  // { label: 'Javascript', value: 'Javascript' },
  // { label: 'Vue', value: 'Vue' },
  // { label: 'Angular', value: 'Angular' },
  // { label: 'Jest', value: 'Jest' },
  // { label: 'Firebase', value: 'Firebase' },
  // { label: 'Nestjs', value: 'Nestjs' },
  // { label: 'Vscode', value: 'Vscode' },
  // { label: 'Sass', value: 'Sass' },
  // { label: 'Webpack', value: 'Webpack' },
  // { label: 'Npm', value: 'Npm' },
  // { label: 'Yarn', value: 'Yarn' },
  // { label: 'Flask', value: 'Flask' },
  // { label: 'Django', value: 'Django' },
  // { label: 'Php', value: 'Php' },
  // { label: 'Mysql', value: 'Mysql' },
  // { label: 'Postgresql', value: 'Postgresql' },
  // { label: 'Python', value: 'Python' },
  // { label: 'Aws', value: 'Aws' },
  // { label: 'Azure', value: 'Azure' },
  // { label: 'Cloudflare', value: 'Cloudflare' },
  // { label: 'Cypress', value: 'Cypress' },
  // { label: 'Mocha', value: 'Mocha' },
  // { label: 'Chai', value: 'Chai' },
  // { label: 'Html', value: 'Html' },
  // { label: 'Css', value: 'Css' },
  // { label: 'Bulma', value: 'Bulma' },
  // { label: 'Jquery', value: 'Jquery' },
  // { label: 'Git', value: 'Git' },
  // { label: 'Github', value: 'Github' },
  // { label: 'Gitlab', value: 'Gitlab' },
  // { label: 'Bitbucket', value: 'Bitbucket' },
  // { label: 'Kubernetes', value: 'Kubernetes' },
  // { label: 'Vagrant', value: 'Vagrant' },
  // { label: 'Bash', value: 'Bash' },
  // { label: 'Zsh', value: 'Zsh' },
  // { label: 'Markdown', value: 'Markdown' },
  // { label: 'Json', value: 'Json' },
  // { label: 'Csv', value: 'Csv' },
];

const single = `import { DropdownSelect } from '@willphan1712000/frontend';

  const options = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Prisma', value: 'Prisma' },
    { label: 'React', value: 'React' },
  ]

  const DropdownSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <DropdownSelect 
              onChange={singleChange}
              value={singleValue}
              options={options}
              width='300'
          />
  }`
const multiple = `import { MultiSelect } from '@willphan1712000/frontend';

  const options = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Prisma', value: 'Prisma' },
    { label: 'React', value: 'React' },
  ]

  const MultiSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <MultiSelect 
            onChange={multipleChange}
            value={multipleValue}
            options={options}
            width='300'
          />
  }`

const SelectComponent = () => {
    const [singleValue, singleChange] = useState<string>('')
    const [multipleValue, multipleChange] = useState<string[]>([])
  return (
    <div>
        <h1 id={tableList[0].id} className='text-2xl'>{tableList[0].table.name}</h1>
        <Code filename='DropdownSelect.tsx' code={single} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[20rem] overflow-hidden text-black'>
          <DropdownSelect 
              onChange={singleChange}
              value={singleValue}
              options={options}
              width='300'
          />
        </div>
        <Code filename='MultiSelect.tsx' code={multiple} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[20rem] overflow-hidden text-black'>
          <MultiSelect 
            onChange={multipleChange}
            value={multipleValue}
            options={options}
            width='300'
          />
        </div>
        <br></br>
    </div>
  )
}

export default SelectComponent
