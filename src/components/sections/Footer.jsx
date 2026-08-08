import "./Footer.css";

import {

FaGithub,
FaLinkedin,
FaArrowUp,
FaHeart,

} from "react-icons/fa";

function Footer(){

const year=new Date().getFullYear();

return(

<footer

className="footer"

>

<div className="wrapper">

<div className="footer-content">

<h2>

Saqlain

<span className="text-gradient">

 Mushtaq

</span>

</h2>

<p>

Frontend React Developer

Creating Premium Digital Experiences

</p>

<div className="footer-social">

<a

href="https://github.com/Saqlainkhan12"

target="_blank"

rel="noopener noreferrer"

>

<FaGithub/>

</a>

<a

href="https://www.linkedin.com/in/saqlain-khan-928826424"

target="_blank"

rel="noopener noreferrer"

>

<FaLinkedin/>

</a>

<a href="#home">

<FaArrowUp/>

</a>

</div>

<div className="footer-line"></div>

<div className="footer-bottom">

<span>

© {year} Saqlain Mushtaq

</span>

<span>

Made with

<FaHeart className="heart"/>

React

</span>

</div>

</div>

</div>

</footer>

);

}

export default Footer;