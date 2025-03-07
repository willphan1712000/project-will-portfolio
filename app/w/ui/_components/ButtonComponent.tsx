'use client'

import React from 'react'
import Code from '../../_components/Code'
import { Button } from '@willphan1712000/w'

const solid = `import { Button } from '@willphan1712000/w'

  const SolidButton = () => {
    return <Button content='Click me' type='solid'/>
  }`
const gradient = `import { Button } from '@willphan1712000/w'

  const GradientButton = () => {
    return <Button content='Click me' type='gradient'/>
  }`

const ButtonComponent = () => {
  return (
    <>
        <h1 id="button" className='text-2xl'>Button UI component</h1>
        <Code filename='SolidButton.tsx' code={solid}/>
        <div className='flex justify-center'>
            <Button content='Click me' type='solid' />
        </div>
        <Code filename='GradientButton.tsx' code={gradient}/>
        <div className='flex justify-center'>
            <Button content='Click me' type='gradient' />
        </div>
        <br></br>
    </>
  )
}

export default ButtonComponent
