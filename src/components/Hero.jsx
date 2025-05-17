import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

const Hero = () => {
  return (
    
    <section id="hero" className="min-h-screen bg-regal-900 flex items-center justify-center relative pt-20">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-regal-400">Arya Deep Singh</span>
          </h1>
          <p className="text-regal-300 text-lg md:text-xl max-w-xl">
            Full Stack Web Developer | React • Node.js • SQL Server • Tailwind CSS | 3D Enthusiast
          </p>
        </motion.div>
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-regal-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={avatar} alt="Arya Avatar" className="object-cover w-full h-full" />
        </motion.div>
      </div>

      {/* Background floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-regal-600 to-regal-800 opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-regal-500 to-regal-700 opacity-25 rounded-full animate-ping" />
      </div>
    </section>
  );
};

export default Hero;
