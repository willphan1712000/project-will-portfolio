import { useIntersectionObserver } from '@willphan1712000/w'
import { useEffect } from 'react'

const tableList: {
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
    id: "button",
    table: {
      name: 'Button UI component',
      id: 'table_button'
    }
  },
  {
    id: 'range',
    table: {
      name: 'Range Slider UI component',
      id: 'table_range'
    }
  },
  {
    id: 'transform',
    table: {
      name: 'Transform UI',
      id: 'table_transform'
    }
  },
  {
    id: 'multiedit',
    table: {
      name: 'Multi Edit Link UI',
      id: 'table_multiedit'
    }
  }
] 

const TableOfContents = () => {
  useEffect(() => {
    const o = useIntersectionObserver({
      threshold: 0,
    }, (entry) => {
      const id = entry.target.getAttribute("id")
      const correspondingTable = document.getElementById(`table_${id}`)
      if(entry.isIntersecting) {
        if(correspondingTable) {
          removeAllTarget()
          correspondingTable.classList.add("target")
        }
      }
    })

    tableList.map(e => {
      o.observe(document.getElementById(e.id))
    })

    function removeAllTarget() {
      tableList.map(e => {
        document.getElementById(e.table.id)?.classList.remove("target")
      })
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
