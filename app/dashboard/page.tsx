'use client'

import { useState, useEffect } from 'react'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { WelcomeSection } from '@/components/dashboard/WelcomeSection'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { StatsCards } from '@/components/dashboard/StatsCard'
import { ActiveTrainingJob } from '@/components/dashboard/ActiveTrainingJob'
import { RecentModels } from '@/components/dashboard/RecentModels'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton'
import { DashboardError } from '@/components/dashboard/DashboardError'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'

// Types
interface DashboardData {
  user: {
    name: string
    isActive: boolean
  }
  stats: {
    activeModels: number
    datasets: number
    apiCalls: number
    trainingCredits: number
  }
  activeTrainingJob: {
    id: string
    modelName: string
    baseModel: string
    startTime: string
    progress: number
    epoch: { current: number; total: number }
    timeRemaining: string
  } | null
  recentModels: Array<{
    id: string
    name: string
    baseModel: string
    datasetSize: string
    deployedAt: string
    apiCalls: number
    status: 'active' | 'inactive' | 'training'
  }>
  recentActivity: Array<{
    id: string
    title: string
    timestamp: string
    type: 'training' | 'dataset' | 'api' | 'model'
    href: string
  }>
}

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        setError(null)

        // In a real app, you would fetch from multiple endpoints
        // const [statsRes, modelsRes, activityRes, trainingRes] = await Promise.all([
        //   fetch('/api/dashboard/stats'),
        //   fetch('/api/models?limit=2'),
        //   fetch('/api/activity?limit=4'),
        //   fetch('/api/training/active')
        // ])

        // if (!statsRes.ok || !modelsRes.ok || !activityRes.ok || !trainingRes.ok) {
        //   throw new Error('Failed to fetch dashboard data')
        // }

        // const [stats, models, activity, training] = await Promise.all([
        //   statsRes.json(),
        //   modelsRes.json(),
        //   activityRes.json(),
        //   trainingRes.json()
        // ])

        // For demo purposes, we'll use mock data
        const mockData: DashboardData = {
          user: {
            name: "Junaid",
            isActive: true
          },
          stats: {
            activeModels: 5,
            datasets: 8,
            apiCalls: 2400,
            trainingCredits: 42
          },
          activeTrainingJob: {
            id: "job-1234",
            modelName: "Customer Support Assistant",
            baseModel: "LLaMA 3",
            startTime: "2 hours ago",
            progress: 60,
            epoch: { current: 3, total: 5 },
            timeRemaining: "32 minutes"
          },
          recentModels: [
            {
              id: "model-1234",
              name: "Customer Support Assistant",
              baseModel: "LLaMA 3",
              datasetSize: "15,840 examples",
              deployedAt: "2 days ago",
              apiCalls: 1280,
              status: "active"
            },
            {
              id: "model-5678",
              name: "Document Summarizer",
              baseModel: "LLaMA 3",
              datasetSize: "5,200 examples",
              deployedAt: "1 week ago",
              apiCalls: 845,
              status: "active"
            }
          ],
          recentActivity: [
            {
              id: "1",
              title: "Training started: Customer Support Assistant",
              timestamp: "2 hours ago",
              type: "training",
              href: "/dashboard/training/job-1234"
            },
            {
              id: "2",
              title: "Dataset created: Support Tickets 2025",
              timestamp: "3 hours ago",
              type: "dataset",
              href: "/dashboard/datasets/dataset-1234"
            },
            {
              id: "3",
              title: "API key created: Production Key",
              timestamp: "Yesterday",
              type: "api",
              href: "/dashboard/api-management/keys/key-1234"
            },
            {
              id: "4",
              title: "Model deployed: Document Summarizer",
              timestamp: "1 week ago",
              type: "model",
              href: "/dashboard/models/model-5678"
            }
          ]
        }

        setDashboardData(mockData)
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const handleRetry = () => {
    window.location.reload()
  }

  if (loading) {
    return <DashboardSkeleton />
  }

  if (error) {
    return <DashboardError error={error} onRetry={handleRetry} />
  }

  if (!dashboardData) {
    return <DashboardError error="No data available" onRetry={handleRetry} />
  }

  return (
    <DashboardLayout>
      <DashboardHeader user={dashboardData.user} />
      
      <div className="container mx-auto px-6 py-8">
        <WelcomeSection userName={dashboardData.user.name} />
        <QuickActions />
        <StatsCards stats={dashboardData.stats} />
        
        {dashboardData.activeTrainingJob && (
          <ActiveTrainingJob trainingJob={dashboardData.activeTrainingJob} />
        )}
        
        <RecentModels models={dashboardData.recentModels} />
        <RecentActivity activities={dashboardData.recentActivity} />
      </div>
    </DashboardLayout>
  )
}