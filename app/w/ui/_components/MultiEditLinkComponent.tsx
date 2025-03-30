import { MultiEditLink } from '@willphan1712000/w'
import { useState } from 'react'
import Code from '../../_components/Code'

const slider = `
    import { MultiEditLink } from '@willphan1712000/w'
    import { useState } from 'react'
    const MultiEditLinkComponent = () => {
        const [values, setValues] = useState<{ name: string, value: string }[]>([
            {
                name: 'Facebook',
                value: 'phanthanhnha123200'
            }, {
                name: 'Instagram',
                value: 'phanthanhnha_0117'
            }, {
                name: 'Kennesaw',
                value: 'Computer Science'
            }
        ])
        return <MultiEditLink values={values} setValues={setValues} handleSubmit={() => alert('Submitted')}/>
    }
`

const MultiEditLinkComponent = () => {
    const [values, setValues] = useState<{
        name: string,
        value: string
    }[]>([
        {
            name: 'Facebook',
            value: 'phanthanhnha123200'
        }, {
            name: 'Instagram',
            value: 'phanthanhnha_0117'
        }, {
            name: 'Kennesaw',
            value: 'Computer Science'
        }
    ])
    return (
      <div>
          <h1 id="multiedit" className='text-2xl'>Multi Edit Link UI component</h1>
          <Code filename='MultiEditLink.tsx' code={slider}/>
          <div className='bg-white p-5 rounded-lg'>
              <MultiEditLink values={values} setValues={setValues} handleSubmit={() => alert('Submitted')}/>
          </div>
          <br></br>
      </div>
    )
}

export default MultiEditLinkComponent
