
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const projectImages = {
  1: "/public/uploads/bg.jpg",
  2: "/public/uploads/bg.jpg",
  3: "/public/uploads/bg.jpg",
};

const projects = [
  {
    id: 1,
    title: "Production Plant Optimization & CAD Design",
    content: `We specialize in 3D CAD design, plant optimization, and production line improvements, enhancing efficiency and maximizing output.`,
    timeline: "6 Months (Jan 2023 - June 2023)",
    features: [
      "Enhanced plant workflow",
      "Optimized equipment layout",
      "Improved energy efficiency",
    ],
  },
  {
    id: 2,
    title: "HVAC Design and Drafting",
    content: `Providing comprehensive HVAC design services including 2D/3D drafting, system load calculations, and compliance with industry standards.`,
    timeline: "4 Months (July 2023 - Oct 2023)",
    features: [
      "Accurate load calculations",
      "Energy-efficient HVAC design",
      "Regulatory compliance",
    ],
  },
  {
    id: 3,
    title: "MEP Coordination Services",
    content: `Efficient MEP (Mechanical, Electrical, Plumbing) coordination using BIM technologies to enhance collaboration and reduce construction conflicts.`,
    timeline: "5 Months (Nov 2023 - Mar 2024)",
    features: [
      "Seamless BIM collaboration",
      "Reduced conflicts & rework",
      "Improved project accuracy",
    ],
  },
];

function DFMDFMADrawings() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/public/uploads/HVAC.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-6xl font-bold mb-6">HVAC Design & Drafting</h1>
            <p className="text-2xl max-w-3xl mx-auto">
              Delivering innovative and efficient mechanical engineering solutions to optimize production processes.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg rounded-3xl p-12 mb-16 max-w-6xl mx-auto mt-16 hover:shadow-2xl transition-all"
      >
        <h2 className="text-5xl font-bold mb-8 text-blue-700 text-center">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
          At MechConsult, we offer specialized services to optimize production processes and deliver cutting-edge mechanical solutions.
        </p>
        <ul className="grid md:grid-cols-2 gap-y-4 text-gray-800 text-lg">
          {["3D CAD Design", "Plant Optimization", "System Integration", "Project Execution", "HVAC Drafting", "Advanced BIM Coordination"].map((offer) => (
            <li key={offer} className="flex items-center gap-2">
              ✅ {offer}
            </li>
          ))}
        </ul>
      </motion.section>

      <section className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">Our Projects</h2>
        <div className="flex justify-center gap-8 mb-12">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Project {project.id}
            </motion.button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-2xl rounded-3xl p-12 relative max-w-6xl mx-auto hover:shadow-3xl transition"
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition"
          >
            ✕
          </button>
          <h2 className="text-5xl font-bold mb-6 text-blue-800">
            {projects.find((p) => p.id === selectedProject)?.title}
          </h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            {projects.find((p) => p.id === selectedProject)?.content}
          </p>
          <h3 className="text-3xl font-semibold mb-4">Timeline:</h3>
          <p className="text-xl mb-6">{projects.find((p) => p.id === selectedProject)?.timeline}</p>
          <h3 className="text-3xl font-semibold mb-4">Key Features:</h3>
          <ul className="list-disc ml-8 text-lg text-gray-800 mb-8">
            {projects.find((p) => p.id === selectedProject)?.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <img
            src={projectImages[selectedProject as keyof typeof projectImages]}
            alt="Project Image"
            className="rounded-xl shadow-xl max-h-[500px] w-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}

export default DFMDFMADrawings;
