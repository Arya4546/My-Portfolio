import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pragyavani Solutions LLP",
    role: "Current Company",
    feedback:
      "Arya is an excellent full-stack developer who brings creative solutions and clean architecture. He's handled multiple live projects with grace and professionalism in his 4 months with us.",
  },
  {
    name: "Raghvi Goel",
    role: "Founder, Hospital Project",
    feedback:
      "Arya developed a complex hospital management system with role-based logins, CRUD features, and smooth appointment booking. His dedication, skill, and delivery speed were exceptional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-regal-900 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-regal-400 mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-regal-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-regal-200 text-base leading-relaxed mb-4">
                “{testimonial.feedback}”
              </p>
              <div className="border-t pt-4 border-regal-600">
                <h4 className="text-lg font-semibold text-regal-300">{testimonial.name}</h4>
                <span className="text-sm text-regal-400">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
