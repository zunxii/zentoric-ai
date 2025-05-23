'use client'

import React from 'react';
import { BarChart2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface UsageData {
  name: string;
  value: number;
}

interface ApiUsageChartProps {
  data: UsageData[];
  totalCalls: number;
  quota: number;
}

const ApiUsageChart: React.FC<ApiUsageChartProps> = ({
  data,
  totalCalls,
  quota
}) => {
  const maxApiValue = Math.max(...data.map(item => item.value));
  
  return (
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
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full max-w-[40px] bg-gradient-to-t from-violet-600/80 to-fuchsia-600/80 rounded-t-sm hover:from-violet-500 hover:to-fuchsia-500 transition-colors"
                style={{ height: `${(item.value / maxApiValue) * 100}%` }}
              ></div>
              <div className="text-xs text-zinc-500 mt-2">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
        <div>
          <p className="text-xs text-zinc-500">Total API Calls This Month</p>
          <p className="text-xl font-semibold text-white">{totalCalls.toLocaleString()}</p>
        </div>
        
        <div>
          <p className="text-xs text-zinc-500">API Call Quota</p>
          <p className="text-xl font-semibold text-white">{quota.toLocaleString()}</p>
        </div>
        
        <Link href="/dashboard/settings/billing">
          <button className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm flex items-center">
            Upgrade Plan
            <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ApiUsageChart;