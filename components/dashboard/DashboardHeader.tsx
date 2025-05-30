'use client'

import { Bell, Settings } from 'lucide-react'

interface DashboardHeaderProps {
  userName: string
  isActive: boolean
}

export function DashboardHeader({ userName, isActive }: DashboardHeaderProps) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-violet-900/30 text-violet-300 px-2 py-0.5 rounded-full">
              Dashboard
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="flex items-center gap-2">
                <span className={`inline-block h-2 w-2 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium">
                  {isActive ? 'Active Resources' : 'Inactive'}
                </span>
              </div>
            </button>
            
            <div className="h-6 w-px bg-zinc-800"></div>
            
            <div className="relative">
              <button className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-medium">
                {/* {userName.split(' ').map(n => n[0]).join('')} */}
                {userName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}