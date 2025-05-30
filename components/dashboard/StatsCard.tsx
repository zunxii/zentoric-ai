import { Layers, Database, Activity, Clock } from 'lucide-react'

interface StatsData {
  activeModels: number
  datasets: number
  apiCalls: number
  trainingCredits: number
}

interface StatsCardsProps {
  stats: StatsData
}

export function StatsCards({ stats }: StatsCardsProps) {
  const statsConfig = [
    {
      icon: Layers,
      value: stats.activeModels,
      label: "Active Models",
      subtitle: "Total"
    },
    {
      icon: Database,
      value: stats.datasets,
      label: "Datasets",
      subtitle: "Total"
    },
    {
      icon: Activity,
      value: `${(stats.apiCalls / 1000).toFixed(1)}k`,
      label: "API Calls",
      subtitle: "Last 7 days"
    },
    {
      icon: Clock,
      value: `${stats.trainingCredits} hrs`,
      label: "Training Credits",
      subtitle: "Available"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {statsConfig.map((stat, index) => (
        <div key={index} className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-violet-500/30 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <stat.icon className="h-5 w-5 text-violet-400" />
            </div>
            <span className="text-xs font-medium text-zinc-500">{stat.subtitle}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
          <p className="text-zinc-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}