import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the user is trying to access an admin route
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    // Check if the user is logged in (for MVP, we'll check localStorage)
    // In a real application, this would be handled by Convex auth
    const isLoggedIn = request.cookies.get('adminLoggedIn')?.value === 'true';
    
    if (!isLoggedIn) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  // Continue with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
};