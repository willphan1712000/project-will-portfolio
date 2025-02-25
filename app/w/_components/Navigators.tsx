import Button from '@/Web-Development/components/button/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navigators = () => {
  const route = useRouter()

  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-5 my-10'>
      <Button content='UI components' type='gradient' onClick={() => route.push('/w/ui')}/>
      <Button content='API' type='solid' onClick={() => route.push('/w/api')}/>
      <Button content='Async State Management' type='gradient' onClick={() => route.push('/w/async')}/>
      <Button content='Usability' type='solid' onClick={() => route.push('/w/u')}/>
    </div>
  )
}

export default Navigators
