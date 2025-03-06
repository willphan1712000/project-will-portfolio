import { Button } from '@willphan1712000/w';
import { useRouter } from 'next/navigation';

const Navigators = () => {
  const route = useRouter()

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10'>
        <Button content='UI components' type='gradient' onClick={() => route.push('/w/ui')}/>
        <Button content='API' type='solid' onClick={() => route.push('/w/api')}/>
        <Button content='Async State Management' type='gradient' onClick={() => route.push('/w/async')}/>
        <Button content='Usability' type='solid' onClick={() => route.push('/w/u')}/>
      </div>
    </>
  )
}

export default Navigators
