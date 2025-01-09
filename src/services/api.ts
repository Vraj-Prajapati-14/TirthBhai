// import axios from 'axios';
// import { Project } from '../types/project';

// const API_BASE_URL = 'http://localhost:5000/api';

// // Create axios instance with common config
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Projects API
// export const projectApi = {
//   getAll: async (): Promise<Project[]> => {
//     const response = await api.get('/projects');
//     return response.data;
//   },
  
//   update: async (id: string, data: Partial<Project>): Promise<Project> => {
//     const response = await api.put(`/projects/${id}`, data);
//     return response.data;
//   },
  
//   delete: async (id: string): Promise<void> => {
//     await api.delete(`/projects/${id}`);
//   }
// };
// export const fetchProjects = async (): Promise<Project[]> => {
//   const response = await axios.get(`${API_BASE_URL}/projects`);
//   return response.data;
// };

// // import axios from 'axios';
// // import { Project } from '../types/project';

// // const API_BASE_URL = 'http://localhost:5000/api';

// // export const fetchProjects = async (): Promise<Project[]> => {
// //   const response = await axios.get(`${API_BASE_URL}/projects`);
// //   return response.data;
// // };

// import axios from 'axios';
// import { Project } from '../types/project';

// const API_BASE_URL ='http://localhost:5000/api/projects';

// export const projectApi = {
//   // Fetch all projects
//   getAll: async (): Promise<Project[]> => {
//     const response = await axios.get(API_BASE_URL);
//     return response.data;
//   },

//   // Create a new project
//   create: async (project: Project): Promise<Project> => {
//     const response = await axios.post(API_BASE_URL, project);
//     return response.data;
//   },

//   // Update an existing project
//   update: async (id: string, data: Partial<Project>): Promise<Project> => {
//     const response = await axios.put(`${API_BASE_URL}/${id}`, data);
//     return response.data;
//   },

//   // Delete a project
//   delete: async (id: string): Promise<void> => {
//     await axios.delete(`${API_BASE_URL}/${id}`);
//   },
// };
// export const fetchProjects = async (): Promise<Project[]> => {
//   const response = await axios.get(`${API_BASE_URL}/projects`);
//   return response.data;
// };
import axios from 'axios';
import { Project } from '../types/project';

const API_BASE_URL = 'http://localhost:5000/api/projects';

export const projectApi = {
  // Fetch all projects
  getAll: async (): Promise<Project[]> => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  },

  // Create a new project
  // create: async (project: Project): Promise<Project> => {
  //   const response = await axios.post(API_BASE_URL, project);
  //   return response.data;
  // },

  // Create a new project
create: async (project: Omit<Project, '_id'>): Promise<Project> => {
  const response = await axios.post(API_BASE_URL, project);
  console.log(response.data)
  return response.data;
},

  // Update an existing project
  update: async (id: string, data: Partial<Project>): Promise<Project> => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, data);
    return response.data;
  },

  // Delete a project
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
  },
};
