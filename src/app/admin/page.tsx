"use client";

import { ProfileForm } from "@/components/admin/ProfileForm";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h1>
        <p className="text-center mb-8 text-gray-600">Create new creative profiles</p>
        <ProfileForm />
      </div>
    </div>
  );
}