'use client'

import { Select } from '@willphan1712000/w';
import { useState } from 'react';
import Code from '../../_components/Code';

const options = [
  { label: 'nodejs', value: 'nodejs' },
  { label: 'prisma', value: 'prisma' },
  { label: 'react', value: 'react' },
  { label: 'typescript', value: 'typescript' },
  { label: 'express', value: 'express' },
  { label: 'mongodb', value: 'mongodb' },
  { label: 'graphql', value: 'graphql' },
  { label: 'docker', value: 'docker' },
  { label: 'nextjs', value: 'nextjs' },
  { label: 'tailwindcss', value: 'tailwindcss' },
  { label: 'redux', value: 'redux' },
  { label: 'javascript', value: 'javascript' },
  { label: 'vue', value: 'vue' },
  { label: 'angular', value: 'angular' },
  { label: 'jest', value: 'jest' },
  { label: 'firebase', value: 'firebase' },
  { label: 'nestjs', value: 'nestjs' },
  { label: 'vscode', value: 'vscode' },
  { label: 'sass', value: 'sass' },
  { label: 'webpack', value: 'webpack' },
  { label: 'npm', value: 'npm' },
  { label: 'yarn', value: 'yarn' },
  { label: 'flask', value: 'flask' },
  { label: 'django', value: 'django' },
  { label: 'php', value: 'php' },
  { label: 'mysql', value: 'mysql' },
  { label: 'postgresql', value: 'postgresql' },
  { label: 'python', value: 'python' },
  { label: 'aws', value: 'aws' },
  { label: 'azure', value: 'azure' },
  { label: 'cloudflare', value: 'cloudflare' },
  { label: 'cypress', value: 'cypress' },
  { label: 'mocha', value: 'mocha' },
  { label: 'chai', value: 'chai' },
  { label: 'html', value: 'html' },
  { label: 'css', value: 'css' },
  { label: 'bulma', value: 'bulma' },
  { label: 'jquery', value: 'jquery' },
  { label: 'git', value: 'git' },
  { label: 'github', value: 'github' },
  { label: 'gitlab', value: 'gitlab' },
  { label: 'bitbucket', value: 'bitbucket' },
  { label: 'kubernetes', value: 'kubernetes' },
  { label: 'vagrant', value: 'vagrant' },
  { label: 'bash', value: 'bash' },
  { label: 'zsh', value: 'zsh' },
  { label: 'markdown', value: 'markdown' },
  { label: 'json', value: 'json' },
  { label: 'csv', value: 'csv' },
];


const single = `const SingleSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <Select options={options} type='single' change={setValue} value={value} size='20'/>
  }`
const multiple = `const MultiSelect = () => {
    const [value, setValue] = useState<any[]>([])
    return <Select options={options} type='multiple' change={setValue} value={value} size='20'/>
  }`

const SelectComponent = () => {
    const [singleValue, singleChange] = useState<any>('')
    const [multipleValue, multipleChange] = useState<any[]>([])
  return (
    <>
        <h1 id="select" className='text-2xl'>Option Select UI component</h1>
        <Code filename='SingleSelect.tsx' code={single} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[47rem] overflow-hidden'>
          <Select options={options} type='single' change={singleChange} value={singleValue} size='20'/>
        </div>
        <Code filename='MultiSelect.tsx' code={multiple} />
        <div className='bg-white flex items-start justify-center p-4 rounded-md m-5 h-[47rem] overflow-hidden'>
          <Select options={options} type='multiple' change={multipleChange} value={multipleValue} size='20'/>
        </div>
    </>
  )
}

export default SelectComponent
