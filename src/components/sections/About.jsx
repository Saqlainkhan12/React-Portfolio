import "./About.css";

import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaMedal,
} from "react-icons/fa";

import AnimatedText from "../ui/AnimatedText";
import GlassCard from "../ui/GlassCard";

function About() {

const cards = [

{
icon:<FaCode />,
title:"Clean Code",
text:"Scalable React architecture with reusable components, clean structure and maintainable code."
},

{
icon:<FaLaptopCode />,
title:"Modern UI",
text:"Premium interfaces using glassmorphism, gradients, responsive layouts and smooth animations."
},

{
icon:<FaRocket />,
title:"Performance",
text:"Fast loading experiences optimized for SEO, accessibility and modern browsers."
},

{
icon:<FaMedal />,
title:"Quality",
text:"Professional development focused on details, consistency and user experience."
}

];

const stats=[

{
number:"20+",
label:"Projects"
},

{
number:"2+",
label:"Years Learning"
},

{
number:"100%",
label:"Passion"
}

];

return(

<section
className="about"
id="about"
>

<div className="about-container">

<div className="about-left">

<motion.span

className="section-subtitle"

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

viewport={{
once:true
}}

>

ABOUT ME

</motion.span>

<h2 className="section-title">

<AnimatedText

text="Creating"

type="letters"

/>

<br/>

<span className="text-gradient">

<AnimatedText

text="Premium"

gradient

type="letters"

/>

</span>

<br/>

<AnimatedText

text="Web Experiences"

type="words"

/>

</h2>

<motion.p

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.2
}}

viewport={{
once:true
}}

>

I create premium React websites with modern design,
smooth animations, responsive layouts and high
performance. Every interface is crafted with attention
to detail, user experience and clean architecture.

</motion.p>

<div className="stats">
      {

        stats.map((item,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            transition={{
              delay:index*.12,
            }}

            viewport={{
              once:true,
            }}

          >

            <h3>{item.number}</h3>

            <span>{item.label}</span>

          </motion.div>

        ))

      }

    </div>

  </div>

  <div className="about-right">

    {

      cards.map((card,index)=>(

        <GlassCard

          key={index}

          className="about-card"

          delay={index*.12}

          hover

        >

          <div className="card-icon">

            {card.icon}

          </div>

          <h3>

            {card.title}

          </h3>

          <p>

            {card.text}

          </p>

        </GlassCard>

      ))

    }

  </div>

</div>

</section>

);

}

export default About;