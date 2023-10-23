import { NextResponse } from 'next/server'
import { authMiddleware } from './authMiddleware'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   const path = (path) => request.nextUrl.pathname.startsWith(path)
   console.log(
      'middleware -> ',
      request.nextUrl.pathname.startsWith('/udashboard')
   )
   if (path('/test-auth')) {
      authMiddleware(request, NextResponse)
      return NextResponse.redirect(new URL('/about-2', request.url))
   }
   //return NextResponse.next()
   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more

export const config = {
   matcher: '/about/:path*',
}
