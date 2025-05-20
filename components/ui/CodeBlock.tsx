'use client'

const CodeBlock = ({ children, title = "terminal" }) => {
  return (
    <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-xl">
      <div className="bg-zinc-900 px-4 py-2 flex items-center space-x-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-4 text-sm text-zinc-400 flex-1">{title}</div>
      </div>
      <div className="p-4 font-mono text-sm text-emerald-400 font-medium">
        {children}
      </div>
    </div>
  )
}

export default CodeBlock