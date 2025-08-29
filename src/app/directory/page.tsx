"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ProfileCard } from "@/components/ProfileCard";

export default function DirectoryPage() {
  const profiles = useQuery(api.profiles.getApprovedProfiles);

  if (profiles === undefined) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Creative Directory</h1>
        <p className="text-center mb-12 text-gray-600">Discover talented creatives from South Africa</p>
        
        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">No profiles available yet.</h2>
            <p className="text-gray-500 mt-2">Check back soon for amazing creatives!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile._id}
                photo={profile.photo}
                name={profile.bio.split(' ').slice(0, 2).join(' ')}
                profession={profile.location} // For now, using location as profession
                previewImages={profile.images.slice(0, 3)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}