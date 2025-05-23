'use client'

import React, { useState } from 'react';
import { Key, RefreshCcw, Plus, Eye, EyeOff, Copy, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ApiKeyOverviewProps {
  apiKey: string;
  status: 'active' | 'inactive';
  createdDate: string;
  lastUsed: string;
}

const ApiKeyOverview: React.FC<ApiKeyOverviewProps> = ({
  apiKey,
  status,
  createdDate,
  lastUsed
}) => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };
  
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Key className="h-5 w-5 text-violet-400 mr-2" />
            Primary API Key
          </h2>
          
          <div className="flex items-center mb-6">
            <div className="bg-zinc-950 rounded-lg flex-1 p-3 flex items-center border border-zinc-800">
              <div className="flex-1 font-mono text-sm text-zinc-300 overflow-hidden">
                {showApiKey ? apiKey : '•'.repeat(apiKey.length)}
              </div>
              <button 
                onClick={() => setShowApiKey(!showApiKey)} 
                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 transition-colors"
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button 
                onClick={copyToClipboard} 
                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 transition-colors ml-1"
              >
                {copiedKey ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Status</p>
              <div className="flex items-center">
                <span className={`inline-block h-2 w-2 rounded-full mr-2 ${
                  status === 'active' ? 'bg-emerald-500' : 'bg-red-500'
                }`}></span>
                <span className={`text-sm font-medium ${
                  status === 'active' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            
            <div className="bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Created</p>
              <p className="text-sm text-white">{createdDate}</p>
            </div>
            
            <div className="bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Last Used</p>
              <p className="text-sm text-white">{lastUsed}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center border-l border-zinc-800 pl-8 space-y-4 lg:flex">
          <button className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-2.5 text-white text-sm font-medium flex items-center">
            <RefreshCcw className="h-4 w-4 mr-2 text-violet-400" />
            Rotate API Key
          </button>
          
          <Link href="/dashboard/api-management/keys">
            <button className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-2.5 text-white text-sm font-medium flex items-center">
              <Plus className="h-4 w-4 mr-2 text-violet-400" />
              Create New Key
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyOverview;