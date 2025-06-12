import React from "react";
import { motion } from "framer-motion";
import avatar1 from "../assets/avatar1.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#1e293b] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={avatar1}
            alt="Arya Deep Singh"
            className="w-full h-auto rounded-2xl shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m <strong>Arya Deep Singh</strong>, a <strong>Full Stack Web Developer</strong> with strong command over modern technologies like <strong>React.js, Node.js, Express.js, and SQL Server</strong>.
            I’ve gained solid industry experience at <strong>Pragyavani Solutions LLP</strong> building real-world applications.
          </p>
          <p className="mt-4 text-blue-200">
            I specialize in creating professional, interactive web apps with 3D animation, premium UI, and mobile-first design. Passionate about building robust, scalable solutions that deliver exceptional user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
