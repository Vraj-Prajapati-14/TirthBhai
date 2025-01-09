// import { useState, useCallback } from 'react';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';


// export const useProjects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

  // const fetchProjects = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const data = await projectApi.getAll();
  //     setProjects(data);
  //   } catch (err) {
  //     setError('Failed to fetch projects');
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

//   return {
//     projects,
//     loading,
//     error,
//     fetchProjects
//   };
// // };
// import { useState,useCallback } from 'react';
// import { Project } from '../types/project';
// import { projectApi } from '../services/api';


// // Define a type for your project
// // interface Project {
// //   _id: string;
// //   title: string;
// //   description: string;
// //   image: string;
// //   category: string;
// //   client: string;
// //   completionDate: string;
// // }

// export const useProjects = () => {
//   const [projects, setProjects] = useState<Project[]>([]); // Explicitly set the type
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // const fetchProjects = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await fetch('/api/projects');
//   //     const data: Project[] = await response.json(); // Ensure the response matches the type
//   //     setProjects(data);
//   //   } catch (err) {
//   //     handleError(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchProjects = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await projectApi.getAll();
//       setProjects(data);
//     } catch (err) {
//       setError('Failed to fetch projects');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const createProject = async (projectData: Omit<Project, '_id'>) => {
//     try {
//       const response = await fetch('/api/projects', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(projectData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create project');
//       }

//       const newProject: Project = await response.json();
//       setProjects((prevProjects) => [...prevProjects, newProject]);
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const updateProject = async (id: string, projectData: Partial<Project>) => {
//     try {
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(projectData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update project');
//       }

//       const updatedProject: Project = await response.json();
//       setProjects((prevProjects) =>
//         prevProjects.map((project) =>
//           project._id === id ? updatedProject : project
//         )
//       );
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const deleteProject = async (id: string) => {
//     try {
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete project');
//       }

//       setProjects((prevProjects) =>
//         prevProjects.filter((project) => project._id !== id)
//       );
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const handleError = (err: unknown) => {
//     if (err instanceof Error) {
//       setError(err.message);
//     } else {
//       setError('An unknown error occurred');
//     }
//   };

//   return {
//     projects,
//     loading,
//     error,
//     fetchProjects,
//     createProject,
//     updateProject,
//     deleteProject,
//   };
// };

import { useState, useCallback } from 'react';
import { Project } from '../types/project';
import { projectApi } from '../services/api'; // Assuming you have an API utility for these operations

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await projectApi.getAll();
      setProjects(data);
    } catch (err) {
      setError('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new project
  const createProject = async (projectData: Omit<Project, '_id'>) => {
    try {
      setLoading(true);
      setError(null);
      const newProject = await projectApi.create(projectData); // Assuming projectApi has a `create` method
      setProjects((prevProjects) => [...prevProjects, newProject]);
    } catch (err) {
      setError('Failed to create project');
    } finally {
      setLoading(false);
    }
  };


  // Update an existing project
  const updateProject = async (id: string, projectData: Partial<Project>) => {
    try {
      setLoading(true);
      setError(null);
      const updatedProject = await projectApi.update(id, projectData); // Assuming projectApi has an `update` method
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === id ? updatedProject : project
        )
      );
    } catch (err) {
      setError('Failed to update project');
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const deleteProject = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await projectApi.delete(id); // Assuming projectApi has a `delete` method
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
    } catch (err) {
      setError('Failed to delete project');
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};
