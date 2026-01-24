import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background-primary overflow-hidden">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto relative">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" />
                <div className="p-8 md:p-12 relative z-10">
                    {children}
                </div>
            </main>
        </div>
    )
}
