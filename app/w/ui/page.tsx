import styles from '../_components/style.module.css'
import ButtonComponent from './_components/ButtonComponent'
import SelectComponent from './_components/SelectComponent'
import TableOfContents from './_components/TableOfContents'

const UI = () => {
  return (
    <div className='flex gap-2 w-full flex-row'>
      <div className='w-[80%]'>
        <h1 className={styles.text}>UI Components</h1>
        <SelectComponent />
        <ButtonComponent />
      </div>
      <div className='hidden w-[20%] lg:block'>
        <TableOfContents />
      </div>
    </div>
  )
}

export default UI
