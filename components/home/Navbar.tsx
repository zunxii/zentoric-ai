'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Container from '@/components/ui/Container'
import GradientButton from '@/components/ui/GradientButton'
import Image from 'next/image'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 
      'bg-white/80 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm py-3' : 
      'bg-transparent py-5'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.svg" 
              alt="Zentoric Logo"
            width={200}
        height={60}
        priority
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Features</a>
            <a href="#how-it-works" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">How It Works</a>
            <a href="#pricing" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Pricing</a>
            <a href="#faq" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">FAQ</a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <a href="#" className="hidden md:inline-flex text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Sign In</a>
            <GradientButton href="/dashboard" size="md">
              Get Started
            </GradientButton>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMobileMenuOpen(false)}>Sign In</a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar