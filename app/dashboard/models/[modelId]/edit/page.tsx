'use client'
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Activity, 
  Zap, 
  Settings, 
  Save, 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw,
  TrendingUp,
  Users,
  Clock,
  Database,
  Cpu,
  Globe,
  Shield,
  Code,
  BarChart3,
  ChevronRight,
  Upload,
  FileText,
  Sliders,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Layers,
  Maximize2,
  Minimize2,
  Target,
  Gauge,
  Workflow,
  Filter,
  RefreshCw,
  Download,
  Plus,
  X,
  Edit3,
  Trash2,
  Copy,
  Shuffle,
  Send,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Monitor,
  Smartphone,
  Server,
  ExternalLink,
  Lock,
  Unlock,
  GitBranch,
  History,
  Bug,
  Zap as Lightning,
  TrendingDown,
  Calendar,
  PieChart,
  LineChart
} from 'lucide-react';

const ModelEditPage = () => {
  const [activeSection, setActiveSection] = useState('basic');
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [testPrompt, setTestPrompt] = useState('');
  const [testResponse, setTestResponse] = useState('');
  const [isTestingModel, setIsTestingModel] = useState(false);
  const [deploymentEnvironments, setDeploymentEnvironments] = useState([]);

  // Model configuration state
  const [modelConfig, setModelConfig] = useState({
    name: 'Customer Support Bot v2.3',
    description: 'Advanced conversational AI for customer service automation',
    baseModel: 'LLaMA 3',
    maxTokens: 4096,
    temperature: 0.7,
    topP: 0.9,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    systemPrompt: 'You are a helpful customer service assistant. Always be polite, professional, and helpful.',
    trainingData: [],
    fineTuningConfig: {
      epochs: 3,
      batchSize: 4,
      learningRate: 0.0001,
      warmupSteps: 100
    },
    validationSplit: 0.2,
    enableDataAugmentation: false,
    enableAutoFiltering: true
  });

  const [trainingDatasets] = useState([
    { id: 1, name: 'Customer Queries Dataset', size: '25.3 MB', examples: 12500, uploaded: '2024-05-15', status: 'processed' },
    { id: 2, name: 'FAQ Responses', size: '8.7 MB', examples: 4200, uploaded: '2024-05-18', status: 'processing' },
    { id: 3, name: 'Support Conversations', size: '42.1 MB', examples: 18900, uploaded: '2024-05-20', status: 'processed' }
  ]);

  const [testCases] = useState([
    { id: 1, prompt: 'How do I reset my password?', expectedResponse: 'To reset your password, please...', status: 'passed', score: 0.95 },
    { id: 2, prompt: 'What are your business hours?', expectedResponse: 'Our business hours are...', status: 'passed', score: 0.92 },
    { id: 3, prompt: 'I want to cancel my subscription', expectedResponse: 'I understand you\'d like to cancel...', status: 'failed', score: 0.67 },
    { id: 4, prompt: 'How much does shipping cost?', expectedResponse: 'Shipping costs depend on...', status: 'passed', score: 0.89 }
  ]);

  const [metrics] = useState({
    accuracy: 94.2,
    responseTime: 1.2,
    userSatisfaction: 4.7,
    totalQueries: 15420,
    successfulQueries: 14536,
    averageConfidence: 0.87
  });

  // Simulate training progress
  useEffect(() => {
    if (isTraining) {
      const interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setIsTraining(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTraining]);

  const sections = [
    { id: 'basic', label: 'Basic Settings', icon: Settings },
    { id: 'parameters', label: 'Model Parameters', icon: Sliders },
    { id: 'training', label: 'Training Data', icon: Database },
    { id: 'finetuning', label: 'Fine-tuning', icon: Target },
    { id: 'testing', label: 'Testing & Validation', icon: Play },
    { id: 'deployment', label: 'Deployment', icon: Globe }
  ];

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setHasUnsavedChanges(false);
    }, 2000);
  };

  const handleStartTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
  };

  const handleTestModel = async () => {
    if (!testPrompt.trim()) return;
    
    setIsTestingModel(true);
    setTestResponse('');
    
    // Simulate model response
    setTimeout(() => {
      setTestResponse("Thank you for contacting our support team! I'd be happy to help you with your inquiry. Could you please provide more details about the specific issue you're experiencing? This will allow me to give you the most accurate and helpful response.");
      setIsTestingModel(false);
    }, 2000);
  };

  const updateConfig = (key, value) => {
    setModelConfig(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const updateFineTuningConfig = (key, value) => {
    setModelConfig(prev => ({
      ...prev,
      fineTuningConfig: { ...prev.fineTuningConfig, [key]: value }
    }));
    setHasUnsavedChanges(true);
  };

  const ParameterSlider = ({ label, value, min, max, step, onChange, description }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <label className="text-sm font-medium text-white">{label}</label>
          {description && <p className="text-xs text-zinc-400 mt-1">{description}</p>}
        </div>
        <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-3 py-1 min-w-[80px] text-center">
          <span className="text-violet-400 font-mono text-sm">{value}</span>
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer 
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500
                   [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                   [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full 
                   [&::-moz-range-thumb]:bg-violet-500 [&::-moz-range-thumb]:cursor-pointer 
                   [&::-moz-range-thumb]:border-none"
        />
        <div 
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg pointer-events-none"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#1a1a2e_0%,_transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_#16213e_0%,_transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#111_1px,_transparent_1px),_linear-gradient(to_bottom,_#111_1px,_transparent_1px)] bg-[size:80px_80px] opacity-5"></div>
        
        {/* Dynamic floating elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-violet-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header with breadcrumb and actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-4">
              <span>Dashboard</span>
              <ChevronRight className="h-4 w-4" />
              <span>Models</span>
              <ChevronRight className="h-4 w-4" />
              <span>Customer Support Bot v2.3</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-violet-400">Edit</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg hover:bg-zinc-800/80 transition-all">
                <ArrowLeft className="h-5 w-5 text-zinc-400" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Edit Model</h1>
                <p className="text-zinc-400">Customize and fine-tune your AI model</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-6 lg:mt-0">
            {hasUnsavedChanges && (
              <div className="flex items-center space-x-2 text-sm text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Unsaved changes</span>
              </div>
            )}
            
            <button className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800/80 transition-all flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </button>
            
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg px-6 py-3 font-medium hover:from-violet-600 hover:to-purple-700 transition-all flex items-center disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Configuration</h3>
                
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all group ${
                        activeSection === section.id
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                      }`}
                    >
                      <section.icon className={`h-4 w-4 ${
                        activeSection === section.id ? 'text-violet-400' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`} />
                      <span className="text-sm">{section.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Training Status */}
                <div className="mt-8 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white">Training Status</span>
                    {isTraining && <Loader2 className="h-4 w-4 text-violet-400 animate-spin" />}
                  </div>
                  
                  {isTraining ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-400">
                        <span>Progress</span>
                        <span>{Math.round(trainingProgress)}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(trainingProgress, 100)}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-sm text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Ready to train</span>
                    </div>
                  )}
                </div>

                {/* Quick Metrics */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Accuracy</span>
                    <span className="text-emerald-400 font-medium">{metrics.accuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Avg Response</span>
                    <span className="text-blue-400 font-medium">{metrics.responseTime}s</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Satisfaction</span>
                    <span className="text-yellow-400 font-medium">★ {metrics.userSatisfaction}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="space-y-8">
              {/* Basic Settings */}
              {activeSection === 'basic' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Settings className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Basic Configuration</h2>
                        <p className="text-zinc-400">Fundamental model settings and metadata</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Model Name</label>
                          <input
                            type="text"
                            value={modelConfig.name}
                            onChange={(e) => updateConfig('name', e.target.value)}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                            placeholder="Enter model name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Description</label>
                          <textarea
                            value={modelConfig.description}
                            onChange={(e) => updateConfig('description', e.target.value)}
                            rows={4}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                            placeholder="Describe your model's purpose and capabilities"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Base Model</label>
                          <select
                            value={modelConfig.baseModel}
                            onChange={(e) => updateConfig('baseModel', e.target.value)}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                          >
                            <option value="LLaMA 3">LLaMA 3 (70B)</option>
                            <option value="GPT-4">GPT-4 Turbo</option>
                            <option value="Claude 3">Claude 3 Sonnet</option>
                            <option value="Mistral">Mistral 7B</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">System Prompt</label>
                          <textarea
                            value={modelConfig.systemPrompt}
                            onChange={(e) => updateConfig('systemPrompt', e.target.value)}
                            rows={8}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                            placeholder="Define the model's behavior and personality"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-3">Max Tokens</label>
                            <input
                              type="number"
                              value={modelConfig.maxTokens}
                              onChange={(e) => updateConfig('maxTokens', parseInt(e.target.value))}
                              className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                              min="1"
                              max="8192"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-3">Version</label>
                            <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400">
                              v2.3.1 (Auto-increment)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Model Parameters */}
              {activeSection === 'parameters' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Sliders className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Model Parameters</h2>
                        <p className="text-zinc-400">Fine-tune model behavior and response characteristics</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <ParameterSlider
                          label="Temperature"
                          value={modelConfig.temperature}
                          min={0}
                          max={2}
                          step={0.1}
                          onChange={(value) => updateConfig('temperature', value)}
                          description="Controls randomness in responses. Higher values = more creative"
                        />

                        <ParameterSlider
                          label="Top P"
                          value={modelConfig.topP}
                          min={0}
                          max={1}
                          step={0.05}
                          onChange={(value) => updateConfig('topP', value)}
                          description="Nucleus sampling parameter. Controls diversity of word selection"
                        />

                        <ParameterSlider
                          label="Frequency Penalty"
                          value={modelConfig.frequencyPenalty}
                          min={-2}
                          max={2}
                          step={0.1}
                          onChange={(value) => updateConfig('frequencyPenalty', value)}
                          description="Reduces likelihood of repeating the same words"
                        />
                      </div>

                      <div className="space-y-8">
                        <ParameterSlider
                          label="Presence Penalty"
                          value={modelConfig.presencePenalty}
                          min={-2}
                          max={2}
                          step={0.1}
                          onChange={(value) => updateConfig('presencePenalty', value)}
                          description="Encourages the model to talk about new topics"
                        />

                        {/* Parameter Preview */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Parameter Effects</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-lg">
                              <span className="text-zinc-300">Creativity Level</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-zinc-800 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full"
                                    style={{ width: `${(modelConfig.temperature / 2) * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm text-zinc-400 w-12">
                                  {modelConfig.temperature < 0.3 ? 'Low' : 
                                   modelConfig.temperature < 0.7 ? 'Med' : 'High'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-lg">
                              <span className="text-zinc-300">Focus Level</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-zinc-800 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                    style={{ width: `${modelConfig.topP * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm text-zinc-400 w-12">
                                  {modelConfig.topP > 0.9 ? 'High' : 
                                   modelConfig.topP > 0.7 ? 'Med' : 'Low'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Training Data */}
              {activeSection === 'training' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                          <Database className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">Training Data</h2>
                          <p className="text-zinc-400">Manage and upload datasets for model training</p>
                        </div>
                      </div>

                      <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg px-6 py-3 font-medium hover:from-violet-600 hover:to-purple-700 transition-all flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Dataset
                      </button>
                    </div>

                    {/* Dataset Upload Area */}
                    <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center mb-8 hover:border-violet-500/50 transition-colors group">
                      <div className="w-16 h-16 bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500/10 transition-colors">
                        <Upload className="h-8 w-8 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Drop files here or click to upload</h3>
                      <p className="text-zinc-400 mb-4">Support for CSV, JSON, JSONL files up to 100MB</p>
                      <button className="bg-zinc-900/60 border border-zinc-700 text-white rounded-lg px-6 py-2 font-medium hover:bg-zinc-800/80 transition-all">
                        Browse Files
                      </button>
                    </div>

                    {/* Existing Datasets */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Existing Datasets</h3>
                      
                      {trainingDatasets.map((dataset) => (
                        <div key={dataset.id} className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white flex items-center space-x-2">
                                  <span>{dataset.name}</span>
                                  {dataset.status === 'processing' && <Loader2 className="h-4 w-4 text-violet-400 animate-spin" />}
                                  {dataset.status === 'processed' && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                                </h4>
                                <div className="flex items-center space-x-4 text-sm text-zinc-400 mt-1">
                                  <span>{dataset.size}</span>
                                  <span>•</span>
                                  <span>{dataset.examples.toLocaleString()} examples</span>
                                  <span>•</span>
                                  <span>Uploaded {dataset.uploaded}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <button className="p-2 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors">
                                <Eye className="h-4 w-4 text-zinc-400" />
                              </button>
                              <button className="p-2 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors">
                                <Download className="h-4 w-4 text-zinc-400" />
                              </button>
                              <button className="p-2 bg-red-900/20 border border-red-800/50 rounded-lg hover:bg-red-900/30 transition-colors">
                                <Trash2 className="h-4 w-4 text-red-400" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Data Processing Options */}
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Filter className="h-5 w-5 text-violet-400" />
                          <h3 className="font-semibold text-white">Data Filtering</h3>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4">Remove low-quality or irrelevant examples</p>
                        <label className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            checked={modelConfig.enableAutoFiltering}
                            onChange={(e) => updateConfig('enableAutoFiltering', e.target.checked)}
                            className="rounded bg-zinc-800 border-zinc-700 text-violet-500 focus:ring-violet-500" 
                          />
                          <span className="text-sm text-zinc-300">Enable auto-filtering</span>
                        </label>
                      </div>

                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Shuffle className="h-5 w-5 text-blue-400" />
                          <h3 className="font-semibold text-white">Data Augmentation</h3>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4">Generate additional training examples</p>
                        <label className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            checked={modelConfig.enableDataAugmentation}
                            onChange={(e) => updateConfig('enableDataAugmentation', e.target.checked)}
                            className="rounded bg-zinc-800 border-zinc-700 text-blue-500 focus:ring-blue-500" 
                          />
                          <span className="text-sm text-zinc-300">Enable augmentation</span>
                        </label>
                      </div>

                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <BarChart3 className="h-5 w-5 text-emerald-400" />
                          <h3 className="font-semibold text-white">Validation Split</h3>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4">Percentage of data for validation</p>
                        <input
                          type="range"
                          min="0.1"
                          max="0.4"
                          step="0.05"
                          value={modelConfig.validationSplit}
                          onChange={(e) => updateConfig('validationSplit', parseFloat(e.target.value))}
                          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-center mt-2">
                          <span className="text-emerald-400 font-mono text-sm">{(modelConfig.validationSplit * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Fine-tuning */}
              {activeSection === 'finetuning' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">Fine-tuning Configuration</h2>
                          <p className="text-zinc-400">Advanced training parameters and optimization settings</p>
                        </div>
                      </div>

                      <button 
                        onClick={handleStartTraining}
                        disabled={isTraining}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg px-6 py-3 font-medium hover:from-orange-600 hover:to-red-700 transition-all flex items-center disabled:opacity-50"
                      >
                        {isTraining ? (
                          <>
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Training...
                          </>
                        ) : (
                          <>
                            <Lightning className="h-4 w-4 mr-2" />
                            Start Training
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Training Epochs</label>
                          <input
                            type="number"
                            value={modelConfig.fineTuningConfig.epochs}
                            onChange={(e) => updateFineTuningConfig('epochs', parseInt(e.target.value))}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                            min="1"
                            max="20"
                          />
                          <p className="text-xs text-zinc-400 mt-1">Number of complete passes through the training data</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Batch Size</label>
                          <select
                            value={modelConfig.fineTuningConfig.batchSize}
                            onChange={(e) => updateFineTuningConfig('batchSize', parseInt(e.target.value))}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={8}>8</option>
                            <option value={16}>16</option>
                          </select>
                          <p className="text-xs text-zinc-400 mt-1">Number of examples processed simultaneously</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Learning Rate</label>
                          <input
                            type="number"
                            value={modelConfig.fineTuningConfig.learningRate}
                            onChange={(e) => updateFineTuningConfig('learningRate', parseFloat(e.target.value))}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                            step="0.00001"
                            min="0.00001"
                            max="0.01"
                          />
                          <p className="text-xs text-zinc-400 mt-1">Controls how quickly the model learns</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-3">Warmup Steps</label>
                          <input
                            type="number"
                            value={modelConfig.fineTuningConfig.warmupSteps}
                            onChange={(e) => updateFineTuningConfig('warmupSteps', parseInt(e.target.value))}
                            className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                            min="0"
                            max="1000"
                          />
                          <p className="text-xs text-zinc-400 mt-1">Number of steps to gradually increase learning rate</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Training Progress Visualization */}
                        {isTraining && (
                          <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Training Progress</h3>
                            
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-zinc-400">Overall Progress</span>
                                  <span className="text-violet-400">{Math.round(trainingProgress)}%</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-3">
                                  <div 
                                    className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                                    style={{ width: `${Math.min(trainingProgress, 100)}%` }}
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-emerald-400">
                                    {Math.floor(trainingProgress / 33.33) + 1}
                                  </div>
                                  <div className="text-xs text-zinc-400">Current Epoch</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-blue-400">
                                    {Math.round((trainingProgress / 100) * 1247)}
                                  </div>
                                  <div className="text-xs text-zinc-400">Steps Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Training Estimates */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Training Estimates</h3>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400">Estimated Duration</span>
                              <span className="text-white font-medium">
                                {Math.round(modelConfig.fineTuningConfig.epochs * 0.5 * modelConfig.fineTuningConfig.batchSize)} minutes
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400">Total Steps</span>
                              <span className="text-white font-medium">
                                {Math.round(45000 / modelConfig.fineTuningConfig.batchSize * modelConfig.fineTuningConfig.epochs)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400">GPU Hours</span>
                              <span className="text-white font-medium">
                                {(modelConfig.fineTuningConfig.epochs * 0.8).toFixed(1)}h
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400">Est. Cost</span>
                              <span className="text-green-400 font-medium">
                                ${(modelConfig.fineTuningConfig.epochs * 12.5).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Advanced Options */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Advanced Options</h3>
                          
                          <div className="space-y-4">
                            <label className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500" />
                              <span className="text-sm text-zinc-300">Enable gradient checkpointing</span>
                            </label>
                            <label className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500" />
                              <span className="text-sm text-zinc-300">Use mixed precision training</span>
                            </label>
                            <label className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500" defaultChecked />
                              <span className="text-sm text-zinc-300">Save intermediate checkpoints</span>
                            </label>
                            <label className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-violet-500" />
                              <span className="text-sm text-zinc-300">Early stopping on validation loss</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Testing & Validation */}
              {activeSection === 'testing' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Testing & Validation</h2>
                        <p className="text-zinc-400">Test your model and validate its performance</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        {/* Interactive Testing */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Interactive Testing</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-zinc-300 mb-2">Test Prompt</label>
                              <textarea
                                value={testPrompt}
                                onChange={(e) => setTestPrompt(e.target.value)}
                                rows={3}
                                className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                                placeholder="Enter a prompt to test your model..."
                              />
                            </div>
                            
                            <button
                              onClick={handleTestModel}
                              disabled={isTestingModel || !testPrompt.trim()}
                              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg px-4 py-3 font-medium hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center disabled:opacity-50"
                            >
                              {isTestingModel ? (
                                <>
                                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                  Testing...
                                </>
                              ) : (
                                <>
                                  <Send className="h-4 w-4 mr-2" />
                                  Test Model
                                </>
                              )}
                            </button>

                            {testResponse && (
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-zinc-300 mb-2">Model Response</label>
                                <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg p-4">
                                  <p className="text-white text-sm leading-relaxed">{testResponse}</p>
                                </div>
                                
                                <div className="flex items-center space-x-2 mt-3">
                                  <button className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                                    <ThumbsUp className="h-3 w-3" />
                                    <span>Good</span>
                                  </button>
                                  <button className="flex items-center space-x-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                                    <ThumbsDown className="h-3 w-3" />
                                    <span>Poor</span>
                                  </button>
                                  <button className="flex items-center space-x-1 px-3 py-1 bg-zinc-700/50 text-zinc-400 rounded-lg text-sm hover:bg-zinc-700/70 transition-colors">
                                    <Copy className="h-3 w-3" />
                                    <span>Copy</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-400">{metrics.accuracy}%</div>
                              <div className="text-xs text-zinc-400">Accuracy</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-400">{metrics.responseTime}s</div>
                              <div className="text-xs text-zinc-400">Avg Response Time</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">★ {metrics.userSatisfaction}</div>
                              <div className="text-xs text-zinc-400">User Satisfaction</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-400">{metrics.averageConfidence.toFixed(2)}</div>
                              <div className="text-xs text-zinc-400">Avg Confidence</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Test Cases */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Automated Test Cases</h3>
                            <button className="bg-violet-500/20 border border-violet-500/30 text-violet-400 rounded-lg px-4 py-2 text-sm font-medium hover:bg-violet-500/30 transition-colors">
                              Run All Tests
                            </button>
                          </div>
                          
                          {testCases.map((testCase) => (
                            <div key={testCase.id} className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <p className="text-white font-medium text-sm mb-1">{testCase.prompt}</p>
                                  <p className="text-zinc-400 text-xs">{testCase.expectedResponse}</p>
                                </div>
                                <div className="flex items-center space-x-2 ml-4">
                                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                                    testCase.status === 'passed' 
                                      ? 'bg-emerald-500/20 text-emerald-400' 
                                      : 'bg-red-500/20 text-red-400'
                                  }`}>
                                    {testCase.status}
                                  </div>
                                  <div className="text-xs text-zinc-400 font-mono">
                                    {(testCase.score * 100).toFixed(0)}%
                                  </div>
                                </div>
                              </div>
                              
                              <div className="w-full bg-zinc-800 rounded-full h-1">
                                <div 
                                  className={`h-1 rounded-full ${
                                    testCase.status === 'passed' 
                                      ? 'bg-gradient-to-r from-emerald-500 to-green-600' 
                                      : 'bg-gradient-to-r from-red-500 to-red-600'
                                  }`}
                                  style={{ width: `${testCase.score * 100}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Validation History */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Validation History</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-white">Latest Validation</div>
                                <div className="text-xs text-zinc-400">May 24, 2025 - 2:30 PM</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-emerald-400">94.2%</div>
                                <div className="text-xs text-zinc-400">Accuracy</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-white">Previous Validation</div>
                                <div className="text-xs text-zinc-400">May 23, 2025 - 4:15 PM</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-yellow-400">91.8%</div>
                                <div className="text-xs text-zinc-400">Accuracy</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-white">Baseline Test</div>
                                <div className="text-xs text-zinc-400">May 20, 2025 - 1:00 PM</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-red-400">87.5%</div>
                                <div className="text-xs text-zinc-400">Accuracy</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Deployment */}
              {activeSection === 'deployment' && (
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Deployment Settings</h2>
                        <p className="text-zinc-400">Configure how and where your model will be deployed</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        {/* Deployment Environments */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white">Deployment Environments</h3>
                          
                          <div className="space-y-3">
                            <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Monitor className="h-5 w-5 text-blue-400" />
                                  <div>
                                    <div className="font-medium text-white">Production API</div>
                                    <div className="text-sm text-zinc-400">api.yourservice.com</div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                  <span className="text-sm text-emerald-400">Active</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Server className="h-5 w-5 text-yellow-400" />
                                  <div>
                                    <div className="font-medium text-white">Staging Environment</div>
                                    <div className="text-sm text-zinc-400">staging-api.yourservice.com</div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                  <span className="text-sm text-yellow-400">Pending</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Smartphone className="h-5 w-5 text-purple-400"></Smartphone><div>
                                    <div className="font-medium text-white">Mobile SDK</div>
                                    <div className="text-sm text-zinc-400">iOS & Android Integration</div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                                  <span className="text-sm text-zinc-400">Inactive</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg px-4 py-3 font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center">
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Environment
                          </button>
                        </div>

                        {/* Deployment Configuration */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-zinc-300 mb-2">API Endpoint</label>
                              <div className="flex">
                                <div className="bg-zinc-900/70 border border-zinc-700 rounded-l-lg px-4 py-3 text-zinc-400 text-sm">
                                  https://
                                </div>
                                <input
                                  type="text"
                                  placeholder="api.yourservice.com/v1/chat"
                                  className="flex-1 bg-zinc-900/70 border border-zinc-700 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">Max Concurrent Requests</label>
                                <input
                                  type="number"
                                  defaultValue="100"
                                  className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">Timeout (seconds)</label>
                                <input
                                  type="number"
                                  defaultValue="30"
                                  className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                                />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="flex items-center space-x-3">
                                <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-cyan-500" defaultChecked />
                                <span className="text-sm text-zinc-300">Enable API rate limiting</span>
                              </label>
                              <label className="flex items-center space-x-3">
                                <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-cyan-500" defaultChecked />
                                <span className="text-sm text-zinc-300">Enable request logging</span>
                              </label>
                              <label className="flex items-center space-x-3">
                                <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-cyan-500" />
                                <span className="text-sm text-zinc-300">Enable auto-scaling</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Deployment Status */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Deployment Status</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                <div>
                                  <div className="font-medium text-white">Production Deployment</div>
                                  <div className="text-sm text-emerald-400">Successfully deployed v2.3.1</div>
                                </div>
                              </div>
                              <div className="text-sm text-zinc-400">2 hours ago</div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-yellow-400" />
                                <div>
                                  <div className="font-medium text-white">Staging Deployment</div>
                                  <div className="text-sm text-yellow-400">Preparing v2.3.2 for testing</div>
                                </div>
                              </div>
                              <div className="text-sm text-zinc-400">In progress</div>
                            </div>
                          </div>
                        </div>

                        {/* Performance Monitoring */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Live Metrics</h3>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-400">1,247</div>
                              <div className="text-xs text-zinc-400">Requests/hour</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                              <div className="text-xs text-zinc-400">Uptime</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">1.2s</div>
                              <div className="text-xs text-zinc-400">Avg Response</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-400">8</div>
                              <div className="text-xs text-zinc-400">Active Nodes</div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-zinc-400">CPU Usage</span>
                              <span className="text-blue-400">67%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-zinc-400">Memory Usage</span>
                              <span className="text-emerald-400">43%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                            </div>
                          </div>
                        </div>

                        {/* Security Settings */}
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Shield className="h-5 w-5 text-green-400" />
                                <div>
                                  <div className="font-medium text-white">API Authentication</div>
                                  <div className="text-sm text-zinc-400">OAuth 2.0 + API Keys</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-sm text-emerald-400">Enabled</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Lock className="h-5 w-5 text-blue-400" />
                                <div>
                                  <div className="font-medium text-white">SSL/TLS Encryption</div>
                                  <div className="text-sm text-zinc-400">End-to-end encryption</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-sm text-emerald-400">Enabled</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Gauge className="h-5 w-5 text-yellow-400" />
                                <div>
                                  <div className="font-medium text-white">Rate Limiting</div>
                                  <div className="text-sm text-zinc-400">1000 req/min per key</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-sm text-emerald-400">Enabled</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deployment Actions */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800/80 transition-all flex items-center">
                          <History className="h-4 w-4 mr-2" />
                          Rollback
                        </button>
                        <button className="bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800/80 transition-all flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Download Logs
                        </button>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg px-6 py-3 font-medium hover:from-yellow-600 hover:to-orange-700 transition-all flex items-center">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Redeploy
                        </button>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg px-6 py-3 font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          Deploy New Version
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelEditPage;