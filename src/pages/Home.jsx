import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg"; // Change path if needed

const Home = () => {
  return (
    <div className="bg-regal-900 min-h-screen text-white px-6 py-12 flex items-center justify-center">
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar Image */}
        <motion.img
          src={avatar}
          alt="Arya Deep Singh"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-regal-700"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-regal-400 mb-4">
            Arya Deep Singh
          </h1>
          <h2 className="text-2xl text-regal-300 mb-6">Full Stack Web Developer, Age 21</h2>
          <p className="text-regal-200 leading-relaxed text-lg">
            Welcome! I'm Arya Deep Singh, a passionate full stack web developer
            with 4 months of professional experience at Pragyavani Solutions LLP. I specialize in building
            scalable, user-friendly applications using ReactJS, Node.js, Express, TailwindCSS, and Microsoft SQL Server.  
            <br /><br />
            I have developed multiple real-world projects, including visitor management systems, CRMs, hospital management systems, and more, with a keen focus on clean code, performance, and excellent user experience.  
            <br /><br />
            Explore my portfolio to see some of my latest work, and feel free to get in touch!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
