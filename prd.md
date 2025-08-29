# Product Requirements Document (PRD)

**Project Name:** Better Yet (MVP)  
**Version:** 0.0.1    

---

## 1. Purpose
To connect South African creative professionals with potential clients by providing a simple, searchable directory of curated profiles. The MVP prioritizes *client discovery* over social features or payment handling.

---

## 2. Goals
- Enable clients to **discover local creatives** quickly.  
- Provide creatives with **profile visibility** (portfolio + contact details).  
- Ensure content quality by **admin approval** before profiles go live.  

**Success =** clients can browse, filter, view, and email at least 6 creatives.

---

## 3. Core Features (MVP Scope)

### 3.1 Creative Profiles
- **Required Fields:**
  - Profile photo  
  - Short bio (max 250 characters)  
  - Location (city)  
  - Portfolio: up to 6 images  
  - Contact email  
- **Optional Fields:**
  - Links (social media, external portfolio, video reel)

### 3.2 Discovery & Browsing
- **Search bar** (by profession/discipline).  
- **Location filter** (by city or “Anywhere”).  
- Grid/list display of profiles with photo, name, profession, and preview images.  

### 3.3 Contact
- “Contact” button → opens user’s default email client via `mailto:` link.  
- No in-app messaging in MVP.  

### 3.4 Admin Approval
- All new profiles require admin approval before being visible.  
- Basic admin dashboard:
  - View pending profiles  
  - Approve / reject / edit  

---

## 4. Non-Goals (Not in MVP)
- In-app messaging or chat.  
- Payments / escrow.  
- Ratings & reviews.  
- Social features (likes, follows).  
- Complex search (fuzzy, AI tags).  

---

## 5. User Flows

**Creative (admin-added in MVP):**  
1. Admin adds creative’s info + uploads images  
2. Profile pending  
3. Admin approves  
4. Profile visible  

**Client:**  
1. Visits site  
2. Searches by profession/location  
3. Views profile grid  
4. Clicks profile  
5. Clicks “Contact” → email client opens  

**Admin:**  
1. Logs in  
2. Views new submissions  
3. Approves or rejects  

---

## 6. Content & Data Constraints
- Bio limited to 250 chars  
- Max 6 portfolio images per profile  
- Only JPG/PNG/WebP formats allowed  
- All links stored as raw URLs (no previews needed for MVP)  

---

## 7. Success Criteria (MVP Done Line)
- At least 6 creatives onboarded and live  
- Clients can:
  - Search/filter  
  - View creative profiles  
  - Open email contact links  
- Admin can approve/reject profiles  

---

## 8. Tech Stack
- **Frontend:** Next.js + TailwindCSS + shadcn/ui  
- **Backend:** Convex (data + admin auth)  
- **Storage:** Cloudinary (portfolio images)  
- **Deployment:** Vercel (primary)  
- **Monitoring:** Sentry (error tracking), Vercel Analytics (basic usage)  

---

## 9. Risks & Edge Cases
- **Empty directory at launch:** mitigated by manual seeding (initial 6 creatives).  
- **Spam / fake profiles:** mitigated by admin-only approvals.  
- **Broken uploads:** enforce file type/size limits.  

---

## 10. Future Enhancements (Post-MVP)
- Self-service creative sign-up with Convex Auth  
- In-app messaging  
- Reviews & ratings  
- Advanced search (Algolia/Meilisearch)  
- Video hosting  
- Payments & commissions  

