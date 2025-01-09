    // import React, { useState } from 'react';
    // // import { Mail, Phone, Calendar, CheckCircle, XCircle } from 'lucide-react';

    // interface Inquiry {
    //   _id: string;
    //   name: string;
    //   email: string;
    //   subject: string;
    //   message: string;
    //   status: 'new' | 'in-progress' | 'completed';
    //   createdAt: string;
    // }

    // interface InquiryListProps {
    //   inquiries: Inquiry[];
    //   onUpdateStatus: (id: string, status: string) => void;
    //   onSendReply: (id: string, reply: string) => void;
    // }

    // export const InquiryList: React.FC<InquiryListProps> = ({
    //   inquiries,
    //   onUpdateStatus,
    //   onSendReply,
    // }) => {
    //   const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
    //   const [reply, setReply] = useState('');

    //   const handleSendReply = (id: string) => {
    //     onSendReply(id, reply);
    //     setReply('');
    //     setSelectedInquiry(null);
    //   };

    //   const getStatusColor = (status: string) => {
    //     switch (status) {
    //       case 'new': return 'bg-blue-100 text-blue-800';
    //       case 'in-progress': return 'bg-yellow-100 text-yellow-800';
    //       case 'completed': return 'bg-green-100 text-green-800';
    //       default: return 'bg-gray-100 text-gray-800';
    //     }
    //   };

    //   return (
    //     <div className="bg-white rounded-xl shadow-lg">
    //       <div className="overflow-x-auto">
    //         <table className="w-full">
    //           <thead>
    //             <tr className="bg-gray-50">
    //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Contact
    //               </th>
    //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Subject
    //               </th>
    //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Status
    //               </th>
    //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Date
    //               </th>
    //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Actions
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="divide-y divide-gray-200">
    //             {inquiries.map((inquiry) => (
    //               <React.Fragment key={inquiry._id}>
    //                 <tr className="hover:bg-gray-50">
    //                   <td className="px-6 py-4">
    //                     <div className="flex items-center">
    //                       <div className="flex-shrink-0 h-10 w-10">
    //                         <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
    //                           <span className="text-gray-600 font-medium">
    //                             {inquiry.name[0].toUpperCase()}
    //                           </span>
    //                         </div>
    //                       </div>
    //                       <div className="ml-4">
    //                         <div className="text-sm font-medium text-gray-900">
    //                           {inquiry.name}
    //                         </div>
    //                         <div className="text-sm text-gray-500">
    //                           {inquiry.email}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </td>
    //                   <td className="px-6 py-4">
    //                     <div className="text-sm text-gray-900">{inquiry.subject}</div>
    //                   </td>
    //                   <td className="px-6 py-4">
    //                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
    //                       {inquiry.status}
    //                     </span>
    //                   </td>
    //                   <td className="px-6 py-4 text-sm text-gray-500">
    //                     {new Date(inquiry.createdAt).toLocaleDateString()}
    //                   </td>
    //                   <td className="px-6 py-4 text-sm font-medium">
    //                     <button
    //                       onClick={() => setSelectedInquiry(inquiry._id)}
    //                       className="text-blue-600 hover:text-blue-900 mr-3"
    //                     >
    //                       Reply
    //                     </button>
    //                     <button
    //                       onClick={() => onUpdateStatus(inquiry._id, 'completed')}
    //                       className="text-green-600 hover:text-green-900"
    //                     >
    //                       Complete
    //                     </button>
    //                   </td>
    //                 </tr>
    //                 {selectedInquiry === inquiry._id && (
    //                   <tr>
    //                     <td colSpan={5} className="px-6 py-4 bg-gray-50">
    //                       <div className="space-y-4">
    //                         <textarea
    //                           value={reply}
    //                           onChange={(e) => setReply(e.target.value)}
    //                           className="w-full p-3 border rounded-lg"
    //                           rows={4}
    //                           placeholder="Type your reply..."
    //                         />
    //                         <div className="flex justify-end space-x-3">
    //                           <button
    //                             onClick={() => setSelectedInquiry(null)}
    //                             className="px-4 py-2 text-gray-600 hover:text-gray-800"
    //                           >
    //                             Cancel
    //                           </button>
    //                           <button
    //                             onClick={() => handleSendReply(inquiry._id)}
    //                             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    //                           >
    //                             Send Reply
    //                           </button>
    //                         </div>
    //                       </div>
    //                     </td>
    //                   </tr>
    //                 )}
    //               </React.Fragment>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   );
    // };

    import React, { useState } from 'react';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
  createdAt: string;
}

interface InquiryListProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: 'new' | 'in-progress' | 'completed') => void;
  onSendReply: (id: string, reply: string) => void;
}

export const InquiryList: React.FC<InquiryListProps> = ({ inquiries, onUpdateStatus, onSendReply }) => {
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [reply, setReply] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <React.Fragment key={inquiry._id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-600 font-medium">{inquiry.name[0].toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                        <div className="text-sm text-gray-500">{inquiry.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{inquiry.subject}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button onClick={() => setSelectedInquiry(inquiry._id)} className="text-blue-600 hover:text-blue-900 mr-3">
                      Reply
                    </button>
                    <button
                      onClick={() => onUpdateStatus(inquiry._id, 'completed')}
                      className="text-green-600 hover:text-green-900"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
                {selectedInquiry === inquiry._id && (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 bg-gray-50">
                      <div className="space-y-4">
                        <textarea
                          value={reply}
                          onChange={(e) => setReply(e.target.value)}
                          className="w-full p-3 border rounded-lg"
                          rows={4}
                          placeholder="Type your reply..."
                        />
                        <div className="flex justify-end space-x-3">
                          <button onClick={() => setSelectedInquiry(null)} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              if (reply) {
                                onSendReply(inquiry._id, reply);
                                setReply('');
                                setSelectedInquiry(null);
                              }
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Send Reply
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
