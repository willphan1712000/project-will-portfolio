class SystemConfig {
    version: number;

    constructor() {
        this.version = 0;
    }

    css() {
        return {
            universal: `/css/universal.css?v=${this.version}`,
            homepage: `/css/homepage.css?v=${this.version}`
        };
    }

    assets() {
        return {
            logo: `/assets/logo.png?v=${this.version}`,
            background: `/assets/self.png?v=${this.version}`
        };
    }

    navBar() {
        return [
            {
                1: `/assets/subpage/blog.html?v=${this.version}`,
                2: `/assets/subpage/travel.html?v=${this.version}`,
                3: `/assets/subpage/contactme.html?v=${this.version}`,
            },
            {
                1: "Blog",
                2: "Travel Collection",
                3: "Contact Me"
            }
        ];
    }

    title() {
        return [
            "My",
            "Portfolio",
            "I am Will - I am computer science guy"
        ];
    }

    introduction() {
        return {
            img: `/assets/self1.jpg?v=${this.version}`,
            heading: "I graduated from Kennesaw State University",
            des: "I am seeking happiness within myself. Then I will have power to explore the world, I have gone through so many tough situations that I want to share right here. Due to hard working, I am able to stand up to continue my journey in the United States, and I am who I am now. Let's begin"
        };
    }

    titleSecond() {
        return {
            up: "My Journey",
            down: "begins"
        };
    }

    pictureSection() {
        return [
            [
                {
                    heading: "I first got in University of Technology in Vietnam - 2018",
                    des: "I got third rank in the National Physics Competition and I was directly accepted by the University of Technology in Vietnam. I started my journey as an Aerospace Engineering Student. I had some awesome friends back then, and We had a chance to experience some wonderful things in Ho Chi Minh city."
                },
                {
                    heading: "I went to the Philippines - 2019",
                    des: "I had been living in the Philippines for 6 monthsto study English. This was the first time I was apart from my home country to achieve I could not have achieved before. I was so happy to have some wonderful friends here, and wholehearted teachers. After half of 2019, I got 6.0 for the IELTS exam. This got me to a journey to the United States."
                },
                {
                    heading: "Go back to Vietnam - 2020",
                    des: "This was a year when we expericend a tough situation - COVID 19. I went back to Vietnam to continue my study in the University of Technology. I was attending a group project for CFD (Computational Fluid Dynamics). I learned a lot and made friends a lot. Furthermore, I also prepared for my journey to the United States. I was exhausted for the Visa interview. I used to drink a bottle of beer with some food alone to forget about the pain I was having back then. I was so confused about my future that I did not know where I should go for my life. Because of my mother, I stood up and it was the only motivation for me to pass the Visa Interview. I was accepted by Angelo State University, located in San Angelo city in Texas, and was ready for the journey to the United States."
                },
                {
                    heading: "Welcome to the United States of America - January 2021",
                    des: "I had chance to fight all the way from Vietnam to the United States. I took roughly a day to complete the flight. I brought a lot of food because I did not know how to purchase things in the US. I used to be depressed due to this completely new environment. Everything was strange and every people was something I used to fear about. I had a chance to immerse myself in the country where I should speak English, a language I used to hate before. After 3 months living here, I met a lot of Vietnamese friends, then I decided to move in with them."
                },
                {
                    heading: "The state of Georgia - May 2021",
                    des: "This was the first time I went to Georgia for the first time to visit my friends. I was having fun time with them. I went to Halen to play tubing, I went to some local restaurants to try tremendous food. I got familiar to this place in order to get prepared to move to this state."
                },
                {
                    heading: "Move to Georgia - December 2021",
                    des: "Finally, I transferred from Angelo State University in Texas to Kennesaw State University in Georgia. My journey continues here."
                }
            ],
            [
                `/assets/brief/1.jpg?v=${this.version}`,
                `/assets/brief/2.jpg?v=${this.version}`,
                `/assets/brief/3.jpg?v=${this.version}`,
                `/assets/brief/4.jpg?v=${this.version}`,
                `/assets/brief/5.jpg?v=${this.version}`,
                `/assets/brief/6.jpg?v=${this.version}`
            ]
        ];
    }

    footer() {
        return [
            [
                `/assets/logo.png?v=${this.version}`
            ],
            [
                '<a href="https://www.facebook.com/phanthanhnha123200" target="_blank"><i class="fa-brands fa-facebook"></i></a>',
                '<a href="https://www.instagram.com/phanthanhnha_0117" target="_blank"><i class="fa-brands fa-instagram"></i></a>',
                '<a href="https://www.youtube.com/channel/UCzDvuSIvBA05Hf9snlmS3TA" target="_blank"><i class="fa-brands fa-youtube"></i></a>',
                '<a href="https://www.linkedin.com/in/thanh-nha-will-phan-53715313a" target="_blank"><i class="fa-brands fa-linkedin"></i></a>',
                '<a href="https://github.com/willphan1712000" target="_blank"><i class="fa-brands fa-github"></i></a>',
            ]
        ];
    }
}

function systemConfig() {
    return new SystemConfig()
}

function createLink(rel:string, type:string, href:string) {
    let linkElement = document.createElement("link")
    linkElement.rel = rel
    linkElement.type = type
    linkElement.href = href
    document.head.appendChild(linkElement)
}

function getScrollVar() {
    const htmlElement = document.documentElement
    const percentage = htmlElement.scrollTop/htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll", percentage.toString())
    // return parseInt(percentage)
    return percentage
}

export { systemConfig, createLink, getScrollVar }