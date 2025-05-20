'use client'

const GradientBorder = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  borderWidth = 1,
  gradientDirection = 'r',
  from = 'violet-600',
  via = 'blue-600',
  to = 'emerald-500'
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${hoverEffect ? 'transition-transform duration-300 hover:scale-[1.01]' : ''} ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-${gradientDirection} from-${from} via-${via} to-${to} animate-gradient-x`} />
      <div className={`absolute inset-[${borderWidth}px] bg-zinc-950 dark:bg-zinc-950 rounded-lg`} />
      <div className="relative z-10 p-4">{children}</div>
    </div>
  )
}

export default GradientBorder