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

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Award, Users, Clock, CheckCircle } from 'lucide-react';

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   email: string;
//   linkedIn: string;
//   github: string;
//   details: string;
// }

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

//   // Disable scrolling when modal is open
//   useEffect(() => {
//     if (selectedMember) {
//       document.body.classList.add('overflow-hidden');
//     } else {
//       document.body.classList.remove('overflow-hidden');
//     }
    
//     return () => document.body.classList.remove('overflow-hidden');
//   }, [selectedMember]);

//   const teamMembers: TeamMember[] = [
//     {
//       name: 'Tirth Prajapati',
//       role: 'Senior Mechanical Engineer',
//       image: 'server/uploads/vraj.jpg',
//       email: 'john.smith@example.com',
//       linkedIn: 'https://linkedin.com/in/johnsmith',
//       github: 'https://github.com/johnsmith',
//       details: 'John has over 10 years of experience in mechanical engineering, focusing on project management and system optimization.'
//     },
//     {
//       name: 'Romil Prajapati',
//       role: 'Project Manager',
//       image: 'server/uploads/vraj.jpg',
//       email: 'sarah.johnson@example.com',
//       linkedIn: 'https://linkedin.com/in/sarahjohnson',
//       github: 'https://github.com/sarahjohnson',
//       details: 'Sarah is an expert project manager with a strong background in mechanical design and client coordination.'
//     }
//   ];

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
//             {[{ icon: Award, label: 'Years Experience', value: '15+' },
//               { icon: Users, label: 'Expert Engineers', value: '50+' },
//               { icon: CheckCircle, label: 'Projects Completed', value: '500+' },
//               { icon: Clock, label: 'Working Hours', value: '24/7' }]
//               .map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   className="text-center"
//                 >
//                   <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//                   <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
//                   <p className="text-gray-600">{stat.label}</p>
//                 </motion.div>
//               ))}
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

//           <div className="flex justify-center gap-16">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-80"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                   <p className="text-gray-600">{member.role}</p>
//                   <button
//                     onClick={() => setSelectedMember(member)}
//                     className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//                   >
//                     Connect
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Member Details Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg w-96 p-6 relative">
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
//               <button
//                 onClick={() => setSelectedMember(null)}
//                 className="text-gray-600 hover:text-gray-900 text-3xl"
//               >
//                 &times;
//               </button>
//             </div>
//             <img
//               src={selectedMember.image}
//               alt={selectedMember.name}
//               className="w-full h-48 object-cover mt-4 mb-6"
//             />
//             <p className="text-gray-700 mb-4">{selectedMember.details}</p>
//             <p className="text-gray-600">Email: {selectedMember.email}</p>
//             <p className="text-gray-600">LinkedIn: <a href={selectedMember.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></p>
//             <p className="text-gray-600">GitHub: <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Award, Users, Clock, CheckCircle } from 'lucide-react';
// import Navbar from '../components/Navbar';

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   email: string;
//   linkedIn: string;
//   github: string;
//   details: string;
// }

// const About = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

//   // Disable scrolling when the modal is open
//   useEffect(() => {
//     if (selectedMember) document.body.classList.add('overflow-hidden');
//     else document.body.classList.remove('overflow-hidden');
//     return () => document.body.classList.remove('overflow-hidden');
//   }, [selectedMember]);

//   const teamMembers: TeamMember[] = [
//     {
//       name: 'Tirth Prajapati',
//       role: 'Senior Mechanical Engineer',
//       image: 'server/uploads/tirth.jpg',
//       email: 'tirth1055@gmail.com',
//       linkedIn: 'https://linkedin.com/in/johnsmith',
//       github: 'https://github.com/johnsmith',
//       details: 'John has over 10 years of experience in mechanical engineering, focusing on project management and system optimization.'
//     },
//     {
//       name: 'Romil Prajapati',
//       role: 'Project Manager',
//       image: 'server/uploads/romil.jpg',
//       email: 'romil0094@gmail.com',
//       linkedIn: 'https://linkedin.com/in/sarahjohnson',
//       github: 'https://github.com/sarahjohnson',
//       details: 'Sarah is an expert project manager with a strong background in mechanical design and client coordination.'
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Background */}
// {/* Hero Section */}
// <section
//   className="relative h-[100vh] bg-cover bg-center"
//   style={{ backgroundImage: "url('server/uploads/bg.jpg')" }}
// >
//   <Navbar/>

//   {/* Dark Overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-8 lg:px-24">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-white max-w-3xl"
//     >
//       {/* Title */}
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>

//       {/* Subtitle */}
//       <p className="text-lg leading-relaxed max-w-2xl mb-8">
//         Delivering innovative mechanical solutions with precision and expertise.
//       </p>

//       {/* CTA Button */}
//       {/* <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
//         Learn More →
//       </button> */}
//     </motion.div>
//   </div>
// </section>


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
//                 animate={{ opacity: 1, y: 0 }}
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

//           <div className="flex justify-center gap-16 flex-wrap">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-80 cursor-pointer"
//                 onClick={() => setSelectedMember(member)}
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

//       {/* Member Details Modal */}
//       {selectedMember && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//         >
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.8 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-lg overflow-hidden shadow-2xl w-[90vw] max-w-4xl p-8 relative"
//           >
//             <button
//               onClick={() => setSelectedMember(null)}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
//             >
//               &times;
//             </button>
//             <div className="flex flex-col md:flex-row">
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 className="w-full md:w-1/2 h-96 object-cover rounded-lg"
//               />
//               <div className="md:ml-8 mt-6 md:mt-0">
//                 <h3 className="text-3xl font-bold mb-4">{selectedMember.name}</h3>
//                 <p className="text-lg mb-4">{selectedMember.details}</p>
//                 <p>Email: {selectedMember.email}</p>
//                 <p>LinkedIn: <a href={selectedMember.linkedIn} className="text-blue-600">View Profile</a></p>
//                 <p>GitHub: <a href={selectedMember.github} className="text-blue-600">View Profile</a></p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default About;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  Users,
  Clock,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', !!selectedMember);
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedMember]);

  const teamMembers: TeamMember[] = [
    {
      name: 'Tirth Prajapati',
      role: 'Senior Mechanical Engineer',
      image: '/uploads/tirth.jpg',
      email: 'tirth1055@gmail.com',
      linkedIn: 'https://linkedin.com/in/johnsmith',
      github: 'https://github.com/johnsmith',
      details:
        'Tirth has over 10 years of experience in mechanical engineering, focusing on project management and system optimization.',
    },
    {
      name: 'Romil Prajapati',
      role: 'Project Manager',
      image: '/uploads/romil.jpg',
      email: 'romil0094@gmail.com',
      linkedIn: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson',
      details:
        'Romil is an expert project manager with a strong background in mechanical design and client coordination.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center px-4 lg:px-12">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <div className="bg-[#ff8c42] text-white px-4 py-2 rounded-full inline-block mb-4 text-sm uppercase letter-spacing-[1px]">
            We drive success for businesses worldwide!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unlocking Tomorrow's Tech Today!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our mission is to empower digital disruptors to see the invisible and achieve the impossible with
            cutting-edge digital solutions.
          </p>
          <button
            className="bg-[#ff8c42] text-white px-6 py-3 rounded-full text-base font-semibold uppercase letter-spacing-[1px] hover:bg-[#e07a38] transition-colors duration-300"
            onClick={handleContactClick}
          >
            Let's Talk
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'Years Experience', value: '15+' },
              { icon: Users, label: 'Expert Engineers', value: '50+' },
              { icon: CheckCircle, label: 'Projects Completed', value: '500+' },
              { icon: Clock, label: 'Working Hours', value: '24/7' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-white"
              >
                <stat.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
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

          <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 w-full max-w-xs cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-4xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full md:w-1/2 h-96 object-cover rounded-lg"
              />
              <div className="md:ml-8 mt-6 md:mt-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{selectedMember.role}</p>
                  <p className="mb-4 text-gray-800">{selectedMember.details}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 transition"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a
                    href={selectedMember.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 transition"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;