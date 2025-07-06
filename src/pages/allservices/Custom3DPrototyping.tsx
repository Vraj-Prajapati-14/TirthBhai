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
    title: "Custom 3D Printing and Rapid Prototyping",
    content: `Specializing in precise, high-quality 3D printing for prototyping and custom solutions. From concept to production, we ensure rapid delivery and exceptional detail.`,
    description: `Our rapid prototyping process has helped businesses iterate and test designs quickly. This service significantly shortened development cycles while delivering highly accurate functional parts.`,
    timeline: "2–4 Weeks",
    features: [
      "High-Resolution 3D Printing",
      "Custom Material Selection",
      "Fast Turnaround",
      "Prototype Testing & Refinement",
      "Scalable Production",
    ],
  },
  {
    id: 2,
    title: "Advanced CAD Modeling and 3D Design",
    content: `Offering advanced 3D CAD modeling services to visualize and prototype your designs with precision. We support a variety of industries including automotive and consumer electronics.`,
    description: `This project delivered CAD blueprints for a complex consumer product, reducing design errors by 30%. Detailed visualizations also accelerated team alignment and feedback.`,
    timeline: "3–6 Weeks",
    features: [
      "Complex Geometries",
      "Detailed CAD Blueprints",
      "Material Simulation",
      "Collaborative Design Process",
      "Industry-Standard Compliance",
    ],
  },
  {
    id: 3,
    title: "Functional 3D Prototype Development",
    content: `Delivering functional prototypes for real-world testing. We ensure mechanical, electrical, and structural accuracy to bring your concepts to life.`,
    description: `We produced mechanically functional prototypes for client field testing, integrating both form and function. It resulted in a successful pre-launch evaluation.`,
    timeline: "4–8 Weeks",
    features: [
      "Functional Prototype Delivery",
      "Material & Performance Testing",
      "Iterative Design Improvements",
      "Client Collaboration",
      "Post-Production Support",
    ],
  },
];

function Custom3DPrototyping() {
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
            Custom 3D Prototyping
          </h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            Innovative, precise, and rapid 3D prototyping solutions tailored for your business.
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

export default Custom3DPrototyping;
