'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Plus, Folder, FileText, ChevronRight, Edit, Trash, Layers } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

interface Program {
    id: string
    title: string
    slug: string
    level: string
    modules: Module[]
}

interface Module {
    id: string
    title: string
    quantums: Quantum[]
}

interface Quantum {
    id: string
    title: string
    type: string
}

export default function ContentManagerPage() {
    const [programs, setPrograms] = useState<Program[]>([])
    const [loading, setLoading] = useState(true)

    // Modal / Form states would go here (simplified for this step)

    useEffect(() => {
        fetch('/api/admin/cms/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setLoading(false)
            })
            .catch(err => toast.error('Failed to load content'))
    }, [])

    return (
        <div className="space-y-8 max-w-5xl">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Content Manager</h1>
                    <p className="text-text-secondary">Structure your curriculum: Programs &gt; Modules &gt; Quantums</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-5 w-5" /> New Program
                </Button>
            </div>

            <div className="grid gap-6">
                {programs.map((program) => (
                    <Card key={program.id} className="p-6 border-white/5 bg-background-secondary">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-primary/10 rounded-xl border border-green-primary/20">
                                    <Layers className="h-6 w-6 text-green-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">{program.title}</h2>
                                    <div className="flex gap-2 mt-1">
                                        <span className="text-xs font-mono bg-white/5 px-2 py-0.5 rounded text-text-secondary">/{program.slug}</span>
                                        <span className="text-xs font-bold text-green-primary border border-green-primary/20 px-2 py-0.5 rounded">{program.level}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="h-9 w-9 p-0"><Edit className="h-4 w-4" /></Button>
                                <Button variant="outline" className="h-9 w-9 p-0 text-red-500 hover:text-red-500"><Trash className="h-4 w-4" /></Button>
                            </div>
                        </div>

                        <div className="ml-8 pl-8 border-l border-white/5 space-y-4">
                            {program.modules.map(module => (
                                <div key={module.id} className="relative group">
                                    <div className="absolute -left-[33px] top-3 h-px w-6 bg-white/10" />
                                    <div className="p-4 bg-background-primary border border-white/5 rounded-lg hover:border-white/10 transition-all">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <Folder className="h-4 w-4 text-text-secondary" />
                                                <h3 className="font-semibold text-white">{module.title}</h3>
                                            </div>
                                            <Button variant="outline" className="h-7 text-xs">+ Add Quantum</Button>
                                        </div>

                                        <div className="space-y-2 mt-2">
                                            {module.quantums.map(quantum => (
                                                <div key={quantum.id} className="flex items-center justify-between p-2 pl-3 rounded bg-white/5 hover:bg-white/10 transition-colors ml-4 text-sm">
                                                    <div className="flex items-center gap-3">
                                                        <FileText className="h-3 w-3 text-text-muted" />
                                                        <span className="text-gray-300">{quantum.title}</span>
                                                    </div>
                                                    <span className="text-[10px] uppercase text-text-muted bg-black/20 px-1.5 py-0.5 rounded">{quantum.type}</span>
                                                </div>
                                            ))}
                                            {module.quantums.length === 0 && (
                                                <p className="text-xs text-text-muted italic ml-4">No content yet.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Button variant="outline" className="ml-8 w-full border-dashed text-text-secondary hover:text-white">
                                <Plus className="h-4 w-4 mr-2" /> Add Module
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
