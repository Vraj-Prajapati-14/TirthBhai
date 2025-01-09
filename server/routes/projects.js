// import express from 'express';
// import Project from '../models/Project.js';
// import auth from '../middleware/auth.js';

// const router = express.Router();

// // Get all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ completionDate: -1 });
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Create a new project (protected)
// router.post('/', auth, async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(201).json(project);
//   } catch (error) {
//     console.log("error project")
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update a project (protected)
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json(project);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a project (protected)
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

import express from 'express';
import Project from '../models/Project.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Get all projects (no authentication needed)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ completionDate: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new project (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, image, category, client, completionDate } = req.body;

    // Validate required fields
    if (!title || !description || !client || !completionDate) {
      return res.status(400).json({ message: 'Title, description, client, and completionDate are required' });
    }

    const project = new Project({
      title,
      description,
      image,
      category,
      client,
      completionDate,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update a project (protected)
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, image, category, client, completionDate } = req.body;

    // Validate required fields
    if (!title || !description || !client || !completionDate) {
      return res.status(400).json({ message: 'Title, description, client, and completionDate are required' });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, image, category, client, completionDate },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete a project (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
