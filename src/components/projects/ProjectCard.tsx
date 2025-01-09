// import React from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../../types/project';

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=2070&auto=format&fit=crop';

// export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//         onError={(e) => {
//           const target = e.target as HTMLImageElement;
//           target.src = FALLBACK_IMAGE;
//         }}
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
//         <div className="flex justify-between text-sm text-gray-500">
//           <span>{project.client}</span>
//           <span>{new Date(project.completionDate).toLocaleDateString()}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../../types/project';

// interface ProjectCardProps {
//   project: Project;
//   index: number;
//   onLearnMore: () => void;
// }

// const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=2070&auto=format&fit=crop';

// export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onLearnMore }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//         onError={(e) => {
//           const target = e.target as HTMLImageElement;
//           target.src = FALLBACK_IMAGE;
//         }}
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <div className="flex justify-between text-sm text-gray-500 mb-4">
//           <span>{project.client}</span>
//           <span>{new Date(project.completionDate).toLocaleDateString()}</span>
//         </div>
//         <button
//           onClick={onLearnMore}
//           className="mt-4 text-blue-600 flex items-center hover:underline"
//         >
//           Learn More <span className="ml-2">&rarr;</span>
//         </button>
//       </div>
//     </motion.div>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  onLearnMore: () => void;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=2070&auto=format&fit=crop';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = FALLBACK_IMAGE;
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate">{project.title}</h3>
        {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p> */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span className="font-medium">Client: {project.client}</span>
          <span>{new Date(project.completionDate).toLocaleDateString()}</span>
        </div>
        <button
          onClick={onLearnMore}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Learn More
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </motion.div>
  );
};
