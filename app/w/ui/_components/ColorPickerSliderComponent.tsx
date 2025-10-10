'use state'


import { useState } from 'react'
import Code from '../../_components/Code'
import { ColorPickerSlider } from '@willphan1712000/frontend'
import { tableList } from './TableOfContents'

const slider = `import { ColorPickerSlider } from '@willphan1712000/frontend';

  const ColorPickerSlider = () => {
    const [value, setValue] = useState<number>('#eeff00')
    return <ColorPickerSlider 
              onChange={setValue}
              value={value}
              width='200'
            />
  }`

const ColorPickerSliderComponent = () => {
    const [value, setValue] = useState<string>('#eeff00')
  return (
    <div>
        <h1 id={tableList[2].id} className='text-2xl'>{tableList[2].table.name}</h1>
        <Code filename='RangerSlider.tsx' code={slider}/>
        <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
            <ColorPickerSlider 
              onChange={setValue}
              value={value}
              width='200'
            />
        </div>
        <br></br>
    </div>
  )
}

export default ColorPickerSliderComponent
