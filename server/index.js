import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import AdminModule from './models/Admin.js'; // Adjust the path
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import teamRoutes from './routes/team.js';
import contactRoute from './routes/contact.js';
import Blog from './routes/blogroute.js';
const Admin= AdminModule;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    // Create the admin if it doesn't exist
    // createAdminIfNotExists();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoute);
app.use('/api/blogs',Blog)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});