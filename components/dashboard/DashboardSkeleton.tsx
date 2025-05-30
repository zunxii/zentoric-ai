import { DashboardLayout } from './DashboardLayout'

export function DashboardSkeleton() {
  return (
    <DashboardLayout>
      {/* Header skeleton */}
      <HeaderSkeleton />
      
      <div className="container mx-auto px-6 py-8">
        {/* Welcome skeleton */}
        <WelcomeSkeleton />
        
        {/* Quick actions skeleton */}
        <QuickActionsSkeleton />
        
        {/* Stats cards skeleton */}
        <StatsCardsSkeleton />
        
        {/* Loading indicator */}
        <LoadingIndicator />
      </div>
    </DashboardLayout>
  )
}

function HeaderSkeleton() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-20 bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex items-center gap-6">
            <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-8 w-8 bg-zinc-800 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

function WelcomeSkeleton() {
  return (
    <div className="mb-8">
      <div className="h-10 w-64 bg-zinc-800 rounded animate-pulse mb-3"></div>
      <div className="h-5 w-96 bg-zinc-800 rounded animate-pulse"></div>
    </div>
  )
}

function QuickActionsSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-10 w-32 bg-zinc-800 rounded-lg animate-pulse"></div>
      ))}
    </div>
  )
}

function StatsCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-zinc-900/40 rounded-lg p-6 border border-zinc-800">
          <div className="h-10 w-10 bg-zinc-800 rounded-lg animate-pulse mb-4"></div>
          <div className="h-8 w-12 bg-zinc-800 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}

function LoadingIndicator() {
  return (
    <div className="text-center py-12">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet-500 border-r-transparent"></div>
      <p className="text-zinc-400 mt-4">Loading dashboard...</p>
    </div>
  )
}
