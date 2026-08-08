import { motion } from "framer-motion";

function GlassCard({

children,

className="",

padding="32px",

hover=true,

delay=0,

duration=.6,

blur=24,

border=true,

}){

return(

<motion.div

initial={{

opacity:0,

y:40,

scale:.96,

}}

whileInView={{

opacity:1,

y:0,

scale:1,

}}

viewport={{

once:true,

amount:.2,

}}

transition={{

duration,

delay,

ease:[0.22,1,0.36,1],

}}

whileHover={

hover

?

{

y:-10,

scale:1.02,

}

:{}

}

className={className}

style={{

padding,

position:"relative",

overflow:"hidden",

borderRadius:"28px",

background:"rgba(255,255,255,.05)",

backdropFilter:`blur(${blur}px)`,

WebkitBackdropFilter:`blur(${blur}px)`,

border:border

?"1px solid rgba(255,255,255,.08)"

:"none",

boxShadow:

"0 20px 50px rgba(0,0,0,.25)",

transition:

"all .35s ease",

}}

>

{/* Glow */}

<div

style={{

position:"absolute",

width:"220px",

height:"220px",

top:"-120px",

right:"-120px",

borderRadius:"50%",

background:

"radial-gradient(circle,rgba(79,209,255,.18),transparent 70%)",

filter:"blur(45px)",

pointerEvents:"none",

}}

></div>

{/* Bottom Glow */}

<div

style={{

position:"absolute",

width:"180px",

height:"180px",

left:"-90px",

bottom:"-90px",

borderRadius:"50%",

background:

"radial-gradient(circle,rgba(123,92,255,.15),transparent 70%)",

filter:"blur(40px)",

pointerEvents:"none",

}}

></div>

{/* Border */}

{

border &&

<div

style={{

position:"absolute",

inset:0,

borderRadius:"28px",

padding:"1px",

background:

"linear-gradient(135deg,var(--primary),transparent,var(--secondary))",

mask:

"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

WebkitMask:

"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

WebkitMaskComposite:"xor",

maskComposite:"exclude",

opacity:.45,

pointerEvents:"none",

}}

></div>

}

<div

style={{

position:"relative",

zIndex:2,

}}

>

{children}

</div>

</motion.div>

);

}

export default GlassCard;