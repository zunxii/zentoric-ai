interface WelcomeSectionProps {
  userName: string
}

export function WelcomeSection({ userName }: WelcomeSectionProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
        Welcome back, {userName}
      </h1>
      <p className="text-zinc-400">
        Here's an overview of your AI models and training activity.
      </p>
    </div>
  )
}
