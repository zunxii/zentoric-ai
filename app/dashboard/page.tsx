'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BarChart2, 
  Database, 
  Layers, 
  Code, 
  Settings, 
  Plus, 
  ChevronRight, 
  Play,
  Activity,
  ArrowUpRight,
  Clock,
  Calendar,
  AlignLeft
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black">
      {/* Background effects */}
      <div className="">
        {/* Dark radial gradient */}
        <div className="absolute bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glows */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Dashboard header */}
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">Zentoric</h1>
                <span className="text-xs bg-violet-900/30 text-violet-300 px-2 py-0.5 rounded-full">Dashboard</span>
              </div>
              
              <div className="flex items-center gap-6">
                <button className="text-zinc-400 hover:text-white transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm font-medium">Active Resources</span>
                  </div>
                </button>
                
                <div className="h-6 w-px bg-zinc-800"></div>
                
                <div className="relative">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-medium">
                    JD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">Welcome back, John</h1>
            <p className="text-zinc-400">Here's an overview of your AI models and training activity.</p>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/dashboard/models/create">
              <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg px-5 py-2.5 font-medium text-sm flex items-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-violet-500/20">
                <Plus className="h-4 w-4" />
                New Model
              </button>
            </Link>
            
            <Link href="/dashboard/datasets/create">
              <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg px-5 py-2.5 text-sm font-medium transition-all flex items-center gap-2">
                <Database className="h-4 w-4" />
                New Dataset
              </button>
            </Link>
            
            <Link href="/dashboard/training/create">
              <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg px-5 py-2.5 text-sm font-medium transition-all flex items-center gap-2">
                <Play className="h-4 w-4" />
                Start Training
              </button>
            </Link>
            
            <Link href="/dashboard/playground">
              <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg px-5 py-2.5 text-sm font-medium transition-all flex items-center gap-2">
                <Code className="h-4 w-4" />
                Playground
              </button>
            </Link>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-violet-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Layers className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-xs font-medium text-zinc-500">Total</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">5</h3>
              <p className="text-zinc-400 text-sm">Active Models</p>
            </div>
            
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-violet-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Database className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-xs font-medium text-zinc-500">Total</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">8</h3>
              <p className="text-zinc-400 text-sm">Datasets</p>
            </div>
            
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-violet-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Activity className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-xs font-medium text-zinc-500">Last 7 days</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">2.4k</h3>
              <p className="text-zinc-400 text-sm">API Calls</p>
            </div>
            
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-violet-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Clock className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-xs font-medium text-zinc-500">Available</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">42 hrs</h3>
              <p className="text-zinc-400 text-sm">Training Credits</p>
            </div>
          </div>

          {/* Active training job */}
          <div className="mb-10">
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="font-medium text-white">Active Training Job</h3>
                </div>
                <Link href="/dashboard/training/job-1234">
                  <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Model Name</p>
                    <p className="font-medium text-white">Customer Support Assistant</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Base Model</p>
                    <p className="font-medium text-white">LLaMA 3</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Start Time</p>
                    <p className="font-medium text-white">2 hours ago</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-zinc-500">Training Progress</p>
                    <p className="text-sm text-zinc-400">60% complete</p>
                  </div>
                  <div className="w-full bg-zinc-800/50 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2.5 rounded-full w-3/5 relative">
                      <div className="absolute top-0 right-0 h-full w-6 bg-white/20 blur-sm animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xs text-zinc-500">Epoch 3/5</p>
                    <p className="text-xs text-zinc-500">~32 minutes remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent models section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-white">Recent Models</h2>
              <Link href="/dashboard/models">
                <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Model card 1 */}
              <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-violet-500/30 transition-all overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Layers className="h-4 w-4 text-violet-400" />
                    </div>
                    <h3 className="font-medium text-white">Customer Support Assistant</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs text-emerald-400">Active</span>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-zinc-500">Base Model</p>
                      <p className="text-sm font-medium text-white">LLaMA 3</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Dataset Size</p>
                      <p className="text-sm font-medium text-white">15,840 examples</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Deployed</p>
                      <p className="text-sm font-medium text-white">2 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-zinc-400 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-violet-400" />
                      <span>1,280 API calls today</span>
                    </div>
                    
                    <Link href="/dashboard/models/model-1234">
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all flex items-center group">
                        Manage
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Model card 2 */}
              <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-violet-500/30 transition-all overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Layers className="h-4 w-4 text-violet-400" />
                    </div>
                    <h3 className="font-medium text-white">Document Summarizer</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs text-emerald-400">Active</span>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-zinc-500">Base Model</p>
                      <p className="text-sm font-medium text-white">LLaMA 3</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Dataset Size</p>
                      <p className="text-sm font-medium text-white">5,200 examples</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Deployed</p>
                      <p className="text-sm font-medium text-white">1 week ago</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-zinc-400 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-violet-400" />
                      <span>845 API calls today</span>
                    </div>
                    
                    <Link href="/dashboard/models/model-5678">
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all flex items-center group">
                        Manage
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent activity section */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <Link href="#">
                <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
            
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden">
              <div className="divide-y divide-zinc-800">
                {/* Activity item 1 */}
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Layers className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Training started: Customer Support Assistant</p>
                      <p className="text-xs text-zinc-500">2 hours ago</p>
                    </div>
                  </div>
                  <Link href="/dashboard/training/job-1234">
                    <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      View
                    </button>
                  </Link>
                </div>
                
                {/* Activity item 2 */}
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Database className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Dataset created: Support Tickets 2025</p>
                      <p className="text-xs text-zinc-500">3 hours ago</p>
                    </div>
                  </div>
                  <Link href="/dashboard/datasets/dataset-1234">
                    <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      View
                    </button>
                  </Link>
                </div>
                
                {/* Activity item 3 */}
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">API key created: Production Key</p>
                      <p className="text-xs text-zinc-500">Yesterday</p>
                    </div>
                  </div>
                  <Link href="/dashboard/api-management/keys/key-1234">
                    <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      View
                    </button>
                  </Link>
                </div>
                
                {/* Activity item 4 */}
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      <Layers className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Model deployed: Document Summarizer</p>
                      <p className="text-xs text-zinc-500">1 week ago</p>
                    </div>
                  </div>
                  <Link href="/dashboard/models/model-5678">
                    <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}