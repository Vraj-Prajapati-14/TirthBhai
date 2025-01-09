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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import ProjectsPage from './pages/admin/ProjectsPage';
import AdminDashboard from './pages/admin/Dashboard';
import { AuthProvider } from './context/AuthContext';
import InquiryPage from './pages/admin/inqruirypage';
import ChatWithAI from './pages/chatwithai';

// import { Webchat, WebchatProvider, useClient } from '@botpress/webchat'; // Import Botpress Webchat
// import { theme } from './theme'; // Assuming you have your theme config
// import './style.css'; // Make sure the style is applied

// const clientId = 'f6aa57b6-4a0c-4f70-8e47-654b64d54499'; // Replace with your Botpress client ID

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Conditionally render Navbar and Footer based on the current route */}
          <AppNavbarAndFooter />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/projects" element={<ProjectsPage />} />
              <Route path="/admin/inquiries" element={<InquiryPage />} />
              <Route path="/admin/team" element={<AdminDashboard />} />
              <Route path="/admin/settings" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />

          {/* Add WebchatProvider to wrap the Botpress Webchat */}
          {/* <ChatWithAI/> */}
          {/* <BotpressWebchat /> */}
        </div>
      </Router>
    </AuthProvider>
  );
};

// Botpress Webchat Component
// const BotpressWebchat = () => {
//   const client = useClient({ clientId });

//   return (
//     <WebchatProvider client={client} >
//       <Webchat />
//     </WebchatProvider>
//   );
// };

// This component will conditionally render Navbar and Footer based on the current route
const AppNavbarAndFooter = () => {
  const location = useLocation();

  // Check if the current route is an Admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Only render Navbar and Footer if not on an Admin route
  return !isAdminRoute ? (
    <>
      <Navbar />
      {/* Other Navbar-related content */}
      <ChatWithAI/>
    </>
  ) : null;
};

export default App;
