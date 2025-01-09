// // import React from 'react';
// import { Sidebar } from '../../components/admin/Sidebar';
// import { DashboardStats } from '../../components/admin/Dashboardstats';
// import { InquiryList } from '../../components/admin/InquiryList';
// import { useAuth } from '../../context/AuthContext';
// import { useInquiries } from '../../hooks/useinquiries';
// import { Navigate } from 'react-router-dom';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';
// import { ErrorMessage } from '../../components/common/ErrorMessage';

// const Dashboard = () => {
//   const { isAuthenticated } = useAuth();
//   const { 
//     inquiries, 
//     loading, 
//     error, 
//     updateStatus, 
//     sendReply, 
//     refresh 
//   } = useInquiries();

//   if (!isAuthenticated) {
//     return <Navigate to="/admin/login" />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 ml-64 p-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
//           <DashboardStats />
          
//           <div className="mt-8">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Recent Inquiries</h2>
//               <button 
//                 onClick={refresh}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Refresh
//               </button>
//             </div>

//             {loading ? (
//               <LoadingSpinner />
//             ) : error ? (
//               <ErrorMessage message={error} onRetry={refresh} />
//             ) : (
//               <InquiryList 
//                 inquiries={inquiries} 
//                 onUpdateStatus={updateStatus}
//                 onSendReply={sendReply}
//               />
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// import { Sidebar } from '../../components/admin/Sidebar';
// import { DashboardStats } from '../../components/admin/Dashboardstats';
// import { InquiryList } from '../../components/admin/InquiryList';
// import { useAuth } from '../../context/AuthContext';
// import { useInquiries } from '../../hooks/useinquiries';
// import { Navigate } from 'react-router-dom';
// import { LoadingSpinner } from '../../components/common/LoadingSpinner';

// const Dashboard = () => {
//   const { isAuthenticated } = useAuth();
//   const { 
//     inquiries, 
//     loading, 
//     error, 
//     updateStatus, 
//     sendReply, 
//     refresh 
//   } = useInquiries();

//   if (!isAuthenticated) {
//     return <Navigate to="/admin/login" />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 ml-64 p-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
//           <DashboardStats />

//           <div className="mt-8">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Recent Inquiries</h2>
//               <button 
//                 onClick={refresh}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Refresh
//               </button>
//             </div>

//             {loading ? (
//               <LoadingSpinner />
//             ) : error ? (
//               <div className="bg-red-100 text-red-600 p-4 rounded mb-4">
//                 <p>{error}</p>
//                 <button 
//                   onClick={refresh}
//                   className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Retry
//                 </button>
//               </div>
//             ) : (
//               <InquiryList 
//                 inquiries={inquiries} 
//                 onUpdateStatus={updateStatus}
//                 onSendReply={sendReply}
//               />
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
import { AdminLayout } from '../../components/admin/Layout';
import { DashboardStats } from '../../components/admin/Dashboardstats';
import { InquiryList } from '../../components/admin/InquiryList';
import { useAuth } from '../../context/AuthContext';
import { useInquiries } from '../../hooks/useinquiries';
import { Navigate } from 'react-router-dom';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../components/common/ErrorMessage';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { 
    inquiries, 
    loading, 
    error, 
    updateStatus, 
    sendReply, 
    refresh 
  } = useInquiries();

  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
        <DashboardStats />
        
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Inquiries</h2>
            <button 
              onClick={refresh}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} onRetry={refresh} />
          ) : (
            <InquiryList 
              inquiries={inquiries} 
              onUpdateStatus={updateStatus}
              onSendReply={sendReply}
            />
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;