// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import axios from 'axios';
// import { Plus, Edit, Trash2 } from 'lucide-react';

// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   client: string;
//   completionDate: string;
// }

// const AdminDashboard = () => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
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
//     if (!isAuthenticated) {
//       navigate('/admin');
//     }
//     fetchProjects();
//   }, [isAuthenticated, navigate]);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/projects');
//       setProjects(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`http://localhost:5000/api/projects/${editingId}`, formData);
//       } else {
//         await axios.post('http://localhost:5000/api/projects', formData);
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
//     } catch (error) {
//       console.error('Error saving project:', error);
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
//   };

//   const handleDelete = async (id: string) => {
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/projects/${id}`);
//         fetchProjects();
//       } catch (error) {
//         console.error('Error deleting project:', error);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-6">
//             {editingId ? 'Edit Project' : 'Add New Project'}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Client
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.client}
//                   onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Completion Date
//                 </label>
//                 <input
//                   type="date"
//                   value={formData.completionDate}
//                   onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Image URL
//                 </label>
//                 <input
//                   type="url"
//                   value={formData.image}
//                   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                   required
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border rounded-md"
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
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Title
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Category
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Client
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Completion Date
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
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
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  completionDate: string;
}

const AdminDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    client: '',
    completionDate: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    } else {
      fetchProjects();
    }
  }, [isAuthenticated, navigate]);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token'); // Adjust based on your auth flow
      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      const error = err as { response?: { data?: any }; message?: string };
      console.error('Error fetching projects:', error.response?.data || error.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/projects/${editingId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post('http://localhost:5000/api/projects', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
      fetchProjects();
    } catch (err) {
      const error = err as { response?: { data?: any }; message?: string };
      console.error('Error saving project:', error.response?.data || error.message);
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
      client: project.client,
      completionDate: new Date(project.completionDate)
        .toISOString()
        .split('T')[0],
    });
    setEditingId(project._id);
  };

  const handleDelete = async (id: string) => {
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
        const error = err as { response?: { data?: any }; message?: string };
        console.error('Error deleting project:', error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) =>
                    setFormData({ ...formData, client: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Completion Date
                </label>
                <input
                  type="date"
                  value={formData.completionDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      completionDate: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md"
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
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.client}
                      </td>
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
    </div>
  );
};

export default AdminDashboard;
