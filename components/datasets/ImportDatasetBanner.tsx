'use client'

import React from 'react';
import { Upload, ArrowUpRight, Download } from 'lucide-react';
import Link from 'next/link';

interface ImportDatasetBannerProps {
  onDownloadTemplate: () => void;
}

const ImportDatasetBanner: React.FC<ImportDatasetBannerProps> = ({ onDownloadTemplate }) => {
  return (
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
            onClick={onDownloadTemplate}
          >
            <Download className="h-4 w-4 mr-2 text-violet-400" />
            <span>Download Template</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportDatasetBanner;