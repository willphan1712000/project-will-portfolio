import Image from 'next/image'
import { useEffect } from 'react'
import $ from 'jquery'

export type Content = Array<{
  heading: string,
  des: string
}>

export type Pictures = string[]

interface Props {
  pictureContent: Content,
  pictures: Pictures
}

const InfoStream = ({pictureContent, pictures}: Props) => {
  useEffect(() => {
    /**
     * 
     * @returns [distance to the top, how far the top of the screen is scrolled in %]
     */
    function getScrollVar() {
        const htmlElement = document.documentElement
        const percentage = htmlElement.scrollTop/htmlElement.clientHeight
        htmlElement.style.setProperty("--scroll", percentage.toString())
        return [htmlElement.scrollTop, percentage]
    }

    let scroll = document.documentElement.scrollTop
    let transform = 0
    // Configure Scroll function
    document.addEventListener("scroll", function() {
        const width = window.innerWidth
        const height = window.innerHeight
        
        const [distanceToTop, percentage] = getScrollVar()
        
        const secondTitle = document.querySelector(".title__second") as HTMLElement | undefined
        if(secondTitle) {
            console.log(secondTitle.offsetTop)
            if(distanceToTop + height >= secondTitle.offsetTop) {
                const d = distanceToTop - scroll
                transform += d
                handleSecondTitle(transform)
            }
            
            scroll = distanceToTop
    
            if(width <= 768) return
    
            if(percentage >= 3 && percentage <= 8) {
                $(".picture-section .picture-section__text .picture-section__text--section").addClass("scroll")
            } else if (percentage < 3) {
                $(".picture-section .picture-section__text .picture-section__text--section").removeClass("scroll")
            }
    
            if(percentage <= 3.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(1)").addClass("active")
            } else if (percentage >= 3.5 && percentage <= 4.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(2)").addClass("active")
            } else if (percentage >= 4.5 && percentage <= 5.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(3)").addClass("active")
            } else if (percentage >= 5.5 && percentage <= 6.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(4)").addClass("active")
            } else if (percentage >= 6.5 && percentage <= 7.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(5)").addClass("active")
            } else if (percentage >= 7.5) {
                $(".picture-section__pics--section").removeClass("active")
                $(".picture-section__pics--section:nth-child(6)").addClass("active")
            }
        }
    })

    function handleSecondTitle(transform: number): void {
        const up = document.querySelector(".title__second .up") as HTMLElement
        const down = document.querySelector(".title__second .down") as HTMLElement

        up.style.transform = `translateX(${transform * 0.9}px)`
        down.style.transform = `translateX(${-transform * 0.9}px)`
    }
  }, [])
  
  return (
    <div className="picture-section md:!flex-row md:!sticky md:!h-screen">
        <div className="picture-section__text md:!overflow-hidden">
          {pictureContent.map(item => (
              <div key={item.heading} className="picture-section__text--section md:!h-full">
                <div className="heading"><h1 className='text-[30px]'>{item.heading}</h1></div>
                <div className="des"><h3 className='text-[22px]'>{item.des}</h3></div>
              </div>
          ))}
        </div>
        <div className="picture-section__pics md:!flex rounded-[3rem] border-[1px] border-black overflow-hidden">
          {pictures.map(item => (
            <div key={item} className="picture-section__pics--section active">
              <Image draggable="false" src={item} alt="will_picture" width="1000" height="1000" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default InfoStream
