'use state'


import { useState } from 'react'
import Code from '../../_components/Code'
import { RangeSlider } from '@willphan1712000/frontend'
import { tableList } from './TableOfContents'

const slider = `import { RangeSlider } from '@willphan1712000/frontend';

  const RangerSlider = () => {
    const [value, setValue] = useState<number>("50")
    return <RangeSlider
              min="10"
              max="400" 
              onChange={setValue}
              value={value}
              color='#673ab7'
              width='200'
            />
  }`

const RangeSliderComponent = () => {
    const [value, setValue] = useState<string>("50")
  return (
    <div>
        <h1 id={tableList[1].id} className='text-2xl'>{tableList[1].table.name}</h1>
        <Code filename='RangerSlider.tsx' code={slider}/>
        <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
            <RangeSlider
              min="10"
              max="400" 
              onChange={setValue}
              value={value}
              color='#673ab7'
              width='200'
            />
        </div>
        <br></br>
    </div>
  )
}

export default RangeSliderComponent
