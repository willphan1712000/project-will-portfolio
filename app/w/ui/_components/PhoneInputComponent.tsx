'use client'

import { PhoneInput } from '@willphan1712000/frontend'
import { useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

const code = `import { PhoneInput } from '@willphan1712000/frontend';
import { useState } from 'react';

const PhoneInputExample = () => {
  // Output follows the E.164 standard, e.g. +14045551234
  const [phone, setPhone] = useState<string>('')

  return (
    <PhoneInput
      value={phone}
      setValue={(v) => setPhone(v ?? '')}
      defaultCountryCode="+1"
      label="Phone Number"
      description="Choose a country code, then enter your phone number"
    />
  )
}`

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState<string>('')

  return (
    <div>
      <SectionHeading id='phoneInput' />
      <Code filename='PhoneInput.tsx' code={code} />
      <div className='text-black w-full p-[50px] rounded-xl bg-white flex flex-col items-center gap-4 min-h-[22rem]'>
        <div className='w-[400px] max-w-full'>
          <PhoneInput
            value={phone}
            setValue={(v) => setPhone(v ?? '')}
            defaultCountryCode="+1"
            label="Phone Number"
            description="Choose a country code, then enter your phone number"
          />
        </div>
        <p className='text-sm text-gray-500'>Value: <code>{phone || '(empty)'}</code></p>
      </div>
      <br></br>
    </div>
  )
}

export default PhoneInputComponent
