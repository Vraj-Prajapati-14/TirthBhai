// utils/gridfs.js

import mongoose from 'mongoose';
import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB URI
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

// Initialize connection to MongoDB
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize GridFSBucket and storage
let gfs;
let gridfsBucket;

// Once the connection is open, initialize GridFSBucket
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads', // The name of the bucket in MongoDB
  });
  gfs = gridfsBucket;
  console.log('GridFSBucket initialized');
});

// GridFsStorage for Multer
const storage = new GridFsStorage({
  url: mongoURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          console.error('Error generating filename:', err);
          return reject(err);
        }
        const filename = `${buf.toString('hex')}${path.extname(file.originalname)}`;
        const fileInfo = {
          filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});


// Multer middleware
export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Example: Restrict to specific file types (optional)
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed (jpeg, jpg, png)'));
    }
  },
}).array('images', 10); // Limit: 10 files


// Exporting GridFSBucket
export { gridfsBucket as gfs };
