'use client'

import { ArrowRight, Play, BarChart2 } from 'lucide-react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative bg-gray-950 pt-28 pb-20 overflow-hidden">
      {/* Grid background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563eb_0%,_transparent_40%)] opacity-20"></div>
        <div className="grid grid-cols-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-blue-500/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-blue-500/10 w-full"></div>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-blue-600/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 font-medium">No-Code AI Training Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Build AI Models <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Without Code</span>
            </h1>
            
            <p className="text-xl text-gray-300/90 mb-8 max-w-lg">
              Create, train, and deploy custom AI models with zero machine learning expertise. Transform your business with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white rounded-lg px-8 py-3.5 font-medium text-center transition transform hover:translate-y-[-2px] shadow-lg shadow-blue-500/25">
                Start Building For Free
              </button>
              
              <button className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 text-white rounded-lg px-6 py-3.5 font-medium hover:bg-gray-800 transition flex items-center justify-center group">
                <Play className="h-4 w-4 mr-2 fill-blue-400 text-blue-400 group-hover:fill-blue-300" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                  </div>
                ))}
              </div>
              <div className="ml-4 text-sm">
                <span className="text-blue-400 font-semibold">250+</span> 
                <span className="text-gray-400"> companies already using Zentoric</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)] border border-gray-800">
              {/* Terminal header */}
              <div className="bg-gray-900 p-3 border-b border-gray-800">
                <div className="flex space-x-1.5 mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center mt-2">
                  <div className="bg-gray-800 rounded-md w-full py-1.5 px-3 text-xs text-gray-400 flex items-center justify-between">
                    <span>zentoric-ai-dashboard</span>
                    <BarChart2 className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-gray-950 p-5">
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <h3 className="font-bold text-lg text-white">Model Training Progress</h3>
                    <div className="flex space-x-2 items-center">
                      <span className="flex items-center justify-center h-2 w-2 rounded-full bg-green-400"></span>
                      <span className="text-green-400 text-xs font-medium">Live Training</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <p className="text-sm text-gray-400 mb-1">Base Model</p>
                      <p className="font-semibold text-white flex items-center">
                        <span className="inline-block h-2 w-2 mr-2 rounded-full bg-blue-500"></span>
                        LLaMA 3
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <p className="text-sm text-gray-400 mb-1">Dataset Size</p>
                      <p className="font-semibold text-white">15,840 examples</p>
                    </div>
                    
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border border-gray-800 col-span-2">
                      <p className="text-sm text-gray-400 mb-1">Training Progress</p>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-3/5 relative">
                          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>60% complete</span>
                        <span>32 minutes remaining</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <p className="text-sm text-gray-400 mb-1">Loss Rate</p>
                      <p className="font-semibold text-white">0.0038</p>
                    </div>
                    
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <p className="text-sm text-gray-400 mb-1">Epochs</p>
                      <p className="font-semibold text-white">3 / 5</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-500 transition flex items-center">
                      View Details
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;