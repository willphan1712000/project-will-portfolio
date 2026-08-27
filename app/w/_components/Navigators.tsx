import { Button } from '@willphan1712000/frontend';
import { useRouter } from 'next/navigation';

const Navigators = () => {
  const route = useRouter()

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10'>
        <Button content='UI components' buttonType='gradient' onClick={() => {
            route.push('/w/ui')
            route.refresh()
          }}/>
        <Button content='API' buttonType='solid' onClick={() => {
            route.push('/w/api')
            route.refresh()
          }}/>
        <Button content='Async State Management' buttonType='gradient' onClick={() => {
            route.push('/w/async')
            route.refresh()
          }}/>
        <Button content='Usability' buttonType='solid' onClick={() => {
            route.push('/w/u')
            route.refresh()
          }}/>
      </div>
    </>
  )
}

export default Navigators
