'use client'

import { Button } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Button } from '@willphan1712000/frontend';
import { useState } from 'react';

const ButtonExample = () => {
  const [isLoading, setLoading] = useState<boolean>(false)

  function handleClick() {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <>
      <Button buttonType="normal" content="Normal" />
      <Button buttonType="solid" content="Solid" first="#673ab7" text="#fff" />
      <Button buttonType="gradient" content="Gradient" first="#3e8fbc" second="#aa6392" text="#fff" />
      <Button
        buttonType="gradient"
        content="Click to load"
        isLoading={isLoading}
        onClick={handleClick}
      />
    </>
  )
}`

const ButtonComponent = () => {
  const [isLoading, setLoading] = useState<boolean>(false)

  function handleClick() {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div>
      <SectionHeading id='button' />
      <Code filename='Button.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-wrap items-center justify-center gap-4'>
        <Button buttonType="normal" content="Normal" />
        <Button buttonType="solid" content="Solid" first="#673ab7" text="#fff" />
        <Button buttonType="gradient" content="Gradient" first="#3e8fbc" second="#aa6392" text="#fff" />
        <Button
          buttonType="gradient"
          content="Click to load"
          isLoading={isLoading}
          onClick={handleClick}
        />
      </div>
      <br></br>
    </div>
  )
}

export default ButtonComponent
