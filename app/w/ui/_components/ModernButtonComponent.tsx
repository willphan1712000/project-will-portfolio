'use client'

import { ModernButton } from '@willphan1712000/frontend'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { ModernButton } from '@willphan1712000/frontend';

// ModernButton wraps an <a> tag, so it accepts href, target, ...
const ModernButtonExample = () => {
  return (
    <>
      <ModernButton first="#9276ff" href="https://github.com/willphan1712000" target="_blank">
        Plain
      </ModernButton>
      <ModernButton first="#9276ff" hover href="https://github.com/willphan1712000" target="_blank">
        Hover effect
      </ModernButton>
      <ModernButton first="#3ea2cf" hover shadow href="https://github.com/willphan1712000" target="_blank">
        Hover + shadow
      </ModernButton>
    </>
  )
}`

const ModernButtonComponent = () => {
  return (
    <div>
      <SectionHeading id='modernButton' />
      <Code filename='ModernButton.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-wrap items-center justify-center gap-6'>
        <ModernButton first="#9276ff" href="https://github.com/willphan1712000" target="_blank">
          Plain
        </ModernButton>
        <ModernButton first="#9276ff" hover href="https://github.com/willphan1712000" target="_blank">
          Hover effect
        </ModernButton>
        <ModernButton first="#3ea2cf" hover shadow href="https://github.com/willphan1712000" target="_blank">
          Hover + shadow
        </ModernButton>
      </div>
      <br></br>
    </div>
  )
}

export default ModernButtonComponent
