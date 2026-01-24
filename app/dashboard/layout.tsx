import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background-primary overflow-hidden">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto relative">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-96 bg-green-primary/5 blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  )
}
