import { Button } from '@willphan1712000/w';
import { useRouter } from 'next/navigation';

const Navigators = () => {
  const route = useRouter()

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10'>
        <Button content='UI components' type='gradient' onClick={() => {
            route.push('/w/ui')
            route.refresh()
          }}/>
        <Button content='API' type='solid' onClick={() => {
            route.push('/w/api')
            route.refresh()
          }}/>
        <Button content='Async State Management' type='gradient' onClick={() => {
            route.push('/w/async')
            route.refresh()
          }}/>
        <Button content='Usability' type='solid' onClick={() => {
            route.push('/w/u')
            route.refresh()
          }}/>
      </div>
    </>
  )
}

export default Navigators
