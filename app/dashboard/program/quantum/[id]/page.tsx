import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { QuantumService } from '@/lib/quantum'
import QuantumCompletionForm from '@/components/dashboard/QuantumCompletionForm'
import { ArrowLeft, Lock } from 'lucide-react'
import Link from 'next/link'

export default async function QuantumPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect('/auth/login')
    }

    const data = await QuantumService.getQuantumWithStatus(session.user.id, params.id)

    if (!data) {
        return (
            <div className="p-8 text-center text-gray-400">
                Quantum not found.
                <Link href="/dashboard/overview" className="block mt-4 text-secondary-bright">
                    Return to Dashboard
                </Link>
            </div>
        )
    }

    const { quantum, canAccess, isCompleted, completion, nextQuantumId } = data

    if (!canAccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
                <div className="h-20 w-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-red-500/30">
                    <Lock className="h-10 w-10 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Quantum Locked</h1>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    You must complete all previous Quantums and Modules before accessing this content. Mastery requires sequence.
                </p>
                <Link
                    href="/dashboard/overview"
                    className="bg-secondary-bright text-dark font-bold px-6 py-3 rounded hover:bg-white transition-colors"
                >
                    Return to Current Progression
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href="/dashboard/overview"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                </Link>

                <div className="flex items-center gap-3 mb-2">
                    <span className="text-secondary-bright text-sm font-bold uppercase tracking-widest border border-secondary-bright/20 px-2 py-0.5 rounded bg-secondary-bright/5">
                        {quantum.module.title}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-400 text-sm">Unit {quantum.order}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {quantum.title}
                </h1>
            </div>

            {/* Content Area */}
            <div className="bg-secondary-bright/5 border border-secondary-bright/10 rounded-xl p-8 lg:p-12 mb-8 shadow-2xl">
                {quantum.videoUrl && (
                    <div className="mb-8 aspect-video bg-black rounded-lg overflow-hidden border border-white/10 relative group">
                        {/* Placeholder for real video player */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-500">Video Player would load here: {quantum.videoUrl}</p>
                        </div>
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none">
                    {/* Simple markdown-like rendering for now */}
                    {quantum.content?.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Completion Zone */}
            <QuantumCompletionForm
                quantumId={quantum.id}
                type={quantum.type}
                prompt={quantum.reflectionPrompt}
                actionRequired={quantum.actionRequired}
                isCompleted={isCompleted}
                nextQuantumId={nextQuantumId}
                previousCompletion={completion}
            />
        </div>
    )
}
