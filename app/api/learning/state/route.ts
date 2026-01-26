import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { QuantumService } from '@/lib/quantum'

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        return new NextResponse('Unauthorized', { status: 401 })
    }

    try {
        const { searchParams } = new URL(request.url)
        const programSlug = searchParams.get('slug') || 'foundation'

        const head = await QuantumService.getUserCurrentHead(session.user.id, programSlug)

        // This response represents the USER STATE MACHINE
        return NextResponse.json({
            programId: head.program.id,
            activeQuantum: head.currentQuantum, // The "Cursor"
            isComplete: head.isProgramComplete,
            progress: {
                completedCount: head.completedIds.length,
                total: head.totalQuantums,
                percentage: head.totalQuantums > 0 ? Math.round((head.completedIds.length / head.totalQuantums) * 100) : 0
            },
            history: head.completedIds // Only IDs for lightweight transport
        })

    } catch (error) {
        console.error('Learning State Error:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
