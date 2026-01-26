import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // 1. Admin/Mentor Routes Protection
    if (path.startsWith('/admin') || path.startsWith('/dashboard/content-manager')) {
      if (token?.role !== 'ADMIN' && token?.role !== 'MENTOR') {
        return NextResponse.redirect(new URL('/dashboard/overview', req.url))
      }
    }

    // 2. Feature Gating (Plan based)
    // Trade Copier -> Requires PRO_TRADER or Higher
    if (path.startsWith('/dashboard/trade-copier')) {
      const allowedPlans = ['PRO_TRADER', 'ELITE_TRADER', 'MASTERY_CIRCLE']
      if (!token?.plan || !allowedPlans.includes(token.plan)) {
        return NextResponse.redirect(new URL('/dashboard/overview?error=upgrade_required', req.url))
      }
    }

    // Signals/Alpha -> Requires ELITE or Higher
    if (path.startsWith('/dashboard/alpha')) {
      const allowedPlans = ['ELITE_TRADER', 'MASTERY_CIRCLE']
      if (!token?.plan || !allowedPlans.includes(token.plan)) {
        return NextResponse.redirect(new URL('/dashboard/overview?error=elite_required', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*'
  ],
}
