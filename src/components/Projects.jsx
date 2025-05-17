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
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

const projects = [
  {
    title: "Visitor Management System",
    image: project1,
    tech: [FaReact, FaNodeJs, FaDatabase],
    url: "https://visitor.pragyacode.com",
    description:
      "A complete visitor management system with secure login, live logs, and admin controls using React, Node.js, Express.js, and SQL Server.",
  },
  {
    title: "CRM for Admin",
    image: project2,
    tech: [FaReact, FaNodeJs, FaDatabase, FaWhatsapp],
    url: "https://admin.pragyacode.com",
    description:
      "Enterprise-grade CRM with parent access, CRUD, email & WhatsApp integration, role-based dashboard built using React, Express.js & SQL Server.",
  },
  {
    title: "The Clean Express",
    image: project3,
    tech: [FaHtml5, FaCss3Alt, FaJs],
    url: "https://thecleanexpress.in",
    description:
      "Static website built for a laundry service company using HTML, CSS, and JavaScript. Optimized for speed and SEO.",
  },
  {
    title: "Hospital Management System",
    image: project4,
    tech: [FaHtml5, FaCss3Alt, FaJs, FaDatabase],
    description:
      "Multi-role CRUD system for cancer hospitals, supporting admins, doctors, patients. Node.js backend with Express & SQL Server.",
  },
  {
    title: "Cold Store Inventory Software",
    image: project5,
    tech: [FaReact, FaNodeJs, FaDatabase, FaWhatsapp],
    url: "https://admin.purnimacoldstore.co.in",
    description:
      "Helped cold store track items across rooms with multi-login access, WhatsApp integration, CRUD and analytics dashboard.",
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
