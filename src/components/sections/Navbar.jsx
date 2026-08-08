import "./Navbar.css";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {

FaBars,

FaTimes,

} from "react-icons/fa";

function Navbar(){

const [open,setOpen]=useState(false);

const [active,setActive]=useState("home");

const [scroll,setScroll]=useState(false);

const links=[

"home",

"about",

"skills",

"projects",

"contact",

];

useEffect(()=>{

const handleScroll=()=>{

setScroll(window.scrollY>40);

links.forEach(id=>{

const section=document.getElementById(id);

if(!section) return;

const top=section.offsetTop-150;

const bottom=top+section.offsetHeight;

if(

window.scrollY>=top &&

window.scrollY<bottom

){

setActive(id);

}

});

};

handleScroll();

window.addEventListener(

"scroll",

handleScroll

);

return()=>window.removeEventListener(

"scroll",

handleScroll

);

},[]);

return(

<motion.header

initial={{

y:-100,

opacity:0,

}}

animate={{

y:0,

opacity:1,

}}

transition={{

duration:.8,

}}

className={`navbar ${scroll?"glass-nav":""}`}

>

<div className="nav-container">

<a

href="#home"

className="logo"

>

SK

</a>

<nav

className={open?"open":""}

>
        {

          links.map(link=>(

            <a

              key={link}

              href={`#${link}`}

              className={

                active===link

                ?

                "active"

                :

                ""

              }

              onClick={()=>setOpen(false)}

            >

              {link}

            </a>

          ))

        }

      </nav>

      <button

        className="menu-btn"

        onClick={()=>setOpen(!open)}

        aria-label="Menu"

      >

        {

          open

          ?

          <FaTimes/>

          :

          <FaBars/>

        }

      </button>

    </div>

  </motion.header>

);

}

export default Navbar;