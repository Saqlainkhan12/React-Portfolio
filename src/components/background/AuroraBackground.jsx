import "./AuroraBackground.css";

import { motion } from "framer-motion";

function AuroraBackground() {

  return (

    <div className="aurora-wrapper">

      {/* Aurora Lights */}

      <motion.div

        className="aurora aurora-one"

        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.08, .96, 1],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      <motion.div

        className="aurora aurora-two"

        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, .95, 1.05, 1],
        }}

        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      <motion.div

        className="aurora aurora-three"

        animate={{
          y: [0, -40, 0],
          scale: [1, 1.05, 1],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      {/* Glass Orbs */}

      <motion.div

        className="orb orb-one"

        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      <motion.div

        className="orb orb-two"

        animate={{
          y: [0, 35, 0],
          rotate: [0, -10, 0],
        }}

        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      <motion.div

        className="orb orb-three"

        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
        }}

        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      <motion.div

        className="orb orb-four"

        animate={{
          y: [0, 22, 0],
          x: [0, -10, 0],
        }}

        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />

      {/* Layers */}

      <div className="grid-layer" />

      <div className="noise-layer" />

    </div>

  );

}

export default AuroraBackground;