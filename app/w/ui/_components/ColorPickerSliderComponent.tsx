'use client'

import { useState } from 'react'
import Code from '../../_components/Code'
import { ColorPickerSlider } from '@willphan1712000/frontend'
import { tableList } from './TableOfContents'

const slider = `import { ColorPickerSlider } from '@willphan1712000/frontend';
import { useState } from 'react';

const ColorPickerSliderExample = () => {
  const [value, setValue] = useState<string>('#eeff00')

  return (
    <ColorPickerSlider 
      setValue={setValue}
      value={value}
      description="Color Picker Slider Component"
      styling={{
        width: '200'
      }}
    />
  )
}`

const ColorPickerSliderComponent = () => {
    const [value, setValue] = useState<string>('#eeff00')
  return (
    <div>
        <h1 id={tableList[2].id} className='text-2xl'>{tableList[2].table.name}</h1>
        <Code filename='ColorPickerSlider.tsx' code={slider}/>
        <div className='w-full p-[50px] rounded-xl bg-white flex justify-center'>
            <ColorPickerSlider 
              setValue={(v) => setValue(v ?? '#eeff00')}
              value={value}
              description="Color Picker Slider Component"
              styling={{
                width: '200',
                backgroundColor: '#fff',
                textColor: '#000'
              }}
            />
        </div>
        <br></br>
    </div>
  )
}

export default ColorPickerSliderComponent
