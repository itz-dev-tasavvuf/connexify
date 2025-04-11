import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockGetSession } from './lib/mock/auth';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { session } = await mockGetSession();

  // Protected routes
  if (
    !session &&
    (req.nextUrl.pathname.startsWith('/dashboard') ||
     req.nextUrl.pathname.startsWith('/tasks') ||
     req.nextUrl.pathname.startsWith('/teams') ||
     req.nextUrl.pathname.startsWith('/roles/apply'))
  ) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Redirect logged in users from auth pages
  if (
    session &&
    (req.nextUrl.pathname.startsWith('/auth/login') ||
     req.nextUrl.pathname.startsWith('/auth/register'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/tasks/:path*',
    '/teams/:path*',
    '/roles/apply/:path*',
    '/auth/login',
    '/auth/register',
  ],
};