import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen text-white px-6 py-16 flex items-center justify-center">
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center gap-12"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
            Arya Deep Singh
          </h1>
          <h2 className="text-2xl text-blue-300 mb-6">
            Full Stack Web Developer | Age 21
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            I’m a full stack web developer with 4 months of industry experience at Pragyavani Solutions LLP. I build scalable, performant web apps using React, Node.js, Express, Tailwind CSS, and SQL Server.
            <br /><br />
            My work includes production-ready CRMs, hospital systems, and visitor management software — all focused on clean code, responsive UI, and a great user experience.
            <br /><br />
            Explore my portfolio to see what I’ve built — and if you're hiring, let’s talk!
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
