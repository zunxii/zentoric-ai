import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface TrainingJob {
  id: string
  modelName: string
  baseModel: string
  startTime: string
  progress: number
  epoch: { current: number; total: number }
  timeRemaining: string
}

interface ActiveTrainingJobProps {
  job: TrainingJob | null
}

export function ActiveTrainingJob({ job }: ActiveTrainingJobProps) {
  if (!job) return null

  return (
    <div className="mb-10">
      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="font-medium text-white">Active Training Job</h3>
          </div>
          <Link href={`/dashboard/training/${job.id}`}>
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
              <p className="font-medium text-white">{job.modelName}</p>
            </div>
            
            <div>
              <p className="text-sm text-zinc-500 mb-1">Base Model</p>
              <p className="font-medium text-white">{job.baseModel}</p>
            </div>
            
            <div>
              <p className="text-sm text-zinc-500 mb-1">Start Time</p>
              <p className="font-medium text-white">{job.startTime}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-zinc-500">Training Progress</p>
              <p className="text-sm text-zinc-400">{job.progress}% complete</p>
            </div>
            <div className="w-full bg-zinc-800/50 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2.5 rounded-full relative"
                style={{ width: `${job.progress}%` }}
              >
                <div className="absolute top-0 right-0 h-full w-6 bg-white/20 blur-sm animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-xs text-zinc-500">
                Epoch {job.epoch.current}/{job.epoch.total}
              </p>
              <p className="text-xs text-zinc-500">~{job.timeRemaining} remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
