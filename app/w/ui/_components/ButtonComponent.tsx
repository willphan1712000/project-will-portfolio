'use client'

import { Button, UploadFile } from '@willphan1712000/w'
import { useEffect } from 'react'
import Code from '../../_components/Code'

const solid = `import { Button } from '@willphan1712000/w'

  const SolidButton = () => {
    return <Button content='Click me' type='solid'/>
  }`
const gradient = `import { Button } from '@willphan1712000/w'

  const GradientButton = () => {
    return <Button content='Click me' type='gradient'/>
  }`
const upload = `import { Button, UploadFile } from '@willphan1712000/w'
  import { useEffect } from 'react'

  useEffect(() => {
    new UploadFile(document.getElementById("uploadButtonDemo") as HTMLElement, ({e, error}: {e: string, error: boolean}) => {
      console.log(e)
    }, 'image/*')
  }, [])

  const Upload = () => {
    return <Button content='Upload' id="uploadButtonDemo"/>
  }`

const ButtonComponent = () => {
  useEffect(() => {
    console.log("run")
    const uploadFile = new UploadFile(document.getElementById("uploadButtonDemo") as HTMLElement, ({e, error}: {e: string, error: boolean}) => {
      console.log(e)
      console.log(error)
    }, 'image/*')

    return () => {
      uploadFile.cleanup()
    }
  }, [])
  return (
    <>
        <h1 id="select" className='text-2xl'>Button UI component</h1>
        <Code filename='SolidButton.tsx' code={solid}/>
        <div className='flex justify-center'>
            <Button content='Click me' type='solid'/>
        </div>
        <Code filename='GradientButton.tsx' code={gradient}/>
        <div className='flex justify-center'>
            <Button content='Click me' type='gradient' />
        </div>
        <Code filename='Upload.tsx' code={upload}/>
        <div className='flex justify-center'>
            <Button content='Upload' id="uploadButtonDemo"/>
        </div>
        <br></br>
    </>
  )
}

export default ButtonComponent
