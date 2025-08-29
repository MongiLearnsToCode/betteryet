"use client";

import Image from "next/image";

export function ProfileCard({ 
  photo, 
  name, 
  profession, 
  previewImages 
}: { 
  photo: string; 
  name: string; 
  profession: string; 
  previewImages: string[]; 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Profile Photo */}
      <div className="relative h-48 w-full">
        <Image 
          src={photo} 
          alt={name} 
          fill 
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      
      {/* Profile Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{profession}</p>
        
        {/* Preview Images */}
        {previewImages && previewImages.length > 0 && (
          <div className="grid grid-cols-3 gap-1 mb-4">
            {previewImages.slice(0, 3).map((img, index) => (
              <div key={index} className="relative h-16 w-full">
                <Image 
                  src={img} 
                  alt={`${name} preview ${index + 1}`} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Contact Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}