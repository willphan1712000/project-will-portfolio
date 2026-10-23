'use client'

import { Info } from '@willphan1712000/frontend'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { Info } from '@willphan1712000/frontend';

// Hover the icon. The popup flips when it would overflow the viewport
// Info fills its parent, so size it with a wrapper
const InfoExample = () => {
  return (
    <div style={{ width: 20, height: 20 }}>
      <Info
        message="Helpful guidance for this field."
        options={{
          color: '#ffffff',
          backgroundColor: '#1f2937'
        }}
      />
    </div>
  )
}`

const InfoComponent = () => {
  return (
    <div>
      <SectionHeading id='info' />
      <Code filename='Info.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex items-center justify-center gap-2'>
        <span>Hover the icon</span>
        <div style={{ width: 20, height: 20 }}>
          <Info
            message="Helpful guidance for this field."
            options={{
              color: '#ffffff',
              backgroundColor: '#1f2937'
            }}
          />
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default InfoComponent
