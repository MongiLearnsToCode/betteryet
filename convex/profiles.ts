import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new profile (for admin use)
export const createProfile = mutation({
  args: {
    photo: v.string(),
    bio: v.string(),
    location: v.string(),
    profession: v.string(), // Adding profession field
    images: v.array(v.string()),
    email: v.string(),
    links: v.optional(v.object({
      website: v.optional(v.string()),
      instagram: v.optional(v.string()),
      twitter: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      vimeo: v.optional(v.string()),
    })),
  },
  handler: async (ctx, args) => {
    // For MVP, all new profiles are not approved by default
    const profile = {
      ...args,
      approved: false,
    };
    
    const id = await ctx.db.insert("profiles", profile);
    return id;
  },
});

// Get all approved profiles (for client browsing)
export const getApprovedProfiles = query({
  handler: async (ctx) => {
    return await ctx.db.query("profiles")
      .withIndex("by_approved", q => q.eq("approved", true))
      .collect();
  },
});

// Search approved profiles by filters
export const searchApprovedProfiles = query({
  args: {
    profession: v.optional(v.string()),
    location: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let query = ctx.db.query("profiles").withIndex("by_approved", q => q.eq("approved", true));
    
    // Apply profession filter if provided
    if (args.profession) {
      query = query.filter(q => q.eq(q.field("profession"), args.profession));
    }
    
    // Apply location filter if provided
    if (args.location) {
      query = query.filter(q => q.eq(q.field("location"), args.location));
    }
    
    return await query.collect();
  },
});

// Get all unique locations for the filter dropdown
export const getAllLocations = query({
  handler: async (ctx) => {
    const profiles = await ctx.db.query("profiles")
      .withIndex("by_approved", q => q.eq("approved", true))
      .collect();
      
    const locations = new Set(profiles.map(profile => profile.location));
    return Array.from(locations).sort();
  },
});

// Get a single profile by ID
export const getProfileById = query({
  args: {
    id: v.id("profiles"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Update a profile (for admin use)
export const updateProfile = mutation({
  args: {
    id: v.id("profiles"),
    photo: v.optional(v.string()),
    bio: v.optional(v.string()),
    location: v.optional(v.string()),
    profession: v.optional(v.string()), // Adding profession field
    images: v.optional(v.array(v.string())),
    email: v.optional(v.string()),
    links: v.optional(v.object({
      website: v.optional(v.string()),
      instagram: v.optional(v.string()),
      twitter: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      vimeo: v.optional(v.string()),
    })),
    approved: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updateFields } = args;
    await ctx.db.patch(id, updateFields);
  },
});

// Delete a profile (for admin use)
export const deleteProfile = mutation({
  args: {
    id: v.id("profiles"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Get all pending profiles (for admin dashboard)
export const getPendingProfiles = query({
  handler: async (ctx) => {
    return await ctx.db.query("profiles")
      .withIndex("by_approved", q => q.eq("approved", false))
      .collect();
  },
});