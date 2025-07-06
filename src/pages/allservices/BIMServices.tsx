import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const projectImages = {
  1: "/uploads/bg.jpg",
  2: "/uploads/bg.jpg",
  3: "/uploads/bg.jpg",
};

const projects = [
  {
    id: 1,
    title: "Production Plant Optimization & CAD Design",
    content: `We specialize in 3D CAD design, plant optimization, and production line improvements, enhancing efficiency and maximizing output with cutting-edge technology and tailored solutions.`,
    description: `This project involved a comprehensive overhaul of a manufacturing facility, focusing on streamlining workflows and reducing downtime. Our team utilized advanced CAD tools to redesign layouts, resulting in a 20% increase in productivity.`,
    timeline: "6 Months (Jan 2023 - June 2023)",
    features: [
      "Enhanced plant workflow with automated systems",
      "Optimized equipment layout for maximum space utilization",
      "Improved energy efficiency through sustainable design",
    ],
  },
  {
    id: 2,
    title: "HVAC Design and Drafting",
    content: `Providing comprehensive HVAC design services including 2D/3D drafting, system load calculations, and compliance with industry standards for optimal climate control.`,
    description: `This initiative delivered a state-of-the-art HVAC system for a commercial building, ensuring energy efficiency and compliance with local regulations. Our detailed drafting reduced installation errors by 15%.`,
    timeline: "4 Months (July 2023 - Oct 2023)",
    features: [
      "Accurate load calculations for precise climate control",
      "Energy-efficient HVAC design reducing operational costs",
      "Regulatory compliance with international standards",
    ],
  },
  {
    id: 3,
    title: "MEP Coordination Services",
    content: `Efficient MEP (Mechanical, Electrical, Plumbing) coordination using BIM technologies to enhance collaboration and reduce construction conflicts across complex projects.`,
    description: `This project streamlined MEP coordination for a multi-story building, leveraging BIM to minimize conflicts and improve timelines. The result was a 25% reduction in rework and enhanced team collaboration.`,
    timeline: "5 Months (Nov 2023 - Mar 2024)",
    features: [
      "Seamless BIM collaboration across engineering disciplines",
      "Reduced conflicts and rework through precise modeling",
      "Improved project accuracy with real-time updates",
    ],
  },
];

function BIMServices() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-sans text-gray-200">
      <Navbar />

      {/* Hero Section */}
   <div className="relative h-[80vh] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
            HVAC Design & Drafting
          </h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            Delivering innovative and efficient mechanical engineering solutions to optimize production processes.
          </p>
        </motion.div>
      </div>

      {/* Projects Section */}
      <section className="text-center py-16">
        <h2 className="text-5xl font-bold mb-12 text-gray-100">Our Projects</h2>
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/95 backdrop-blur-sm shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row items-center hover:shadow-2xl transition-all duration-500 border border-gray-700"
            >
              {index % 2 === 0 ? (
                <>
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full md:w-1/2 max-h-[400px] object-contain self-center bg-black"
                  />
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-blue-400">{project.title}</h3>
                    <p className="text-lg text-gray-300 mb-4">{project.content}</p>
                    <p className="text-xl font-semibold mb-2 text-gray-100">Description:</p>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <p className="text-xl font-semibold mb-2 text-gray-100">Timeline:</p>
                    <p className="text-gray-300 mb-4">{project.timeline}</p>
                    <h4 className="text-xl font-semibold mb-2 text-gray-100">Key Features:</h4>
                    <ul className="space-y-2 text-gray-300">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="bg-gray-700/50 p-2 rounded-lg hover:bg-gray-600/50 transition-all duration-300"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-3xl font-bold mb-4 text-blue-400">{project.title}</h3>
                    <p className="text-lg text-gray-300 mb-4">{project.content}</p>
                    <p className="text-xl font-semibold mb-2 text-gray-100">Description:</p>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <p className="text-xl font-semibold mb-2 text-gray-100">Timeline:</p>
                    <p className="text-gray-300 mb-4">{project.timeline}</p>
                    <h4 className="text-xl font-semibold mb-2 text-gray-100">Key Features:</h4>
                    <ul className="space-y-2 text-gray-300">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="bg-gray-700/50 p-2 rounded-lg hover:bg-gray-600/50 transition-all duration-300"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full md:w-1/2 max-h-[400px] object-contain self-center order-1 md:order-2 bg-black"
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BIMServices;
