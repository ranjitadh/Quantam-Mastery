import 'next-auth'
import { UserRole, PlanType } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      role: UserRole
      plan: PlanType
    }
    refreshToken?: string
  }

  interface User {
    id: string
    role: UserRole
    plan: PlanType
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: UserRole
    plan: PlanType
    refreshToken?: string
  }
}
