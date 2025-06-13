// import React, { useEffect } from 'react';
// import { useProjects } from '../../hooks/useprojects';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { ErrorMessage } from '../../components/common/ErrorMessage';

// const ProjectsPage = () => {
//   const { projects, loading, error, fetchProjects } = useProjects();

//   useEffect(() => {
//     fetchProjects();
//   }, [fetchProjects]);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <ErrorMessage message={error} onRetry={fetchProjects} />;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Projects</h1>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map(project => (
//           <div 
//             key={project._id}
//             className="bg-white rounded-lg shadow-md p-6"
//           >
//             <h3 className="font-bold">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// import  { useEffect } from 'react';
// import { useProjects } from '../../hooks/useprojects';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';

// const ProjectsPage = () => {
//   const { projects, loading, error, fetchProjects } = useProjects();

//   useEffect(() => {
//     fetchProjects();
//   }, [fetchProjects]);

//   if (loading) return <LoadingSpinner />;
  
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Projects</h1>

//       {error && (
//         <div className="text-red-500 bg-red-100 p-4 rounded mb-6">
//           <p>{error}</p>
//           <button
//             className="text-blue-600 underline"
//             onClick={fetchProjects}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <div
//             key={project._id}
//             className="bg-white rounded-lg shadow-md p-6"
//           >
//             <h3 className="font-bold">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

// import { AdminLayout } from '../../components/admin/Layout';
// import React, { useState, useEffect } from 'react';
// import { useProjects } from '../../hooks/useprojects';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { Edit, Trash2 } from 'lucide-react';

// const ProjectsPage = () => {
//   const { projects, error,loading, createProject, fetchProjects, deleteProject, updateProject } = useProjects();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: '',
//     category: '',
//     client: '',
//     completionDate: '',
//   });
//   const [editingId, setEditingId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchProjects();
//   }, [fetchProjects]);

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (editingId) {
//   //       await updateProject(editingId, formData);
//   //     } else {
//   //       await fetchProjects(formData);
//   //     }
//   //     setFormData({
//   //       title: '',
//   //       description: '',
//   //       image: '',
//   //       category: '',
//   //       client: '',
//   //       completionDate: '',
//   //     });
//   //     setEditingId(null);
//   //     fetchProjects();
//   //   } catch (err) {
//   //     console.error('Error saving project:', err);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await updateProject(editingId, formData);
//       } else {
//         await createProject(formData);
//       }
//       setFormData({
//         title: '',
//         description: '',
//         image: '',
//         category: '',
//         client: '',
//         completionDate: '',
//       });
//       setEditingId(null);
//       fetchProjects();
//     } catch (err) {
//       console.error('Error saving project:', err);
//     }
//   };
  
  

//   const handleEdit = (project: typeof projects[number]) => {
//     setFormData({
//       title: project.title,
//       description: project.description,
//       image: project.image,
//       category: project.category,
//       client: project.client,
//       completionDate: new Date(project.completionDate).toISOString().split('T')[0],
//     });
//     setEditingId(project._id);
//   };

//   const handleDelete = async (id: string) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         await deleteProject(id);
//         fetchProjects();
//       } catch (err) {
//         console.error('Error deleting project:', err);
//       }
//     }
//   };

//   return (
//     <AdminLayout>
//     <div className="p-6">
//     {error && (
//         <div className="text-red-600 text-sm mb-4">
//           Error: {error}
//         </div>
//       )}
      
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold mb-6">
//           {editingId ? 'Edit Project' : 'Add New Project'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//               <input
//                 type="text"
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
//               <input
//                 type="text"
//                 value={formData.client}
//                 onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
//               <input
//                 type="date"
//                 value={formData.completionDate}
//                 onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-md"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//               <input
//                 type="url"
//                 value={formData.image}
//                 onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-md"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//               <textarea
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 required
//                 rows={4}
//                 className="w-full px-4 py-2 border rounded-md"
//               ></textarea>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             {editingId ? 'Update Project' : 'Add Project'}
//           </button>
//         </form>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-6">Projects List</h2>
//         {loading ? (
//           <div className="text-center py-12">
//             <LoadingSpinner />
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Title
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Client
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Completion Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {projects.map((project) => (
//                   <tr key={project._id}>
//                     <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{project.category}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{project.client}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {new Date(project.completionDate).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => handleEdit(project)}
//                           className="text-blue-600 hover:text-blue-800"
//                         >
//                           <Edit className="w-5 h-5" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(project._id)}
//                           className="text-red-600 hover:text-red-800"
//                         >
//                           <Trash2 className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//     </AdminLayout>
//   );
// };

// export default ProjectsPage;
// import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { AdminLayout } from '../../components/admin/Layout';
// import axios from 'axios';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { Edit, Trash2 } from 'lucide-react';

// // Define the type for a project
// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   client: string;
//   completionDate: string;
// }

// const ProjectsPage = () => {
//   // const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]); // Type for projects state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: '',
//     category: '',
//     client: '',
//     completionDate: '',
//   });
//   const [editingId, setEditingId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/projects', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProjects(response.data); // Response data should be of type Project[]
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching projects');
//       setLoading(false);
//     }
//   };

//   const createProject = async (data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/projects', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//     } catch (err) {
//       setError('Error creating project');
//     }
//   };

//   const updateProject = async (id: string, data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:5000/api/projects/${id}`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//     } catch (err) {
//       setError('Error updating project');
//     }
//   };

//   const deleteProject = async (id: string) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`http://localhost:5000/api/projects/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         fetchProjects();
//       } catch (err) {
//         setError('Error deleting project');
//       }
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingId) {
//       await updateProject(editingId, formData);
//     } else {
//       await createProject(formData);
//     }
//     setFormData({
//       title: '',
//       description: '',
//       image: '',
//       category: '',
//       client: '',
//       completionDate: '',
//     });
//     setEditingId(null);
//   };

//   const handleEdit = (project: Project) => {
//     setFormData({
//       title: project.title,
//       description: project.description,
//       image: project.image,
//       category: project.category,
//       client: project.client,
//       completionDate: new Date(project.completionDate).toISOString().split('T')[0],
//     });
//     setEditingId(project._id);
//   };

//   const handleDelete = (id: string) => {
//     deleteProject(id);
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         {error && <div className="text-red-600 text-sm mb-4">Error: {error}</div>}

//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-6">
//             {editingId ? 'Edit Project' : 'Add New Project'}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                 <input
//                   type="text"
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
//                 <input
//                   type="text"
//                   value={formData.client}
//                   onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
//                 <input
//                   type="date"
//                   value={formData.completionDate}
//                   onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                 <input
//                   type="url"
//                   value={formData.image}
//                   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 ></textarea>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               {editingId ? 'Update Project' : 'Add Project'}
//             </button>
//           </form>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold mb-6">Projects List</h2>
//           {loading ? (
//             <div className="text-center py-12">
//               <LoadingSpinner />
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Date</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {projects.map((project) => (
//                     <tr key={project._id}>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.category}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.client}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {new Date(project.completionDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEdit(project)}
//                             className="text-blue-600 hover:text-blue-800"
//                           >
//                             <Edit className="w-5 h-5" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(project._id)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default ProjectsPage;
// import React, { useState, useEffect, useRef } from 'react';
// import { AdminLayout } from '../../components/admin/Layout';
// import axios from 'axios';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { Edit, Trash2 } from 'lucide-react';

// // Define the type for a project
// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   client: string;
//   completionDate: string;
// }

// const ProjectsPage = () => {
//   const [projects, setProjects] = useState<Project[]>([]); // Type for projects state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: '',
//     category: '',
//     client: '',
//     completionDate: '',
//   });
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const formRef = useRef<HTMLFormElement>(null); // Reference to form for scrolling

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/projects', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProjects(response.data); // Response data should be of type Project[]
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching projects');
//       setLoading(false);
//     }
//   };

//   const createProject = async (data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/projects', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//     } catch (err) {
//       setError('Error creating project');
//     }
//   };

//   const updateProject = async (id: string, data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:5000/api/projects/${id}`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//     } catch (err) {
//       setError('Error updating project');
//     }
//   };

//   const deleteProject = async (id: string) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`http://localhost:5000/api/projects/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         fetchProjects();
//       } catch (err) {
//         setError('Error deleting project');
//       }
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingId) {
//       await updateProject(editingId, formData);
//     } else {
//       await createProject(formData);
//     }
//     setFormData({
//       title: '',
//       description: '',
//       image: '',
//       category: '',
//       client: '',
//       completionDate: '',
//     });
//     setEditingId(null);
//   };

//   const handleEdit = (project: Project) => {
//     setFormData({
//       title: project.title,
//       description: project.description,
//       image: project.image,
//       category: project.category,
//       client: project.client,
//       completionDate: new Date(project.completionDate).toISOString().split('T')[0],
//     });
//     setEditingId(project._id);
//     // Scroll to the top of the form when editing
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   const handleDelete = (id: string) => {
//     deleteProject(id);
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         {error && <div className="text-red-600 text-sm mb-4">Error: {error}</div>}

//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-6">
//             {editingId ? 'Edit Project' : 'Add New Project'}
//           </h2>
//           <form
//             ref={formRef} // Attach the formRef to the form element here
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                 <input
//                   type="text"
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
//                 <input
//                   type="text"
//                   value={formData.client}
//                   onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
//                 <input
//                   type="date"
//                   value={formData.completionDate}
//                   onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                 <input
//                   type="url"
//                   value={formData.image}
//                   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                 ></textarea>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               {editingId ? 'Update Project' : 'Add Project'}
//             </button>
//           </form>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold mb-6">Projects List</h2>
//           {loading ? (
//             <div className="text-center py-12">
//               <LoadingSpinner />
//             </div>
//           ) : (
//             <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Date</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {projects.map((project) => (
//                     <tr key={project._id}>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.category}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{project.client}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {new Date(project.completionDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEdit(project)}
//                             className="text-blue-600 hover:text-blue-800"
//                           >
//                             <Edit className="w-5 h-5" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(project._id)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default ProjectsPage;


// import React, { useState, useEffect } from 'react';
// import { AdminLayout } from '../../components/admin/Layout';
// import axios from 'axios';
// import { Edit, Trash2, PlusCircle, Search, X } from 'lucide-react';

// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   client: string;
//   completionDate: string;
// }

// const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => onClose(), 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
//       {message}
//     </div>
//   );
// };

// const ProjectsPage = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: '',
//     category: '',
//     client: '',
//     completionDate: '',
//   });
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [toastMessage, setToastMessage] = useState<string | null>(null);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     const filtered = projects.filter((project) =>
//       project.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProjects(filtered);
//   }, [searchTerm, projects]);

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/projects', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProjects(response.data);
//       setFilteredProjects(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching projects');
//       setLoading(false);
//     }
//   };

//   const handleFormToggle = () => {
//     setShowPopup(!showPopup);
//     if (!showPopup) {
//       setFormData({
//         title: '',
//         description: '',
//         image: '',
//         category: '',
//         client: '',
//         completionDate: '',
//       });
//       setEditingId(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingId) {
//       await updateProject(editingId, formData);
//     } else {
//       await createProject(formData);
//     }
//     setShowPopup(false);
//   };

//   const createProject = async (data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/projects', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//       setToastMessage('Project added successfully!');
//     } catch (err) {
//       setError('Error creating project');
//     }
//   };

//   const updateProject = async (id: string, data: typeof formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:5000/api/projects/${id}`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchProjects();
//       setToastMessage('Project updated successfully!');
//     } catch (err) {
//       setError('Error updating project');
//     }
//   };

//   const deleteProject = async (id: string) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`http://localhost:5000/api/projects/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         fetchProjects();
//         setToastMessage('Project deleted successfully!');
//       } catch (err) {
//         setError('Error deleting project');
//       }
//     }
//   };

//   const handleEdit = (project: Project) => {
//     setFormData({
//       title: project.title,
//       description: project.description,
//       image: project.image,
//       category: project.category,
//       client: project.client,
//       completionDate: new Date(project.completionDate).toISOString().split('T')[0],
//     });
//     setEditingId(project._id);
//     setShowPopup(true);
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         {error && <div className="text-red-600 text-sm mb-4">Error: {error}</div>}
//         {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

//         <div className="flex justify-between items-center mb-6">
//           <div className="relative w-72">
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//           </div>
//           <button
//             onClick={handleFormToggle}
//             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             <PlusCircle className="w-5 h-5 mr-2" />
//             Add Project
//           </button>
//         </div>

//         {loading ? (
//           <div className="text-center py-12">Loading...</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project._id}
//                 className="border rounded-lg shadow-md p-4 bg-white relative"
//               >
//                 <button
//                   onClick={() => deleteProject(project._id)}
//                   className="absolute top-2 right-2 text-red-600 hover:text-red-800"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-lg font-bold">{project.title}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{project.category}</p>
//                 <p className="text-sm text-gray-600 mb-2">{project.client}</p>
//                 <p className="text-sm text-gray-600">
//                   {new Date(project.completionDate).toLocaleDateString()}
//                 </p>
//                 <button
//                   onClick={() => handleEdit(project)}
//                   className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {showPopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold">
//                   {editingId ? 'Edit Project' : 'Add New Project'}
//                 </h2>
//                 <button onClick={handleFormToggle} className="text-gray-500 hover:text-gray-700">
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Category"
//                     value={formData.category}
//                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Client"
//                     value={formData.client}
//                     onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   />
//                   <input
//                     type="date"
//                     value={formData.completionDate}
//                     onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   />
//                   <input
//                     type="url"
//                     placeholder="Image URL"
//                     value={formData.image}
//                     onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   />
//                   <textarea
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     required
//                     className="w-full px-4 py-2 border rounded-md"
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                   >
//                     {editingId ? 'Update Project' : 'Add Project'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default ProjectsPage;

import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/Layout';
import axios from 'axios';
import {  Trash2, PlusCircle, Search, X } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[]; // Updated to handle an array of images
  category: string;
  client: string;
  completionDate: string;
}

const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Initialize projects as an empty array
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [] as File[], // Allow multiple images
    category: '',
    client: '',
    completionDate: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data || []); // Default to empty array if data is undefined
      setFilteredProjects(response.data || []);
      setLoading(false);
    } catch (err) {
      setError('Error fetching projects');
      setLoading(false);
    }
  };

  const handleFormToggle = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setFormData({
        title: '',
        description: '',
        images: [], // Reset image input
        category: '',
        client: '',
        completionDate: '',
      });
      setEditingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('client', formData.client);
    formDataToSend.append('completionDate', formData.completionDate);
    
    // Append images to FormData
    formData.images.forEach((image) => {
      formDataToSend.append('images', image);
    });

    if (editingId) {
      await updateProject(editingId, formDataToSend);
    } else {
      await createProject(formDataToSend);
    }
    setShowPopup(false);
  };

  const createProject = async (data: FormData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/projects', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Ensure the request handles multipart form data
        },
      });
      fetchProjects();
      setToastMessage('Project added successfully!');
    } catch (err) {
      setError('Error creating project');
    }
  };

  const updateProject = async (id: string, data: FormData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/projects/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchProjects();
      setToastMessage('Project updated successfully!');
    } catch (err) {
      setError('Error updating project');
    }
  };

  const deleteProject = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchProjects();
        setToastMessage('Project deleted successfully!');
      } catch (err) {
        setError('Error deleting project');
      }
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      images: [], // Initialize images
      category: project.category,
      client: project.client,
      completionDate: new Date(project.completionDate).toISOString().split('T')[0],
    });
    setEditingId(project._id);
    setShowPopup(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        {error && <div className="text-red-600 text-sm mb-4">Error: {error}</div>}
        {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button
            onClick={handleFormToggle}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Add Project
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="border rounded-lg shadow-md p-4 bg-white relative"
              >
                <button
                  onClick={() => deleteProject(project._id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                {project.images && Array.isArray(project.images) && project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                ))}
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                <p className="text-sm text-gray-600">
                  {new Date(project.completionDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleEdit(project)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {editingId ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button onClick={handleFormToggle} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Client"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="date"
                    value={formData.completionDate}
                    onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    {editingId ? 'Update Project' : 'Add Project'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ProjectsPage;

