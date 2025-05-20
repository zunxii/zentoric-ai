'use client'

const SectionHeading = ({ 
  badge, 
  title, 
  description, 
  centered = false,
  badgeIcon = null,
  className = ""
}) => {
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100/10 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-4 border border-blue-200/30 dark:border-blue-800/30">
          {badgeIcon && <span className="mr-1 h-3 w-3">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">{title}</h2>
      {description && <p className="text-lg text-zinc-600 dark:text-zinc-400">{description}</p>}
    </div>
  )
}

export default SectionHeading