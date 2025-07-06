// // import { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Menu, X, Wrench } from 'lucide-react';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-white shadow-lg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16">
// //           <div className="flex items-center">
// //             <Link to="/" className="flex items-center">
// //               <Wrench className="h-8 w-8 text-blue-600" />
// //               <span className="ml-2 text-xl font-bold text-gray-800">MechConsult</span>
// //             </Link>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
// //             <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
// //             <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
// //             <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="text-gray-600 hover:text-blue-600"
// //             >
// //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden">
// //           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //             <Link
// //               to="/"
// //               className="block px-3 py-2 text-gray-600 hover:text-blue-600"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/about"
// //               className="block px-3 py-2 text-gray-600 hover:text-blue-600"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               About
// //             </Link>
// //             <Link
// //               to="/projects"
// //               className="block px-3 py-2 text-gray-600 hover:text-blue-600"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Projects
// //             </Link>
// //             <Link
// //               to="/contact"
// //               className="block px-3 py-2 text-gray-600 hover:text-blue-600"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Contact
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Wrench } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <Wrench className="h-8 w-8 text-blue-500" />
//               <span className="ml-2 text-xl font-bold text-white">MechConsult</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Home</Link>
//             <Link to="/about" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">About</Link>
//             <Link to="/services" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Services</Link>
//             <Link to="/projects" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Projects</Link>
//             <Link to="/contact" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Contact</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-blue-500 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 shadow-lg">
//           <div className="px-4 pt-4 pb-4 space-y-1">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/projects"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Wrench, ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <Wrench className="h-8 w-8 text-blue-500" />
//               <span className="ml-2 text-xl font-bold text-white">MechConsult</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Home</Link>
//             <Link to="/about" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">About</Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="text-gray-300 hover:text-blue-500 font-medium flex items-center transition duration-200 focus:outline-none"
//               >
//                 Services
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full mt-2 bg-gray-800 rounded-md shadow-lg w-56">
//                   <ul className="py-1">
//                     <li>
//                       <Link
//                         to="/services/sheet-metal-design"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Sheet Metal Design
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/hvac-design"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         HVAC Design & Drafting
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/product-design"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Product Design
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/reverse-engineering"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Reverse Engineering
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/fea"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         FEA
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/custom-3d-prototyping"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Custom 3D Prototyping
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/3d-rendering"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         3D Rendering
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/software-training"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Software Training
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/lean-manufacturing"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Lean Manufacturing & Process Improvement
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/dfm-dfma-drawings"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         DFM & DFMA Drawings
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services/bim-services"
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         BIM Services
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <Link to="/projects" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Projects</Link>
//             <Link to="/contact" className="text-gray-300 hover:text-blue-500 font-medium transition duration-200">Contact</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-blue-500 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 shadow-lg">
//           <div className="px-4 pt-4 pb-4 space-y-1">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/projects"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Wrench, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const closeDropdown = () => setIsDropdownOpen(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <Wrench className="h-8 w-8 text-blue-500" />
//               <span className="ml-2 text-xl font-bold text-white">
//                 MechConsult
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center justify-end space-x-8 w-full">
//             <Link
//               to="/"
//               onMouseEnter={closeDropdown}
//               className="text-white hover:text-blue-500 font-medium transition duration-200"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               onMouseEnter={closeDropdown}
//               className="text-white hover:text-blue-500 font-medium transition duration-200"
//             >
//               About
//             </Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 className="text-white hover:text-blue-500 font-medium flex items-center transition duration-200 focus:outline-none"
//               >
//                 Services
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {isDropdownOpen && (
//                 <div
//                   onMouseLeave={closeDropdown}
//                   className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-72"
//                 >
//                   <ul className="py-2">
//                     {[
//                       "Sheet Metal Design",
//                       "HVAC Design & Drafting",
//                       "Product Design",
//                       "Reverse Engineering",
//                       "FEA",
//                       "Custom 3D Prototyping",
//                       "3D Rendering",
//                       "Software Training",
//                       "Lean Manufacturing & Process Improvement Consulting",
//                       "DFM & DFMA Drawings",
//                       "BIM Services",
//                       "Reverse Engineering & Re-design Engineering",
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <Link
//                           to={`/services/${service
//                             .toLowerCase()
//                             .replace(/\s+/g, "-")}`}
//                           className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                           onClick={closeDropdown}
//                         >
//                           {service}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/projects"
//               onMouseEnter={closeDropdown}
//               className="text-white hover:text-blue-500 font-medium transition duration-200"
//             >
//               Projects
//             </Link>
//             <Link
//               to="/contact"
//               onMouseEnter={closeDropdown}
//               className="text-white hover:text-blue-500 font-medium transition duration-200"
//             >
//               Contact
//             </Link>

//             {/* LinkedIn Button */}
//             <a
//               href="https://www.linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-auto"
//             >
//               <div className="flex items-center justify-center bg-white text-blue-600 font-bold text-lg rounded-md h-6 w-6">
//                 in
//               </div>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-blue-500 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 shadow-lg">
//           <div className="px-4 pt-4 pb-4 space-y-1">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition"
//               >
//                 Services
//               </button>
//               {isDropdownOpen && (
//                 <div className="mt-2 bg-gray-800 rounded-md shadow-lg">
//                   <ul className="py-1">
//                     {[
//                       "Sheet Metal Design",
//                       "hvac design",
//                       "Product Design",
//                       "Reverse Engineering",
//                       "FEA",
//                       "Custom 3D Prototyping",
//                       "3D Rendering",
//                       "Software Training",
//                       "lean manufacturing",
//                       "dfm dfmadrawings",
//                       "BIM Services",
//                       "reverse engineering redesign",
//                     ].map((service, index) => (
//                       <li key={index}>
//                         <Link
//                          to={`/services/${service
//                           .toLowerCase()
//                           .replace(/\s+/g, "-")
//                           .replace(/[^\w-]/g, "")}`}
                        
//                           className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {service}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar; 
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Wrench,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

// Grouped Services
const serviceCategories = [
  {
    category: "Mechanical Design & Engineering",
    services: [
      { name: "Sheet Metal Design", route: "sheet-metal-design" },
      { name: "Product Design", route: "product-design" },
      { name: "Reverse Engineering & Re-design Engineering", route: "reverse-engineering-redesign" },
      { name: "DFM & DFMA Drawings", route: "dfm-dfma-drawings" },
    ],
  },
  {
    category: "HVAC & Building Systems",
    services: [
      { name: "HVAC Design & Drafting", route: "hvac-design" },
      { name: "BIM Services", route: "bim-services" },
    ],
  },
  {
    category: "Simulation & Analysis",
    services: [{ name: "FEA", route: "fea" }],
  },
  {
    category: "Prototyping & Visualization",
    services: [
      { name: "Custom 3D Prototyping", route: "custom-3d-prototyping" },
      { name: "3D Rendering", route: "3d-rendering" },
    ],
  },
  {
    category: "Software & Training",
    services: [{ name: "Software Training", route: "software-training" }],
  },
  {
    category: "Operational Consulting",
    services: [
      {
        name: "Lean Manufacturing & Process Improvement Consulting",
        route: "lean-manufacturing",
      },
    ],
  },
];

const Navbar = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const textColor = variant === "light" || isAboutPage ? "text-black" : "text-white";
  const hoverColor = variant === "light" || isAboutPage ? "hover:text-blue-600" : "hover:text-blue-500";
  const dropdownBg = variant === "light" || isAboutPage ? "bg-gray-100" : "bg-gray-800";
  const dropdownHover = variant === "light" || isAboutPage ? "hover:bg-gray-200" : "hover:bg-gray-700";

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Wrench className={`h-8 w-8 text-blue-500`} />
            <span className={`ml-2 text-xl font-bold ${textColor}`}>MechConsult</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end space-x-8 w-full">
            {["Home", "About"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`${textColor} ${hoverColor} font-medium transition`}
              >
                {item}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${textColor} ${hoverColor} font-medium flex items-center transition`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className={`absolute top-full mt-2 ${dropdownBg} rounded-lg shadow-lg w-80 p-3 z-50`}>
                  <ul className="space-y-2">
                    {serviceCategories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => toggleCategory(index)}
                          className={`w-full text-left px-4 py-2 text-blue-500 font-semibold flex justify-between items-center ${dropdownHover} rounded transition`}
                        >
                          {category.category}
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${
                              activeCategory === index ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {activeCategory === index && (
                          <ul className="ml-4 mt-1">
                            {category.services.map((service, idx) => (
                              <li key={idx}>
                                <Link
                                  to={`/services/${service.route}`}
                                  className={`block px-4 py-1 text-gray-700 ${dropdownHover} hover:text-blue-700 rounded`}
                                  onClick={() => {
                                    setIsDropdownOpen(false);
                                    setActiveCategory(null);
                                  }}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {["Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`${textColor} ${hoverColor} font-medium transition`}
              >
                {item}
              </Link>
            ))}

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <div className="bg-white text-blue-600 font-bold text-sm rounded-md h-6 w-6 flex items-center justify-center">
                in
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} ${hoverColor} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${dropdownBg} shadow-lg`}>
          <div className="px-4 pt-4 pb-4 space-y-1">
            {["Home", "About"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`block px-4 py-2 ${textColor} ${dropdownHover} rounded`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Services Dropdown Accordion */}
            <div className="mt-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full text-left px-4 py-3 ${textColor} font-medium flex items-center justify-between rounded-md ${dropdownHover} transition`}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className={`mt-2 ${dropdownBg} rounded-md shadow-lg`}>
                  <ul className="py-2 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => toggleCategory(index)}
                          className={`w-full text-left px-6 py-2 text-blue-500 font-semibold flex justify-between items-center ${dropdownHover} rounded transition`}
                        >
                          {category.category}
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${
                              activeCategory === index ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {activeCategory === index && (
                          <ul className="ml-4 mt-1">
                            {category.services.map((service, idx) => (
                              <li key={idx}>
                                <Link
                                  to={`/services/${service.route}`}
                                  className={`block px-6 py-1 text-gray-700 ${dropdownHover} hover:text-blue-700 rounded`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsDropdownOpen(false);
                                    setActiveCategory(null);
                                  }}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {["Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`block px-4 py-2 ${textColor} ${dropdownHover} rounded`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
