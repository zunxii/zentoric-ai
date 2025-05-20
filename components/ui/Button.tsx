'use client'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none'
  
  const variantStyles = {
    primary: 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200',
    secondary: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700',
    outline: 'border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800',
    ghost: 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800',
  }
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-lg px-6 py-3',
  }
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button