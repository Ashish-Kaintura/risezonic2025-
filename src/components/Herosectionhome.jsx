// src/components/HeroBanner.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, Globe } from "lucide-react";

export default function HeroSectionHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f2ff40,transparent)]"></div>

      {/* Floating 3D Icons */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 text-cyan-400"
      >
        <Rocket size={80} />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate }}
        className="absolute bottom-32 right-20 text-yellow-400"
      >
        <Zap size={80} />
      </motion.div>

      <motion.div
        style={{ y: y1, scale }}
        className="absolute top-1/3 right-1/4 text-green-400"
      >
        <Globe size={90} />
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          RiseZonic Digital Marketing
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Experience futuristic web design, AI-powered marketing, and immersive
          digital solutions that stand out.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg text-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
