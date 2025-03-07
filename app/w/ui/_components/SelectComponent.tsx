'use client'

import { Select } from '@willphan1712000/w';
import { useState } from 'react';
import Code from '../../_components/Code';

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

const single = `import { Select } from '@willphan1712000/w';

  const options = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Prisma', value: 'Prisma' },
    { label: 'React', value: 'React' },
  ]

  const SingleSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <Select options={options} type='single' change={setValue} value={value} size='20'/>
  }`
const multiple = `import { Select } from '@willphan1712000/w';

  const options = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Prisma', value: 'Prisma' },
    { label: 'React', value: 'React' },
  ]

  const MultiSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <Select options={options} type='multiple' change={setValue} value={value} size='20'/>
  }`

const SelectComponent = () => {
    const [singleValue, singleChange] = useState<string>('')
    const [multipleValue, multipleChange] = useState<string[]>([])
  return (
    <>
        <h1 id="select" className='text-2xl'>Option Select UI component</h1>
        <Code filename='SingleSelect.tsx' code={single} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[20rem] overflow-hidden'>
          <Select options={options} type='single' change={singleChange} value={singleValue} size='20'/>
        </div>
        <Code filename='MultiSelect.tsx' code={multiple} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[20rem] overflow-hidden'>
          <Select options={options} type='multiple' change={multipleChange} value={multipleValue} size='20'/>
        </div>
        <br></br>
    </>
  )
}

export default SelectComponent
