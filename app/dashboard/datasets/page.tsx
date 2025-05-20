'use client'

import React, { useState } from 'react';
import { 
  Database, 
  Upload, 
  FileText, 
  BarChart2, 
  Plus, 
  Search,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  Clock,
  Calendar,
  FileSpreadsheet,
  Tag,
  ArrowUpDown,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  X,
  ArrowUpRight,
  Download
} from 'lucide-react';
import Link from 'next/link';

const Datasets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showImportModal, setShowImportModal] = useState(false);
  
  const datasets = [
    { 
      id: 'ds-001', 
      name: 'Customer Service Conversations', 
      source: 'CSV Upload', 
      records: 15840, 
      size: '28.4 MB', 
      created: 'May 15, 2025', 
      tags: ['production', 'cleaned'], 
      status: 'ready' 
    },
    { 
      id: 'ds-002', 
      name: 'Product Reviews - Electronics', 
      source: 'API Import', 
      records: 7620, 
      size: '14.2 MB', 
      created: 'May 12, 2025', 
      tags: ['production'], 
      status: 'ready' 
    },
    { 
      id: 'ds-003', 
      name: 'Sales Transcripts Q1 2025', 
      source: 'CSV Upload', 
      records: 3200, 
      size: '8.7 MB', 
      created: 'May 8, 2025', 
      tags: ['sales', 'annotated'], 
      status: 'processing' 
    },
    { 
      id: 'ds-004', 
      name: 'Support Ticket Summaries', 
      source: 'Database Connection', 
      records: 12500, 
      size: '18.9 MB', 
      created: 'May 5, 2025', 
      tags: ['support', 'cleaned'], 
      status: 'ready' 
    },
    { 
      id: 'ds-005', 
      name: 'Medical Transcription Data', 
      source: 'CSV Upload', 
      records: 5300, 
      size: '42.1 MB', 
      created: 'April 28, 2025', 
      tags: ['healthcare', 'sensitive'], 
      status: 'error' 
    }
  ];
  
  const filteredDatasets = datasets.filter(dataset => {
    // Filter by search query
    const matchesSearch = dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dataset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by status
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'ready' && dataset.status === 'ready') ||
                         (selectedFilter === 'processing' && dataset.status === 'processing') ||
                         (selectedFilter === 'error' && dataset.status === 'error');
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Datasets</h1>
        <p className="text-zinc-400">Manage your training and validation datasets</p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center mb-2">
            <Database className="h-5 w-5 text-violet-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Total Datasets</h3>
          </div>
          <p className="text-3xl font-bold text-white">5</p>
          <p className="text-sm text-zinc-400 mt-2">44,460 total records</p>
        </div>
        
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center mb-2">
            <FileText className="h-5 w-5 text-violet-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Storage Used</h3>
          </div>
          <p className="text-3xl font-bold text-white">112.3 MB</p>
          <p className="text-sm text-zinc-400 mt-2">500 MB limit on current plan</p>
        </div>
        
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center mb-2">
            <BarChart2 className="h-5 w-5 text-violet-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Models Trained</h3>
          </div>
          <p className="text-3xl font-bold text-white">3</p>
          <p className="text-sm text-zinc-400 mt-2">2 datasets currently in use</p>
        </div>
      </div>
      
      {/* Actions and filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Search datasets by name or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <select
              className="appearance-none bg-zinc-900/80 border border-zinc-800 text-white rounded-lg py-2.5 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Datasets</option>
              <option value="ready">Ready</option>
              <option value="processing">Processing</option>
              <option value="error">Error</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
              <Filter className="h-4 w-4" />
            </div>
          </div>
          
          <button className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
            <SlidersHorizontal className="h-5 w-5" />
          </button>
          
          <Link href="/dashboard/datasets/create">
            <button className="bg-violet-600 hover:bg-violet-700 rounded-lg px-4 py-2.5 text-white font-medium flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              New Dataset
            </button>
          </Link>
        </div>
      </div>
      
      {/* Datasets list */}
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white">Your Datasets</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/30">
                <th className="text-left text-xs text-zinc-500 font-medium py-3 pl-6">
                  <div className="flex items-center">
                    Name
                    <ArrowUpDown className="h-3 w-3 ml-1" />
                  </div>
                </th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Records</th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Size</th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Source</th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Created</th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Tags</th>
                <th className="text-left text-xs text-zinc-500 font-medium py-3">Status</th>
                <th className="text-right text-xs text-zinc-500 font-medium py-3 pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDatasets.length > 0 ? (
                filteredDatasets.map((dataset) => (
                  <tr key={dataset.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                    <td className="py-4 pl-6">
                      <Link href={`/dashboard/datasets/${dataset.id}`}>
                        <div className="text-sm font-medium text-white hover:text-violet-400 transition-colors">
                          {dataset.name}
                        </div>
                      </Link>
                    </td>
                    <td className="py-4">
                      <span className="text-sm text-zinc-400">{dataset.records.toLocaleString()}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-sm text-zinc-400">{dataset.size}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        {dataset.source === 'CSV Upload' && <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-400 mr-2" />}
                        {dataset.source === 'API Import' && <ExternalLink className="h-3.5 w-3.5 text-blue-400 mr-2" />}
                        {dataset.source === 'Database Connection' && <Database className="h-3.5 w-3.5 text-orange-400 mr-2" />}
                        <span className="text-sm text-zinc-400">{dataset.source}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 text-zinc-500 mr-2" />
                        <span className="text-sm text-zinc-400">{dataset.created}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-1">
                        {dataset.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4">
                      {dataset.status === 'ready' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-400">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Ready
                        </span>
                      )}
                      {dataset.status === 'processing' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400">
                          <Clock className="h-3 w-3 mr-1 animate-spin" />
                          Processing
                        </span>
                      )}
                      {dataset.status === 'error' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-400">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Error
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-6 text-right">
                      <Link href={`/dashboard/datasets/${dataset.id}`}>
                        <button className="text-zinc-400 hover:text-white text-sm flex items-center ml-auto">
                          View
                          <ChevronRight className="h-3.5 w-3.5 ml-1" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-zinc-400">
                    <div className="flex flex-col items-center">
                      <FileText className="h-10 w-10 mb-3 text-zinc-600" />
                      <p>No datasets match your search criteria</p>
                      <button 
                        className="text-violet-400 hover:text-violet-300 mt-2 text-sm"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedFilter('all');
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Import dataset CTA */}
      <div className="mt-8 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border border-violet-800/20 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(124,58,237,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Upload className="h-5 w-5 text-violet-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Ready to import your data?</h3>
            </div>
            <p className="text-zinc-400 max-w-2xl">
              Import your data from CSV files, APIs, or database connections to start training your AI models quickly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard/datasets/import">
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg px-5 py-2.5 flex items-center whitespace-nowrap">
                Import Dataset
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </Link>
            <button 
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-white rounded-lg px-5 py-2.5 font-medium hover:bg-zinc-800/80 transition-all flex items-center justify-center"
              onClick={() => setShowImportModal(true)}
            >
              <Download className="h-4 w-4 mr-2 text-violet-400" />
              <span>Download Template</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Download Dataset Template</h3>
              <button 
                className="text-zinc-400 hover:text-white"
                onClick={() => setShowImportModal(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-zinc-400 mb-6">
              Choose a template format to help you structure your data for optimal model training.
            </p>
            
            <div className="space-y-4">
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 hover:border-violet-600/50 cursor-pointer transition-colors">
                <div className="flex items-center">
                  <FileSpreadsheet className="h-6 w-6 text-emerald-400 mr-3" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Text Classification Template</h4>
                    <p className="text-xs text-zinc-500">For sentiment analysis and category classification</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 hover:border-violet-600/50 cursor-pointer transition-colors">
                <div className="flex items-center">
                  <FileSpreadsheet className="h-6 w-6 text-blue-400 mr-3" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Q&A Dataset Template</h4>
                    <p className="text-xs text-zinc-500">For training question answering models</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 hover:border-violet-600/50 cursor-pointer transition-colors">
                <div className="flex items-center">
                  <FileSpreadsheet className="h-6 w-6 text-amber-400 mr-3" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Conversational Dataset Template</h4>
                    <p className="text-xs text-zinc-500">For training chatbots and assistants</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
              <button 
                className="text-zinc-400 hover:text-white text-sm mr-4"
                onClick={() => setShowImportModal(false)}
              >
                Cancel
              </button>
              <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Download Selected Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datasets;