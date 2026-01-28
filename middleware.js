import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
      // Exclude login page itself (just in case)
      if (pathname.includes('/auth/login')) {
          return NextResponse.next();
      }

      // Check for session cookie
      const session = request.cookies.get('admin_session');

      if (!session) {
          // Redirect to login
          const loginUrl = new URL('/auth/login', request.url);
          return NextResponse.redirect(loginUrl);
      }
  }

  // Pass the current path to the layout via headers (Crucial for Server-Side Security Checks)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-current-path', pathname);

  return NextResponse.next({
      request: {
          headers: requestHeaders,
      },
  });
}

export const config = {
  matcher: ['/admin/:path*'],
};
