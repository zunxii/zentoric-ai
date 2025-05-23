'use client'
import React, { useState } from 'react';
import { 
  Brain, 
  Database, 
  Zap, 
  Target, 
  ChevronRight, 
  Upload, 
  GitBranch, 
  Cpu, 
  Gauge,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Circle,
  Play
} from 'lucide-react';

const ModelCreatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('custom');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    baseModel: 'llama-3',
    useCase: 'text-generation',
    dataset: null
  });

  const steps = [
    { id: 1, title: 'Choose Template', icon: Brain },
    { id: 2, title: 'Configure Model', icon: Cpu },
    { id: 3, title: 'Dataset & Training', icon: Database },
    { id: 4, title: 'Deploy Settings', icon: Zap }
  ];

  const templates = [
    {
      id: 'custom',
      name: 'Custom Model',
      description: 'Build from scratch with full control',
      icon: Brain,
      gradient: 'from-violet-500 to-purple-600',
      popular: false
    },
    {
      id: 'chatbot',
      name: 'Conversational AI',
      description: 'Customer service & support chatbots',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      id: 'content',
      name: 'Content Generator',
      description: 'Marketing copy & creative writing',
      icon: Sparkles,
      gradient: 'from-emerald-500 to-teal-600',
      popular: false
    },
    {
      id: 'analysis',
      name: 'Text Analysis',
      description: 'Classification & sentiment analysis',
      icon: Gauge,
      gradient: 'from-orange-500 to-red-600',
      popular: false
    }
  ];

  const baseModels = [
    { id: 'llama-3', name: 'LLaMA 3', params: '70B', type: 'Open Source', recommended: true },
    { id: 'gpt-4', name: 'GPT-4', params: '175B', type: 'Commercial', recommended: false },
    { id: 'claude-3', name: 'Claude 3', params: '100B', type: 'Commercial', recommended: false },
    { id: 'mistral-7b', name: 'Mistral 7B', params: '7B', type: 'Open Source', recommended: false }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#1a1a2e_0%,_transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#16213e_0%,_transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#111_1px,_transparent_1px),_linear-gradient(to_bottom,_#111_1px,_transparent_1px)] bg-[size:60px_60px] opacity-5"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-500/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-emerald-500/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-6">
            <span>Dashboard</span>
            <ChevronRight className="h-4 w-4" />
            <span>Models</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-violet-400">Create New</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Create AI Model</h1>
              <p className="text-zinc-400 text-lg">Build and deploy your custom AI model in minutes</p>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center space-x-3 px-4 py-2 rounded-full border transition-all ${
                    currentStep >= step.id 
                      ? 'bg-violet-500/10 border-violet-500/30 text-violet-300' 
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-500'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : currentStep === step.id ? (
                      <step.icon className="h-4 w-4" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 mx-2 text-zinc-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Choose Your Starting Point</h2>
                  <p className="text-zinc-400 mb-6">Select a template or start from scratch</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                          selectedTemplate === template.id
                            ? 'border-violet-500/50 bg-violet-500/5'
                            : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
                        }`}
                      >
                        {template.popular && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Popular
                          </div>
                        )}
                        
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                          <template.icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                        <p className="text-zinc-400 text-sm">{template.description}</p>
                        
                        {selectedTemplate === template.id && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-600/10 border-2 border-violet-500/50 pointer-events-none">
                            <div className="absolute top-4 right-4">
                              <CheckCircle2 className="h-6 w-6 text-violet-400" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Model Configuration</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">Model Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                        placeholder="e.g., Customer Support Bot v1"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">Use Case</label>
                      <select
                        value={formData.useCase}
                        onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                        className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                      >
                        <option value="text-generation">Text Generation</option>
                        <option value="classification">Classification</option>
                        <option value="summarization">Summarization</option>
                        <option value="translation">Translation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={3}
                      className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                      placeholder="Describe what your model will do..."
                    />
                  </div>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Base Model Selection</h3>
                  <p className="text-zinc-400 mb-6">Choose the foundation model for your AI</p>
                  
                  <div className="space-y-3">
                    {baseModels.map((model) => (
                      <div
                        key={model.id}
                        onClick={() => setFormData({...formData, baseModel: model.id})}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.baseModel === model.id
                            ? 'border-violet-500/50 bg-violet-500/5'
                            : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                            model.recommended ? 'from-violet-500 to-purple-600' : 'from-zinc-600 to-zinc-700'
                          } flex items-center justify-center`}>
                            <Cpu className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-white">{model.name}</h4>
                              {model.recommended && (
                                <span className="bg-violet-500/20 text-violet-300 text-xs px-2 py-1 rounded-full">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-zinc-400">{model.params} parameters • {model.type}</p>
                          </div>
                        </div>
                        
                        {formData.baseModel === model.id && (
                          <CheckCircle2 className="h-5 w-5 text-violet-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Progress Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Creation Progress</h3>
                
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep > step.id 
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : currentStep === step.id
                          ? 'bg-violet-500/20 text-violet-400'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}>
                        {currentStep > step.id ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <step.icon className="h-4 w-4" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        currentStep >= step.id ? 'text-white' : 'text-zinc-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimated Costs */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Estimated Costs</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Training</span>
                    <span className="text-white font-medium">$12.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Hosting (per month)</span>
                    <span className="text-white font-medium">$8.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">First Month Total</span>
                      <span className="text-violet-400 font-bold">$21.49</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentStep(Math.min(currentStep + 1, 4))}
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg px-6 py-3 font-medium hover:from-violet-600 hover:to-purple-700 transition-all flex items-center justify-center group"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="w-full bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800/80 transition-all">
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCreatePage;