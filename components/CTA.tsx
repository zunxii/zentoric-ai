'use client'

import { Play, ArrowRight } from 'lucide-react';
import React from 'react'

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563eb_0%,_transparent_50%)] opacity-20"></div>
      </div>
      
      {/* Grid background animation */}
      <div className="absolute inset-0 opacity-10">
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
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-blue-600/15 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-2xl shadow-blue-500/10 p-8 md:p-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to start building your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">custom AI models?</span>
            </h2>
            
            <p className="text-xl text-gray-300/90 mb-8">
              Join hundreds of businesses already using Zentoric to transform their operations with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white rounded-lg px-8 py-3.5 font-medium text-center transition transform hover:translate-y-[-2px] shadow-lg shadow-blue-500/25 flex items-center justify-center">
                <span>Start Building For Free</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 text-white rounded-lg px-6 py-3.5 font-medium hover:bg-gray-800 transition flex items-center justify-center group">
                <Play className="h-4 w-4 mr-2 fill-blue-400 text-blue-400 group-hover:fill-blue-300" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Looking for enterprise solutions? <a href="#" className="text-blue-400 font-medium hover:text-blue-300">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;