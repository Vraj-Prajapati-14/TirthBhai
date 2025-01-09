export interface Inquiry {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: 'new' | 'in-progress' | 'completed';
    createdAt: string;
  }
  