'use client'

import React from 'react';
import { ShieldCheck, Plus, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ApiKey {
  id: number;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: 'active' | 'revoked';
}

interface ApiKeyTableProps {
  apiKeys: ApiKey[];
}

const ApiKeyTable: React.FC<ApiKeyTableProps> = ({ apiKeys }) => {
  return (
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
  );
};

export default ApiKeyTable;