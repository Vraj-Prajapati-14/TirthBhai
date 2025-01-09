// import express from 'express';
// import Contact from '../models/contact.js'; // Adjust path if necessary
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();


// const router = express.Router();

// // Admin's email configuration
// const ADMIN_EMAIL = '21cs052@charusat.edu.in'; // Replace with admin's email
// const SMTP_CONFIG = {
//   host: 'smtp.gmail.com', // Gmail SMTP server
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_USER, // Replace with your Gmail address
//     pass: process.env.EMAIL_PASS, // Replace with your Gmail App Password
//   },
// };

// // POST route to handle contact form submissions
// router.post('/', async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     // Save message to the database
//     const newContact = new Contact({ name, email, subject, message });
//     await newContact.save();

//     // Configure nodemailer transporter
//     const transporter = nodemailer.createTransport(SMTP_CONFIG);

//     // Prepare email options
//     const mailOptions = {
//       from: `"${name}" <${email}>`, // Sender address
//       to: ADMIN_EMAIL, // Admin's email address
//       subject: `New Contact Form Submission: ${subject}`,
//       text: `You have received a new message from your website contact form.\n\n
// Name: ${name}\n
// Email: ${email}\n
// Subject: ${subject}\n
// Message: ${message}`,
//     };

//     // Send email
//     // await transporter.sendMail(mailOptions);
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully!');
//       } catch (err) {
//         console.error('Email sending error:', err);
//         res.status(500).json({ error: 'Failed to send email.' });
//       }
      

//     res.status(200).json({ message: 'Message sent successfully!' });
//   } catch (error) {
//     console.error('Error sending contact message:', error);
//     res.status(500).json({ error: 'Failed to send message. Please try again.' });
//   }
// });

// export default router;

import express from 'express';
import Contact from '../models/contact.js'; // Replace with your actual model
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Admin's email configuration
const ADMIN_EMAIL = '21cs052@charusat.edu.in'; // Replace with admin's email
const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
};

// Fetch all inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await Contact.find(); // Fetch all inquiries from the database
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Failed to fetch inquiries.' });
  }
});

// Update inquiry status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedInquiry = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedInquiry) {
      return res.status(404).json({ message: 'Inquiry not found.' });
    }

    res.status(200).json(updatedInquiry);
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({ message: 'Failed to update status.' });
  }
});

// Send reply to an inquiry and notify via email
router.post('/:id/reply', async (req, res) => {
  try {
    const { reply } = req.body;
    const inquiry = await Contact.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found.' });
    }

    // Append the reply to the inquiry's replies array
    inquiry.replies = [...(inquiry.replies || []), { reply, date: new Date() }];
    await inquiry.save();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Email options
    const mailOptions = {
      from: `"Admin" <${SMTP_CONFIG.auth.user}>`,
      to: inquiry.email, // Send reply to the user's email
      subject: `Re: ${inquiry.subject}`,
      text: `Dear ${inquiry.name},\n\n${reply}\n\nBest regards,\nAdmin`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json(inquiry);
  } catch (error) {
    console.error('Error sending reply:', error);
    res.status(500).json({ message: 'Failed to send reply.' });
  }
});

// Create a new contact/inquiry
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save the inquiry to the database
    const newContact = new Contact({ name, email, subject, message, status: 'new' });
    await newContact.save();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Email options for admin notification
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: ADMIN_EMAIL, // Admin's email address
      subject: `New Inquiry: ${subject}`,
      text: `You have received a new inquiry:\n\n
Name: ${name}\n
Email: ${email}\n
Subject: ${subject}\n
Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ message: 'Failed to submit inquiry. Please try again later.' });
  }
});

export default router;
