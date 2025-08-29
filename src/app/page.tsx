"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Discover Amazing Creatives</h1>
          <p className="text-xl text-gray-600 mb-10">
            Better Yet connects you with talented creatives from South Africa. 
            Find photographers, designers, developers, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/directory" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg font-medium"
            >
              Browse Creatives
            </Link>
            <Link 
              href="/admin" 
              className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-lg font-medium"
            >
              Admin Login
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Find Talent</h3>
            <p className="text-gray-600">
              Discover creatives by profession and location. 
              Find exactly what you are looking for.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Profiles</h3>
            <p className="text-gray-600">
              All profiles are reviewed and approved by our team 
              to ensure high quality and authenticity.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Contact</h3>
            <p className="text-gray-600">
              Reach out directly to creatives through their 
              contact information or social links.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}