"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProfileForm } from "@/components/admin/ProfileForm";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

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
        <p className="mb-8 text-gray-600">Create new creative profiles</p>
        <ProfileForm />
      </div>
    </div>
  );
}