'use client'

import { useState } from 'react'
import Code from '../../_components/Code'
import { RangeSlider } from '@willphan1712000/frontend'
import { tableList } from './TableOfContents'

const slider = `import { RangeSlider } from '@willphan1712000/frontend';
import { useState } from 'react';

const RangeSliderExample = () => {
  const [value, setValue] = useState<string>("50")

  return (
    <RangeSlider
      range={{ min: "10", max: "400" }}
      setValue={setValue}
      value={value}
      description="Range Slider Component"
      styling={{
        primaryColor: '#673ab7',
        width: '200'
      }}
    />
  )
}`

const RangeSliderComponent = () => {
    const [value, setValue] = useState<string>("50")
  return (
    <div>
        <h1 id={tableList[1].id} className='text-2xl'>{tableList[1].table.name}</h1>
        <Code filename='RangeSlider.tsx' code={slider}/>
        <div className='text-black w-full p-[50px] rounded-xl bg-white flex justify-center'>
            <RangeSlider
              range={{ min: "10", max: "400" }}
              setValue={(v) => setValue(v ?? '50')}
              value={value}
              description="Range Slider Component"
              styling={{
                primaryColor: '#673ab7',
                width: '200'
              }}
            />
        </div>
        <br></br>
    </div>
  )
}

export default RangeSliderComponent
