import { $$$ } from '@willphan1712000/w'
import axios from 'axios'
import { ReactNode, useState } from 'react'

interface Props {
    edit: boolean,
    children: ReactNode,
    api?: string,
    name?: string,
    value?: string
}

const EditLink = ({edit, api, name, children, value}: Props) => {
  const [url, setUrl] = useState<string>(value ?? '')
  const [message, setMessage] = useState<string>('Submit')
  
  async function handleSubmit() {
      setMessage('posting...')
      if (api) {
        const [error,] = await $$$().wPromise().Try(axios.put(api, { url }))
  
        if (error) {
          console.log(error)
          setMessage("failed")
        } else {
          setMessage("posted")
        }
  
        setTimeout(() => {
          setMessage("Submit")
        }, 1000)
      }
  }

  return (
    <div className='relative'>
        {edit && (<div className='flex flex-row items-center justify-center p-2 text-black border-black border-[2px] rounded-2xl bg-white gap-2 text-[1rem] relative'>
            <span className='bg-white absolute top-[-30%] left-[10%] rounded-lg border-black border-[1px] px-1'>{name}</span>
            <input type="text" className='focus:border-none focus:shadow-none rounded-md p-1 w-full' value={url} onChange={e => setUrl(e.target.value)}/>
            <button onClick={handleSubmit}>{message}</button>
        </div>)}
      {!edit && children}
    </div>
  )
}

export default EditLink
