'use client'

const GradientButton = ({ 
  children, 
  className = "", 
  href = "#",
  onClick,
  size = 'md',
  ...props 
}) => {
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-lg px-7 py-4',
  }

  return (
    <div className={`relative inline-flex group ${className}`} {...props}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-500 rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-200 animate-gradient-x"></div>
      {href && !onClick ? (
        <a 
          href={href} 
          className={`relative inline-flex items-center justify-center bg-zinc-950 text-white rounded-xl font-medium transition ${sizeStyles[size]}`}
        >
          {children}
        </a>
      ) : (
        <button 
          onClick={onClick} 
          className={`relative inline-flex items-center justify-center bg-zinc-950 text-white rounded-xl font-medium transition ${sizeStyles[size]}`}
        >
          {children}
        </button>
      )}
    </div>
  )
}

export default GradientButton