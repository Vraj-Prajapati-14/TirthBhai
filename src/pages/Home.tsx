// // import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ChevronRight, Settings, Users, BarChart } from 'lucide-react';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// const Home = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
//           <div className="text-white">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold mb-6"
//             >
//               Engineering Excellence
//               <br />
//               Through Innovation
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl mb-8 max-w-2xl"
//             >
//               Leading mechanical engineering consultancy delivering innovative solutions
//               for complex industrial challenges.
//             </motion.p>
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full
//                 flex items-center space-x-2 transition duration-300"
//             >
//              <span>
//   <a href="#services" className="flex items-center">
//     Enquire Now
//     <ChevronRight className="w-5 h-5" />
//   </a>
// </span>

//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={ref} className="py-20 bg-gray-50" id="services">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive mechanical engineering solutions tailored to your needs
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Settings className="w-12 h-12 text-blue-600" />,
//                 title: 'Mechanical Design',
//                 description: 'Expert mechanical design services for various industrial applications',
//               },
//               {
//                 icon: <Users className="w-12 h-12 text-blue-600" />,
//                 title: 'Consultation',
//                 description: 'Professional consultation for mechanical engineering projects',
//               },
//               {
//                 icon: <BarChart className="w-12 h-12 text-blue-600" />,
//                 title: 'Analysis',
//                 description: 'Comprehensive mechanical analysis and optimization services',
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <About></About>
//       <Projects></Projects>
//       <Contact></Contact>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ChevronRight, Settings, Users, BarChart, Wind, Box, Copy, Repeat, Layers, LayoutDashboard, Package, Hammer } from 'lucide-react';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import BlogViewer from './Blog';
// import { Link } from "react-scroll";
// import Navbar from '../components/Navbar';

// const Home = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       {/* <section className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
//           <div className="text-white">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold mb-6"
//             >
//               Engineering Excellence
//               <br />
//               Through Innovation
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl mb-8 max-w-2xl"
//             >
//               Leading mechanical engineering consultancy delivering innovative solutions
//               for complex industrial challenges.
//             </motion.p>
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition duration-300"
//             >
//               <span>
//                 <a href="#services" className="flex items-center">
//                   Enquire Now
//                   <ChevronRight className="w-5 h-5" />
//                 </a>
//               </span>
//             </motion.button>
//           </div>
//         </div>
//       </section> */}

// <section
//   className="relative h-[100vh] bg-cover bg-center"
//   style={{
//     backgroundImage: "url('server/uploads/bg.jpg')",
//   }}
// >
//   <Navbar/>
//   {/* Background overlay */}
//   <div className="absolute inset-0 bg-black opacity-75"></div>
  
//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
//     <div className="text-white">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl md:text-6xl font-bold mb-6"
//       >
//         Engineering Excellence
//         <br />
//         Through Innovation
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-xl mb-8 max-w-2xl"
//       >
//         Leading mechanical engineering consultancy delivering innovative solutions
//         for complex industrial challenges.
//       </motion.p>
//       <motion.button
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, delay: 0.4 }}
//   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-300"
// >
//   <Link
//     to="services"
//     smooth={true}
//     duration={800}
//     className="flex items-center space-x-2"
//   >
//     <span>Enquire Now</span>
//     <ChevronRight className="w-4 h-4" />
//   </Link>
// </motion.button>

//     </div>
//   </div>
// </section>


//       {/* Services Section */}
//       <section ref={ref} className="py-20 bg-gray-50" id="services">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive mechanical engineering solutions tailored to your needs
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {[
//               // {
//               //   icon: <Settings className="w-12 h-12 text-blue-600" />,
//               //   title: 'Mechanical Design',
//               //   description: 'Expert mechanical design services for various industrial applications.',
//               // },
//               // {
//               //   icon: <Users className="w-12 h-12 text-blue-600" />,
//               //   title: 'Consultation',
//               //   description: 'Professional consultation for mechanical engineering projects.',
//               // },
//               // {
//               //   icon: <BarChart className="w-12 h-12 text-blue-600" />,
//               //   title: 'Analysis',
//               //   description: 'Comprehensive mechanical analysis and optimization services.',
//               // },
//               {
//                 icon: <Wind className="w-12 h-12 text-blue-600" />,
//                 title: 'HVAC Design & Drafting',
//                 description: 'Customized HVAC design and drafting solutions for your needs.',
//               },
//               {
//                 icon: <Box className="w-12 h-12 text-blue-600" />,
//                 title: 'Product Design',
//                 description: 'Innovative product design for diverse industries.',
//               },
//               {
//                 icon: <Copy className="w-12 h-12 text-blue-600" />,
//                 title: 'Reverse Engineering',
//                 description: 'Precise reverse engineering and re-design services.',
//               },
//               {
//                 icon: <Layers className="w-12 h-12 text-blue-600" />,
//                 title: 'FEA',
//                 description: 'Advanced Finite Element Analysis for structural integrity.',
//               },
//               {
//                 icon: <Package className="w-12 h-12 text-blue-600" />,
//                 title: 'Custom 3D Prototyping',
//                 description: 'High-quality 3D prototyping tailored to your requirements.',
//               },
//               {
//                 icon: <LayoutDashboard className="w-12 h-12 text-blue-600" />,
//                 title: 'DFM & DFMA Drawings',
//                 description: 'Detailed DFM & DFMA drawings for efficient manufacturing.',
//               },
//               {
//                 icon: <Hammer className="w-12 h-12 text-blue-600" />,
//                 title: 'Lean Manufacturing Consulting',
//                 description: 'Optimize processes with our Lean Manufacturing expertise.',
//               },
//               {
//                 icon: <Repeat className="w-12 h-12 text-blue-600" />,
//                 title: 'BIM Services',
//                 description: 'Building Information Modeling for construction projects.',
//               },
//               {
//                 icon: <Layers className="w-12 h-12 text-blue-600" />,
//                 title: 'Software Training',
//                 description: 'Specialized training on engineering and CAD software.',
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* <BlogViewer/>
//       <About />
//       <Projects />
//       <Contact /> */}
//     </div>
//   );
// };

// export default Home;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, Wind, Box, Copy, Repeat, Layers, LayoutDashboard, Package, Hammer, User } from "lucide-react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reviews = [
    { name: "John Doe", review: "Excellent service! Highly recommended.", rating: 5 },
    { name: "Jane Smith", review: "Very professional and timely delivery.", rating: 4 },
    { name: "Michael Lee", review: "Great experience working with them!", rating: 5 },
    { name: "Sarah Brown", review: "Good service but could improve communication.", rating: 4 },
  ];

  const reviewCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('public/uploads/bg.jpg')" }}>
        <Navbar />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold mb-6">
              Engineering Excellence <br /> Through Innovation
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl mb-8 max-w-2xl">
              Leading mechanical engineering consultancy delivering innovative solutions for complex industrial challenges.
            </motion.p>
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-300">
              <Link to="services" smooth={true} duration={800} className="flex items-center space-x-2">
                <span>Enquire Now</span> <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive mechanical engineering solutions tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wind className="w-12 h-12 text-blue-600" />, title: "HVAC Design & Drafting", description: "Customized HVAC design and drafting solutions for your needs." },
              { icon: <Box className="w-12 h-12 text-blue-600" />, title: "Product Design", description: "Innovative product design for diverse industries." },
              { icon: <Copy className="w-12 h-12 text-blue-600" />, title: "Reverse Engineering", description: "Precise reverse engineering and re-design services." },
              { icon: <Layers className="w-12 h-12 text-blue-600" />, title: "FEA", description: "Advanced Finite Element Analysis for structural integrity." },
              { icon: <Package className="w-12 h-12 text-blue-600" />, title: "Custom 3D Prototyping", description: "High-quality 3D prototyping tailored to your requirements." },
              { icon: <LayoutDashboard className="w-12 h-12 text-blue-600" />, title: "DFM & DFMA Drawings", description: "Detailed DFM & DFMA drawings for efficient manufacturing." },
              { icon: <Hammer className="w-12 h-12 text-blue-600" />, title: "Lean Manufacturing Consulting", description: "Optimize processes with our Lean Manufacturing expertise." },
              { icon: <Repeat className="w-12 h-12 text-blue-600" />, title: "BIM Services", description: "Building Information Modeling for construction projects." },
              { icon: <Layers className="w-12 h-12 text-blue-600" />, title: "Software Training", description: "Specialized training on engineering and CAD software." },
            ].map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.1 }} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
    <Slider {...reviewCarouselSettings}>
      {reviews.map((review, index) => (
        <div key={index} className="mx-4 p-6 bg-white text-gray-900 rounded-xl shadow-lg border border-gray-300">
          {/* User Info */}
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-500" />
            </div>
            <h4 className="ml-4 text-lg font-semibold">{review.name}</h4>
          </div>

          {/* Rating & Title */}
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
            <h3 className="ml-2 font-bold">Decent product</h3>
          </div>

          {/* Review Metadata */}
          <p className="text-sm text-gray-500 mb-1">
            Reviewed in {review.location} on {review.date}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            Style Name: {review.style} <span className="text-orange-600 font-semibold"> | Verified Purchase</span>
          </p>

          {/* Review Content */}
          <p className="text-gray-700 mt-4">{review.review}</p>

          {/* Helpful Info */}
          <p className="mt-4 text-sm text-gray-600">{review.helpful} people found this helpful</p>
        </div>
      ))}
    </Slider>
  </div>
</section>


    </div>
  );
};

export default Home;
