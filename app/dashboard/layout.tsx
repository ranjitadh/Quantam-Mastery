import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-dark">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto bg-dark">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
