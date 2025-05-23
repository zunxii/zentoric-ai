'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  BarChart2,
  Database,
  Layers,
  Code,
  Settings,
  Menu,
  Home,
  Play,
  LayoutDashboard,
  LogOut,
  Bell
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Overview', href: '/dashboard', icon: Home },
    { name: 'Models', href: '/dashboard/models', icon: Layers },
    { name: 'Datasets', href: '/dashboard/datasets', icon: Database },
    { name: 'Training', href: '/dashboard/training', icon: Play },
    { name: 'API Management', href: '/dashboard/api-management', icon: Code },
    { name: 'Playground', href: '/dashboard/playground', icon: LayoutDashboard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
          <div className="border-b flex justify-center pt-2 pb-1 border-zinc-800">
            <Link href='/' className="flex items-center gap-2">
              <Image
                            src="/logo.svg" 
                            alt="Zentoric Logo"
                          width={180}
                      height={32}
                      priority
                          />
            </Link>
          </div>
          <nav className="flex-1 pt-5 px-3">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-violet-600/20 text-white border border-violet-500'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </nav>
          <div className="p-4 border-t border-zinc-800">
            <div className="flex items-center gap-3 p-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-medium text-sm">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-zinc-500 truncate">john@example.com</p>
              </div>
              <button className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile header and sidebar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-20 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                Z
              </div>
              <h1 className="text-lg font-bold text-white">Zentoric</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-zinc-400 hover:text-white transition-colors relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-violet-500"></span>
              </button>
              <button
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 animate-in slide-in-from-top-5 duration-200">
              <nav className="py-4 px-4">
                <div className="space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-violet-600/20 text-white border border-violet-500'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </nav>
              <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 p-2">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-medium text-sm">
                    JD
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">John Doe</p>
                    <p className="text-xs text-zinc-500 truncate">john@example.com</p>
                  </div>
                  <button className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="lg:hidden h-16" />
          {children}
        </main>
      </div>
    </div>
  )
}
