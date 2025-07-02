import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWhatsapp,
} from "react-icons/fa";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg"; 
import project8 from "../assets/project8.png";

const projects = [
   { title: "Let's Chat - Real Time Chat & Video Call",
    image: project6,
    tech: [FaReact, FaNodeJs, FaDatabase],
    url: "https://let-s-chat-six.vercel.app",
    description:
      "Full-featured real-time chat app with message reactions, friend system, video calls, built using MERN, Tailwind CSS, and DaisyUI. Fully responsive across all devices.",
  },
 
 
  {
    title: "School Management Software",
    image: project7,
    tech: [FaReact, FaNodeJs, FaDatabase],
    url: "https://github.com/Arya4546/school-management-software",
    description:
      "Multi-school management software with separate logins for teachers, students, staff, and admins. Built using React, Tailwind CSS, Node.js, Express.js, and SQL Server.",
  },
  {
    title: "Hospital Management System",
    image: project4,
    tech: [FaHtml5, FaCss3Alt, FaJs, FaDatabase],
    url : "https://github.com/Arya4546/hospital-management-system",
    description:
      "Multi-role CRUD system for cancer hospitals, supporting admins, doctors, patients. Node.js backend with Express & SQL Server.",
  },

   {
    title: "Visitor Management System",
    image: project1,
    tech: [FaReact, FaNodeJs, FaDatabase],
    url: "https://vms-frontend-snowy.vercel.app",
    description:
      "A complete visitor management system with secure login, live logs, and admin controls using React, Node.js, Express.js, and SQL Server.",
  },

   { title: "DevHub—your mate for code, people & AI",
    image: project8,
    tech: [FaReact, FaNodeJs, FaDatabase],
    url: "https://dev-hub-blush.vercel.app",
    description:
      "DevHub is a modern full-stack platform where developers can connect, share projects, post bugs, get AI suggestions, pair up, and chat in real time — all in one place, built using MERN, Tailwind CSS, and StreamAPI.",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="bg-regal-900 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-regal-400 mb-12 text-center">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-regal-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-regal-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-regal-200 text-sm mb-4">{project.description}</p>
                <div className="flex space-x-3 text-regal-500 text-xl mb-4">
                  {project.tech.map((Icon, i) => (
                    <Icon key={i} title="Tech Used" />
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-regal-500 text-white rounded-full hover:bg-regal-400 transition-colors duration-300 text-sm font-medium"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
