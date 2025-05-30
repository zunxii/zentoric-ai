import Link from 'next/link'
import { Plus, Database, Play, Code } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      href: "/dashboard/models/create",
      label: "New Model",
      icon: Plus,
      variant: "primary"
    },
    {
      href: "/dashboard/datasets/create",
      label: "New Dataset",
      icon: Database,
      variant: "secondary"
    },
    {
      href: "/dashboard/training/create",
      label: "Start Training",
      icon: Play,
      variant: "secondary"
    },
    {
      href: "/dashboard/playground",
      label: "Playground",
      icon: Code,
      variant: "secondary"
    }
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {actions.map((action) => (
        <Link key={action.href} href={action.href}>
          <button className={`
            ${action.variant === 'primary' 
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 shadow-lg shadow-violet-500/20 transform hover:translate-y-[-2px]' 
              : 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800'
            } 
            text-white rounded-lg px-5 py-2.5 font-medium text-sm flex items-center gap-2 transition-all
          `}>
            <action.icon className="h-4 w-4" />
            {action.label}
          </button>
        </Link>
      ))}
    </div>
  )
}