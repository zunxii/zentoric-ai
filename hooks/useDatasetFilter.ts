'use client'

import { useState, useMemo } from 'react';
import { Dataset } from '@/types/dataset';

export const useDatasetFilters = (datasets: Dataset[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredDatasets = useMemo(() => {
    return datasets.filter(dataset => {
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
  }, [datasets, searchQuery, selectedFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedFilter('all');
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
    filteredDatasets,
    clearFilters
  };
};