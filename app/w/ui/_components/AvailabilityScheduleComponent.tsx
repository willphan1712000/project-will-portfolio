'use client'

import { AvailabilityScheduleGoogle } from '@willphan1712000/frontend'
import { ComponentProps, useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

type ScheduleData = NonNullable<ComponentProps<typeof AvailabilityScheduleGoogle>['value']>

const workday = (day: string) => ({
  day,
  isAvailable: true,
  slots: [{ startTime: '9:00am', endTime: '5:00pm', breakTime: '15', note: '', allDay: false }]
})

const dayOff = (day: string) => ({ day, isAvailable: false, slots: [] })

const DEFAULT_SCHEDULE: ScheduleData['schedule'] = [
  dayOff('Sunday'),
  workday('Monday'),
  workday('Tuesday'),
  workday('Wednesday'),
  workday('Thursday'),
  workday('Friday'),
  dayOff('Saturday'),
]

const code = `import { AvailabilityScheduleGoogle } from '@willphan1712000/frontend';
import { useState } from 'react';

const workday = (day: string) => ({
  day,
  isAvailable: true,
  slots: [{ startTime: '9:00am', endTime: '5:00pm', breakTime: '15', note: '', allDay: false }]
})
const dayOff = (day: string) => ({ day, isAvailable: false, slots: [] })

const DEFAULT_SCHEDULE = [
  dayOff('Sunday'), workday('Monday'), workday('Tuesday'), workday('Wednesday'),
  workday('Thursday'), workday('Friday'), dayOff('Saturday'),
]

const AvailabilityScheduleExample = () => {
  // Renders nothing unless both value and setValue are provided
  const [schedule, setSchedule] = useState({
    timezone: 'America/New_York',
    schedule: DEFAULT_SCHEDULE,
    specificDate: [],
    repeatUntil: '',
  })

  return (
    <AvailabilityScheduleGoogle
      value={schedule}
      setValue={(v) => v && setSchedule(v)}
    />
  )
}`

const AvailabilityScheduleComponent = () => {
  const [schedule, setSchedule] = useState<ScheduleData>({
    timezone: 'America/New_York',
    schedule: DEFAULT_SCHEDULE,
    specificDate: [],
    repeatUntil: '',
  })

  return (
    <div>
      <SectionHeading id='availabilitySchedule' />
      <Code filename='AvailabilityScheduleGoogle.tsx' code={code} />
      <div className='text-black w-full p-5 rounded-xl bg-white overflow-x-auto'>
        <AvailabilityScheduleGoogle
          value={schedule}
          setValue={(v) => v && setSchedule(v)}
        />
      </div>
      <br></br>
    </div>
  )
}

export default AvailabilityScheduleComponent
