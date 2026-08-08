import { motion } from "framer-motion";

function AnimatedText({

text="",

className="",

gradient=false,

delay=0,

stagger=.05,

once=true,

type="letters",

}){

const items=

type==="words"

?text.split(" ")

:text.split("");

const container={

hidden:{},

show:{

transition:{

delayChildren:delay,

staggerChildren:stagger,

},

},

};

const child={

hidden:{

opacity:0,

y:50,

filter:"blur(8px)",

},

show:{

opacity:1,

y:0,

filter:"blur(0px)",

transition:{

duration:.6,

ease:[0.22,1,0.36,1],

},

},

};

return(

<motion.span

className={`${className} ${gradient?"text-gradient":""}`}

variants={container}

initial="hidden"

whileInView="show"

viewport={{

once,

amount:.4,

}}

style={{

display:"inline-block",

overflow:"hidden",

}}

>

{

items.map((item,index)=>(

<motion.span

key={index}

variants={child}

style={{

display:"inline-block",

whiteSpace:"pre",

}}

>

{

type==="words"

?`${item} `

:item===" "

?"\u00A0"

:item

}

</motion.span>

))

}

</motion.span>

);

}

export default AnimatedText;