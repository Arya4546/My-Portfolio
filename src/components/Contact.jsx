import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-regal-800 py-20 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-regal-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/919653072738"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-regal-700 hover:bg-regal-600 px-6 py-4 rounded-xl transition-colors duration-300"
          >
            <FaWhatsapp className="text-green-400" />
            <span>+91 96530 72738 (WhatsApp)</span>
          </a>

          <a
            href="tel:+919653072738"
            className="flex items-center gap-3 bg-regal-700 hover:bg-regal-600 px-6 py-4 rounded-xl transition-colors duration-300"
          >
            <FaPhoneAlt className="text-blue-400" />
            <span>Call Me</span>
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-12 text-3xl sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.instagram.com/aryadeep_singh45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/arya-deep-singh-8b1a84230"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
