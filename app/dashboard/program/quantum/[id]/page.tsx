import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { QuantumService } from '@/lib/quantum'
import QuantumCompletionForm from '@/components/dashboard/QuantumCompletionForm'
import { ArrowLeft, Lock, Play } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default async function QuantumPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect('/auth/login')
    }

    const data = await QuantumService.getQuantumWithStatus(session.user.id, params.id)

    if (!data) {
        return (
            <div className="p-8 text-center text-text-secondary">
                Quantum not found.
                <Link href="/dashboard/overview" className="block mt-4 text-green-primary hover:underline">
                    Return to Dashboard
                </Link>
            </div>
        )
    }

    const { quantum, canAccess, isCompleted, completion, nextQuantumId } = data

    if (!canAccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 max-w-2xl mx-auto">
                <div className="h-24 w-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <Lock className="h-10 w-10 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Quantum Locked</h1>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    You must complete all previous Quantums and Modules before accessing this content. Mastery requires sequence.
                </p>
                <Link href="/dashboard/overview">
                    <Button size="lg">Return to Current Progression</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href="/dashboard/overview"
                    className="inline-flex items-center text-text-muted hover:text-white mb-6 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>

                <div className="flex items-center gap-3 mb-4">
                    <span className="text-green-primary text-xs font-bold uppercase tracking-widest border border-green-primary/20 px-2.5 py-1 rounded-md bg-green-primary/5">
                        {quantum.module.title}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-text-secondary text-sm font-medium">Unit {quantum.order}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {quantum.title}
                </h1>
            </div>

            {/* Content Area */}
            <Card className="p-8 lg:p-12 mb-8 border-white/5 bg-background-secondary shadow-2xl">
                {quantum.videoUrl && (
                    <div className="mb-10 aspect-video bg-black rounded-xl overflow-hidden border border-white/10 relative group shadow-lg">
                        {/* Placeholder for real video player */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
                            <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                                <Play className="h-6 w-6 text-white ml-1 fill-white" />
                            </div>
                            <p className="text-text-muted text-sm font-mono">Video Source: {quantum.videoUrl}</p>
                        </div>
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-green-primary hover:prose-a:text-green-400">
                    {/* Simple markdown-like rendering for now */}
                    {quantum.content?.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </Card>

            {/* Completion Zone */}
            <QuantumCompletionForm
                quantumId={quantum.id}
                type={quantum.type}
                prompt={quantum.reflectionPrompt}
                actionRequired={quantum.actionRequired}
                isCompleted={isCompleted}
                nextQuantumId={nextQuantumId ?? null}
                previousCompletion={completion}
            />
        </div>
    )
}
