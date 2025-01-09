// // import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Award, Users, Clock, CheckCircle } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

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
//             About Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Leading the way in mechanical engineering solutions with innovation and expertise
//           </motion.p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { icon: Award, label: 'Years Experience', value: '15+' },
//               { icon: Users, label: 'Expert Engineers', value: '50+' },
//               { icon: CheckCircle, label: 'Projects Completed', value: '500+' },
//               { icon: Clock, label: 'Working Hours', value: '24/7' },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="text-center"
//               >
//                 <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section ref={ref} className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Meet our team of experienced engineers and consultants
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'John Smith',
//                 role: 'Senior Mechanical Engineer',
//                 image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//               },
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Project Manager',
//                 image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'Design Engineer',
//                 image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//               },
//             ].map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                   <p className="text-gray-600">{member.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedIn: string;
  github: string;
  details: string;
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); // Define the type explicitly

  const teamMembers: TeamMember[] = [
    {
      name: 'John Smith',
      role: 'Senior Mechanical Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'john.smith@example.com',
      linkedIn: 'https://linkedin.com/in/johnsmith',
      github: 'https://github.com/johnsmith',
      details: 'John has over 10 years of experience in mechanical engineering, focusing on project management and system optimization.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'sarah.johnson@example.com',
      linkedIn: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson',
      details: 'Sarah is an expert project manager with a strong background in mechanical design and client coordination.'
    },
    {
      name: 'Michael Chen',
      role: 'Design Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      email: 'michael.chen@example.com',
      linkedIn: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
      details: 'Michael is a creative design engineer with expertise in 3D modeling and product development.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Leading the way in mechanical engineering solutions with innovation and expertise
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ icon: Award, label: 'Years Experience', value: '15+' },
              { icon: Users, label: 'Expert Engineers', value: '50+' },
              { icon: CheckCircle, label: 'Projects Completed', value: '500+' },
              { icon: Clock, label: 'Working Hours', value: '24/7' }]
              .map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced engineers and consultants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <button
                    onClick={() => setSelectedMember(member)} // Fix the type error
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Connect
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-96 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-48 object-cover mt-4 mb-6"
            />
            <p className="text-gray-700 mb-4">{selectedMember.details}</p>
            <p className="text-gray-600">Email: {selectedMember.email}</p>
            <p className="text-gray-600">LinkedIn: <a href={selectedMember.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></p>
            <p className="text-gray-600">GitHub: <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
