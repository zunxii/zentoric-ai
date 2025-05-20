'use client'

import React, { useState } from 'react';
import { 
  Key, 
  ShieldCheck, 
  Clock, 
  BarChart2, 
  RefreshCcw, 
  Copy, 
  Eye, 
  EyeOff,
  Plus,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const ApiManagement = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  
  const dummyApiKey = "sk_zen_LxP2aB9kTr7vNcZ4mD8fY3eS6tQg5hJ";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(dummyApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };
  
  const apiUsageData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 19000 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 28000 },
    { name: 'May', value: 35000 },
    { name: 'Jun', value: 42000 },
    { name: 'Jul', value: 38000 },
  ];
  
  const apiKeys = [
    { id: 1, name: 'Production API Key', key: dummyApiKey, created: 'May 10, 2025', lastUsed: '2 hours ago', status: 'active' },
    { id: 2, name: 'Development API Key', key: 'sk_zen_Jk7dHg3bF9vR5sT1xL6mN2pQ8zE4wC', created: 'Apr 15, 2025', lastUsed: '5 days ago', status: 'active' },
    { id: 3, name: 'Testing API Key', key: 'sk_zen_Rd2tY7qA3xB9vC5mP6sG1fH8jK4lZ', created: 'Mar 22, 2025', lastUsed: '2 weeks ago', status: 'revoked' },
  ];
  
  const maxApiValue = Math.max(...apiUsageData.map(item => item.value));
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">API Management</h1>
        <p className="text-zinc-400">Manage your API keys and monitor usage for model deployments</p>
      </div>
      
      {/* Key overview card */}
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
                  {showApiKey ? dummyApiKey : '•'.repeat(dummyApiKey.length)}
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
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                  <span className="text-emerald-400 text-sm font-medium">Active</span>
                </div>
              </div>
              
              <div className="bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50">
                <p className="text-xs text-zinc-500 mb-1">Created</p>
                <p className="text-sm text-white">May 10, 2025</p>
              </div>
              
              <div className="bg-zinc-950/60 rounded-lg p-4 border border-zinc-800/50">
                <p className="text-xs text-zinc-500 mb-1">Last Used</p>
                <p className="text-sm text-white">2 hours ago</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center border-l border-zinc-800 pl-8 space-y-4 hidden lg:flex">
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
      
      {/* API Usage Chart */}
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-white flex items-center">
            <BarChart2 className="h-5 w-5 text-violet-400 mr-2" />
            API Usage
          </h2>
          
          <div className="flex items-center space-x-2">
            <select className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-3 py-2 focus:ring-violet-500 focus:border-violet-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        
        <div className="h-64">
          <div className="flex h-full items-end">
            {apiUsageData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full max-w-[40px] bg-gradient-to-t from-violet-600/80 to-fuchsia-600/80 rounded-t-sm hover:from-violet-500 hover:to-fuchsia-500 transition-colors"
                  style={{ height: `${(data.value / maxApiValue) * 100}%` }}
                ></div>
                <div className="text-xs text-zinc-500 mt-2">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
          <div>
            <p className="text-xs text-zinc-500">Total API Calls This Month</p>
            <p className="text-xl font-semibold text-white">189,432</p>
          </div>
          
          <div>
            <p className="text-xs text-zinc-500">API Call Quota</p>
            <p className="text-xl font-semibold text-white">500,000</p>
          </div>
          
          <Link href="/dashboard/settings/billing">
            <button className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm flex items-center">
              Upgrade Plan
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </button>
          </Link>
        </div>
      </div>
      
      {/* All API Keys */}
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-white flex items-center">
            <ShieldCheck className="h-5 w-5 text-violet-400 mr-2" />
            All API Keys
          </h2>
          
          <Link href="/dashboard/api-management/keys">
            <button className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm flex items-center">
              <Plus className="h-3.5 w-3.5 mr-1.5" />
              New Key
            </button>
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left text-xs text-zinc-500 font-medium pb-3 pl-4">Name</th>
                <th className="text-left text-xs text-zinc-500 font-medium pb-3">Created</th>
                <th className="text-left text-xs text-zinc-500 font-medium pb-3">Last Used</th>
                <th className="text-left text-xs text-zinc-500 font-medium pb-3">Status</th>
                <th className="text-right text-xs text-zinc-500 font-medium pb-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((apiKey) => (
                <tr key={apiKey.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="py-4 pl-4">
                    <div className="text-sm font-medium text-white">{apiKey.name}</div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 text-zinc-500 mr-2" />
                      <span className="text-sm text-zinc-400">{apiKey.created}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-zinc-400">{apiKey.lastUsed}</span>
                  </td>
                  <td className="py-4">
                    {apiKey.status === 'active' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5"></span>
                        Revoked
                      </span>
                    )}
                  </td>
                  <td className="py-4 pr-4 text-right">
                    <Link href={`/dashboard/api-management/keys/${apiKey.id}`}>
                      <button className="text-zinc-400 hover:text-white text-sm flex items-center ml-auto">
                        View
                        <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* API Documentation Link */}
      <div className="mt-8 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border border-violet-800/20 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(124,58,237,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-violet-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Need help integrating?</h3>
            </div>
            <p className="text-zinc-400 max-w-2xl">
              Check our comprehensive API documentation to learn how to integrate your trained models into your applications.
            </p>
          </div>
          
          <Link href="/dashboard/api-management/docs">
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg px-5 py-2.5 flex items-center whitespace-nowrap">
              View API Docs
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiManagement;