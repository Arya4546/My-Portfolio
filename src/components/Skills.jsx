import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,    // generic database icon
  FaServer,
  FaCogs,
  FaWindows,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDotnet,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: FaServer },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL Server", icon: FaDatabase },  // changed here
  { name: "C#", icon: SiDotnet },
  { name: "IIS Hosting", icon: FaWindows },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-regal-800 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-regal-400 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-regal-300 hover:text-regal-100 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-5xl mb-2" />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
