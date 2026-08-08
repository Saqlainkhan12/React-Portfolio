import "./Projects.css";

import { motion } from "framer-motion";

import {

FaGithub,
FaExternalLinkAlt,
FaReact,
FaJs,
FaCss3Alt,

} from "react-icons/fa";

function Projects(){

const projects=[

{

title:"Premium Portfolio",

description:"Modern React portfolio with premium UI, Aurora background and advanced animations.",

tech:["React","JavaScript","CSS"],

github:"#",

live:"#",

},

{

title:"Weather Dashboard",

description:"Live weather application using API with responsive premium interface.",

tech:["React","JavaScript","CSS"],

github:"#",

live:"#",

},

{

title:"Task Manager",

description:"Professional task management application with modern dashboard.",

tech:["React","JavaScript","CSS"],

github:"#",

live:"#",

},

{

title:"Coming Soon",

description:"Another premium project will be added here soon.",

tech:["React","JavaScript","CSS"],

github:"#",

live:"#",

}

];

const icon=(item)=>{

if(item==="React") return <FaReact/>;

if(item==="JavaScript") return <FaJs/>;

return <FaCss3Alt/>;

};

return(

<section

className="projects"

id="projects"

>

<div className="wrapper">

<span className="section-subtitle">

PORTFOLIO

</span>

<h2 className="section-title">

Featured

<span className="text-gradient">

 Projects

</span>

</h2>

<div className="projects-grid">

{

projects.map((project,index)=>(

<motion.div

className="project-card"

key={index}

initial={{

opacity:0,

y:50

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

delay:index*.12

}}

viewport={{

once:true

}}

>

<div className="project-image">

PROJECT

</div>

<div className="project-content">

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div className="tech-list">

{

project.tech.map((tech,i)=>(

<div

className="tech"

key={i}

>

{icon(tech)}

<span>

{tech}

</span>

</div>

))

}

</div>

<div className="project-links">

<a

href={project.github}

>

<FaGithub/>

GitHub

</a>

<a

href={project.live}

>

<FaExternalLinkAlt/>

Live

</a>

</div>

</div>

</motion.div>

))

}

</div>

</div>

</section>

);

}

export default Projects;