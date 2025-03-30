'use client'

import styles from '../_components/style.module.css'
import ButtonComponent from './_components/ButtonComponent'
import MultiEditLinkComponent from './_components/MultiEditLinkComponent'
import RangeSliderComponent from './_components/RangeSliderComponent'
import SelectComponent from './_components/SelectComponent'
import TableOfContents from './_components/TableOfContents'
import TransformComponent from './_components/TransformComponent'

const UI = () => {
  return (
    <div className='flex gap-2 w-full flex-row'>
      <div className='lg:w-[80%] w-full'>
        <h1 className={styles.text}>UI Components</h1>
        <SelectComponent />
        <ButtonComponent />
        <RangeSliderComponent />
        <TransformComponent />
        <MultiEditLinkComponent />
      </div>
      <div className='hidden w-[20%] lg:block'>
        <TableOfContents />
      </div>
    </div>
  )
}

export default UI
