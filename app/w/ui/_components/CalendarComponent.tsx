'use client'

import { Calendar } from '@willphan1712000/frontend'
import { ComponentProps, useEffect, useState } from 'react'
import Code from '../../_components/Code'
import SectionHeading from './SectionHeading'

type Event = NonNullable<ComponentProps<typeof Calendar<{ room: string }>>['initialEvents']>[number]

/**
 * Build an ISO date string relative to today so the demo always has events in the current view
 */
function dayFromToday(offset: number, hour: number) {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  date.setHours(hour, 0, 0, 0)
  return date.toISOString()
}

const buildEvents = (): Event[] => [
  { dateTime: dayFromToday(0, 9), staff: 'Will', name: 'Code review', status: 'CONFIRM', data: { room: 'A1' } },
  { dateTime: dayFromToday(0, 13), staff: 'Nha', name: 'Design sync', status: 'CONFIRM', data: { room: 'B2' } },
  { dateTime: dayFromToday(1, 10), staff: 'Will', name: 'Client call', status: 'CANCELLED', data: { room: 'Zoom' } },
  { dateTime: dayFromToday(3, 15), staff: 'Nha', name: 'Deploy v2.1', status: 'CONFIRM', data: { room: 'A1' } },
  { dateTime: dayFromToday(-2, 11), staff: 'Will', name: 'Sprint planning', status: 'CONFIRM', data: { room: 'B2' } },
]

const EventPopup = ({ event, onClose }: { event: Event, onClose: () => void }) => {
  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/50' onClick={onClose}>
      <div className='bg-white text-black rounded-xl p-6 min-w-[260px]' onClick={e => e.stopPropagation()}>
        <h3 className='text-xl font-bold'>{event.name}</h3>
        <p>{new Date(event.dateTime).toLocaleString()}</p>
        <p>Staff: {event.staff}</p>
        <p>Room: {event.data.room}</p>
        <p>Status: {event.status}</p>
        <button className='mt-4 rounded-lg border border-gray-300 px-4 py-1 hover:bg-gray-100' onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

const code = `import { Calendar } from '@willphan1712000/frontend';

const events = [
  { dateTime: '2026-10-22T09:00:00', staff: 'Will', name: 'Code review', status: 'CONFIRM', data: { room: 'A1' } },
  { dateTime: '2026-10-23T10:00:00', staff: 'Will', name: 'Client call', status: 'CANCELLED', data: { room: 'Zoom' } },
  // ...
]

// Rendered when an event is clicked
const EventPopup = ({ event, onClose }) => (
  <div onClick={onClose}>
    <h3>{event.name}</h3>
    <p>Room: {event.data.room}</p>
  </div>
)

const CalendarExample = () => {
  return (
    <Calendar
      initialEvents={events}
      PopupComponent={EventPopup}
      staff={['Will', 'Nha']} // columns in Day view
      options={{
        themeColor: '#673ab7',
        backgroundColor: '#ffffff',
        textColor: '#000000'
      }}
    />
  )
}`

const CalendarComponent = () => {
  // Events are relative to today, so build them on the client only (the page is prerendered at build time)
  const [events, setEvents] = useState<Event[] | null>(null)
  useEffect(() => setEvents(buildEvents()), [])

  return (
    <div>
      <SectionHeading id='calendar' />
      <Code filename='Calendar.tsx' code={code} />
      <div className='text-black w-full p-5 rounded-xl bg-white overflow-x-auto min-h-[30rem]'>
        {events && <Calendar
          initialEvents={events}
          PopupComponent={EventPopup}
          staff={['Will', 'Nha']}
          options={{
            themeColor: '#673ab7',
            backgroundColor: '#ffffff',
            textColor: '#000000'
          }}
        />}
      </div>
      <br></br>
    </div>
  )
}

export default CalendarComponent
