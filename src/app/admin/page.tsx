"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { ProfileForm } from "@/components/admin/ProfileForm";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pendingProfiles = useQuery(api.profiles.getPendingProfiles);
  const updateProfile = useMutation(api.profiles.updateProfile);

  useEffect(() => {
    // Check if the user is logged in
    const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    setIsLoggedIn(adminLoggedIn);
    
    if (!adminLoggedIn) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    router.push("/admin/login");
  };

  const handleApprove = async (profileId: Id<"profiles">) => {
    try {
      await updateProfile({ id: profileId, approved: true });
    } catch (error) {
      console.error("Error approving profile:", error);
      alert("Error approving profile. Please try again.");
    }
  };

  const handleReject = async (profileId: Id<"profiles">) => {
    try {
      await updateProfile({ id: profileId, approved: false });
    } catch (error) {
      console.error("Error rejecting profile:", error);
      alert("Error rejecting profile. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Pending Profiles</h2>
          {pendingProfiles === undefined ? (
            <p>Loading...</p>
          ) : pendingProfiles.length === 0 ? (
            <p>No pending profiles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingProfiles.map((profile) => (
                <div key={profile._id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-2">{profile.bio.split(' ').slice(0, 2).join(' ')}</h3>
                  <p className="text-gray-600 mb-2">{profile.profession}</p>
                  <p className="text-gray-600 mb-4">{profile.location}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleApprove(profile._id)}
                      className="bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleReject(profile._id)}
                      className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Profile</h2>
          <p className="mb-6 text-gray-600">Create new creative profiles</p>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}