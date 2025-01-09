import express from 'express';
import TeamMember from '../models/TeamMember.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all team members (public)
router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find().sort('order');
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add team member (protected)
router.post('/', auth, async (req, res) => {
  try {
    const member = new TeamMember(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update team member (protected)
router.put('/:id', auth, async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete team member (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;