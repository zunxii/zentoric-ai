export interface Dataset {
  id: string;
  name: string;
  source: 'CSV Upload' | 'API Import' | 'Database Connection';
  records: number;
  size: string;
  created: string;
  tags: string[];
  status: 'ready' | 'processing' | 'error';
}

export interface DatasetStats {
  totalDatasets: number;
  totalRecords: number;
  storageUsed: string;
  storageLimit: string;
  modelsTrained: number;
  datasetsInUse: number;
}

export interface TemplateOption {
  id: string;
  name: string;
  description: string;
  icon: 'emerald' | 'blue' | 'amber';
}