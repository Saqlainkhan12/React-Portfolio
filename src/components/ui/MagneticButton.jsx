import { motion } from "framer-motion";
import { useRef } from "react";

function MagneticButton({

children,

className="",

href,

onClick,

strength=35,

type="button",

}){

const ref=useRef(null);

  const handleMove = (e) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    element.style.transition = "transform 0.08s ease-out";
    element.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const reset = () => {
    const element = ref.current;
    if (!element) return;
    element.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
    element.style.transform = "translate(0px, 0px)";
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "16px 34px",
        borderRadius: "999px",
        cursor: "pointer",
        userSelect: "none",
        color: "#fff",
        fontWeight: "700",
        fontSize: "16px",
        background:
          "linear-gradient(135deg,var(--primary),var(--secondary),var(--accent))",
        backgroundSize: "300%",
        boxShadow:
          "0 15px 40px rgba(0,0,0,.25),0 0 30px rgba(79,209,255,.20)",
        willChange: "transform",
      }}
      className={`magnetic-btn ${className}`}
    >

{children}

</motion.div>

);

if(href){

return(

<a

href={href}

style={{

textDecoration:"none",

display:"inline-block",

}}

>

{content}

</a>

);

}

return(

<button

type={type}

onClick={onClick}

style={{

background:"transparent",

border:"none",

padding:0,

}}

>

{content}

</button>

);

}

export default MagneticButton;