'use client'

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpDown, 
  Calendar, 
  FileSpreadsheet, 
  ExternalLink, 
  Database, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { Dataset } from '@/types/dataset';

interface DatasetTableProps {
  datasets: Dataset[];
  onClearFilters: () => void;
}

const DatasetStatusBadge: React.FC<{ status: Dataset['status'] }> = ({ status }) => {
  const statusConfig: Record<string, {
    icon: React.ComponentType<any>;
    className: string;
    label: string;
    animate?: boolean;
  }> = {
    ready: {
      icon: CheckCircle2,
      className: 'bg-emerald-900/30 text-emerald-400',
      label: 'Ready'
    },
    processing: {
      icon: Clock,
      className: 'bg-blue-900/30 text-blue-400',
      label: 'Processing',
      animate: true
    },
    error: {
      icon: AlertTriangle,
      className: 'bg-red-900/30 text-red-400',
      label: 'Error'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      <Icon className={`h-3 w-3 mr-1 ${config.animate ? 'animate-spin' : ''}`} />
      {config.label}
    </span>
  );
};

const DatasetSourceIcon: React.FC<{ source: Dataset['source'] }> = ({ source }) => {
  const sourceConfig = {
    'CSV Upload': { icon: FileSpreadsheet, className: 'text-emerald-400' },
    'API Import': { icon: ExternalLink, className: 'text-blue-400' },
    'Database Connection': { icon: Database, className: 'text-orange-400' }
  };

  const config = sourceConfig[source];
  const Icon = config.icon;

  return <Icon className={`h-3.5 w-3.5 ${config.className} mr-2`} />;
};

const DatasetTable: React.FC<DatasetTableProps> = ({ datasets, onClearFilters }) => {
  if (datasets.length === 0) {
    return (
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white">Your Datasets</h2>
        </div>
        <div className="py-10 text-center text-zinc-400">
          <div className="flex flex-col items-center">
            <FileText className="h-10 w-10 mb-3 text-zinc-600" />
            <p>No datasets match your search criteria</p>
            <button 
              className="text-violet-400 hover:text-violet-300 mt-2 text-sm"
              onClick={onClearFilters}
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
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
            {datasets.map((dataset) => (
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
                    <DatasetSourceIcon source={dataset.source} />
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
                  <DatasetStatusBadge status={dataset.status} />
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatasetTable;
