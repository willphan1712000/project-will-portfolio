'use state'

import { OptionSlider, SliderOptions } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import { tableList } from './TableOfContents'

const slider = `import { OptionSlider, SliderOptions } from '@willphan1712000/frontend';

  const options = ['green', 'yellow', 'red', 'purple', 'orange', 'blue'];

  const processedOptions: SliderOptions = options.map(option => ({
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
    value: option
  }));

  const OptionSliderComponent = () => {
    const [value, setValue] = useState<string>("green")

    return <OptionSlider 
              options={processedOptions}
              onChange={setValue}
              value={value}
              width='200'
            />
  }`

const options = ['green', 'yellow', 'red', 'purple', 'orange', 'blue']

const processedOptions: SliderOptions = options.map(option => ({
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
  value: option
}))

const OptionSliderComponent = () => {
    const [value, setValue] = useState<string>("green")
  return (
    <div>
        <h1 id={tableList[3].id} className='text-2xl'>{tableList[3].table.name}</h1>
        <Code filename='RangerSlider.tsx' code={slider}/>
        <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
            <OptionSlider 
              options={processedOptions}
              onChange={setValue}
              value={value}
              width='200'
            />
        </div>
        <br></br>
    </div>
  )
}

export default OptionSliderComponent
