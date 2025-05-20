'use client'

import { ArrowRight } from 'lucide-react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-6">
              No-Code AI Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Custom AI Models Without The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Transform your business with custom AI models. No machine learning expertise required.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white rounded-full px-8 py-3 font-medium text-center transition transform hover:scale-105 shadow-lg">
                Start For Free
              </a>
              <a href="#" className="bg-white text-gray-900 border border-gray-200 rounded-full px-8 py-3 font-medium text-center hover:bg-gray-50 transition flex items-center justify-center">
                <span>Watch Demo</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-500" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">250+</span> companies already using Zentoric
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-white p-2">
                <div className="flex space-x-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h3 className="font-bold text-lg">Model Training Dashboard</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-medium rounded-full px-2.5 py-1">Training</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Model Type</p>
                          <p className="font-semibold">Llama 2</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Dataset Size</p>
                          <p className="font-semibold">10,240 examples</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Training Progress</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-indigo-600 h-2.5 rounded-full w-2/3" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-500 mb-1">Estimated Time</p>
                          <p className="font-semibold">45 minutes</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm font-medium">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;