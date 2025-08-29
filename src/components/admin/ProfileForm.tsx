"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function ProfileForm() {
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<string[]>(Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [vimeo, setVimeo] = useState("");

  const createProfile = useMutation(api.profiles.createProfile);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty image URLs
    const filteredImages = images.filter(url => url.trim() !== "");
    
    try {
      await createProfile({
        photo,
        bio,
        location,
        images: filteredImages,
        email,
        links: {
          website: website || undefined,
          instagram: instagram || undefined,
          twitter: twitter || undefined,
          linkedin: linkedin || undefined,
          vimeo: vimeo || undefined,
        },
      });
      
      // Reset form
      setPhoto("");
      setBio("");
      setLocation("");
      setImages(Array(6).fill(""));
      setEmail("");
      setWebsite("");
      setInstagram("");
      setTwitter("");
      setLinkedin("");
      setVimeo("");
      
      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Error creating profile. Please try again.");
    }
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Profile</h2>
      
      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
          Profile Photo URL
        </label>
        <input
          type="text"
          id="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">
          Bio (max 250 characters)
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={250}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="text-right text-sm text-gray-500">
          {bio.length}/250
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Contact Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Portfolio Images (up to 6)
        </label>
        {images.map((image, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Image ${index + 1} URL`}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-800">Social Links</h3>
        
        <div className="mb-3">
          <label htmlFor="website" className="block text-gray-700 text-sm mb-1">
            Website
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="instagram" className="block text-gray-700 text-sm mb-1">
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="https://instagram.com/username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="twitter" className="block text-gray-700 text-sm mb-1">
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="https://twitter.com/username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="linkedin" className="block text-gray-700 text-sm mb-1">
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="vimeo" className="block text-gray-700 text-sm mb-1">
            Vimeo
          </label>
          <input
            type="text"
            id="vimeo"
            value={vimeo}
            onChange={(e) => setVimeo(e.target.value)}
            placeholder="https://vimeo.com/username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Create Profile
      </button>
    </form>
  );
}