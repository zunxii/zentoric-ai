import Link from 'next/link'
import { Layers, Activity, ArrowUpRight, ChevronRight } from 'lucide-react'

interface Model {
  id: string
  name: string
  baseModel: string
  datasetSize: string
  deployedAt: string
  apiCalls: number
  status: 'active' | 'inactive' | 'training'
}

interface RecentModelsProps {
  models: Model[]
}

export function RecentModels({ models }: RecentModelsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-400'
      case 'training': return 'bg-yellow-400'
      case 'inactive': return 'bg-red-400'
      default: return 'bg-zinc-400'
    }
  }

  return (
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
        {models.map((model) => (
          <div key={model.id} className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-violet-500/30 transition-all overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <Layers className="h-4 w-4 text-violet-400" />
                </div>
                <h3 className="font-medium text-white">{model.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${getStatusColor(model.status)}`}></span>
                <span className={`text-xs capitalize ${
                  model.status === 'active' ? 'text-emerald-400' : 
                  model.status === 'training' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {model.status}
                </span>
              </div>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
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
                  <p className="text-sm font-medium text-white">{model.deployedAt}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-violet-400" />
                  <span>{model.apiCalls.toLocaleString()} API calls today</span>
                </div>
                
                <Link href={`/dashboard/models/${model.id}`}>
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all flex items-center group">
                    Manage
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
