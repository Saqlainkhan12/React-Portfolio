import "./FloatingOrbs.css";

import { motion } from "framer-motion";

const ORBS = [

{
id:1,
className:"orb orb-1",
size:170,
duration:14,
delay:0,
x:40,
y:-30,
},

{
id:2,
className:"orb orb-2",
size:260,
duration:18,
delay:.8,
x:-50,
y:35,
},

{
id:3,
className:"orb orb-3",
size:120,
duration:12,
delay:1.2,
x:30,
y:-25,
},

{
id:4,
className:"orb orb-4",
size:220,
duration:20,
delay:1.8,
x:-35,
y:40,
},

{
id:5,
className:"orb orb-5",
size:100,
duration:15,
delay:.5,
x:20,
y:-18,
},

{
id:6,
className:"orb orb-6",
size:150,
duration:22,
delay:2,
x:-25,
y:22,
},

];

function FloatingOrbs(){

return(

<>

{

ORBS.map((orb)=>(

<motion.div

key={orb.id}

className={orb.className}

style={{

width:orb.size,

height:orb.size,

}}

initial={{

opacity:0,

scale:.6,

}}

animate={{

opacity:[.18,.45,.18],

scale:[1,1.08,.96,1],

x:[0,orb.x,-orb.x,0],

y:[0,orb.y,-orb.y,0],

rotate:[0,8,-8,0],

}}

transition={{

duration:orb.duration,

delay:orb.delay,

repeat:Infinity,

repeatType:"mirror",

ease:"easeInOut",

}}

>

<motion.div

className="orb-inner"

animate={{

rotate:[0,360],

}}

transition={{

duration:40,

repeat:Infinity,

ease:"linear",

}}

>

<div className="orb-highlight"/>

<div className="orb-glow"/>

</motion.div>

</motion.div>

))

}

</>

);

}

export default FloatingOrbs;