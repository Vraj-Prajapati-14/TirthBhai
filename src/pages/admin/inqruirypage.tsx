// import React, { useEffect, useState } from 'react';
// import { AdminLayout } from '../../components/admin/Layout';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { Bell, Search, Menu } from 'lucide-react';

// interface Inquiry {
//   _id: string;
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
//   status: 'new' | 'in-progress' | 'completed';
//   createdAt: string;
// }

// const InquiryPage: React.FC = () => {
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [reply, setReply] = useState<string>('');
//   const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   // Fetch all inquiries
//   const fetchInquiries = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('http://localhost:5000/api/contact');
//       if (response.ok) {
//         const data: Inquiry[] = await response.json();
//         setInquiries(data);
//       } else {
//         throw new Error('Failed to fetch inquiries.');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Unknown error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Toggle inquiry status between 'completed' and 'pending'
//   const toggleStatus = async (id: string) => {
//     const inquiry = inquiries.find((inquiry) => inquiry._id === id);
//     if (!inquiry) return;

//     const newStatus = inquiry.status === 'completed' ? 'new' : 'completed';
//     setIsSubmitting(true);
//     setError(null);
//     try {
//       const response = await fetch(`http://localhost:5000/api/contact/${id}/status`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (response.ok) {
//         setInquiries((prev) =>
//           prev.map((inquiry) =>
//             inquiry._id === id ? { ...inquiry, status: newStatus } : inquiry
//           )
//         );
//       } else {
//         throw new Error('Failed to update status.');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Unknown error occurred.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Send reply to an inquiry
//   const sendReply = async (id: string) => {
//     if (!reply.trim()) return;
//     setIsSubmitting(true);
//     setError(null);
//     try {
//       const response = await fetch(`http://localhost:5000/api/contact/${id}/reply`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ reply }),
//       });
//       if (response.ok) {
//         setReply('');
//         setSelectedInquiry(null);
//         fetchInquiries(); // Refresh inquiries after sending a reply
//       } else {
//         throw new Error('Failed to send reply.');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Unknown error occurred.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     fetchInquiries();
//   }, []);

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'new':
//         return 'bg-blue-100 text-blue-800';
//       case 'in-progress':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="px-4 sm:px-6 lg:px-8">
//         <header className="flex items-center justify-between py-6">
//           <h1 className="text-2xl font-semibold text-gray-900">Inquiries</h1>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search inquiries..."
//                 className="px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//               <Search className="absolute right-2 top-2 text-gray-400" size={20} />
//             </div>
//             <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
//               <Bell className="text-gray-600" size={20} />
//             </button>
//             <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none md:hidden">
//               <Menu className="text-gray-600" size={20} />
//             </button>
//           </div>
//         </header>

//         <main className="bg-white shadow rounded-lg p-4">
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <LoadingSpinner />
//             </div>
//           ) : error ? (
//             <div className="text-red-500 text-center">{error}</div>
//           ) : (
//             <div className="bg-white rounded-xl shadow-lg">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                         Contact
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                         Subject
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                         Date
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {inquiries.map((inquiry) => (
//                       <React.Fragment key={inquiry._id}>
//                         <tr className="hover:bg-gray-50">
//                           <td className="px-6 py-4">
//                             <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
//                             <div className="text-sm text-gray-500">{inquiry.email}</div>
//                           </td>
//                           <td className="px-6 py-4">{inquiry.subject}</td>
//                           <td className="px-6 py-4">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
//                                 inquiry.status
//                               )}`}
//                             >
//                               {inquiry.status.replace('-', ' ')}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 text-sm text-gray-500">
//                             {new Date(inquiry.createdAt).toLocaleDateString()}
//                           </td>
//                           <td className="px-6 py-4 text-sm">
//                             <div className="flex items-center space-x-4">
//                               <input
//                                 type="checkbox"
//                                 checked={inquiry.status === 'completed'}
//                                 onChange={() => toggleStatus(inquiry._id)}
//                                 className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-400"
//                               />
//                               <button
//                                 onClick={() => setSelectedInquiry(inquiry._id)}
//                                 className="text-blue-600 hover:text-blue-900"
//                               >
//                                 Reply
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                         {selectedInquiry === inquiry._id && (
//                           <tr>
//                             <td colSpan={5} className="px-6 py-4 bg-gray-50">
//                               <textarea
//                                 value={reply}
//                                 onChange={(e) => setReply(e.target.value)}
//                                 rows={4}
//                                 className="w-full p-3 border rounded"
//                                 placeholder="Type your reply..."
//                               />
//                               <div className="flex justify-end mt-3 space-x-2">
//                                 <button
//                                   onClick={() => setSelectedInquiry(null)}
//                                   className="px-4 py-2 text-gray-600"
//                                 >
//                                   Cancel
//                                 </button>
//                                 <button
//                                   onClick={() => sendReply(inquiry._id)}
//                                   disabled={isSubmitting}
//                                   className={`px-4 py-2 bg-blue-600 text-white rounded ${
//                                     isSubmitting ? 'opacity-50' : ''
//                                   }`}
//                                 >
//                                   Send
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </AdminLayout>
//   );
// };

// export default InquiryPage;
import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/Layout';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { Bell, Search, Menu } from 'lucide-react';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
  createdAt: string;
}

const InquiryPage: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState<string>('');
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch all inquiries
  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/contact');
      if (response.ok) {
        const data: Inquiry[] = await response.json();
        // Sort inquiries to show latest first
        setInquiries(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      } else {
        throw new Error('Failed to fetch inquiries.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Update status of an inquiry
  const updateStatus = async (id: string, status: 'new' | 'in-progress' | 'completed') => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        setInquiries((prev) =>
          prev.map((inquiry) =>
            inquiry._id === id ? { ...inquiry, status } : inquiry
          )
        );
      } else {
        throw new Error('Failed to update status.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Send reply to an inquiry
  const sendReply = async (id: string) => {
    if (!reply.trim()) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply }),
      });
      if (response.ok) {
        setReply('');
        setSelectedInquiry(null);
        fetchInquiries(); // Refresh inquiries after sending a reply
      } else {
        throw new Error('Failed to send reply.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // Get status badge styles
  const getStatusBadge = (status: string) => {
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

  // Filter inquiries based on search term
  const filteredInquiries = inquiries.filter((inquiry) =>
    inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Inquiries</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute right-2 top-2 text-gray-400" size={20} />
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
              <Bell className="text-gray-600" size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none md:hidden">
              <Menu className="text-gray-600" size={20} />
            </button>
          </div>
        </header>

        <main className="bg-white shadow rounded-lg p-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <LoadingSpinner />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry) => (
                    <React.Fragment key={inquiry._id}>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                          <div className="text-sm text-gray-500">{inquiry.email}</div>
                        </td>
                        <td className="px-6 py-4">{inquiry.subject}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                              inquiry.status
                            )}`}
                          >
                            {inquiry.status.replace('-', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <select
                              value={inquiry.status}
                              onChange={(e) =>
                                updateStatus(inquiry._id, e.target.value as Inquiry['status'])
                              }
                              className="text-sm border rounded px-2 py-1"
                              disabled={isSubmitting}
                            >
                              <option value="new">New</option>
                              <option value="in-progress">In-Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                            <button
                              onClick={() => setSelectedInquiry(inquiry._id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Reply
                            </button>
                          </div>
                        </td>
                      </tr>
                      {selectedInquiry === inquiry._id && (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 bg-gray-50">
                            <textarea
                              value={reply}
                              onChange={(e) => setReply(e.target.value)}
                              rows={4}
                              className="w-full p-3 border rounded"
                              placeholder="Type your reply..."
                            />
                            <div className="flex justify-end mt-3 space-x-2">
                              <button
                                onClick={() => setSelectedInquiry(null)}
                                className="px-4 py-2 text-gray-600"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => sendReply(inquiry._id)}
                                disabled={isSubmitting}
                                className={`px-4 py-2 bg-blue-600 text-white rounded ${
                                  isSubmitting ? 'opacity-50' : ''
                                }`}
                              >
                                Send
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </AdminLayout>
  );
};

export default InquiryPage;
