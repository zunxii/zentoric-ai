import Link from 'next/link'
import { Layers, Database, Code, ChevronRight } from 'lucide-react'

interface Activity {
  id: string
  title: string
  timestamp: string
  type: 'training' | 'dataset' | 'api' | 'model'
  href: string
}

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'training':
      case 'model':
        return Layers
      case 'dataset':
        return Database
      case 'api':
        return Code
      default:
        return Layers
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <Link href="/dashboard/activity">
          <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </Link>
      </div>
      
      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden">
        <div className="divide-y divide-zinc-800">
          {activities.map((activity) => {
            const Icon = getIcon(activity.type)
            
            return (
              <div key={activity.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{activity.title}</p>
                    <p className="text-xs text-zinc-500">{activity.timestamp}</p>
                  </div>
                </div>
                <Link href={activity.href}>
                  <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                    View
                  </button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}