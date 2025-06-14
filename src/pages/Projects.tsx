// import { useEffect, useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../types/project';
// // import { fetchProjects } from '../services/api';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { CategoryFilter } from '../components/projects/CategoryFilter';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // const loadProjects = useCallback(async () => {
//   //   try {
//   //     setLoading(true);
//   //     setError(null);
//   //     const data = await fetchProjects();
//   //     setProjects(data);
//   //   } catch (err) {
//   //     setError('Failed to fetch projects. Please try again later.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }, []);

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);
  

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
//   const filteredProjects = selectedCategory === 'all'
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//         </div>
//        </section>

//        <section className="py-20">
//          <div className="max-w-7xl mx-auto px-4">
//            <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={setSelectedCategory}
//           />

//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <ProjectCard key={project._id} project={project} index={index} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

// import { useEffect, useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { CategoryFilter } from '../components/projects/CategoryFilter';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null); // For detailed card view

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map((project) => project.category)))];
//   const filteredProjects =
//     selectedCategory === 'all'
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={setSelectedCategory}
//           />

//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <div key={project._id} className="border rounded-lg p-4 shadow-lg">
//                   {/* Image Section */}
//                   {project.image && (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-48 object-cover rounded mb-4"
//                     />
//                   )}
//                   <h3 className="font-bold text-lg">{project.title}</h3>
//                   <p className="text-sm text-gray-500">Client: {project.client}</p>
//                   <p className="text-sm text-gray-500">Category: {project.category}</p>
//                   <p className="text-sm text-gray-500">Date: {project.date}</p>
//                   {/* Description removed */}
//                   <button
//                     onClick={() => setSelectedProject(project)}
//                     className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Detailed Card View */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedProject(null)} // Close on background click
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative"
//             onClick={(e) => e.stopPropagation()} // Prevent close on modal click
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setSelectedProject(null)}
//             >
//               ✕
//             </button>
//             {/* Detailed Card View */}
//             <h3 className="font-bold text-xl mb-4">{selectedProject.title}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {selectedProject.image && (
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-64 object-cover rounded"
//                 />
//               )}
//               <div>
//                 <p>
//                   <strong>Client:</strong> {selectedProject.client}
//                 </p>
//                 <p>
//                   <strong>Category:</strong> {selectedProject.category}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {selectedProject.date}
//                 </p>
//                 <p>
//                   <strong>Description:</strong> {selectedProject.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;

// import { useEffect, useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { CategoryFilter } from '../components/projects/CategoryFilter';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map((project) => project.category)))];
//   const filteredProjects =
//     selectedCategory === 'all'
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={setSelectedCategory}
//           />

//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <div key={project._id} className="border rounded-lg p-4 shadow-lg">
//                   {/* Image Section */}
//                   {project.image && (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-48 object-cover rounded mb-4"
//                     />
//                   )}
//                   <h3 className="font-bold text-lg">{project.title}</h3>
//                   <p className="text-sm text-gray-500">Client: {project.client}</p>
//                   <p className="text-sm text-gray-500">Category: {project.category}</p>
//                   {/* Render date with fallback */}
//                   <p className="text-sm text-gray-500">
//                     Date: {project.date ? new Date(project.date).toLocaleDateString() : 'Not Available'}
//                   </p>
//                   <button
//                     onClick={() => setSelectedProject(project)}
//                     className="mt-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
//                   >
//                     <span>Learn More</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Detailed Card View */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedProject(null)} // Close on background click
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative"
//             onClick={(e) => e.stopPropagation()} // Prevent close on modal click
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setSelectedProject(null)}
//             >
//               ✕
//             </button>
//             {/* Detailed Card View */}
//             <h3 className="font-bold text-xl mb-4">{selectedProject.title}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {selectedProject.image && (
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-96 object-cover rounded"
//                 />
//               )}
//               <div>
//                 <p>
//                   <strong>Client:</strong> {selectedProject.client}
//                 </p>
//                 <p>
//                   <strong>Category:</strong> {selectedProject.category}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {selectedProject.date ? new Date(selectedProject.date).toLocaleDateString() : 'Not Available'}
//                 </p>
//                 <p>
//                   <strong>Description:</strong> {selectedProject.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;

// import { useEffect, useState, useCallback, ReactNode } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// type ModalProps = {
//   onClose: () => void;
//   children: ReactNode;
// };

// const Modal = ({ onClose, children }: ModalProps) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
//       <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
//         <button
//           className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//           onClick={onClose}
//         >
//           <FaTimes size={24} />
//         </button>
//         <div className="p-8 max-w-4xl mx-auto">{children}</div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [showSearch, setShowSearch] = useState<boolean>(false);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map((project) => project.category)))];
//   const filteredProjects =
//     selectedCategory === 'all'
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   const searchedProjects = filteredProjects.filter((project) =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const fullScreenCarouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//           <div className="mt-6 flex items-center gap-4">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <select
//               className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </section>

//       {/* Projects Carousel */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <Slider {...carouselSettings}>
//               {searchedProjects.map((project, index) => (
//                 <div key={project._id} className="px-2">
//                   <ProjectCard
//                     project={project}
//                     index={index}
//                     onLearnMore={() => setSelectedProject(project)}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </section>

//       {/* Full-Screen Project Details Modal */}
//       {selectedProject && (
//         <Modal onClose={() => setSelectedProject(null)}>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
//             <div className="w-full">
//               <Slider {...fullScreenCarouselSettings}>
//                 {selectedProject.images?.map((image, index) => (
//                   <div key={index} className="w-full h-96">
//                     <img
//                       src={image}
//                       alt={`${selectedProject.title} - Image ${index + 1}`}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Category:</span>
//                 <span>{selectedProject.category}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Client:</span>
//                 <span>{selectedProject.client}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Completion Date:</span>
//                 <span>{selectedProject.completionDate}</span>
//               </div>
//               <div>
//                 <span className="font-semibold">Description:</span>
//                 <p className="text-gray-700 mt-2">{selectedProject.description}</p>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;
// import { useEffect, useState, useCallback, ReactNode } from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// type ModalProps = {
//   onClose: () => void;
//   children: ReactNode;
// };

// const Modal = ({ onClose, children }: ModalProps) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
//       <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
//         <button
//           className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//           onClick={onClose}
//         >
//           <FaTimes size={24} />
//         </button>
//         <div className="p-8 max-w-4xl mx-auto">{children}</div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map((project) => project.category)))];
//   const filteredProjects =
//     selectedCategory === 'all'
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   const searchedProjects = filteredProjects.filter((project) =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const fullScreenCarouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//           <div className="mt-6 flex items-center gap-4">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <select
//               className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </section>

//       {/* Projects Carousel */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <Slider {...carouselSettings}>
//               {searchedProjects.map((project, index) => (
//                 <div key={project._id} className="px-2">
//                   <ProjectCard
//                     project={project}
//                     index={index}
//                     onLearnMore={() => setSelectedProject(project)}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </section>

//       {/* Full-Screen Project Details Modal */}
//       {selectedProject && (
//         <Modal onClose={() => setSelectedProject(null)}>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
//             <div className="w-full">
//               <Slider {...fullScreenCarouselSettings}>
//                 {selectedProject.images?.map((imageId: string, index: number) => (
//                   <div key={index} className="w-full h-96">
//                     <img
//                       src={`http://localhost:5000/api/projects/image/${imageId}`} // Use full URL
//                       alt={`${selectedProject.title} - Image ${index + 1}`}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Category:</span>
//                 <span>{selectedProject.category}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Client:</span>
//                 <span>{selectedProject.client}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Completion Date:</span>
//                 <span>{selectedProject.completionDate}</span>
//               </div>
//               <div>
//                 <span className="font-semibold">Description:</span>
//                 <p className="text-gray-700 mt-2">{selectedProject.description}</p>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;

// import { useEffect, useState, useCallback, ReactNode } from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';

// import { ProjectCard } from '../components/projects/ProjectCard';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// type ModalProps = {
//   onClose: () => void;
//   children: ReactNode;
// };

// const Modal = ({ onClose, children }: ModalProps) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
//       <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
//         <button
//           className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//           onClick={onClose}
//         >
//           <FaTimes size={24} />
//         </button>
//         <div className="p-8 max-w-4xl mx-auto">{children}</div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const categories = ['all', ...Array.from(new Set(projects.map((project) => project.category)))];
//   const filteredProjects =
//     selectedCategory === 'all'
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   const searchedProjects = filteredProjects.filter((project) =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const fullScreenCarouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (error) {
//     return <ErrorMessage message={error} onRetry={() => loadProjects()} />;
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Our Projects
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Explore our portfolio of successful engineering projects
//           </motion.p>
//           <div className="mt-6 flex items-center gap-4">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <select
//               className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </section>

//       {/* Projects Carousel */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <Slider {...carouselSettings}>
//               {searchedProjects.map((project, index) => (
//                 <div key={project._id} className="px-2">
//                   <ProjectCard
//                     project={project}
//                     index={index}
//                     onLearnMore={() => setSelectedProject(project)}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </section>

//       {/* Full-Screen Project Details Modal */}
//       {selectedProject && (
//         <Modal onClose={() => setSelectedProject(null)}>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
//             <div className="w-full">
//               <Slider {...fullScreenCarouselSettings}>
//                 {/* {selectedProject.images?.map((imageId: string, index: number) => (
//                   <div key={index} className="w-full h-96">
//                     <img
//                       src={`http://localhost:5000/api/projects/image/${imageId}`} // Use full URL
//                       alt={`${selectedProject.title} - Image ${index + 1}`}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   </div>
//                 ))} */}
//                 <div className="w-full h-96">
//   <img
//     src={selectedProject.image}  // Correct usage
//     alt={selectedProject.title}
//     className="w-full h-full object-cover rounded-lg"
//   />
// </div>

//               </Slider>
//             </div>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Category:</span>
//                 <span>{selectedProject.category}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Client:</span>
//                 <span>{selectedProject.client}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-semibold">Completion Date:</span>
//                 <span>{selectedProject.completionDate}</span>
//               </div>
//               <div>
//                 <span className="font-semibold">Description:</span>
//                 <p className="text-gray-700 mt-2">{selectedProject.description}</p>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;

// import { useEffect, useState, useCallback, ReactNode } from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';
// import { ProjectCard } from '../components/projects/ProjectCard';
// import { ErrorMessage } from '../components/common/ErrorMessage';
// import { LoadingSpinner } from '../components/common/LoadingSpinner';

// type ModalProps = {
//   onClose: () => void;
//   children: ReactNode;
// };

// const Modal = ({ onClose, children }: ModalProps) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
//       <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
//         <button
//           className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//           onClick={onClose}
//         >
//           <FaTimes size={24} />
//         </button>
//         <div className="p-8 max-w-4xl mx-auto">{children}</div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const loadProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadProjects();
//   }, [loadProjects]);

//   const searchedProjects = projects.filter((project) =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   const fullScreenCarouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="min-h-screen">
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1 className="text-4xl font-bold mb-6">Our Projects</motion.h1>
//           <div className="mt-6 flex items-center gap-4">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           {loading ? (
//             <LoadingSpinner />
//           ) : (
//             <Slider {...carouselSettings}>
//               {searchedProjects.map((project) => (
//                 <div key={project._id} className="px-2">
//                   <ProjectCard project={project} onLearnMore={() => setSelectedProject(project)} />
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </section>

//       {selectedProject && (
//         <Modal onClose={() => setSelectedProject(null)}>
//           <h2 className="text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
//           <Slider {...fullScreenCarouselSettings}>
//             {selectedProject.images.map((image, index) => (
//               <div key={index} className="w-full h-96">
//                 <img
//                   src={`server/uploads/images/${image}`}
//                   alt={`${selectedProject.title} - Image ${index + 1}`}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </Slider>
//           <div className="space-y-4 mt-4">
//             <div><strong>Category:</strong> {selectedProject.category}</div>
//             <div><strong>Client:</strong> {selectedProject.client}</div>
//             <div><strong>Completion Date:</strong> {selectedProject.completionDate}</div>
//             <p>{selectedProject.description}</p>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;
import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { ProjectCard } from '../components/projects/ProjectCard';
import Navbar from '../components/Navbar';

interface Project {
  _id: string;
  title: string;
  category: string;
  client: string;
  completionDate: string;
  description: string;
  images: string[];
}

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const staticProjects: Project[] = [
  {
    _id: '1',
    title: 'E-Commerce Website',
    category: 'Web Development',
    client: 'ABC Corp',
    completionDate: '2024-01-10',
    description: 'A fully responsive e-commerce website with modern UI/UX.',
    images: ['/uploads/bg.jpg', '/uploads/bg.jpg'],
  },
  {
    _id: '2',
    title: 'Portfolio Website',
    category: 'Web Development',
    client: 'Freelancer',
    completionDate: '2024-02-15',
    description: 'A personal portfolio website showcasing projects and blogs.',
    images: ['/uploads/bg.jpg', '/uploads/bg.jpg'],
  },
  {
    _id: '3',
    title: 'Company Dashboard',
    category: 'Business Solutions',
    client: 'XYZ Ltd',
    completionDate: '2024-03-05',
    description: 'An interactive admin dashboard for business analytics.',
    images: ['/uploads/bg.jpg', '/uploads/bg.jpg'],
  },
];

const Modal = ({ onClose, children }: ModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
    <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
      <button
        className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
        onClick={onClose}
      >
        <FaTimes size={24} />
      </button>
      <div className="p-8 max-w-4xl mx-auto">{children}</div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchedProjects = staticProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 className="text-4xl font-bold mb-6">Our Projects</motion.h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 text-gray-900"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* If search is active, show results in a row (NOT a carousel) */}
          {searchQuery ? (
            searchedProjects.length > 0 ? (
              <div className="flex flex-wrap gap-6 justify-center">
                {searchedProjects.map((project, index) => (
                  <div key={project._id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <ProjectCard
                      project={{ ...project, image: project.images[0] }}
                      index={index}
                      onLearnMore={() => setSelectedProject(project)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 text-xl mt-8">No projects found.</p>
            )
          ) : (
            <Slider {...carouselSettings}>
              {staticProjects.map((project, index) => (
                <div key={project._id} className="px-2">
                  <ProjectCard
                    project={{ ...project, image: project.images[0] }}
                    index={index}
                    onLearnMore={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <h2 className="text-3xl font-bold text-gray-800 text-center">{selectedProject.title}</h2>
          
          {/* Project Image Slider */}
          <div className="mt-6">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              arrows={true}
            >
              {selectedProject.images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Project Details */}
          <div className="space-y-4 mt-6 text-gray-700">
            <div><strong>Category:</strong> {selectedProject.category}</div>
            <div><strong>Client:</strong> {selectedProject.client}</div>
            <div><strong>Completion Date:</strong> {selectedProject.completionDate}</div>
            <p className="mt-2">{selectedProject.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;