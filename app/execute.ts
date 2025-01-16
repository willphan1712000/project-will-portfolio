import $ from 'jquery';
import { getScrollVar } from "./config";

export default function homepage() {
    window.scrollTo(0, 0)
    // Add hyper reference to a tag
    // const href = config.navBar()[0] as {[key:string]: string}
    // const hrefName = config.navBar()[1] as {[key:string]: string}
    // for(const key in href) {
    //     $(".nav-bar__info ul").append(`
    //         <li><a href="${href[key]}">${hrefName[key]}</a></li>
    //     `)
    // }

    // Make the button able to scroll to a specific section of the page
    $(".subbackground .subbackground__goToNext").click(() => {
        const intro = document.getElementById("introduction")
        const pictureSection = document.querySelector(".picture-section")

        if(intro !== null) {
            intro.scrollIntoView({behavior: "smooth"})
        } else {
            pictureSection!.scrollIntoView({behavior: "smooth"})
        }
    })

    // Add link css to the head
    // createLink('script', 'text/javascript', 'https://kit.fontawesome.com/960d33c629.js')
    // createLink('stylesheet', 'text/css', config.css().homepage)

    // Add Images
    // $("#nav-bar .nav-bar__logo img").attr("src", config.assets().logo)
    // $(".background img").attr("src", config.assets().background)

    // Add title
    // const titleArr = config.title()
    // for(let i = 0; i < titleArr.length; i++) {
    //     $(".title").append(`<h1>${titleArr[i]}</h1>`)
    // }

    let scroll = document.documentElement.scrollTop
    let transform = 0
    // Configure Scroll function
    $(window).on("scroll", function() {
        const width = window.innerWidth
        const height = window.innerHeight
        
        const [distanceToTop, percentage] = getScrollVar()
        
        const secondTitle = document.querySelector(".title__second") as HTMLElement
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
    })

    function handleSecondTitle(transform: number): void {
        const up = document.querySelector(".title__second .up") as HTMLElement
        const down = document.querySelector(".title__second .down") as HTMLElement

        up.style.transform = `translateX(${transform * 0.9}px)`
        down.style.transform = `translateX(${-transform * 0.9}px)`
    }

    // Introduction Section
    // $("#introduction img").attr("src", config.introduction().img)
    // $("#introduction .text .heading").html(config.introduction().heading)
    // $("#introduction .text .des").html(config.introduction().des)

    // Add the second title
    // $(".title__second .up").html(config.titleSecond().up)
    // $(".title__second .down").html(config.titleSecond().down)

    // Add picture information to picture section
    // const pictureSection = config.pictureSection()[0] as any
    // const pictureSectionPics = config.pictureSection()[1]
    // for(let i = 0; i < pictureSection.length; i++) {
    //     $(".picture-section .picture-section__text").append(`<div class="picture-section__text--section">
    //     <div class="heading"><h1>${pictureSection[i].heading}</h1></div>
    //     <div class="des"><h3>${pictureSection[i].des}</h3></div>
    //     </div>`)
    // }
    // for(let i = 0; i < pictureSection.length; i++) {
    //     let active = (i === 0) ? "active" : ""
    //     $(".picture-section .picture-section__pics").append(`<div class="picture-section__pics--section ${active}">
    //     <img draggable="false" src="${pictureSectionPics[i]}" alt="">
    //     </div>`)
    // }

    // Set up footer
    // const footer = config.footer()
    // const icon = footer[0]
    // const social = footer[1]
    // for(let i = 0; i < icon.length; i++) {
    //     $("#footer .logo").append(`<img draggable="false" src="${icon[i]}">`)
    // }
    // for(let j = 0; j < social.length; j++) {
    //     $("#footer .social").append(`${social[j]}`)
    // }
}

