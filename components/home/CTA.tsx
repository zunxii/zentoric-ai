'use client'

import { Play, ArrowRight } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 bg-black">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-2 lg:px-2 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-lg rounded-2xl border border-zinc-800 shadow-2xl shadow-violet-500/10 p-8 md:p-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-violet-300 font-medium">Get Started Today</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to transform your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300">AI</span>
            </h2>

            <p className="text-xl text-zinc-400 mb-8 max-w-lg mx-auto">
              Join 250+ companies already using Zentoric to build custom AI models without code.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/dashboard">
                <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg px-8 py-4 font-medium text-center transition-all transform hover:translate-y-[-2px] shadow-lg shadow-violet-500/20 flex items-center justify-center">
                  <span>Start Building For Free</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>

              <button className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-6 py-4 font-medium hover:bg-zinc-800/80 transition-all flex items-center justify-center group">
                <Play className="h-4 w-4 mr-2 fill-violet-400 text-violet-400 group-hover:fill-violet-300" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400">
            Looking for enterprise solutions?{' '}
            <Link href="/contact-sales" className="text-violet-400 font-medium hover:text-violet-300 transition-colors">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;