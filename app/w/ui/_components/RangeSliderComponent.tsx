'use state'

import { RangeSlider } from '@willphan1712000/w'
import { useState } from 'react'
import Code from '../../_components/Code'

const slider = `import { RangeSlider } from '@willphan1712000/w'

  const RangerSlider = () => {
    const [value, setValue] = useState<number>(50)
    return <RangeSlider keyValue='slider' range={{
        min: 0,
        max: 100
    }} defaultValue={value} cb={setValue}/>
  }`

const RangeSliderComponent = () => {
    const [value, setValue] = useState<number>(50)
  return (
    <div>
        <h1 id="range" className='text-2xl'>Range Slider UI component</h1>
        <Code filename='RangerSlider.tsx' code={slider}/>
        <div>
            <RangeSlider keyValue='slider' range={{
                min: 0,
                max: 100
            }} defaultValue={value} cb={setValue}/>
        </div>
        <br></br>
    </div>
  )
}

export default RangeSliderComponent
