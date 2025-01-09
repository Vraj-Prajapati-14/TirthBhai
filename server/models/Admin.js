// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const adminSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash password before saving
// adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare password
// adminSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// export default mongoose.model('Admin', adminSchema);

// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// // Define the Admin Schema
// const adminSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash password before saving
// adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare password
// adminSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// // Create Admin model
// const Admin = mongoose.model('Admin', adminSchema);

// // Check if an admin exists, if not, create one
// const createAdminIfNotExists = async () => {
//   try {
//     // Check if an admin already exists
//     const existingAdmin = await Admin.findOne({ email: 'admin@gmail.com' });
    
//     // If no admin found, create a new one
//     if (!existingAdmin) {
//       const newAdmin = new Admin({
//         email: 'admin@gmail.com',
//         password: 'admin',  // Default password, will be hashed
//       });

//       await newAdmin.save();
//       console.log('New admin created with email: admin@gmail.com and password: admin');
//     } else {
//       console.log('Admin already exists.');
//     }
//   } catch (error) {
//     console.error('Error while checking or creating admin:', error);
//   }
// };

// // Export the default Admin model and the createAdminIfNotExists function
// export default { Admin, createAdminIfNotExists };

// // Example usage (you can call this function in your server start file)
// // import AdminModule from './path/to/adminModel';  // Adjust the path
// // AdminModule.createAdminIfNotExists();



import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the Admin Schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
