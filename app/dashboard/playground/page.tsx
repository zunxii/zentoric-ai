'use client'

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  RefreshCw, 
  Settings, 
  Sliders, 
  Copy, 
  Check, 
  ChevronDown, 
  MessageSquare, 
  MoveVertical,
  AlertCircle,
  BookOpen,
  Save,
  Clipboard,
  User,
  Bot,
  Sparkles,
  Plus,
  History
} from 'lucide-react';

interface PlaygroundPageProps {}

const PlaygroundPage: React.FC<PlaygroundPageProps> = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedModel, setSelectedModel] = useState('Custom-Trained Model');
  const [copied, setCopied] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Mock function to simulate response generation
  const generateResponse = () => {
    if (!prompt.trim()) return;
    
    const newUserMessage = { role: 'user' as const, content: prompt };
    setMessages([...messages, newUserMessage]);
    setPrompt('');
    setIsGenerating(true);
    
    // Simulate API response delay
    setTimeout(() => {
      const mockResponse = { 
        role: 'assistant' as const, 
        content: `This is a simulated response to your prompt: "${prompt}". Your custom-trained model would provide an actual helpful response here based on your training data and parameters.`
      };
      setMessages(prev => [...prev, mockResponse]);
      setIsGenerating(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateResponse();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearConversation = () => {
    setMessages([]);
  };
  
  return (
    <div className="h-screen flex bg-zinc-950 text-white">
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-64 border-r border-zinc-800 flex flex-col bg-zinc-900/60">
          <div className="p-4 border-b border-zinc-800">
            <button 
              onClick={clearConversation}
              className="w-full py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20"
            >
              <Plus className="h-4 w-4" />
              New Chat
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="text-xs uppercase text-zinc-500 font-semibold pl-2 pb-1">History</div>
            {[
              'Product API Integration',
              'Customer Service Scripts',
              'Onboarding Sequence'
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-center rounded-lg px-3 py-2 hover:bg-zinc-800 cursor-pointer group transition-colors"
              >
                <History className="h-4 w-4 text-zinc-500 mr-2 flex-shrink-0" />
                <span className="text-zinc-300 text-sm truncate">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-zinc-800">
            <div className="bg-zinc-800/60 rounded-lg p-3">
              <div className="flex items-center text-sm mb-1">
                <Sparkles className="h-4 w-4 text-violet-400 mr-2" />
                <span className="font-medium">Using Custom Model</span>
              </div>
              <p className="text-xs text-zinc-400">Trained on your support data</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-zinc-900/60 border-b border-zinc-800 px-6 py-3">
          <div className="flex items-center">
            <button 
              onClick={() => setShowSidebar(!showSidebar)} 
              className="p-2 hover:bg-zinc-800 rounded-md mr-2"
            >
              <MoveVertical className="h-5 w-5 text-zinc-400" />
            </button>
            <h1 className="text-lg font-medium">AI Playground</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-zinc-800 rounded-md relative"
            >
              <Settings className="h-5 w-5 text-zinc-400" />
              {showSettings && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-50 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Model Settings</h3>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Active Model</label>
                      <select 
                        className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                      >
                        <option>Custom-Trained Model</option>
                        <option>LLaMA 3 (Base)</option>
                        <option>Mistral (Base)</option>
                      </select>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-zinc-400">Temperature</label>
                        <span className="text-sm text-zinc-400">0.7</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value="70" 
                        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-zinc-400">Max Length</label>
                        <span className="text-sm text-zinc-400">2048 tokens</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value="60" 
                        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium text-sm transition-colors">
                        Apply Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </button>
            
            <button className="p-2 hover:bg-zinc-800 rounded-md">
              <AlertCircle className="h-5 w-5 text-zinc-400" />
            </button>
            
            <button className="p-2 hover:bg-zinc-800 rounded-md">
              <BookOpen className="h-5 w-5 text-zinc-400" />
            </button>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="h-20 w-20 rounded-full bg-violet-500/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-10 w-10 text-violet-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Test Your AI Model</h3>
              <p className="text-zinc-400 max-w-md mb-8">
                This playground allows you to interact with your trained AI model in real-time. Try asking questions or giving prompts related to your training data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
                <div className="border border-zinc-800 bg-zinc-900/60 rounded-lg p-4 hover:border-violet-800/30 transition-all cursor-pointer">
                  <h4 className="font-medium mb-1">Provide customer support</h4>
                  <p className="text-sm text-zinc-400">The customer needs help with resetting their password</p>
                </div>
                <div className="border border-zinc-800 bg-zinc-900/60 rounded-lg p-4 hover:border-violet-800/30 transition-all cursor-pointer">
                  <h4 className="font-medium mb-1">Explain product features</h4>
                  <p className="text-sm text-zinc-400">What are the key benefits of our Pro subscription?</p>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.role === 'assistant' ? 'bg-zinc-900/60' : ''} p-4 rounded-lg`}
              >
                <div className={`flex-shrink-0 mr-4 h-8 w-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-violet-500/20 text-violet-300' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {message.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium mb-1">
                    {message.role === 'user' ? 'You' : selectedModel}
                  </div>
                  <div className="text-zinc-300">
                    {message.content}
                  </div>
                  {message.role === 'assistant' && (
                    <div className="flex mt-4 space-x-2">
                      <button 
                        onClick={() => copyToClipboard(message.content)}
                        className="text-zinc-500 hover:text-zinc-300 flex items-center text-xs"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                      <button className="text-zinc-500 hover:text-zinc-300 flex items-center text-xs">
                        <Save className="h-3.5 w-3.5 mr-1" />
                        Save
                      </button>
                      <button className="text-zinc-500 hover:text-zinc-300 flex items-center text-xs">
                        <Clipboard className="h-3.5 w-3.5 mr-1" />
                        Add to Dataset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          
          {isGenerating && (
            <div className="flex bg-zinc-900/60 p-4 rounded-lg">
              <div className="flex-shrink-0 mr-4 h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">{selectedModel}</div>
                <div className="flex items-center text-zinc-400">
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating response...
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/60">
          <div className="relative rounded-lg border border-zinc-700 bg-zinc-800 focus-within:border-violet-600 transition-colors">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Send a message..."
              rows={1}
              className="w-full bg-transparent resize-none focus:outline-none text-white p-4 pr-14 max-h-36"
              style={{ minHeight: '56px' }}
            />
            <button
              onClick={generateResponse}
              disabled={!prompt.trim() || isGenerating}
              className={`absolute bottom-3 right-3 p-2 rounded-md ${
                prompt.trim() && !isGenerating
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
              } transition-colors`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-1 text-xs text-zinc-500">
            <div className="flex items-center">
              <Sliders className="h-3.5 w-3.5 mr-1" />
              <span>Model: {selectedModel}</span>
            </div>
            <div>Messages will not be saved to improve the model</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;