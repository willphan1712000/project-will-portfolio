import React, { useState } from 'react'
import axios from 'axios'
import { $$$, MultiEditLink } from '@willphan1712000/w'
import { Project } from '@prisma/client'

type Value = {
    name: string,
    value: string
}

interface Props {
    projects: Project[]
}

function typeAdapter(projects: Project[]): Value[] {
    return projects.map(project => ({ name: project.name, value: project.url }))
}

function typeRestoreAdapter(values: Value[]) {
    return values.map(value => ({ name: value.name, url: value.value }))
}


const Wrapper = ({projects} : Props) => {
    const [submitLabel, setSubmitLabel] = useState<string>('Submit')
    const [values, setValues] = useState<Value[]>(typeAdapter(projects))
    const handleSubmit = async () => {
        setSubmitLabel("Posting...")
        const [error, _] = await $$$().wPromise().Try(axios.put("/api/main/project", { urlObj: typeRestoreAdapter(values) }))

        if (error) {
            console.log(error)
            setSubmitLabel("Failed")
        } else {
            setSubmitLabel("Posted")
        }
        
        setTimeout(() => {
            setSubmitLabel("Submit")
        }, 1500);
    }
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full lg:w-[50%]'>
                <MultiEditLink values={values} setValues={setValues} handleSubmit={handleSubmit} submitLabel={submitLabel} setSubmitLabel={setSubmitLabel}/>
            </div>
        </div>
    )
}

export default Wrapper
