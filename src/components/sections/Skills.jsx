import "./Skills.css";

import { motion } from "framer-motion";

import {

FaReact,
FaJs,
FaHtml5,
FaCss3Alt,
FaGitAlt,
FaFigma,
FaGithub,
FaNodeJs,

} from "react-icons/fa";

function Skills(){

const skills=[

{
icon:<FaReact/>,
name:"React",
level:"95%"
},

{
icon:<FaJs/>,
name:"JavaScript",
level:"92%"
},

{
icon:<FaHtml5/>,
name:"HTML5",
level:"98%"
},

{
icon:<FaCss3Alt/>,
name:"CSS3",
level:"96%"
},

{
icon:<FaGitAlt/>,
name:"Git",
level:"88%"
},

{
icon:<FaGithub/>,
name:"GitHub",
level:"90%"
},

{
icon:<FaNodeJs/>,
name:"Node.js",
level:"80%"
},

{
icon:<FaFigma/>,
name:"Figma",
level:"85%"
}

];

return(

<section

className="skills"

id="skills"

>

<div className="wrapper">

<span className="section-subtitle">

MY SKILLS

</span>

<h2 className="section-title">

Professional

<span className="text-gradient">

 Skills

</span>

</h2>

<div className="skills-grid">

{

skills.map((skill,index)=>(

<motion.div

key={index}

className="skill-card"

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

delay:index*.08

}}

viewport={{

once:true

}}

>

<div className="skill-icon">

{skill.icon}

</div>

<h3>

{skill.name}

</h3>

<div className="skill-progress">

<div

className="skill-fill"

style={{

width:skill.level

}}

>

</div>

</div>

<span>

{skill.level}

</span>

</motion.div>

))

}

</div>

</div>

</section>

);

}

export default Skills;