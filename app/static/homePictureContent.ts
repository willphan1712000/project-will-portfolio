import { Content } from "../components/PictureSection"

const homePictureContent: Content = [
        {
            heading: "HTML - CSS - Javascript",
            des: "I started with the base of web development by learning HTML, CSS, and Javascript. I first created a TV web app that purely used such technology, yet, I came across some difficulties associated with the scalability of the application, due to my limited knowledge in scaling and using other types of technology. Nonetheless, this helps me understand the fundamentals of web development, which makes me feel more comfortable taking my skills to the next level."
        },
        {
            heading: "Design Pattern - OOP",
            des: "I took a course in Design Pattern that made me rethink about code organization using Object Oriented approach to isolate each code module into objects, and each object handles just one task called Single Responsibility Principle. Additionally, the art of using OOP helps me extend the application without having to modify too much on one object (Open-Closed Principle), so I can add more features by literally adding more objects to the app using Design Pattern techniques that I learned from the course. This  brought my knowledge in backend development? to the next level."
        },
        {
            heading: "Tailwind CSS",
            des: "I used to have separate CSS files attached to corresponding HTML files. When an app got more complex, I was out of control over my styling. In addition, I encountered a problem in which my styling classes overlap over each other, making me feel frustrated to debug. Then, Tailwind CSS came into rescue, providing a way to make a global scope for every CSS class for the entire application."
        },
        {
            heading: "TypeScript",
            des: "During my time of learning frontend development using Javascript, I found things messed up when dealing with variable types and methods for each object. I did not know what type of variable I was using or what methods a document object had. Typescript had come to the rescue, where I got to learn Typescript to stay more disciplined with the type safe feature that comes with Typescript, making my app more robust and maintainable."
        },
        {
            heading: "Reactjs and Nextjs",
            des: "As I found it difficult to extend the web frontend using just HTML and Javascript. I learned “React” as a component-based approach to level up my frontend side application. Nextjs is a meta framework that is built on top of React, adding server-side rendering more features to the framework to help developers make fast and robust web applications."
        },
        {
            heading: "Cloud Hosting Provider",
            des: "Finally, I learned “Docker” to containerize my applications so I can deploy it anywhere and at any time."
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

export {homePictureContent, pictures}