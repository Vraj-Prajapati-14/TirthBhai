import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  isAdminRoute?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ isAdminRoute }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      {!isAdminRoute && <p className="text-2xl mb-6">Page Not Found!</p>}
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
