'use client'

import { useSession } from 'next-auth/react'
import { UserRole, PlanType } from '@prisma/client'

export function usePermission() {
    const { data: session, status } = useSession()

    const role = session?.user?.role as UserRole | undefined
    const plan = session?.user?.plan as PlanType | undefined

    const isLoading = status === 'loading'

    // Role Checks
    const isAdmin = role === 'ADMIN'
    const isMentor = role === 'MENTOR' || role === 'ADMIN' // Admins inherit mentor perms
    const isTrader = !!role // Everyone is at least a trader if logged in

    // Plan Checks
    const isFree = plan === 'FREE'
    const isPro = ['PRO_TRADER', 'ELITE_TRADER', 'MASTERY_CIRCLE'].includes(plan || '')
    const isElite = ['ELITE_TRADER', 'MASTERY_CIRCLE'].includes(plan || '')
    const isMastery = plan === 'MASTERY_CIRCLE'

    return {
        role,
        plan,
        isLoading,
        // Roles
        isAdmin,
        isMentor,
        isTrader,
        // Plans
        isFree,
        isPro,
        isElite,
        isMastery,
        // Helper
        canAccess: (requiredRole?: UserRole, requiredPlan?: PlanType) => {
            if (requiredRole && role !== requiredRole && role !== 'ADMIN') return false
            // Add plan comparison logic if needed, usually simple boolean checks above are easier
            return true
        }
    }
}
