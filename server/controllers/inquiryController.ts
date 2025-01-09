// import { Request, Response } from 'express';
// import Contact from '../models/Contact';
// import { sendEmail } from '../utils/email';

// export const getInquiries = async (req: Request, res: Response) => {
//   try {
//     const inquiries = await Contact.find().sort({ createdAt: -1 });
//     res.json(inquiries);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching inquiries' });
//   }
// };

// export const updateInquiryStatus = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
    
//     const inquiry = await Contact.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );
    
//     res.json(inquiry);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating inquiry status' });
//   }
// };

// export const replyToInquiry = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { reply } = req.body;
    
//     const inquiry = await Contact.findById(id);
//     if (!inquiry) {
//       return res.status(404).json({ message: 'Inquiry not found' });
//     }

//     // Send email reply
//     await sendEmail({
//       to: inquiry.email,
//       subject: `Re: ${inquiry.subject}`,
//       text: reply,
//     });

//     // Update inquiry status
//     inquiry.status = 'completed';
//     await inquiry.save();

//     res.json({ message: 'Reply sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sending reply' });
//   }
// };
import { Request, Response } from 'express';
import Contact from '../models/contact';
import { sendEmail } from '../utils/email';

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inquiries' });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const inquiry = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating inquiry status' });
  }
};

export const replyToInquiry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    const inquiry = await Contact.findById(id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    await sendEmail({
      to: inquiry.email,
      subject: `Re: ${inquiry.subject}`,
      text: reply,
    });

    inquiry.status = 'completed';
    await inquiry.save();

    res.status(200).json({ message: 'Reply sent successfully', inquiry });
  } catch (error) {
    res.status(500).json({ message: 'Error sending reply' });
  }
};
