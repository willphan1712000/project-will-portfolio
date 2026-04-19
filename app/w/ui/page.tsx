'use client'

import Title from '../_components/Title'
import ColorPickerSliderComponent from './_components/ColorPickerSliderComponent'
import OptionSliderComponent from './_components/OptionSliderComponent'
import RangeSliderComponent from './_components/RangeSliderComponent'
import SelectComponent from './_components/SelectComponent'
import TableOfContents from './_components/TableOfContents'

const UI = () => {
  return (
    <div className='flex gap-2 w-full flex-row'>
      <div className='lg:w-[80%] w-full'>
        <Title title='UI Components'/>
        <SelectComponent />
        <RangeSliderComponent />
        <ColorPickerSliderComponent />
        <OptionSliderComponent />
      </div>
      <div className='hidden w-[20%] lg:block'>
        <TableOfContents />
      </div>
    </div>
  )
}

export default UI
