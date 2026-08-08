import "./ThemePanel.css";

import { useEffect, useState } from "react";

import {

FaPalette,

FaCheck,

FaChevronRight,

} from "react-icons/fa";

const THEMES={

cyber:{
name:"Cyber",
primary:"#4fd1ff",
secondary:"#7b5cff",
accent:"#ff4fd8",
},

emerald:{
name:"Emerald",
primary:"#22c55e",
secondary:"#14b8a6",
accent:"#86efac",
},

sunset:{
name:"Sunset",
primary:"#ff7b00",
secondary:"#ff3d71",
accent:"#ffd166",
},

royal:{
name:"Royal",
primary:"#7c3aed",
secondary:"#2563eb",
accent:"#c084fc",
},

};

function ThemePanel(){

const [open,setOpen]=useState(false);

const [theme,setTheme]=useState(

()=>localStorage.getItem("theme") || "cyber"

);

useEffect(()=>{

const colors=THEMES[theme];

if(!colors) return;

document.documentElement.style.setProperty(

"--primary",

colors.primary

);

document.documentElement.style.setProperty(

"--secondary",

colors.secondary

);

document.documentElement.style.setProperty(

"--accent",

colors.accent

);

localStorage.setItem(

"theme",

theme

);

},[theme]);

return(

<>

<button

className="theme-toggle"

onClick={()=>setOpen(!open)}

aria-label="Theme Switcher"

>

<FaPalette/>

</button>

<div

className={`theme-panel ${open?"open":""}`}

>

<div className="theme-title">

Theme

<FaChevronRight/>

</div>
      {

        Object.entries(THEMES).map(([key,value])=>(

          <button

            key={key}

            className={`theme-btn ${theme===key?"active":""}`}

            onClick={()=>{

              setTheme(key);

              setOpen(false);

            }}

          >

            <span

              className="theme-preview"

              style={{

                background:

                `linear-gradient(
                  135deg,
                  ${value.primary},
                  ${value.secondary},
                  ${value.accent}
                )`

              }}

            />

            <span className="theme-name">

              {value.name}

            </span>

            {

              theme===key &&

              <FaCheck className="theme-check"/>

            }

          </button>

        ))

      }

    </div>

  </>

);

}

export default ThemePanel;