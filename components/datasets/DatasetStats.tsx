'use client'

import React from 'react';
import { Database, FileText, BarChart2 } from 'lucide-react';

interface DatasetStatsProps {
  stats: {
    totalDatasets: number;
    totalRecords: number;
    storageUsed: string;
    storageLimit: string;
    modelsTrained: number;
    datasetsInUse: number;
  };
}

const DatasetStats: React.FC<DatasetStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center mb-2">
          <Database className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">Total Datasets</h3>
        </div>
        <p className="text-3xl font-bold text-white">{stats.totalDatasets}</p>
        <p className="text-sm text-zinc-400 mt-2">{stats.totalRecords.toLocaleString()} total records</p>
      </div>
      
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center mb-2">
          <FileText className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">Storage Used</h3>
        </div>
        <p className="text-3xl font-bold text-white">{stats.storageUsed}</p>
        <p className="text-sm text-zinc-400 mt-2">{stats.storageLimit} limit on current plan</p>
      </div>
      
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center mb-2">
          <BarChart2 className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">Models Trained</h3>
        </div>
        <p className="text-3xl font-bold text-white">{stats.modelsTrained}</p>
        <p className="text-sm text-zinc-400 mt-2">{stats.datasetsInUse} datasets currently in use</p>
      </div>
    </div>
  );
};

export default DatasetStats;