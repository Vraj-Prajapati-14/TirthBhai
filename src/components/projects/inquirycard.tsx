import React, { useState } from 'react';
import { Inquiry } from '../../types/inquiry';

interface InquiryCardProps {
  inquiry: Inquiry;
  onUpdateStatus: (id: string, status: string) => void;
  onSendReply: (id: string, reply: string) => void;
}

const InquiryCard: React.FC<InquiryCardProps> = ({ inquiry, onUpdateStatus, onSendReply }) => {
  const [reply, setReply] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  const handleSendReply = () => {
    onSendReply(inquiry._id, reply);
    setReply('');
    setIsReplying(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-bold">{inquiry.name}</h3>
      <p className="text-sm text-gray-600">{inquiry.email}</p>
      <p className="mt-2">{inquiry.subject}</p>
      <p className="text-gray-500 text-sm mt-1">{inquiry.message}</p>
      <p className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold ${inquiry.status === 'new' ? 'bg-blue-100 text-blue-800' : inquiry.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
        {inquiry.status}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="text-blue-600 hover:text-blue-800"
        >
          {isReplying ? 'Cancel' : 'Reply'}
        </button>
        <button
          onClick={() => onUpdateStatus(inquiry._id, 'completed')}
          className="text-green-600 hover:text-green-800"
        >
          Mark Completed
        </button>
      </div>
      {isReplying && (
        <div className="mt-4">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={3}
            placeholder="Type your reply..."
          />
          <button
            onClick={handleSendReply}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default InquiryCard;
