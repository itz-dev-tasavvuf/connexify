import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  // This will be replaced with Firebase auth handling
  return NextResponse.redirect(new URL('/dashboard', request.url));
}