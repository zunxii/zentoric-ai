'use client'

import React, { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import DatasetStats from '@/components/datasets/DatasetStats';
import DatasetFilters from '@/components/datasets/DatasetFilters';
import DatasetTable from '@/components/datasets/DatasetTable';
import ImportDatasetBanner from '@/components/datasets/ImportDatasetBanner';
import TemplateDownloadModal from '@/components/datasets/TemplateDownloadModal';
import { useDatasetFilters } from '@/hooks/useDatasetFilter';
import { Dataset, DatasetStats as StatsType, TemplateOption } from '@/types/dataset';

const Datasets = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  
  // Mock data - in real app, this would come from props or API calls
  const datasets: Dataset[] = [
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

  const stats: StatsType = {
    totalDatasets: 5,
    totalRecords: 44460,
    storageUsed: '112.3 MB',
    storageLimit: '500 MB',
    modelsTrained: 3,
    datasetsInUse: 2
  };

  const filterOptions = [
    { value: 'all', label: 'All Datasets' },
    { value: 'ready', label: 'Ready' },
    { value: 'processing', label: 'Processing' },
    { value: 'error', label: 'Error' }
  ];

  const templateOptions: TemplateOption[] = [
    {
      id: 'text-classification',
      name: 'Text Classification Template',
      description: 'For sentiment analysis and category classification',
      icon: 'emerald'
    },
    {
      id: 'qa-dataset',
      name: 'Q&A Dataset Template',
      description: 'For training question answering models',
      icon: 'blue'
    },
    {
      id: 'conversational',
      name: 'Conversational Dataset Template',
      description: 'For training chatbots and assistants',
      icon: 'amber'
    }
  ];

  const {
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
    filteredDatasets,
    clearFilters
  } = useDatasetFilters(datasets);

  const handleDownloadTemplate = (templateId?: string) => {
    console.log('Downloading template:', templateId || 'default');
    setShowImportModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <PageHeader 
        title="Datasets"
        description="Manage your training and validation datasets"
      />
      
      <DatasetStats stats={stats} />
      
      <DatasetFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        filterOptions={filterOptions}
      />
      
      <DatasetTable 
        datasets={filteredDatasets}
        onClearFilters={clearFilters}
      />
      
      <ImportDatasetBanner 
        onDownloadTemplate={() => setShowImportModal(true)}
      />
      
      <TemplateDownloadModal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        templates={templateOptions}
        onDownloadTemplate={handleDownloadTemplate}
      />
    </div>
  );
};

export default Datasets;