'use client'

import React from 'react';
import { AlertCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const ApiDocumentationBanner: React.FC = () => {
  return (
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
  );
};

export default ApiDocumentationBanner;