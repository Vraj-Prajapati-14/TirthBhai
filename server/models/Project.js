// import mongoose from 'mongoose';

// const projectSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   images: {
//     type: [String], // Array of image paths or URLs
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   client: {
//     type: String,
//     required: true,
//   },
//   completionDate: {
//     type: Date,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model('Project', projectSchema);


// // models/Project.js
// import mongoose from 'mongoose';

// const projectSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   images: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'uploads.files', // Reference to GridFS files
//     },
//   ],
//   category: {
//     type: String,
//     required: true,
//   },
//   client: {
//     type: String,
//     required: true,
//   },
//   completionDate: {
//     type: Date,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model('Project', projectSchema);


import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Store local file paths
      required: true,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Project', projectSchema);
