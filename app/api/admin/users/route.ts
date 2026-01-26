import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { UserRole, PlanType } from '@prisma/client'

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
        return new NextResponse('Unauthorized', { status: 403 })
    }

    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                plan: true,
                createdAt: true,
                _count: {
                    select: { quantumCompletions: true }
                }
            }
        })

        return NextResponse.json(users)
    } catch (error) {
        console.error('Failed to fetch users:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}

export async function PATCH(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
        return new NextResponse('Unauthorized', { status: 403 })
    }

    try {
        const body = await request.json()
        const { userId, role, plan } = body

        if (!userId) {
            return new NextResponse('User ID required', { status: 400 })
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                role: role as UserRole,
                plan: plan as PlanType
            }
        })

        return NextResponse.json(updatedUser)
    } catch (error) {
        console.error('Failed to update user:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
