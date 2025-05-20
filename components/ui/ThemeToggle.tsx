'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors ${className}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle