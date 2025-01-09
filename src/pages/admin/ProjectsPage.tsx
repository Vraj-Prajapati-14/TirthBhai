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
import React, { useState, useEffect, useRef } from 'react';
import { AdminLayout } from '../../components/admin/Layout';
import axios from 'axios';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { Edit, Trash2 } from 'lucide-react';

// Define the type for a project
interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  completionDate: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Type for projects state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    client: '',
    completionDate: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null); // Reference to form for scrolling

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data); // Response data should be of type Project[]
      setLoading(false);
    } catch (err) {
      setError('Error fetching projects');
      setLoading(false);
    }
  };

  const createProject = async (data: typeof formData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/projects', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProjects();
    } catch (err) {
      setError('Error creating project');
    }
  };

  const updateProject = async (id: string, data: typeof formData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/projects/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProjects();
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
      } catch (err) {
        setError('Error deleting project');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateProject(editingId, formData);
    } else {
      await createProject(formData);
    }
    setFormData({
      title: '',
      description: '',
      image: '',
      category: '',
      client: '',
      completionDate: '',
    });
    setEditingId(null);
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
      client: project.client,
      completionDate: new Date(project.completionDate).toISOString().split('T')[0],
    });
    setEditingId(project._id);
    // Scroll to the top of the form when editing
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDelete = (id: string) => {
    deleteProject(id);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        {error && <div className="text-red-600 text-sm mb-4">Error: {error}</div>}

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <form
            ref={formRef} // Attach the formRef to the form element here
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
                <input
                  type="date"
                  value={formData.completionDate}
                  onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {editingId ? 'Update Project' : 'Add Project'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Projects List</h2>
          {loading ? (
            <div className="text-center py-12">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{project.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{project.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(project.completionDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(project)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProjectsPage;
