import axios from 'axios';
import { Inquiry } from '../types/inquiry';

const API_URL = 'http://localhost:5000/api';

export const fetchInquiries = async (): Promise<Inquiry[]> => {
  const response = await axios.get(`${API_URL}/inquiries`);
  return response.data;
};

export const updateInquiryStatus = async (id: string, status: string): Promise<Inquiry> => {
  const response = await axios.put(`${API_URL}/inquiries/${id}/status`, { status });
  return response.data;
};

export const sendInquiryReply = async (id: string, reply: string): Promise<void> => {
  await axios.post(`${API_URL}/inquiries/${id}/reply`, { reply });
};