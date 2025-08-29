"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ProfileCard } from "@/components/ProfileCard";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const profiles = useQuery(
    searchTerm 
      ? api.profiles.searchApprovedProfilesByProfession 
      : api.profiles.getApprovedProfiles,
    searchTerm ? { profession: searchTerm } : undefined
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is automatically handled by the useQuery hook above
  };

  if (profiles === undefined) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Creative Directory</h1>
        <p className="text-center mb-8 text-gray-600">Discover talented creatives from South Africa</p>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by profession (e.g. Photographer, Designer, Developer)"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </form>
        
        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">
              {searchTerm ? `No profiles found for "${searchTerm}".` : "No profiles available yet."}
            </h2>
            <p className="text-gray-500 mt-2">
              {searchTerm ? "Try a different search term." : "Check back soon for amazing creatives!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile._id}
                photo={profile.photo}
                name={profile.bio.split(' ').slice(0, 2).join(' ')}
                profession={profile.profession} // Now using the actual profession field
                previewImages={profile.images.slice(0, 3)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}