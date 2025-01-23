import { Content } from "./PictureSection"

const pictureContent: Content = [
        {
            heading: "HTML - CSS - Javascript",
            des: "I started with the base of web development by learning HTML, CSS, and Javascript. I first created a TV web app that purely used these technology. I was stuck on making the application larger because of limited knowledge about scaling and using other technology. However, this helps me understand the fundamentals of web development, making me feel comfortable taking my skills to the next level."
        },
        {
            heading: "Design Pattern - OOP",
            des: "I learned a course named Design Pattern that makes me rethink about code organization using Object Oriented approach to isolate each code module into objects and each object handles just one task called Single Responsibility Principle. Moreover, the art of using OOP helps me extend the application without having to modify too much on one object (Open-Closed Principle), so I can just add more features by literally adding more objects to the app using Design Pattern techniques that I have learned from the course. This skill takes my backend skill to the next level."
        },
        {
            heading: "Tailwind CSS",
            des: "I used to have separate css files attaching to corresponding html file. When my app got more complex. I was out of control over my styling. Furthermore, I encountered a problem that my styling classes overlap over each other, making me frustrated to debug. Then Tailwind CSS came in rescue, providing a way to make a global scope for every CSS classes for the entire application."
        },
        {
            heading: "TypeScript",
            des: "During my development time on frontend using Javascript, I found it really messed up when dealing with variable types and methods for each object. I did not know what type of variable I am using or what methods a document object has. Typescript came in rescue, I learned Typescript to stay more disciplined with type safe feature that comes with Typescript, making my app more robust and maintainable."
        },
        {
            heading: "Reactjs and Nextjs",
            des: "As I found it really difficult to extend the web front end using just html, and javascript. I learned React as a component-based approach to level up my frontend side application. Nextjs is a metaframework that is built on top of React, adding server-side rendering feature and more features to the framework to help developers make fast and robust web applications."
        },
        {
            heading: "Cloud Hosting Provider",
            des: "Finally, I learned Docker to containerize my applications so I can deploy it anywhere at anytime."
        }
]

const pictures: string[] = [
    `/assets/project/1.jpg`,
    `/assets/project/2.png`,
    `/assets/project/3.png`,
    `/assets/project/4.png`,
    `/assets/project/5.jpg`,
    `/assets/project/6.jpg`
]

export {pictureContent, pictures}