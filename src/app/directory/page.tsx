"use client";

import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ProfileCard } from "@/components/ProfileCard";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const locations = useQuery(api.profiles.getAllLocations);
  const profiles = useQuery(
    searchTerm && locationFilter 
      ? api.profiles.searchApprovedProfilesByProfessionAndLocation 
      : searchTerm 
        ? api.profiles.searchApprovedProfilesByProfession 
        : locationFilter 
          ? api.profiles.getApprovedProfilesByLocation 
          : api.profiles.getApprovedProfiles,
    searchTerm && locationFilter 
      ? { profession: searchTerm, location: locationFilter } 
      : searchTerm 
        ? { profession: searchTerm } 
        : locationFilter 
          ? { location: locationFilter } 
          : undefined
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is automatically handled by the useQuery hook above
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationFilter(e.target.value);
  };

  if (profiles === undefined || locations === undefined) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Creative Directory</h1>
        <p className="text-center mb-8 text-gray-600">Discover talented creatives from South Africa</p>
        
        {/* Search and Filter Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by profession (e.g. Photographer, Designer, Developer)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full sm:w-48">
              <select
                value={locationFilter}
                onChange={handleLocationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        
        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">
              {searchTerm || locationFilter 
                ? `No profiles found for "${searchTerm}" in "${locationFilter}".` 
                : "No profiles available yet."}
            </h2>
            <p className="text-gray-500 mt-2">
              {searchTerm || locationFilter 
                ? "Try different search terms or filters." 
                : "Check back soon for amazing creatives!"}
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