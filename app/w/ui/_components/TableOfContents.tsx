import { useEffect } from 'react'

export const tableList: {
  id: string,
  table: {
    name: string,
    id: string
  }
}[] = [
  {
    id: "select",
    table: {
      name: 'Option Select UI component',
      id: 'table_select'
    }
  },
  {
    id: 'rangeSlider',
    table: {
      name: 'Range Slider UI component',
      id: 'table_rangeSlider'
    }
  },
  {
    id: 'colorPickerSlider',
    table: {
      name: 'Color Picker Slider UI component',
      id: 'table_colorPickerSlider'
    }
  },
  {
    id: 'optionSlider',
    table: {
      name: 'Option Slider UI component',
      id: 'table_optionSlider'
    }
  },
  {
    id: 'inputGoogle',
    table: {
      name: 'Input Google UI component',
      id: 'table_inputGoogle'
    }
  },
  {
    id: 'dynamicList',
    table: {
      name: 'Dynamic List UI component',
      id: 'table_dynamicList'
    }
  }
] 

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
    <div className='sticky top-[5rem]'>
        <h1 className='text-[2rem]'>Contents</h1>
        <div className='px-3 py-1 flex gap-2 flex-col'>
          {tableList.map(listElement => (
            <p key={listElement.id} id={listElement.table.id}>{listElement.table.name}</p>
          ))}
        </div>
    </div>
  )
}

export default TableOfContents
