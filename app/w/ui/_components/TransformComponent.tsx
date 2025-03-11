import { Transform } from '@willphan1712000/w'
import React, { useEffect, useRef } from 'react'
import Code from '../../_components/Code'
import Image from 'next/image'

// Element 1 : Image Wrapper
// Element 2 : Image Frame
// Element 3 : Image element
// Element 4 : Controller
// <div className="frame"> (2)
//     <div className="wrapper"> (1)
//          <img className="img__preview" /> (3)
//     </div>
// </div>
// <div class="controller"></div> (4)

const transform = `
    import { Transform } from '@willphan1712000/w'
    import React, { useEffect, useRef } from 'react'

    const TransformComponent = () => {
        const wrapperRef = useRef(null)
        const frameRef = useRef(null)

        useEffect(() => {
            const transform = new Transform(wrapperRef.current! as HTMLElement, frameRef.current! as HTMLElement)

            return () => {
                transform.cleanup()
            }
        }, [])

        return (
            <div className='flex justify-center'>
                <div className='frame relative w-[100%] max-w-[500px] max-h-[500px] aspect-square border-dashed border-black rounded-full border-4 p-[50px] overflow-hidden bg-white' ref={frameRef}>
                    <div className='wrapper' ref={wrapperRef}>
                        <img src="/assets/tech/ts.png" alt="transform image" />
                    </div>
                </div>
                <div className='controller'></div>
            </div>
    )
}`

const TransformComponent = () => {
    const wrapperRef = useRef(null)
    const frameRef = useRef(null)

    useEffect(() => {
        const transform = new Transform(wrapperRef.current! as HTMLElement, frameRef.current! as HTMLElement)

        return () => {
            transform.cleanup()
        }
    }, [])

  return (
    <>
        <h1 id="select" className='text-2xl'>Transfrom UI</h1>
        <Code filename='Transform.tsx' code={transform}/>
        <br></br>
        <div className=' justify-center hidden'>
            <div className='frame relative w-[100%] max-w-[500px] max-h-[500px] aspect-square border-dashed border-black rounded-full border-4 p-[50px] overflow-hidden bg-white' ref={frameRef}>
                <div className='wrapper' ref={wrapperRef}>
                    <Image src="/assets/tech/ts.png" alt="transform image" width="700" height="700"/>
                </div>
            </div>
            <div className='controller'></div>
        </div>
        <br></br>
    </>
  )
}

export default TransformComponent
