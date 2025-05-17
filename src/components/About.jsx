import React from "react";
import { motion } from "framer-motion";
import avatar1 from "../assets/avatar1.jpg";

const About = () => {
  return (
    <section id="about" className="bg-regal-800 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={avatar1}
            alt="Arya Deep Singh"
            className="w-full h-auto rounded-2xl shadow-lg border-4 border-regal-500"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-regal-400">About Me</h2>
          <p className="text-lg leading-relaxed text-regal-200">
            I’m <strong>Arya Deep Singh</strong>, a <strong>Full Stack Web Developer</strong> with a strong command over modern technologies like <strong>React.js, Node.js, Express.js, and SQL Server</strong>. 
            I currently work at <strong>Pragyavani Solutions LLP</strong> where I’ve gained 4 months of solid experience building real-world projects.
            I specialize in creating professional, highly interactive web applications with 3D animations, premium design, and mobile responsiveness.
          </p>
          <p className="mt-4 text-regal-300">
            My passion lies in building robust solutions with seamless user experience and performance. I'm always ready to take on challenging tasks and deliver top-notch results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
