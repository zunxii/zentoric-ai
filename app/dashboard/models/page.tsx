'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Layers, 
  Plus, 
  Search, 
  Filter, 
  ChevronDown, 
  ArrowUpRight,
  Activity,
  SlidersHorizontal,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle
} from 'lucide-react'

export default function ModelsPage() {
  const models = [
    {
      id: 'model-1234',
      name: 'Customer Support Assistant',
      description: 'Handles customer inquiries and support tickets automatically.',
      baseModel: 'LLaMA 3',
      datasetSize: '15,840 examples',
      status: 'active',
      deployedDate: '2 days ago',
      apiCalls: '1,280'
    },
    {
      id: 'model-5678',
      name: 'Document Summarizer',
      description: 'Generates concise summaries from lengthy documents and reports.',
      baseModel: 'LLaMA 3',
      datasetSize: '5,200 examples',
      status: 'active',
      deployedDate: '1 week ago',
      apiCalls: '845'
    },
    {
      id: 'model-9012',
      name: 'Email Classifier',
      description: 'Sorts and categorizes incoming emails by priority and department.',
      baseModel: 'Mistral 7B',
      datasetSize: '8,460 examples',
      status: 'active',
      deployedDate: '3 weeks ago',
      apiCalls: '623'
    },
    {
      id: 'model-3456',
      name: 'Social Media Analyzer',
      description: 'Analyzes sentiment and trends from social media comments.',
      baseModel: 'LLaMA 3',
      datasetSize: '12,300 examples',
      status: 'training',
      deployedDate: 'N/A',
      apiCalls: '0'
    },
    {
      id: 'model-7890',
      name: 'Product Recommendation Engine',
      description: 'Suggests products based on user history and preferences.',
      baseModel: 'Mistral 7B',
      datasetSize: '20,150 examples',
      status: 'error',
      deployedDate: 'N/A',
      apiCalls: '0'
    }
  ]

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return (
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-emerald-400">Active</span>
          </div>
        )
      case 'training':
        return (
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs text-amber-400">Training</span>
          </div>
        )
      case 'error':
        return (
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="text-xs text-red-400">Error</span>
          </div>
        )
      default:
        return (
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-zinc-400"></span>
            <span className="text-xs text-zinc-400">Inactive</span>
          </div>
        )
    }
  }

  return (
    <div className="py-8 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Models</h1>
          <p className="text-zinc-400">Manage your trained AI models and deployments.</p>
        </div>
        
        <Link href="/dashboard/models/create">
          <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg px-5 py-2.5 font-medium text-sm flex items-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-violet-500/20">
            <Plus className="h-4 w-4" />
            New Model
          </button>
        </Link>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-zinc-500" />
          </div>
          <input
            type="text"
            placeholder="Search models..."
            className="block w-full pl-10 pr-3 py-2.5 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/40"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </button>
          
          <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Sort
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Models list */}
      <div className="space-y-4">
        {models.map((model) => (
          <div 
            key={model.id}
            className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-violet-500/30 transition-all overflow-hidden"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <Layers className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{model.name}</h3>
                  <p className="text-xs text-zinc-400">{model.description}</p>
                </div>
              </div>
              
              {getStatusBadge(model.status)}
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                <div>
                  <p className="text-xs text-zinc-500">Base Model</p>
                  <p className="text-sm font-medium text-white">{model.baseModel}</p>
                </div>
                
                <div>
                  <p className="text-xs text-zinc-500">Dataset Size</p>
                  <p className="text-sm font-medium text-white">{model.datasetSize}</p>
                </div>
                
                <div>
                  <p className="text-xs text-zinc-500">Deployed</p>
                  <p className="text-sm font-medium text-white">{model.deployedDate}</p>
                </div>
                
                <div>
                  <p className="text-xs text-zinc-500">API Calls (Today)</p>
                  <p className="text-sm font-medium text-white">{model.apiCalls}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <div className="flex gap-2">
                  <Link href={`/dashboard/models/${model.id}`}>
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all flex items-center group">
                      Details
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </Link>
                  
                  <Link href={`/dashboard/models/${model.id}/metrics`}>
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all flex items-center group">
                      Metrics
                      <Activity className="ml-1 h-3 w-3" />
                    </button>
                  </Link>
                </div>
                
                {model.status === 'active' && (
                  <div className="flex gap-2">
                    <Link href={`/dashboard/models/${model.id}/edit`}>
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all">
                        Edit
                      </button>
                    </Link>
                    
                    <div className="relative group">
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-2 py-1.5 text-xs font-medium transition-all">
                        <MoreVertical className="h-3 w-3" />
                      </button>
                      
                      <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
                            Duplicate
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
                            Version History
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-red-900/30 hover:text-red-300">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}