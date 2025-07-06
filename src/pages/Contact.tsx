// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/contact', formData);
//       setStatus('Message sent successfully!');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.');
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Contact Info Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Contact Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl max-w-2xl"
//           >
//             Get in touch with our team of experts
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-16">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="w-6 h-6 text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Address</h3>
//                     <p className="text-gray-600">123 Engineering St, Tech City, TC 12345</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Phone className="w-6 h-6 text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Phone</h3>
//                     <p className="text-gray-600">+1 234 567 8900</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Mail className="w-6 h-6 text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Email</h3>
//                     <p className="text-gray-600">info@mechconsult.com</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {status && (
//                   <div className={`p-4 rounded-md ${status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                     {status}
//                   </div>
//                 )}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin } from "lucide-react";
// import axios from "axios";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/contact", formData);
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } catch (error) {
//       setStatus("Failed to send message. Please try again.");
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Contact Info Section */}
//       <section className="bg-blue-900 text-white py-16 text-center">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Contact Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto"
//           >
//             Get in touch with our team of experts
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//             <div className="space-y-6 text-gray-700">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="w-6 h-6 text-blue-600 mt-1" />
//                 <div>
//                   <h3 className="font-semibold">Address</h3>
//                   <p>123 Engineering St, Tech City, TC 12345</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Phone className="w-6 h-6 text-blue-600 mt-1" />
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p>+1 234 567 8900</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Mail className="w-6 h-6 text-blue-600 mt-1" />
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p>info@mechconsult.com</p>
//                 </div>
//               </div>

//               {/* Google Map Section */}
//               <div className="mt-6">
//                 <h3 className="text-xl font-semibold mb-2">🗺️ Our Location</h3>
//                 <div className="w-30 h-50 sm:h-50 md:h-60 lg:h-30 border rounded-md overflow-hidden shadow-lg">
//                   <iframe
//                     title="Company Location"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                     allowFullScreen
//                     src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Engineering+St,+Tech+City,+TC+12345`}
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
//               {status && (
//                 <div className={`p-4 rounded-md text-center ${status.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
//                   {status}
//                 </div>
//               )}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 ></textarea>
//               </div>
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
//                 Send Message
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_085rngm",    
        "template_aqielag",   
        formData,
        "bn8wfDRg8QZNfk3ve"     
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("Email sending error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Info Section */}
      <Navbar/>
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Get in touch with our team of experts
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Forth Avenue Blacktown NSW 2148</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+61 0401260028</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@mechconsult.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              {status && (
                <div className={`p-4 rounded-md text-center ${status.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {status}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
