// import React, { useState } from 'react';
// import { Sidebar } from './Sidebar';
// import { Menu, X } from 'lucide-react';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Mobile Sidebar Toggle */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Main Content */}
//       <main className={`lg:ml-64 min-h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
//         <div className="p-6">
//           {children}
//         </div>
//       </main>

//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Sidebar } from './Sidebar';
// import { Menu, X } from 'lucide-react';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

//       {/* Main Content Area */}
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? 'lg:ml-64 ml-64 blur-sm lg:blur-none' : 'ml-0 lg:ml-64'
//         }`}
//       >
//         {/* Mobile Sidebar Toggle */}
//         <button
//           onClick={toggleSidebar}
//           className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           aria-label="Toggle Sidebar"
//         >
//           {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Main Content */}
//         <main className="p-6">
//           {children}
//         </main>
//       </div>

//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
//           onClick={closeSidebar}
//           aria-hidden="true"
//         />
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'ml-0 lg:ml-64'
        }`}
      >
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Content */}
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};
