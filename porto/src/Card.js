import './App.css';

const projects = [
    {
        title: "GoVege",
        desc: "This project was built using ASP .NET, C#, and Microsoft SQL using Visual Studio 2019. It was built by a team of 4 for the Software Engineering course. The app provides a service for customers, to order vegan and vegetarian food, view promos, and manage their account. It also provides a feature for administrators to edit the app's data.",
        image: "project-1",
        link: "https://github.com/mattsmatt/GoVege"
    },
    {
        title: "KpopZtation",
        desc: "This was my first ASP .NET, Microsoft SQL, and C# project. I built this in a group of 4 for the Pattern Software Design course. Utilizing Domain Driven Design (DDD), this program was created to be a K-Pop album store where customers and administrators can access. Whereas customers can use it to buy their preferred albums, admins can edit album and artist details and manage all customer accounts.",
        image: "project-2",
        link: "https://github.com/mattsmatt/Kpopztation"
    },
    {
        title: "Renture",
        desc: "This was my first C project. I built this in a group of 6 for an Algorithm Bootcamp. This program is a car rental service, where customers can rent their selected car, input feedback, and display all cars provided by Renture.",
        image: "project-3",
        link: "https://github.com/mattsmatt/Renture"
    },
    {
        title: "Sunbic University",
        desc: "Sunbic University is a project done by myself personally for a Human Computer Interaction task. This web application was only built using HTML5 and CSS. The website provides info about Sunbic's courses, articles, as well as a login page among others.",
        image: "project-4",
        link: "https://github.com/mattsmatt/Sunbic-University"
    },
    {
        title: "Tanaka Guitar",
        desc: "This project was done for my Human Computer Interaction course in a group of 2. This project was aimed to provide a platform for a guitar shop. It was built using HTML5, CSS, and JavaScript. We also used Figma for designing the UI. By working on this project, I learnt quite a lot about JavaScript and Figma.",
        image: "project-5",
        link: "https://github.com/mattsmatt/Tanaka-Guitar"
    },
    {
        title: "Traffic Estimator",
        desc: "This project was done for my Research Methodology in Computer Science course in a group of 3. This project was aimed to provide a vehicle count and average vehicle speed estimate. It was built using Python and the YOLOv7 and SORT algorithm. By working on this project, I became more educated on how computer vision, object detection and tracking works.",
        image: "project-6",
        link: "https://drive.google.com/drive/folders/1NqJjd7hYxPHedrzMCrc7NI8tF455V8wQ?usp=sharing"
    },
]

function Card(){
    return(
        projects.map((project) => 
        (<a href={project.link} className='w-[45%] my-5 shadow-inner rounded-2xl px-2 py-5 card'>
            <div>
        <img className='h-[20rem] w-full object-contain' src={require('./assets/' + project.image + '.png')} alt="Project Image" />
        <div className='text-[1.5rem] font-semibold my-2'>{project.title}</div>
        <div className='px-2 text-[0.9rem] font-light text-justify'>{project.desc}</div>
    </div>
        </a>
        )
    ));
}

export default Card