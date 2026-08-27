'use client'

import { OptionSlider } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import { tableList } from './TableOfContents'

const slider = `import { OptionSlider } from '@willphan1712000/frontend';
import { useState } from 'react';

const options = ['green', 'yellow', 'red', 'purple', 'orange', 'blue'];

const processedOptions = options.map(option => ({
  label: <div style={{
    height: '100%',
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    background: option,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}></div>,
  labelContent: option,
  value: option
}));

const OptionSliderExample = () => {
  const [value, setValue] = useState<string>("green")

  return (
    <OptionSlider 
      options={processedOptions}
      setValue={setValue}
      value={value}
      description="Option Slider Component"
    />
  )
}`

const options = ['green', 'yellow', 'red', 'purple', 'orange', 'blue']

const processedOptions = options.map(option => ({
  label: <div style={{
    height: '100%',
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    background: option,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}></div>,
  labelContent: option,
  value: option
}))

const OptionSliderComponent = () => {
    const [value, setValue] = useState<string>("green")
  return (
    <div>
        <h1 id={tableList[3].id} className='text-2xl'>{tableList[3].table.name}</h1>
        <Code filename='OptionSlider.tsx' code={slider}/>
        <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
          <div className='w-[350px] h-[60px]'>
            <OptionSlider 
              options={processedOptions}
              setValue={(v) => setValue(v ?? 'green')}
              value={value}
              description="Option Slider Component"
            />
          </div>
        </div>
        <br></br>
    </div>
  )
}

export default OptionSliderComponent
