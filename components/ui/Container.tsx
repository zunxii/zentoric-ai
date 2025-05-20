'use client'

const Container = ({ children, className = "", maxWidth = "max-w-7xl", ...props }) => {
  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container