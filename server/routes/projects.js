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

// import express from 'express';
// import multer from 'multer';
// import Project from '../models/Project.js';
// import auth from '../middleware/auth.js';

// const router = express.Router();

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Save files in the 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // Get all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ completionDate: -1 });
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Update a project with multiple image uploads
// router.put('/:id', auth, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description, category, client, completionDate } = req.body;

//     // Validate required fields
//     if (!title || !description || !client || !completionDate) {
//       return res.status(400).json({ message: 'Title, description, client, and completionDate are required' });
//     }

//     const updateData = {
//       title,
//       description,
//       category,
//       client,
//       completionDate,
//     };

//     // If new images are uploaded, update the images array
//     if (req.files && req.files.length > 0) {
//       updateData.images = req.files.map((file) => file.path);
//     }

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     res.json({ message: 'Project updated successfully', project });
//   } catch (error) {
//     console.error('Error updating project:', error);
//     res.status(400).json({ message: error.message });
//   }
// });
// // Create a new project with multiple image uploads
// router.post('/', auth, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description, category, client, completionDate } = req.body;

//     // Validate required fields
//     if (!title || !description || !client || !completionDate || !req.files) {
//       return res.status(400).json({ message: 'All fields, including images, are required' });
//     }

//     const images = req.files.map((file) => file.path); // Save file paths

//     const project = new Project({
//       title,
//       description,
//       images, // Store array of image paths
//       category,
//       client,
//       completionDate,
//     });

//     await project.save();
//     res.status(201).json({ message: 'Project created successfully', project });
//   } catch (error) {
//     console.error('Error creating project:', error);
//     res.status(400).json({ message: error.message });
//   }
// });

// // Serve image data
// router.get('/image/:id/:index', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project || !project.images || !project.images[req.params.index]) {
//       return res.status(404).json({ message: 'Image not found' });
//     }
//     res.set('Content-Type', 'image/png');
//     res.sendFile(project.images[req.params.index], { root: '.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching image' });
//   }
// });

// export default router;

// import express from 'express';
// import mongoose from 'mongoose';
// import multer from 'multer';
// import { GridFsStorage } from 'multer-gridfs-storage';
// import dotenv from 'dotenv';
// import { GridFSBucket } from 'mongodb';
// import Project from '../models/Project.js';
// import auth from '../middleware/auth.js';

// dotenv.config();
// const router = express.Router();

// // MongoDB Connection
// const mongoURI = process.env.MONGODB_URI;

// if (!mongoURI) {
//   throw new Error('MONGODB_URI is not defined. Check your .env file.');
// }

// const conn = mongoose.createConnection(mongoURI);

// // Initialize GridFS
// let gfs;
// conn.once('open', () => {
//   gfs = new GridFSBucket(conn.db, { bucketName: 'uploads' });
//   console.log('✅ GridFS initialized');
// });

// // Multer GridFS Storage Setup
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => ({
//     filename: `${Date.now()}-${file.originalname}`,
//     bucketName: 'uploads',
//   }),
// });

// const upload = multer({ storage });

// // Get All Projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ completionDate: -1 });
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // Create Project
// router.post('/', auth, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description, category, client, completionDate } = req.body;
//     if (!title || !description || !client || !completionDate || !req.files) {
//       return res.status(400).json({ message: 'All fields, including images, are required' });
//     }

//     const imageIds = req.files.map((file) => file.id.toString());

//     const project = new Project({
//       title,
//       description,
//       images: imageIds,
//       category,
//       client,
//       completionDate,
//     });

//     await project.save();
//     res.status(201).json({ message: 'Project created successfully', project });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update Project
// router.put('/:id', auth, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description, category, client, completionDate } = req.body;
//     if (!title || !description || !client || !completionDate) {
//       return res.status(400).json({ message: 'Required fields are missing' });
//     }

//     const updateData = {
//       title,
//       description,
//       category,
//       client,
//       completionDate,
//     };

//     if (req.files && req.files.length > 0) {
//       updateData.images = req.files.map((file) => file.id.toString());
//     }

//     const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });

//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     res.json({ message: 'Project updated successfully', project });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete Project
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Serve Image Data from GridFS
// router.get('/image/:id', async (req, res) => {
//   try {
//     const file = await conn.db.collection('uploads.files').findOne({
//       _id: new mongoose.Types.ObjectId(req.params.id),
//     });

//     if (!file) {
//       return res.status(404).json({ message: 'Image not found' });
//     }

//     res.set('Content-Type', file.contentType);
//     const readstream = gfs.openDownloadStream(file._id);
//     readstream.pipe(res);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching image', error: error.message });
//   }
// });

// export default router;


// routes/projectRoutes.js

// import express from 'express';
// import mongoose from 'mongoose';
// import Project from '../models/Project.js';
// import { upload, gfs } from '../utils/gridfs.js';

// const router = express.Router();

// // Fetch all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.status(200).json(projects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching projects' });
//   }
// });


// // Create a new project
// router.post('/', (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       console.error('Error during file upload:', err);
//       return res.status(500).json({ message: 'File upload failed', error: err.message });
//     }

//     try {
//       const { title, description, category, client, completionDate } = req.body;
//       const images = req.files.map((file) => file.id);

//       const newProject = new Project({
//         title,
//         description,
//         images,
//         category,
//         client,
//         completionDate,
//       });

//       const savedProject = await newProject.save();
//       res.status(201).json(savedProject);
//     } catch (error) {
//       console.error('Error creating project:', error);
//       res.status(500).json({ message: 'Error creating project', error: error.message });
//     }
//   });
// });



// // Fetch a specific image from GridFS
// router.get('/images/:id', async (req, res) => {
//   try {
//     const imageId = new mongoose.Types.ObjectId(req.params.id);
//     const stream = gfs.openDownloadStream(imageId);
//     stream.pipe(res);
//     stream.on('error', (err) => {
//       console.error(err);
//       res.status(404).json({ message: 'Image not found' });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching image' });
//   }
// });

// // Delete a project and its images
// router.delete('/:id', async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);

//     if (project.images) {
//       project.images.forEach(async (imageId) => {
//         await gfs.delete(new mongoose.Types.ObjectId(imageId));
//       });
//     }

//     res.status(200).json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error deleting project' });
//   }
// });

// export default router;


// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import Project from '../models/Project.js';

// const router = express.Router();

// // Set up multer for local storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = './uploads/';
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath); // Create uploads folder if it doesn't exist
//     }
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + '-' + file.originalname; // Unique timestamped filename
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });


// // Serve static files (images)
// router.use('/uploads', express.static(path.join('uploads')));

// // Fetch all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.status(200).json(projects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching projects' });
//   }
// });

// // Create a new project with image upload
// router.post('/', upload.array('images', 10), async (req, res) => {
//   try {
//     const { title, description, category, client, completionDate } = req.body;

//     // Save image paths in the database
//     const images = req.files.map((file) => `/uploads/${file.filename}`);

//     const newProject = new Project({
//       title,
//       description,
//       images,
//       category,
//       client,
//       completionDate,
//     });

//     const savedProject = await newProject.save();
//     res.status(201).json(savedProject);
//   } catch (error) {
//     console.error('Error creating project:', error);
//     res.status(500).json({ message: 'Error creating project', error: error.message });
//   }
// });

// // Fetch a specific project by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) return res.status(404).json({ message: 'Project not found' });
//     res.status(200).json(project);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching project' });
//   }
// });

// // Delete a project and its images
// router.delete('/:id', async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) return res.status(404).json({ message: 'Project not found' });

//     // Delete images from local storage
//     project.images.forEach((imagePath) => {
//       const fullPath = path.join('./', imagePath);
//       if (fs.existsSync(fullPath)) {
//         fs.unlinkSync(fullPath); // Remove image file
//       }
//     });

//     res.status(200).json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting project:', error);
//     res.status(500).json({ message: 'Error deleting project', error: error.message });
//   }
// });

// export default router;


import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Project from '../models/Project.js';

const router = express.Router();

// Set up upload directory
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR); // Create uploads folder if it doesn't exist
    }
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`; // Unique timestamped filename
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Serve static files (images)
router.use('/uploads', express.static(UPLOAD_DIR));

// Fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Create a new project with image upload
router.post('/', upload.array('images', 10), async (req, res) => {
  try {
    const { title, description, category, client, completionDate } = req.body;

    const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    const newProject = new Project({
      title,
      description,
      images,
      category,
      client,
      completionDate,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
});

// Fetch a specific project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project' });
  }
});

// Delete a project and its images
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    // Delete images from local storage
    const deleteFile = async (filePath) => {
      try {
        if (fs.existsSync(filePath)) {
          await fs.promises.unlink(filePath); // Use async unlink
        }
      } catch (err) {
        console.error(`Error deleting file ${filePath}:`, err);
      }
    };

    await Promise.all(project.images.map((imagePath) => deleteFile(path.join(process.cwd(), imagePath))));

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
});

export default router;
