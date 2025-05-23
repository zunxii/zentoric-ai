'use client'

import { ArrowRight, Play, BarChart2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import GradientButton from '../ui/GradientButton';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative bg-black pt-20 pb-16 h-screen flex justify-center items-center overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-2 lg:px-2 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left content - Text */}
          <div className="lg:w-5/12">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-3 py-1 text-xs mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-violet-300 font-medium">No-Code AI Training Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
              Build AI Models
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300">Without Code</span>
            </h1>
            
            <p className="text-lg text-zinc-400 mb-7 max-w-lg leading-relaxed">
              Create, train, and deploy custom AI models with zero machine learning expertise. Transform your business with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
              <Link href="/dashboard">
              <GradientButton size='xl' className='mr-2'>
                Start Building For Free
              </GradientButton>
              </Link>
              <button className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-5 py-3 font-medium hover:bg-zinc-800/80 transition-all flex items-center justify-center group">
                <Play className="h-3.5 w-3.5 mr-2 fill-violet-400 text-violet-400 group-hover:fill-violet-300" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-zinc-700 to-zinc-900 overflow-hidden shadow-sm">
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4 text-sm">
                <span className="text-violet-400 font-semibold">250+</span> 
                <span className="text-zinc-400"> already using Zentoric</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard Preview */}
          <div className="lg:w-6/12 mt-12 lg:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-6 -bottom-6 w-40 h-40 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
              
              {/* Terminal/Dashboard */}
              <div className="relative rounded-lg overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.15)] border border-zinc-800 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300">
                {/* Terminal header */}
                <div className="bg-zinc-900 p-3 border-b border-zinc-800">
                  <div className="flex space-x-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="bg-zinc-950 rounded-md w-full py-1.5 px-3 text-xs text-zinc-400 flex items-center justify-between">
                      <span>zentoric-ai-dashboard</span>
                      <BarChart2 className="h-3 w-3 text-violet-400" />
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="bg-zinc-950 p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-800/70">
                      <h3 className="font-bold text-base text-white">Model Training Progress</h3>
                      <div className="flex space-x-1.5 items-center">
                        <span className="flex items-center justify-center h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        <span className="text-emerald-400 text-xs font-medium">Live Training</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-md p-3 border border-zinc-800/50 hover:border-violet-800/30 transition-all">
                        <p className="text-xs text-zinc-500 mb-1">Base Model</p>
                        <p className="font-semibold text-sm text-white flex items-center">
                          <span className="inline-block h-1.5 w-1.5 mr-1.5 rounded-full bg-violet-500"></span>
                          LLaMA 3
                        </p>
                      </div>
                      
                      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-md p-3 border border-zinc-800/50 hover:border-violet-800/30 transition-all">
                        <p className="text-xs text-zinc-500 mb-1">Dataset Size</p>
                        <p className="font-semibold text-sm text-white">15,840 examples</p>
                      </div>
                      
                      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-md p-3 border border-zinc-800/50 hover:border-violet-800/30 transition-all col-span-2">
                        <p className="text-xs text-zinc-500 mb-2">Training Progress</p>
                        <div className="w-full bg-zinc-800/50 rounded-full h-2 mt-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2 rounded-full w-3/5 relative">
                            <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm animate-pulse"></div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-zinc-500">
                          <span>60% complete</span>
                          <span>32 minutes remaining</span>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-md p-3 border border-zinc-800/50 hover:border-violet-800/30 transition-all">
                        <p className="text-xs text-zinc-500 mb-1">Loss Rate</p>
                        <p className="font-semibold text-sm text-white">0.0038</p>
                      </div>
                      
                      <div className="bg-zinc-900/40 backdrop-blur-sm rounded-md p-3 border border-zinc-800/50 hover:border-violet-800/30 transition-all">
                        <p className="text-xs text-zinc-500 mb-1">Epochs</p>
                        <p className="font-semibold text-sm text-white">3 / 5</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-2">
                      <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-md px-4 py-2 text-xs font-medium transition-all flex items-center group">
                        View Details
                        <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Animated border glow effect */}
                <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-purple-500/5 blur-md opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;