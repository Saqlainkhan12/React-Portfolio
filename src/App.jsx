import AuroraBackground from "./components/background/AuroraBackground";
import FloatingOrbs from "./components/background/FloatingOrbs";
import ThemePanel from "./components/background/ThemePanel";
import CursorBubble from "./components/background/CursorBubble";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import "./assets/styles/variables.css";
import "./assets/styles/globals.css";
import "./assets/styles/utilities.css";
import "./assets/styles/animations.css";

function App() {

  return (

    <>

      {/* Background */}

      <AuroraBackground />

      <FloatingOrbs />
      <CursorBubble />

      {/* Theme Switcher */}

      <ThemePanel />

      {/* Navigation */}

      <Navbar />

      {/* Main Content */}

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      {/* Footer */}

      <Footer />

    </>

  );

}

export default App;