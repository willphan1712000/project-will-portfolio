'use client'

import { Button, Spinner } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Button, Spinner } from '@willphan1712000/frontend';
import { useState } from 'react';

const SpinnerExample = () => {
  const [isLoading, setLoading] = useState<boolean>(false)

  function load() {
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  return (
    <>
      <Button buttonType="solid" content="Show spinner" onClick={load} />
      {/* Spinner covers the whole screen while it is rendered */}
      {isLoading && (
        <Spinner
          value="Loading..."
          styling={{ textColor: '#0957d0' }}
        />
      )}
    </>
  )
}`

const SpinnerComponent = () => {
  const [isLoading, setLoading] = useState<boolean>(false)

  function load() {
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  return (
    <div>
      <SectionHeading id='spinner' />
      <Code filename='Spinner.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
        <Button buttonType="solid" content="Show spinner (2.5s)" first="#673ab7" text="#fff" onClick={load} />
        {isLoading && (
          <div className='relative z-[1000]'>
            <Spinner
              value="Loading..."
              styling={{ textColor: '#0957d0' }}
            />
          </div>
        )}
      </div>
      <br></br>
    </div>
  )
}

export default SpinnerComponent
