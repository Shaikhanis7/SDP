// NotFound.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Page Not Found</h2>
        <p className="text-md mb-8 text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <NavLink
          to="/"
          className=" flex items-center justify-center bg-primary dark:bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-hover dark:hover:bg-blue-600 transition-colors duration-300"
        >
          <FaHome className="mr-2" /> Go Back Home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
