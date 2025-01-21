import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HashLoader } from "react-spinners"

interface Props {
    link: string,
    src: string,
    title: string,
    des: string
}

const CardElement = ({link, src, title, des} : Props) => {
    const shadow = `rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`
    const [loading, setLoading] = useState<boolean>(true)

  return (
    <Link href={link} target="_blank">
        <div className="rounded-[2rem] flex flex-col overflow-hidden flex-shrink-0 max-w-[20rem] w-[20rem] h-[30rem] duration-200 transition-transform hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer" style={{boxShadow: shadow}}>
            <div className="h-[70%] flex justify-center items-center relative">
              {loading && <HashLoader className="!absolute top-4 left-4"/>}
              <Image loading="lazy" draggable="false" className="size-full object-cover duration-200 transition-opacity opacity-0" width="1000" height="1000" src={src} alt="" onLoad={img => {
                img.currentTarget.classList.remove("opacity-0")
                setLoading(false)
              }}/>
            </div>
            <div className="text-center h-[30%] flex justify-center items-center flex-col p-4 break-words overflow-y-auto overflow-x-hidden">
              <p className="text-[1.3rem]">{title}</p>
              <p className=" text-[1.1rem]">{des}</p>
            </div>
        </div>
    </Link>
  )
}

export default CardElement
