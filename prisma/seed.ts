import { PrismaClient, QuantumType, PlanType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding Quantum Mastery content...')

    // -----------------------------------------------------------------------
    // 1. FREE: Foundational Path (Already defined efficiently above, keeping it but ensuring it is robust)
    // -----------------------------------------------------------------------
    const foundationProgram = await prisma.program.upsert({
        where: { slug: 'foundation' },
        update: {},
        create: {
            title: 'Foundational Path',
            description: 'The core principles of professional trading. Structure, Discipline, and Psychology.',
            slug: 'foundation',
            level: PlanType.FREE,
            published: true,
        },
    })

    // Clear existing modules for fresh seed
    await prisma.module.deleteMany({ where: { programId: foundationProgram.id } })

    await prisma.module.create({
        data: {
            programId: foundationProgram.id,
            title: 'The Professional Mindset',
            description: 'Shift from gambler to business operator.',
            order: 1,
            quantums: {
                create: [
                    {
                        title: 'Trading is a Performance Sport',
                        slug: 'trading-as-sport',
                        order: 1,
                        type: QuantumType.LESSON,
                        content: 'Trading is not about predicting the future. It is about executing a plan under pressure...',
                        reflectionPrompt: 'What is your primary motivation, and how do you define success beyond money?',
                    },
                    {
                        title: 'The Probability Matrix',
                        slug: 'probability-matrix',
                        order: 2,
                        type: QuantumType.LESSON,
                        content: 'Understanding that any single trade outcome is random, but a set of trades is predictable.',
                        reflectionPrompt: 'Describe a recent loss. Was it a probability expense or a mistake?',
                    }
                ]
            }
        }
    })
    console.log('Seeded: Foundation')

    // -----------------------------------------------------------------------
    // 2. FREE: 14-Day Fast-Track
    // -----------------------------------------------------------------------
    const fastTrackProgram = await prisma.program.upsert({
        where: { slug: 'fast-track' },
        update: {},
        create: {
            title: '14-Day Fast-Track',
            description: 'Intensive 2-week boot camp to reset your habits.',
            slug: 'fast-track',
            level: PlanType.FREE,
            published: true,
        },
    })

    await prisma.module.deleteMany({ where: { programId: fastTrackProgram.id } })

    await prisma.module.create({
        data: {
            programId: fastTrackProgram.id,
            title: 'Week 1: Pattern Interruption',
            description: 'Breaking bad habits.',
            order: 1,
            quantums: {
                create: [
                    {
                        title: 'Day 1: The Dopamine Detox',
                        slug: 'dopamine-detox',
                        order: 1,
                        type: QuantumType.TASK,
                        content: 'No checking charts on phone. No social media trading influencers.',
                        actionRequired: 'Delete trading apps from phone for 24 hours.',
                        reflectionPrompt: 'How anxious did you feel without constant checking?',
                    }
                ]
            }
        }
    })
    console.log('Seeded: Fast-Track')

    // -----------------------------------------------------------------------
    // 3. PRO: Pro Trader System
    // -----------------------------------------------------------------------
    const proProgram = await prisma.program.upsert({
        where: { slug: 'pro-trader' },
        update: {},
        create: {
            title: 'Pro Trader System',
            description: 'Advanced technical strategies and robust risk management frameworks.',
            slug: 'pro-trader',
            level: PlanType.PRO_TRADER,
            published: true,
        },
    })

    await prisma.module.deleteMany({ where: { programId: proProgram.id } })

    await prisma.module.create({
        data: {
            programId: proProgram.id,
            title: 'Strategy Development',
            description: 'Building your edge.',
            order: 1,
            quantums: {
                create: [
                    {
                        title: 'The Playbook Construction',
                        slug: 'playbook-construction',
                        order: 1,
                        type: QuantumType.LESSON,
                        content: 'A trade is not a valid trade unless it exists in your playbook first.',
                        reflectionPrompt: 'Define your "A+ Setup" in exact detail.',
                    }
                ]
            }
        }
    })
    console.log('Seeded: Pro Trader')

    // -----------------------------------------------------------------------
    // 4. ELITE: Institutional Access
    // -----------------------------------------------------------------------
    const eliteProgram = await prisma.program.upsert({
        where: { slug: 'elite-trader' },
        update: {},
        create: {
            title: 'Elite Trader',
            description: 'Institutional order flow, deep psychology, and scaling to 7-figures.',
            slug: 'elite-trader',
            level: PlanType.ELITE_TRADER,
            published: true,
        },
    })
    console.log('Seeded: Elite Trader')

    // -----------------------------------------------------------------------
    // 5. MASTERY: Inner Circle
    // -----------------------------------------------------------------------
    const masteryProgram = await prisma.program.upsert({
        where: { slug: 'mastery-circle' },
        update: {},
        create: {
            title: 'Mastery Circle',
            description: 'Direct mentorship, live war-room access, and legacy building.',
            slug: 'mastery-circle',
            level: PlanType.MASTERY_CIRCLE,
            published: true,
        },
    })
    console.log('Seeded: Mastery Circle')

    // -----------------------------------------------------------------------
    // USERS
    // -----------------------------------------------------------------------
    const passwordHash = '$2a$10$9SMQ.8y5Upi9L20K02Xw5.zfydQqfRe5Hq1rhHOM.pjvtMJ5nqfgG' // "password123"

    await prisma.user.upsert({
        where: { email: 'admin@quantum.com' },
        update: { plan: 'MASTERY_CIRCLE' },
        create: { email: 'admin@quantum.com', name: 'Quantum Admin', role: 'ADMIN', plan: 'MASTERY_CIRCLE', passwordHash },
    })

    await prisma.user.upsert({
        where: { email: 'free@quantum.com' },
        update: { plan: 'FREE' },
        create: { email: 'free@quantum.com', name: 'Free User', role: 'TRADER', plan: 'FREE', passwordHash },
    })

    await prisma.user.upsert({
        where: { email: 'pro@quantum.com' },
        update: { plan: 'PRO_TRADER' },
        create: { email: 'pro@quantum.com', name: 'Pro User', role: 'TRADER', plan: 'PRO_TRADER', passwordHash },
    })
    console.log('Users seeded: admin, free, pro')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
