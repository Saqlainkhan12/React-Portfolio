import "./Hero.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import AnimatedText from "../ui/AnimatedText";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import { smoothScrollTo } from "../../utils/scroll";

function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            🚀 Available For Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >

            <AnimatedText
              text="Crafting"
              type="letters"
            />

            <br />

            <span>

              <AnimatedText
                text="Premium"
                gradient
                type="letters"
              />

            </span>

            <br />

            <AnimatedText
              text="Digital Experiences"
              type="words"
            />

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >
            Frontend React Developer creating luxury web
            experiences with beautiful UI, smooth animations,
            premium interactions and modern technologies.
          </motion.p>

          <div className="hero-buttons">
            <MagneticButton onClick={() => smoothScrollTo("projects", 450)}>
              View Work
              <FaArrowRight />
            </MagneticButton>

            <MagneticButton href="#">
              <FaDownload />
              Resume
            </MagneticButton>
          </div>

          <div className="hero-social">

            <a
              href="https://github.com/Saqlainkhan12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saqlain-khan-928826424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">
          <GlassCard
            className="hero-card"
            padding="28px"
          >

            <motion.div
              className="hero-image"
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: .6,
                duration: .8,
              }}
            >

              <div className="hero-avatar">

                SK

              </div>

            </motion.div>

            <motion.div
              className="floating-card card-1"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >

              ⚛ React

            </motion.div>

            <motion.div
              className="floating-card card-2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            >

              🎨 UI / UX

            </motion.div>

            <motion.div
              className="floating-card card-3"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
            >

              💛 JavaScript

            </motion.div>

            <motion.div
              className="floating-card card-4"
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >

              🚀 Performance

            </motion.div>
                      </GlassCard>

        </div>

      </div>

    </section>

  );

}

export default Hero;