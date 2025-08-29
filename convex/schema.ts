import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profiles: defineTable({
    photo: v.string(),
    bio: v.string(),
    location: v.string(),
    profession: v.string(), // Adding profession field
    images: v.array(v.string()), // Array of up to 6 image URLs
    email: v.string(),
    links: v.optional(v.object({
      website: v.optional(v.string()),
      instagram: v.optional(v.string()),
      twitter: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      vimeo: v.optional(v.string()),
    })),
    approved: v.boolean(), // For admin approval
  })
    .index("by_approved", ["approved"])
    .index("by_location", ["location"])
    .index("by_profession", ["profession"]) // Index for searching by profession
});