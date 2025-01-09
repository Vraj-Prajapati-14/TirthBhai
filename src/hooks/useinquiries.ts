import { useState, useEffect } from 'react';
import { Inquiry } from '../types/inquiry';
import { fetchInquiries, updateInquiryStatus, sendInquiryReply } from '../services/inquiryService';

export const useInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadInquiries = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchInquiries();
      setInquiries(data);
    } catch (err) {
      setError('Failed to fetch inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const updated = await updateInquiryStatus(id, status);
      setInquiries(inquiries.map(inq => 
        inq._id === id ? updated : inq
      ));
    } catch (err) {
      setError('Failed to update status');
    }
  };

  const handleSendReply = async (id: string, reply: string) => {
    try {
      await sendInquiryReply(id, reply);
      await loadInquiries(); // Refresh the list
    } catch (err) {
      setError('Failed to send reply');
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  return {
    inquiries,
    loading,
    error,
    updateStatus: handleUpdateStatus,
    sendReply: handleSendReply,
    refresh: loadInquiries,
  };
};