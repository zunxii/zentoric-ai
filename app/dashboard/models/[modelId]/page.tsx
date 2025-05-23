'use client'
import React, { useState } from 'react';
import { 
  Brain, 
  Activity, 
  Zap, 
  Settings, 
  Copy, 
  ExternalLink, 
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
  Download,
  Share2,
  Edit3,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowUpRight,
  Terminal,
  Key,
  Sparkles
} from 'lucide-react';

const ModelDetailsPage = () => {
  const [isModelRunning, setIsModelRunning] = useState(true);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [testInput, setTestInput] = useState('');
  const [testOutput, setTestOutput] = useState('');
  const [isTestingModel, setIsTestingModel] = useState(false);

  const modelData = {
    id: 'model_001',
    name: 'Customer Support Bot v2.3',
    description: 'Advanced conversational AI for customer service automation',
    status: 'active',
    baseModel: 'LLaMA 3',
    version: '2.3.1',
    createdAt: '2024-03-15',
    lastUpdated: '2024-05-20',
    usage: {
      totalRequests: 24562,
      monthlyRequests: 8934,
      averageLatency: 245,
      successRate: 99.7
    },
    performance: {
      accuracy: 94.2,
      responseTime: 0.8,
      uptime: 99.9,
      costPerRequest: 0.003
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Brain },
    { id: 'metrics', label: 'Metrics', icon: BarChart3 },
    { id: 'playground', label: 'Playground', icon: Play },
    { id: 'api', label: 'API Access', icon: Code },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleTestModel = async () => {
    if (!testInput.trim()) return;
    
    setIsTestingModel(true);
    // Simulate API call
    setTimeout(() => {
      setTestOutput(`Based on your input: "${testInput}", here's my response: I understand you need help with your inquiry. Let me provide you with detailed assistance and guide you through the solution step by step.`);
      setIsTestingModel(false);
    }, 2000);
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
      active: { color: 'text-emerald-400', bg: 'bg-emerald-500/20', dot: 'bg-emerald-400' },
      training: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', dot: 'bg-yellow-400' },
      error: { color: 'text-red-400', bg: 'bg-red-500/20', dot: 'bg-red-400' },
      stopped: { color: 'text-zinc-400', bg: 'bg-zinc-500/20', dot: 'bg-zinc-400' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.stopped;

    return (
      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${config.bg}`}>
        <div className={`h-2 w-2 rounded-full ${config.dot} animate-pulse`}></div>
        <span className={`text-sm font-medium capitalize ${config.color}`}>{status}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#1a1a2e_0%,_transparent_50%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_#16213e_0%,_transparent_50%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#111_1px,_transparent_1px),_linear-gradient(to_bottom,_#111_1px,_transparent_1px)] bg-[size:80px_80px] opacity-5"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-8">
          <span>Dashboard</span>
          <ChevronRight className="h-4 w-4" />
          <span>Models</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-violet-400">{modelData.name}</span>
        </div>

        {/* Header */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{modelData.name}</h1>
                  <p className="text-zinc-400">{modelData.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <StatusBadge status={modelData.status} />
                <div className="flex items-center space-x-2 text-sm text-zinc-400">
                  <Cpu className="h-4 w-4" />
                  <span>{modelData.baseModel}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-zinc-400">
                  <Clock className="h-4 w-4" />
                  <span>Updated {modelData.lastUpdated}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-zinc-400">
                  <span className="inline-block h-1 w-1 bg-zinc-500 rounded-full"></span>
                  <span>Version {modelData.version}</span>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">Accuracy</span>
                  </div>
                  <p className="text-xl font-bold text-white">{modelData.performance.accuracy}%</p>
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">Response Time</span>
                  </div>
                  <p className="text-xl font-bold text-white">{modelData.performance.responseTime}s</p>
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">Requests</span>
                  </div>
                  <p className="text-xl font-bold text-white">{modelData.usage.totalRequests.toLocaleString()}</p>
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-4 w-4 text-violet-400" />
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">Uptime</span>
                  </div>
                  <p className="text-xl font-bold text-white">{modelData.performance.uptime}%</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col space-y-3 mt-6 lg:mt-0 lg:ml-8">
              <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg px-6 py-3 font-medium hover:from-violet-600 hover:to-purple-700 transition-all flex items-center group">
                <Play className="h-4 w-4 mr-2" />
                Test Model
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex space-x-2">
                <button className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-4 py-2 font-medium hover:bg-zinc-800/80 transition-all flex items-center">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit
                </button>
                <button className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-4 py-2 font-medium hover:bg-zinc-800/80 transition-all flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
                <button className="bg-zinc-900/60 backdrop-blur-sm border border-red-800/50 text-red-400 rounded-lg px-4 py-2 font-medium hover:bg-red-900/20 transition-all flex items-center">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-xl p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTab === tab.id
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                {/* Performance Chart */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
                    <div className="flex space-x-2">
                      <button className="text-xs px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full">7D</button>
                      <button className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full hover:bg-zinc-700">30D</button>
                      <button className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full hover:bg-zinc-700">90D</button>
                    </div>
                  </div>
                  
                  {/* Simulated chart */}
                  <div className="h-64 bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 flex items-end space-x-2">
                    {[65, 78, 82, 75, 88, 92, 89, 94, 87, 91, 96, 93, 89, 92].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-violet-500/50 to-violet-400/20 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-zinc-800">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">99.7%</p>
                      <p className="text-sm text-zinc-500">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">245ms</p>
                      <p className="text-sm text-zinc-500">Avg Latency</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-400">8.9K</p>
                      <p className="text-sm text-zinc-500">Monthly Requests</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-violet-400">$0.003</p>
                      <p className="text-sm text-zinc-500">Cost/Request</p>
                    </div>
                  </div>
                </div>

                {/* Model Architecture */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Model Architecture</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-white mb-4">Configuration</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Base Model</span>
                          <span className="text-white font-medium">{modelData.baseModel}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Parameters</span>
                          <span className="text-white font-medium">70B</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Context Length</span>
                          <span className="text-white font-medium">4,096 tokens</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Fine-tuning</span>
                          <span className="text-emerald-400 font-medium">✓ Enabled</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-4">Training Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Dataset Size</span>
                          <span className="text-white font-medium">50K examples</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Training Time</span>
                          <span className="text-white font-medium">4.2 hours</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Epochs</span>
                          <span className="text-white font-medium">3</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                          <span className="text-zinc-400">Final Loss</span>
                          <span className="text-white font-medium">0.0024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
                  
                  <div className="space-y-4">
                    {[
                      { time: '2 minutes ago', action: 'API call processed', status: 'success', details: 'Response time: 0.8s' },
                      { time: '15 minutes ago', action: 'Model health check', status: 'success', details: 'All systems operational' },
                      { time: '1 hour ago', action: 'Performance optimization', status: 'info', details: 'Latency reduced by 12%' },
                      { time: '3 hours ago', action: 'Training completed', status: 'success', details: 'Accuracy improved to 94.2%' },
                      { time: '1 day ago', action: 'Model deployed', status: 'success', details: 'Version 2.3.1 live' }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center space-x-4 p-3 bg-zinc-900/30 rounded-lg border border-zinc-800/50">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-emerald-400' :
                          activity.status === 'info' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{activity.action}</p>
                          <p className="text-sm text-zinc-400">{activity.details}</p>
                        </div>
                        <span className="text-xs text-zinc-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'playground' && (
              <div className="space-y-6">
                {/* Test Interface */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Model Playground</h3>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                      <span className="text-sm text-violet-400">Interactive Testing</span>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-3">Input</label>
                      <textarea
                        value={testInput}
                        onChange={(e) => setTestInput(e.target.value)}
                        rows={6}
                        className="w-full bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                        placeholder="Enter your test prompt here..."
                      />
                      
                      <button
                        onClick={handleTestModel}
                        disabled={!testInput.trim() || isTestingModel}
                        className="mt-4 w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg px-6 py-3 font-medium hover:from-violet-600 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isTestingModel ? (
                          <>
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Test Model
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-3">Output</label>
                      <div className="w-full h-40 bg-zinc-900/70 border border-zinc-700 rounded-lg px-4 py-3 text-white overflow-y-auto">
                        {isTestingModel ? (
                          <div className="flex items-center space-x-2 text-zinc-400">
                            <Loader2 className="animate-spin h-4 w-4" />
                            <span>Generating response...</span>
                          </div>
                        ) : testOutput ? (
                          <p className="text-white leading-relaxed">{testOutput}</p>
                        ) : (
                          <p className="text-zinc-500">Response will appear here...</p>
                        )}
                      </div>
                      
                      {testOutput && (
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4 text-zinc-400">
                            <span>Response time: 0.8s</span>
                            <span>Tokens: 156</span>
                          </div>
                          <button className="text-violet-400 hover:text-violet-300 flex items-center">
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Examples */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Examples</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      'How can I reset my password?',
                      'What are your business hours?',
                      'I need help with my recent order'
                    ].map((example, i) => (
                      <button
                        key={i}
                        onClick={() => setTestInput(example)}
                        className="text-left p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
                      >
                        <p className="text-white text-sm">{example}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'api' && (
              <div className="space-y-6">
                {/* API Endpoint */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">API Endpoint</h3>
                  
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-400">POST</span>
                      <button className="text-violet-400 hover:text-violet-300 flex items-center">
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </button>
                    </div>
                    <p className="text-zinc-300">https://api.zentoric.ai/v1/models/{modelData.id}/inference</p>
                  </div>
                </div>

                {/* Code Examples */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Code Examples</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                        <span className="text-sm text-zinc-400">Python</span>
                        <button className="text-violet-400 hover:text-violet-300 flex items-center text-sm">
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 text-sm text-zinc-300 overflow-x-auto">
{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'prompt': 'Hello, how can I help you?',
    'max_tokens': 150,
    'temperature': 0.7
}

response = requests.post(
    'https://api.zentoric.ai/v1/models/${modelData.id}/inference',
    headers=headers,
    json=data
)

print(response.json())`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Quick Actions */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-4 py-3 font-medium hover:bg-zinc-800/80 transition-all text-left flex items-center">
                    <Terminal className="h-4 w-4 mr-3 text-violet-400" />
                    View Logs
                  </button>
                  
                  <button className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-4 py-3 font-medium hover:bg-zinc-800/80 transition-all text-left flex items-center">
                    <Key className="h-4 w-4 mr-3 text-blue-400" />
                    Generate API Key
                  </button>
                  
                  <button className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-4 py-3 font-medium hover:bg-zinc-800/80 transition-all text-left flex items-center">
                    <Download className="h-4 w-4 mr-3 text-emerald-400" />
                    Export Model
                  </button>
                  
                  <button className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-lg px-4 py-3 font-medium hover:bg-zinc-800/80 transition-all text-left flex items-center">
                    <RotateCcw className="h-4 w-4 mr-3 text-yellow-400" />
                    Retrain Model
                  </button>
                </div>
              </div>

              {/* Model Health */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Model Health</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Server Status</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400 text-sm">Healthy</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Memory Usage</span>
                    <span className="text-white">68%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">CPU Usage</span>
                    <span className="text-white">23%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Error Rate</span>
                    <span className="text-emerald-400">0.3%</span>
                  </div>
                </div>
              </div>

              {/* Usage Limits */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Usage This Month</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400">API Calls</span>
                      <span className="text-white">8.9K / 10K</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400">Compute Hours</span>
                      <span className="text-white">156 / 200</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-zinc-800">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Estimated Cost</span>
                      <span className="text-violet-400 font-semibold">$24.50</span>
                    </div>
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

export default ModelDetailsPage;