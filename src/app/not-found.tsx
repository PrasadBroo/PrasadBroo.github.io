import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Prasad Shinde",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <FaExclamationCircle className="mx-auto text-yellow-500 text-5xl mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
