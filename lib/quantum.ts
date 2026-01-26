import { prisma } from '@/lib/prisma'

export class QuantumError extends Error { }

export const QuantumService = {
  // FIND THE EDGE: Where is the user currently at?
  async getUserCurrentHead(userId: string, programSlug: string) {
    // 1. Get the program and all its structure
    const program = await prisma.program.findUnique({
      where: { slug: programSlug },
      include: {
        modules: {
          orderBy: { order: 'asc' },
          include: {
            quantums: {
              orderBy: { order: 'asc' },
            }
          }
        }
      }
    })

    if (!program) throw new Error('Program not found')

    // 2. Flatten expectations (The perfect sequence)
    const expectedSequence: { id: string; moduleId: string; order: number; title: string, type: string }[] = []

    program.modules.forEach(mod => {
      mod.quantums.forEach(q => {
        expectedSequence.push({
          id: q.id,
          moduleId: mod.id,
          order: expectedSequence.length + 1, // Global order
          title: q.title,
          type: q.type
        })
      })
    })

    // 3. Get user reality (What have they actually done?)
    const completions = await prisma.quantumCompletion.findMany({
      where: {
        userId,
        quantumId: { in: expectedSequence.map(q => q.id) }
      },
      select: { quantumId: true }
    })

    const completedSet = new Set(completions.map(c => c.quantumId))

    // 4. Find the first gap
    let currentQuantum = null
    let completedCount = 0

    for (const q of expectedSequence) {
      if (!completedSet.has(q.id)) {
        // This is the one. The edge of mastery.
        currentQuantum = q
        break
      }
      completedCount++
    }

    // ---------------------------------------------------------
    // ACCESS CONTROL: CHECK PLAN TIER
    // ---------------------------------------------------------
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { plan: true }
    })

    // Simple Hierarchy
    const levels: Record<string, number> = {
      'FREE': 0,
      'PRO_TRADER': 1,
      'ELITE_TRADER': 2,
      'MASTERY_CIRCLE': 3
    }

    const programLevel = levels[program.level] || 0
    const userLevel = levels[user?.plan || 'FREE'] || 0

    const isLocked = userLevel < programLevel

    return {
      program: { id: program.id, title: program.title, level: program.level },
      currentQuantum: isLocked ? null : currentQuantum, // Hide active quantum if locked
      isLocked,
      isProgramComplete: completedCount === expectedSequence.length && expectedSequence.length > 0,
      completedIds: Array.from(completedSet),
      totalQuantums: expectedSequence.length
    }
  },

  // GET A SPECIFIC QUANTUM (with permission check)
  async getQuantumWithStatus(userId: string, quantumId: string) {
    const quantum = await prisma.quantum.findUnique({
      where: { id: quantumId },
      include: { module: { include: { program: true } } }
    })

    if (!quantum) return null

    // Check strict sequential access
    const head = await this.getUserCurrentHead(userId, quantum.module.program.slug)

    // ACCESS LOGIC:
    // 1. It is completed (History)
    // 2. It is the CURRENT HEAD (The Active Challenge)
    const isCompleted = head.completedIds.includes(quantumId)
    const isHead = head.currentQuantum?.id === quantumId

    // If it's not completed AND not the head, it's locked (Future)
    // UNLESS the program is fully complete and we are revisiting (handled by isCompleted)
    // ALSO check if the entire program is locked by Plan
    const canAccess = !head.isLocked && (isCompleted || isHead)

    // Get previous completion data if any
    let completion = null
    if (isCompleted) {
      completion = await prisma.quantumCompletion.findUnique({
        where: {
          userId_quantumId: { userId, quantumId }
        }
      })
    }

    // Find next quantum ID for navigation if completed
    let nextQuantumId = null
    if (isCompleted && !head.isProgramComplete) {
      nextQuantumId = head.currentQuantum?.id
    }

    return {
      quantum,
      canAccess,
      isCompleted,
      completion,
      nextQuantumId
    }
  },

  // THE MASTER GATE: Attempt to complete a quantum
  async completeQuantum(userId: string, quantumId: string, data: { reflection?: string; quizScore?: number }) {
    // 1. Verify this IS the next quantum (No skipping!)
    // We assume default program for now or fetch program from quantum relation if needed.
    // Ideally pass programSlug or infer it.

    // Efficient check: Get the quantum and its predecessors
    const targetQuantum = await prisma.quantum.findUnique({
      where: { id: quantumId },
      include: { module: { include: { program: true } } }
    })

    if (!targetQuantum) throw new Error('Invalid Quantum ID')

    const head = await this.getUserCurrentHead(userId, targetQuantum.module.program.slug)

    if (!head.currentQuantum) {
      throw new Error('Program already completed')
    }

    if (head.currentQuantum.id !== quantumId) {
      throw new Error(`Sequential enforcement: You must complete ${head.currentQuantum.title} first.`)
    }

    // 2. Enforce Reflection if provided (Assuming lessons require it, tasks might not)
    // For now, let's keep it lenient or check type.
    if (targetQuantum.type === 'LESSON' && (!data.reflection || data.reflection.trim().length < 10)) {
      throw new Error('Reflection is mandatory for lessons and must be meaningful (10+ chars).')
    }

    // 3. Grant Mastery
    return await prisma.quantumCompletion.create({
      data: {
        userId,
        quantumId,
        reflection: data.reflection || '',
        quizScore: data.quizScore || 100 // Default to 100 if simple completion
      }
    })
  }
}
