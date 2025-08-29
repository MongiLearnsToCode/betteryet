"use client";

import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const profile = useQuery(api.profiles.getProfileById, { id: params.id as Id<"profiles"> });
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Handle profile not found
  useEffect(() => {
    if (profile === null) {
      router.push("/404");
    }
  }, [profile, router]);

  if (profile === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (profile === null) {
    return null; // Will redirect to 404
  }

  // For MVP, we'll just show the contact button as a mailto link
  const handleContact = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link href="/directory" className="text-blue-600 hover:underline">
            &larr; Back to Directory
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative h-32 w-32 flex-shrink-0">
                <Image 
                  src={profile.photo} 
                  alt={profile.bio} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              
              {/* Profile Info */}
              <div className="text-center md:text-left flex-grow">
                <h1 className="text-2xl font-bold text-gray-900">{profile.bio.split(' ').slice(0, 2).join(' ')}</h1>
                <p className="text-gray-600 mb-2">{profile.profession}</p>
                <p className="text-gray-600 mb-4">{profile.location}</p>
                
                {/* Contact Button */}
                <button 
                  onClick={handleContact}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Contact via Email
                </button>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="p-6">
            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600">{profile.bio}</p>
            </div>
            
            {/* Portfolio Images */}
            {profile.images && profile.images.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Portfolio</h2>
                
                {/* Main Image */}
                {profile.images[mainImageIndex] && (
                  <div className="relative h-96 w-full mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src={profile.images[mainImageIndex]} 
                      alt={`Portfolio image ${mainImageIndex + 1}`} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                
                {/* Thumbnails */}
                <div className="grid grid-cols-6 gap-2">
                  {profile.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`relative h-20 w-full cursor-pointer rounded overflow-hidden border-2 ${index === mainImageIndex ? 'border-blue-500' : 'border-gray-200'}`}
                      onClick={() => setMainImageIndex(index)}
                    >
                      <Image 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`} 
                        fill 
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Links */}
            {profile.links && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Links</h2>
                <div className="flex flex-wrap gap-3">
                  {profile.links.website && (
                    <a 
                      href={profile.links.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Website
                    </a>
                  )}
                  {profile.links.instagram && (
                    <a 
                      href={profile.links.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Instagram
                    </a>
                  )}
                  {profile.links.twitter && (
                    <a 
                      href={profile.links.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Twitter
                    </a>
                  )}
                  {profile.links.linkedin && (
                    <a 
                      href={profile.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {profile.links.vimeo && (
                    <a 
                      href={profile.links.vimeo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Vimeo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}