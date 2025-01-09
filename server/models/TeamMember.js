import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  expertise: [{
    type: String,
  }],
  socialLinks: {
    linkedin: String,
    twitter: String,
    email: String,
  },
  order: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('TeamMember', teamMemberSchema);