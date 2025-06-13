
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
      title: "Custom 3D Printing and Rapid Prototyping",
      content: `Specializing in precise, high-quality 3D printing for prototyping and custom solutions. From concept to production, we ensure rapid delivery and exceptional detail.`,
      timeline: "2-4 Weeks",
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
      timeline: "3-6 Weeks",
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
      timeline: "4-8 Weeks",
      features: [
        "Functional Prototype Delivery",
        "Material & Performance Testing",
        "Iterative Design Improvements",
        "Client Collaboration",
        "Post-Production Support",
      ],
    },
  ];
  
  function HVACDesignDrafting() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
    return (
      <div>
        <Navbar />
  
        {/* Hero Section */}
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
              <h1 className="text-5xl font-extrabold leading-tight mb-8">
                Custom 3D Prototyping
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Innovative, precise, and rapid 3D prototyping solutions tailored for your business.
              </p>
            </motion.div>
          </div>
        </div>
  
        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-3xl p-10 mb-14 max-w-5xl mx-auto mt-16 hover:shadow-2xl transition-all"
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-700 text-center">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
            We combine advanced technology and expert craftsmanship to deliver superior 3D prototyping services.
          </p>
        </motion.section>
  
        {/* Project Selector */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Our Projects</h2>
          <div className="flex justify-center gap-8 mb-12">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                // className="w-32 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                // whileHover={{ scale: 1.1 }}
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
              whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Project {project.id}
              </motion.button>
            ))}
          </div>
        </section>
  
        {/* Project Details */}
        {selectedProject && (
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-12 relative max-w-5xl mx-auto hover:shadow-3xl transition"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition"
            >
              ✕
            </button>
            <h2 className="text-4xl font-extrabold mb-8 text-blue-800">
              {projects.find((p) => p.id === selectedProject)?.title}
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              {projects.find((p) => p.id === selectedProject)?.content}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Timeline:</strong> {projects.find((p) => p.id === selectedProject)?.timeline}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              {projects.find((p) => p.id === selectedProject)?.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
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
  
  export default HVACDesignDrafting;
  