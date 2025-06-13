// // import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import AdminLogin from './pages/admin/AdminLogin';
// import AdminDashboard from './pages/admin/Dashboard';
// import { AuthProvider } from './context/AuthContext';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//               {/* <Route path="/admin" element={<AdminLogin />} />
//               <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

// <Route path="/admin" element={<AdminLogin />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
      
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import AdminLogin from './pages/admin/AdminLogin';
// import ProjectsPage from './pages/admin/ProjectsPage';
// import AdminDashboard from './pages/admin/Dashboard';
// import { AuthProvider } from './context/AuthContext';
// import InquiryPage from './pages/admin/inqruirypage';
// import ChatWithAI from './pages/chatwithai';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           {/* Conditionally render Navbar and Footer based on the current route */}
//           <AppNavbarAndFooter />
          
//            <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
              
//               {/* Admin Routes */}
              
//               <Route path="/admin" element={<AdminLogin />} />
//               <Route path="/admin/dashboard" element={<AdminDashboard />} />
//               <Route path="/admin/projects" element={<ProjectsPage />} />
//               <Route path="/admin/inquiries" element={<InquiryPage />} />
//               <Route path="/admin/team" element={<AdminDashboard />} />
//               <Route path="/admin/settings" element={<AdminDashboard />} />
//             </Routes>
//           </main>
//           <Footer />
//           <ChatWithAI/>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// // This component will conditionally render Navbar and Footer based on the current route
// const AppNavbarAndFooter = () => {
//   const location = useLocation();

//   // Check if the current route is an Admin route
//   const isAdminRoute = location.pathname.startsWith('/admin');

//   // Only render Navbar and Footer if not on an Admin route
//   return !isAdminRoute ? (
//     <>
//       <Navbar />
     
//     </>
//   ) : null;
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import AdminLogin from './pages/admin/AdminLogin';
// import ProjectsPage from './pages/admin/ProjectsPage';
// import AdminDashboard from './pages/admin/Dashboard';
// import { AuthProvider } from './context/AuthContext';
// import InquiryPage from './pages/admin/inqruirypage';
// import  { BlogList } from './pages/admin/blogpage';
// import BlogViewer from './pages/Blog';


// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           {/* Conditionally render Navbar based on the current route */}
//           <AppNavbar />

//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/blogs" element={<BlogViewer />} />

              
//               {/* Admin Routes */}
//               <Route path="/admin" element={<AdminLogin />} />
//               <Route path="/admin/dashboard" element={<AdminDashboard />} />
//               <Route path="/admin/projects" element={<ProjectsPage />} />
//               <Route path="/admin/inquiries" element={<InquiryPage />} />
//               <Route path="/admin/team" element={<AdminDashboard />} />
//               <Route path="/admin/blog" element={<BlogList />} />
//               <Route path="/admin/settings" element={<AdminDashboard />} />





//             </Routes>
//           </main>

//           {/* Conditionally render Footer based on the current route */}
//           <AppFooter />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// // This component will conditionally render Navbar based on the current route
// const AppNavbar = () => {
//   const location = useLocation();

//   // Check if the current route is an Admin route
//   const isAdminRoute = location.pathname.startsWith('/admin');

//   // Only render Navbar if not on an Admin route
//   return !isAdminRoute ? <Navbar /> : null;
// };

// // This component will conditionally render Footer based on the current route
// const AppFooter = () => {
//   const location = useLocation();

//   // Check if the current route is an Admin route
//   const isAdminRoute = location.pathname.startsWith('/admin');

//   // Only render Footer if not on an Admin route
//   return !isAdminRoute ? <Footer /> : null;
// };

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation , useMatch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import ProjectsPage from './pages/admin/ProjectsPage';
import AdminDashboard from './pages/admin/Dashboard';
import InquiryPage from './pages/admin/inqruirypage';
import { BlogList } from './pages/admin/blogpage';
import BlogViewer from './pages/Blog';
import NotFound from './pages/NotFound'; // 404 Page

// Service Pages Import
import SheetMetalDesign from './pages/allservices/SheetMetalDesign';
import HVACDesignDrafting from './pages/allservices/HVACDesignDrafting';
import ProductDesign from './pages/allservices/ProductDesign';
import ReverseEngineering from './pages/allservices/ReverseEngineering';
import FEA from './pages/allservices/FEA';
import Custom3DPrototyping from './pages/allservices/Custom3DPrototyping';
import Rendering3D from './pages/allservices/Rendering3D';
import SoftwareTraining from './pages/allservices/SoftwareTraning';
import LeanManufacturing from './pages/allservices/LeanManufacturing';
import DFMDFMADrawings from './pages/allservices/DFMDFMADrawings';
import BIMServices from './pages/allservices/BIMServices';
import ReverseEngineeringReDesign from './pages/allservices/ReverseEngineeringRedesign';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <AppNavbar />

          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<BlogViewer />} />

              {/* Services Routes */}
              <Route path="/services/sheet-metal-design" element={<SheetMetalDesign />} />
              <Route path="/services/hvac-design" element={<HVACDesignDrafting />} />
              <Route path="/services/product-design" element={<ProductDesign />} />
              <Route path="/services/reverse-engineering" element={<ReverseEngineering />} />
              <Route path="/services/fea" element={<FEA />} />
              <Route path="/services/custom-3d-prototyping" element={<Custom3DPrototyping />} />
              <Route path="/services/3d-rendering" element={<Rendering3D />} />
              <Route path="/services/software-training" element={<SoftwareTraining />} />
              <Route path="/services/lean-manufacturing" element={<LeanManufacturing />} />
              <Route path="/services/dfm-dfma-drawings" element={<DFMDFMADrawings />} />
              <Route path="/services/bim-services" element={<BIMServices />} />
              <Route path="/services/reverse-engineering-redesign" element={<ReverseEngineeringReDesign />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/projects" element={<ProjectsPage />} />
              <Route path="/admin/inquiries" element={<InquiryPage />} />
              <Route path="/admin/team" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<BlogList />} />
              <Route path="/admin/settings" element={<AdminDashboard />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound isAdminRoute={false} />} />
            </Routes>
          </main>

          <AppFooter />
        </div>
      </Router>
    </AuthProvider>
  );
};

// Conditionally render Navbar based on the current route
const AppNavbar = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isNotFoundPage = useMatch('*');

  // Hide Navbar for Admin and 404 pages
  return !isAdminRoute && !isNotFoundPage ? <Navbar /> : null;
};

const AppFooter = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return !isAdminRoute ? <Footer /> : null;
};

export default App;
