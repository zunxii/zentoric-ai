'use client'

const GridBackground = ({ children, className = "", dotOpacity = 0.1, dotColor = "gray" }) => {
  const colorMap = {
    gray: `rgba(255, 255, 255, ${dotOpacity})`,
    blue: `rgba(37, 99, 235, ${dotOpacity})`,
    purple: `rgba(126, 34, 206, ${dotOpacity})`,
    emerald: `rgba(5, 150, 105, ${dotOpacity})`,
  }
  
  const dotColorValue = colorMap[dotColor] || colorMap.gray
  
  return (
    <div className={`relative overflow-hidden isolate ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColorValue} 1px, transparent 0)`,
               backgroundSize: '30px 30px'
             }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default GridBackground