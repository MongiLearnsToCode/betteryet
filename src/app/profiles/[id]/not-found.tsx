"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Profile Not Found</h1>
        <p className="text-gray-600 mb-8">The profile you are looking for does not exist or has been removed.</p>
        <a 
          href="/" 
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Back to Directory
        </a>
      </div>
    </div>
  );
}