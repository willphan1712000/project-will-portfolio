import { useEffect } from 'react'

export const tableList: {
  id: string,
  table: {
    name: string,
    id: string
  }
}[] = [
  { id: 'select', table: { name: 'Option Select UI component', id: 'table_select' } },
  { id: 'rangeSlider', table: { name: 'Range Slider UI component', id: 'table_rangeSlider' } },
  { id: 'colorPickerSlider', table: { name: 'Color Picker Slider UI component', id: 'table_colorPickerSlider' } },
  { id: 'optionSlider', table: { name: 'Option Slider UI component', id: 'table_optionSlider' } },
  { id: 'inputGoogle', table: { name: 'Input Google UI component', id: 'table_inputGoogle' } },
  { id: 'dynamicList', table: { name: 'Dynamic List UI component', id: 'table_dynamicList' } },
  { id: 'textArea', table: { name: 'Text Area UI component', id: 'table_textArea' } },
  { id: 'phoneInput', table: { name: 'Phone Input UI component', id: 'table_phoneInput' } },
  { id: 'fileDropZone', table: { name: 'File Drop Zone UI component', id: 'table_fileDropZone' } },
  { id: 'inputFile', table: { name: 'Input File UI component', id: 'table_inputFile' } },
  { id: 'uploadImage', table: { name: 'Upload Image & Image UI component', id: 'table_uploadImage' } },
  { id: 'avatar', table: { name: 'Avatar UI component', id: 'table_avatar' } },
  { id: 'imageEditor', table: { name: 'Image Editor UI component', id: 'table_imageEditor' } },
  { id: 'button', table: { name: 'Button UI component', id: 'table_button' } },
  { id: 'modernButton', table: { name: 'Modern Button UI component', id: 'table_modernButton' } },
  { id: 'info', table: { name: 'Info UI component', id: 'table_info' } },
  { id: 'overlay', table: { name: 'Overlay UI component', id: 'table_overlay' } },
  { id: 'spinner', table: { name: 'Spinner UI component', id: 'table_spinner' } },
  { id: 'calendar', table: { name: 'Calendar UI component', id: 'table_calendar' } },
  { id: 'availabilitySchedule', table: { name: 'Availability Schedule UI component', id: 'table_availabilitySchedule' } },
]

/**
 * Look up a section by id so demos don't depend on their position in tableList
 */
export function getSection(id: string) {
  const section = tableList.find(e => e.id === id)
  if (!section) throw new Error(`Section ${id} is not registered in tableList`)
  return section
}

const TableOfContents = () => {
  useEffect(() => {
    function removeAllTarget() {
      tableList.forEach(e => {
        document.getElementById(e.table.id)?.classList.remove("target")
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id")
        const correspondingTable = document.getElementById(`table_${id}`)
        if (entry.isIntersecting) {
          if (correspondingTable) {
            removeAllTarget()
            correspondingTable.classList.add("target")
          }
        }
      })
    }, {
      threshold: 0,
    })

    tableList.forEach(e => {
      const el = document.getElementById(e.id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='sticky top-[5rem] max-h-[calc(100vh-6rem)] overflow-y-auto'>
        <h1 className='text-[2rem]'>Contents</h1>
        <div className='px-3 py-1 flex gap-2 flex-col'>
          {tableList.map(listElement => (
            <a
              key={listElement.id}
              id={listElement.table.id}
              href={`#${listElement.id}`}
              className='hover:text-[#C850C0] transition-colors'
              onClick={e => {
                e.preventDefault()
                document.getElementById(listElement.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >{listElement.table.name}</a>
          ))}
        </div>
    </div>
  )
}

export default TableOfContents
