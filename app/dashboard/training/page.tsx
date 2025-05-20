'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Upload, 
  Database, 
  FileText, 
  Settings, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  PlayCircle,
  PauseCircle,
  RefreshCw,
  Table, 
  BarChart3, 
  HelpCircle, 
  Info
} from 'lucide-react';

interface TrainingPageProps {}

const TrainingPage: React.FC<TrainingPageProps> = () => {
  const [selectedModel, setSelectedModel] = useState('LLaMA 3');
  const [selectedDataset, setSelectedDataset] = useState('Customer Support');
  const [advanced, setAdvanced] = useState(false);
  const [trainingState, setTrainingState] = useState<'idle' | 'preparing' | 'training' | 'paused' | 'completed'>('idle');

  const startTraining = () => {
    setTrainingState('preparing');
    
    setTimeout(() => {
      setTrainingState('training');
    }, 2000);
  };

  const pauseTraining = () => {
    setTrainingState('paused');
  };

  const resumeTraining = () => {
    setTrainingState('training');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Model Training</h1>
          <p className="text-zinc-400">Create and train custom AI models with your data</p>
        </div>
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Training Configuration */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card: Base Model Selection */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Base Model</h3>
              
              <div className="space-y-4">
                <div
                  className={`relative flex items-center cursor-pointer p-4 rounded-lg border transition-all ${
                    selectedModel === 'LLaMA 3' 
                      ? 'border-violet-500 bg-violet-500/10' 
                      : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                  }`}
                  onClick={() => setSelectedModel('LLaMA 3')}
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-violet-500/20 rounded-lg mr-4">
                    <span className="text-violet-300 font-bold">L3</span>
                  </div>
                  <div>
                    <p className="font-medium">LLaMA 3</p>
                    <p className="text-zinc-400 text-sm">Optimized for general tasks</p>
                  </div>
                  <CheckCircle2 className={`h-5 w-5 ml-auto ${selectedModel === 'LLaMA 3' ? 'text-violet-400' : 'hidden'}`} />
                </div>
                
                <div
                  className={`relative flex items-center cursor-pointer p-4 rounded-lg border transition-all ${
                    selectedModel === 'Mistral' 
                      ? 'border-violet-500 bg-violet-500/10' 
                      : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                  }`}
                  onClick={() => setSelectedModel('Mistral')}
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-blue-500/20 rounded-lg mr-4">
                    <span className="text-blue-300 font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-medium">Mistral</p>
                    <p className="text-zinc-400 text-sm">Excellent response quality</p>
                  </div>
                  <CheckCircle2 className={`h-5 w-5 ml-auto ${selectedModel === 'Mistral' ? 'text-violet-400' : 'hidden'}`} />
                </div>
              </div>
            </div>
            
            {/* Card: Dataset Selection */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Dataset</h3>
              <div className="space-y-4">
                <div
                  className={`relative p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedDataset === 'Customer Support' 
                      ? 'border-violet-500 bg-violet-500/10' 
                      : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                  }`}
                  onClick={() => setSelectedDataset('Customer Support')}
                >
                  <div className="flex items-center">
                    <Database className="h-5 w-5 text-violet-400 mr-3" />
                    <div>
                      <p className="font-medium">Customer Support</p>
                      <p className="text-zinc-400 text-sm">3,450 examples • CSV</p>
                    </div>
                    <CheckCircle2 className={`h-5 w-5 ml-auto ${selectedDataset === 'Customer Support' ? 'text-violet-400' : 'hidden'}`} />
                  </div>
                </div>
                
                <div
                  className={`relative p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedDataset === 'Product Knowledge' 
                      ? 'border-violet-500 bg-violet-500/10' 
                      : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                  }`}
                  onClick={() => setSelectedDataset('Product Knowledge')}
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Product Knowledge</p>
                      <p className="text-zinc-400 text-sm">1,280 examples • JSON</p>
                    </div>
                    <CheckCircle2 className={`h-5 w-5 ml-auto ${selectedDataset === 'Product Knowledge' ? 'text-violet-400' : 'hidden'}`} />
                  </div>
                </div>
                
                <Link href="/dashboard/datasets/import">
                  <div className="p-4 rounded-lg border border-dashed border-zinc-700 bg-zinc-800/30 hover:bg-zinc-800/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-center space-x-2 text-zinc-400">
                      <Upload className="h-5 w-5" />
                      <span>Upload new dataset</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Card: Training Parameters */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Training Parameters</h3>
                <button 
                  onClick={() => setAdvanced(!advanced)}
                  className="text-violet-400 text-sm flex items-center hover:text-violet-300 transition-colors"
                >
                  {advanced ? 'Basic View' : 'Advanced Settings'}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${advanced ? 'transform rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Epochs</label>
                  <div className="flex items-center">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value="3" 
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-3 font-medium">3</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Learning Rate</label>
                  <div className="flex items-center">
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value="30" 
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-3 font-medium">3.0e-5</span>
                  </div>
                </div>
                
                {advanced && (
                  <div className="pt-3 space-y-5 border-t border-zinc-800 mt-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Batch Size</label>
                      <select className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5">
                        <option>8</option>
                        <option>16</option>
                        <option>32</option>
                        <option>64</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Weight Decay</label>
                      <input 
                        type="text" 
                        value="0.01" 
                        className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Optimizer</label>
                      <select className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5">
                        <option>AdamW</option>
                        <option>SGD</option>
                        <option>RMSprop</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Start Training Button */}
            {trainingState === 'idle' && (
              <button 
                onClick={startTraining}
                className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg font-medium text-center transition-all shadow-lg shadow-violet-500/20"
              >
                Start Training
              </button>
            )}
            
            {trainingState === 'preparing' && (
              <button 
                disabled
                className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-80 text-white rounded-lg font-medium text-center transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center"
              >
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                Preparing Training Job...
              </button>
            )}
            
            {trainingState === 'training' && (
              <button 
                onClick={pauseTraining}
                className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium text-center transition-all"
              >
                <div className="flex items-center justify-center">
                  <PauseCircle className="h-5 w-5 mr-2" />
                  Pause Training
                </div>
              </button>
            )}
            
            {trainingState === 'paused' && (
              <button 
                onClick={resumeTraining}
                className="w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium text-center transition-all"
              >
                <div className="flex items-center justify-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Resume Training
                </div>
              </button>
            )}
          </div>
          
          {/* Right Column: Training Progress & Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Training Progress */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Training Progress</h3>
                {trainingState === 'training' && (
                  <div className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
                    <span className="text-emerald-400 text-sm font-medium">Live Training</span>
                  </div>
                )}
                
                {trainingState === 'paused' && (
                  <div className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-400 mr-2"></span>
                    <span className="text-amber-400 text-sm font-medium">Paused</span>
                  </div>
                )}
              </div>
              
              {trainingState === 'idle' && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <PlayCircle className="h-8 w-8 text-zinc-400" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Ready to Train</h4>
                  <p className="text-zinc-400 max-w-md">Configure your parameters and click "Start Training" to begin the training process</p>
                </div>
              )}
              
              {(trainingState === 'training' || trainingState === 'paused') && (
                <div className="space-y-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-zinc-800/60 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 mb-2">Epochs</p>
                      <p className="font-semibold text-xl text-white">1 / 3</p>
                    </div>
                    <div className="bg-zinc-800/60 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 mb-2">Time Elapsed</p>
                      <p className="font-semibold text-xl text-white">14:32</p>
                    </div>
                    <div className="bg-zinc-800/60 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 mb-2">Remaining</p>
                      <p className="font-semibold text-xl text-white">~28 min</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-400">Overall Progress</span>
                      <span className="text-violet-300 font-medium">33%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 rounded-full h-2.5 mb-1 overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2 rounded-full w-1/3 relative">
                        <div className="absolute top-0 right-0 h-full w-6 bg-white/20 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-zinc-800 pt-6">
                    <h4 className="font-medium mb-4">Current Batch Details</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-zinc-400 mb-2">Training Loss</p>
                        <div className="flex items-end">
                          <p className="font-semibold text-xl text-white">0.1842</p>
                          <span className="text-emerald-400 text-xs ml-2 mb-1 flex items-center">
                            ↓ -0.0023
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400 mb-2">Validation Loss</p>
                        <div className="flex items-end">
                          <p className="font-semibold text-xl text-white">0.2103</p>
                          <span className="text-emerald-400 text-xs ml-2 mb-1 flex items-center">
                            ↓ -0.0018
                          </span>                          
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400 mb-2">Learning Rate</p>
                        <p className="font-semibold text-xl text-white">2.87e-5</p>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400 mb-2">Batch</p>
                        <p className="font-semibold text-xl text-white">243 / 720</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Performance Metrics */}
            {(trainingState === 'training' || trainingState === 'paused') && (
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      <Table className="h-4 w-4 mr-1" />
                      Table View
                    </button>
                    <button className="flex items-center text-sm text-white bg-violet-500/20 px-3 py-1 rounded-md">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      Chart View
                    </button>
                  </div>
                </div>
                
                {/* Placeholder for charts - would be replaced with actual charts in production */}
                <div className="h-64 w-full relative mb-4 rounded-lg overflow-hidden border border-zinc-800">
                  <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-zinc-900"></div>
                  
                  {/* This is a mockup representation of a chart */}
                  <div className="absolute inset-0 px-4 py-2">
                    <div className="h-full flex items-end space-x-1">
                      {[0.8, 0.65, 0.7, 0.55, 0.57, 0.5, 0.43, 0.38, 0.41, 0.36, 0.33, 0.3, 0.32, 0.28, 0.25].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t-sm opacity-80"
                          style={{ height: `${height * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 left-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-md px-2 py-1 text-xs text-white">
                    Training Loss
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Info className="h-4 w-4 text-zinc-500 mr-2" />
                    <span className="text-zinc-400 text-sm">Showing data for current epoch</span>
                  </div>
                  
                  <button className="text-violet-400 text-sm hover:text-violet-300 transition-colors flex items-center">
                    View All Metrics
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            )}
            
            <div className="flex space-x-4 items-center py-2">
              <Link href="/dashboard/playground">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg px-6 py-3 font-medium text-center transition-all shadow-lg shadow-emerald-500/20 flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Test in Playground
                </button>
              </Link>
              
              <Link href="/dashboard/models">
                <button className="bg-zinc-800 border border-zinc-700 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-700 transition-all flex items-center">
                  View All Models
                </button>
              </Link>
              
              <button className="ml-auto text-zinc-400 hover:text-zinc-300 transition-colors flex items-center">
                <HelpCircle className="h-5 w-5 mr-1" />
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;