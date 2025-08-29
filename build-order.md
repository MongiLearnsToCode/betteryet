# Build Order: Better Yet (MVP)

## Phase 1 – Skeleton
- [x] Set up Next.js project (with Tailwind + shadcn/ui).  
- [x] Connect Convex backend.  
- [x] Add Cloudinary integration for image uploads.  
- [x] Deploy "Hello World" app to Vercel → confirm CI/CD works.  

---

## Phase 2 – Core Data & Profiles
- [ ] Define Convex schema: `profiles` collection (photo, bio, location, 6 images, email, links).  
- [ ] Build profile form (for admin input only at MVP).  
- [ ] Build profile card (photo, name, profession, preview images, contact button).  
- [ ] Build profile detail page (full info + 6 images + links + email).  

---

## Phase 3 – Discovery & Browsing
- [ ] Build directory page with profile grid/list.  
- [ ] Add search by profession/discipline.  
- [ ] Add location filter.  
- [ ] Hook up Convex queries for filtering.  

---

## Phase 4 – Admin Approval
- [ ] Build basic admin login (Convex Auth for just you).  
- [ ] Admin dashboard: list pending profiles.  
- [ ] Approve/reject/edit profiles.  
- [ ] Only approved profiles show in client-facing directory.  

---

## Phase 5 – Contact
- [ ] Add `mailto:` “Contact” button on profile detail.  
- [ ] Test across browsers (email client should open correctly).  

---

## Phase 6 – Polish & Launch Prep
- [ ] Enforce content constraints (6 images max, 250-char bio, file formats).  
- [ ] Add error states (broken image, empty search results).  
- [ ] Seed directory with 6 invited creatives (manually via admin form).  
- [ ] QA test flows (search → profile → contact).  

---

## Launch Criteria
- [ ] At least 6 creatives onboarded.  
- [ ] Clients can search, filter, view, and email.  
- [ ] Admin can approve/reject profiles.  

---

## Optional Nice-to-Haves
- [ ] Basic analytics (Vercel or PostHog).  
- [ ] Sentry error monitoring.  
- [ ] Minimal homepage copy/branding.  
