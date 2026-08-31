import "./Navbar.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { smoothScrollTo } from "../../utils/scroll";

const NAVBAR_LINKS = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScroll(window.scrollY > 40);

          for (let i = NAVBAR_LINKS.length - 1; i >= 0; i--) {
            const id = NAVBAR_LINKS[i];
            const section = document.getElementById(id);
            if (!section) continue;

            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
              setActive(id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActive(link);
    setOpen(false);
    smoothScrollTo(link, 450);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${scroll ? "glass-nav" : ""}`}
    >
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          SK
        </a>

        <nav className={open ? "open" : ""}>
          {NAVBAR_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={active === link ? "active" : ""}
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;