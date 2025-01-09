// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FolderKanban, 
//   MessageSquare,
//   Settings,
//   LogOut
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

// export const Sidebar = () => {
//   const { logout } = useAuth();

//   const menuItems = [
//     { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
//     { icon: Users, label: 'Team', path: '/admin/team' },
//     { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
//     { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
//     { icon: Settings, label: 'Settings', path: '/admin/settings' },
//   ];

//   return (
//     <aside className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
//         <nav className="space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//                   isActive 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-800'
//                 }`
//               }
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//       <button
//         onClick={logout}
//         className="absolute bottom-4 left-4 right-4 flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
//       >
//         <LogOut className="w-5 h-5" />
//         <span>Logout</span>
//       </button>
//     </aside>
//   );
// };

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FolderKanban, 
//   MessageSquare,
//   Settings,
//   LogOut
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const { logout } = useAuth();

//   const menuItems = [
//     { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
//     { icon: Users, label: 'Team', path: '/admin/team' },
//     { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
//     { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
//     { icon: Settings, label: 'Settings', path: '/admin/settings' },
//   ];

//   return (
//     <aside 
//       className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40
//         ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
//     >
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-xl font-bold">Admin Panel</h2>
//         </div>

//         <nav className="space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => onClose()}
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//                   isActive 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-800'
//                 }`
//               }
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       <button
//         onClick={logout}
//         className="absolute bottom-4 left-4 right-4 flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
//       >
//         <LogOut className="w-5 h-5" />
//         <span>Logout</span>
//       </button>
//     </aside>
//   );
// };

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FolderKanban, 
//   MessageSquare,
//   Settings,
//   LogOut,
//   Home
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const { logout } = useAuth();

//   const menuItems = [
//     { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
//     { icon: Users, label: 'Team', path: '/admin/team' },
//     { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
//     { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
//     { icon: Settings, label: 'Settings', path: '/admin/settings' },
//   ];

//   const handleLogout = () => {
//     logout();
//     onClose();
//   };

//   return (
//     <aside 
//       className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform 
//         transition-transform duration-300 ease-in-out z-40
//         ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
//     >
//       <div className="flex flex-col h-full p-6">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-xl font-bold">Admin Panel</h2>
//         </div>

//         <nav className="flex-grow space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={onClose}
//               className={({ isActive }) =>
//                 `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
//                 ${isActive 
//                   ? 'bg-blue-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-800'}`
//               }
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="pt-6 border-t border-gray-700">
//           <a
//             href="/"
//             className="flex items-center space-x-3 px-4 py-3 text-gray-300 
//               hover:bg-gray-800 rounded-lg transition-colors mb-4"
//           >
//             <Home className="w-5 h-5" />
//             <span>Back to Site</span>
//           </a>
          
//           <button
//             onClick={handleLogout}
//             className="flex w-full items-center space-x-3 px-4 py-3 text-red-400 
//               hover:bg-red-500/10 rounded-lg transition-colors"
//           >
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Home 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Team', path: '/admin/team' },
    { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
    { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform 
        transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>

        <nav className="flex-grow space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'}`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="pt-6 border-t border-gray-700">
          <a
            href="/"
            className="flex items-center space-x-3 px-4 py-3 text-gray-300 
              hover:bg-gray-800 rounded-lg transition-colors mb-4"
          >
            <Home className="w-5 h-5" />
            <span>Back to Site</span>
          </a>

          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 px-4 py-3 text-red-400 
              hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FolderKanban, 
//   MessageSquare, 
//   Settings, 
//   LogOut, 
//   Home 
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

// export interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const { logout } = useAuth();

//   const menuItems = [
//     { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
//     { icon: Users, label: 'Team', path: '/admin/team' },
//     { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
//     { icon: MessageSquare, label: 'Inquiries', path: '/admin/inquiries' },
//     { icon: Settings, label: 'Settings', path: '/admin/settings' },
//   ];

//   const handleLogout = () => {
//     logout();
//     onClose();
//   };

//   return (
//     <div className="relative">
//       <aside
//         className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform 
//           transition-transform duration-300 ease-in-out z-40 
//           ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
//       >
//         <div className="flex flex-col h-full p-6">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-xl font-bold">Admin Panel</h2>
//           </div>

//           <nav className="flex-grow space-y-2">
//             {menuItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={onClose}
//                 className={({ isActive }) =>
//                   `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
//                   ${isActive 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-800'}`  
//                 }
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </NavLink>
//             ))}
//           </nav>

//           <div className="pt-6 border-t border-gray-700">
//             <a
//               href="/"
//               className="flex items-center space-x-3 px-4 py-3 text-gray-300 
//                 hover:bg-gray-800 rounded-lg transition-colors mb-4"
//             >
//               <Home className="w-5 h-5" />
//               <span>Back to Site</span>
//             </a>

//             <button
//               onClick={handleLogout}
//               className="flex w-full items-center space-x-3 px-4 py-3 text-red-400 
//                 hover:bg-red-500/10 rounded-lg transition-colors"
//             >
//               <LogOut className="w-5 h-5" />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Adjust the layout of the content when sidebar is open */}
//       <div
//         className={`lg:ml-64 transition-all duration-300 ease-in-out ${
//           isOpen ? 'ml-64' : 'ml-0'
//         }`}
//       >
//         {/* Your main content here */}
//       </div>
//     </div>
//   );
// };
