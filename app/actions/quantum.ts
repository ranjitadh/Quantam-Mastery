'use server'

import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { QuantumService } from '@/lib/quantum'
import { revalidatePath } from 'next/cache'

export async function submitQuantumCompletion(quantumId: string, reflection: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error('Unauthorized')
    }

    try {
        await QuantumService.completeQuantum(session.user.id, quantumId, reflection)
        revalidatePath('/dashboard')
        revalidatePath(`/dashboard/program/quantum/${quantumId}`)
        return { success: true }
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
}
