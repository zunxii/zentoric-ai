'use client'

const Card = ({ 
  children, 
  className = "", 
  hover = false,
  highlight = false 
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-zinc-800 
        rounded-xl p-6 
        ${highlight ? 'border border-violet-500' : 'border border-zinc-100 dark:border-zinc-700'} 
        ${hover ? 'transition-shadow hover:shadow-md' : 'shadow-sm'} 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card