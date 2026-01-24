import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET Programs structure
export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'MENTOR')) {
        return new NextResponse('Unauthorized', { status: 403 })
    }

    try {
        const programs = await prisma.program.findMany({
            include: {
                modules: {
                    orderBy: { order: 'asc' },
                    include: {
                        quantums: {
                            orderBy: { order: 'asc' }
                        }
                    }
                }
            }
        })
        return NextResponse.json(programs)
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
    }
}

// CREATE new Program
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'ADMIN') { // Only Admin creates programs
        return new NextResponse('Unauthorized', { status: 403 })
    }

    try {
        const body = await request.json()
        const program = await prisma.program.create({
            data: {
                title: body.title,
                slug: body.slug,
                description: body.description,
                level: body.level || 'FREE',
                published: false
            }
        })
        return NextResponse.json(program)
    } catch (error) {
        console.error(error)
        return new NextResponse('Failed to create program', { status: 500 })
    }
}
