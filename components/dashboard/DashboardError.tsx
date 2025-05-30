import { DashboardLayout } from './DashboardLayout'

interface DashboardErrorProps {
  error: string
  onRetry: () => void
}

export function DashboardError({ error, onRetry }: DashboardErrorProps) {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto px-6">
          <ErrorIcon />
          <h2 className="text-xl font-semibold text-white mb-2">Something went wrong</h2>
          <p className="text-zinc-400 mb-6">{error}</p>
          <RetryButton onClick={onRetry} />
        </div>
      </div>
    </DashboardLayout>
  )
}

function ErrorIcon() {
  return (
    <div className="bg-red-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
  )
}

interface RetryButtonProps {
  onClick: () => void
}

function RetryButton({ onClick }: RetryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg px-6 py-2.5 font-medium text-sm transition-all"
    >
      Try Again
    </button>
  )
}