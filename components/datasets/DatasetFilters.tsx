'use client'

import React from 'react';
import { Search, Filter, SlidersHorizontal, Plus } from 'lucide-react';
import Link from 'next/link';

interface DatasetFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  filterOptions: Array<{ value: string; label: string }>;
}

const DatasetFilters: React.FC<DatasetFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  filterOptions
}) => {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex gap-3">
        <div className="relative">
          <select
            className="appearance-none bg-zinc-900/80 border border-zinc-800 text-white rounded-lg py-2.5 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
  );
};

export default DatasetFilters;