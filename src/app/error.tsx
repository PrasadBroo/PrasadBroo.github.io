'use client';

import { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <FaExclamationTriangle className="mx-auto text-red-500 text-5xl mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={() => reset()}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
