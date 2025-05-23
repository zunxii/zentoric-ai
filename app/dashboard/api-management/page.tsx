'use client'

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ApiKeyOverview from '@/components/api-management/ApiKeyOverview';
import ApiUsageChart from '@/components/api-management/ApiUsageChart';
import ApiKeyTable from '@/components/api-management/ApiKeyTable';
import ApiDocumentationBanner from '@/components/api-management/ApiDocumentationBanner';
import { ApiKey, UsageData } from '@/types/api';

const ApiManagement = () => {
  // Mock data - in real app, this would come from props or API calls
  const dummyApiKey = "sk_zen_LxP2aB9kTr7vNcZ4mD8fY3eS6tQg5hJ";
  
  const apiUsageData: UsageData[] = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 19000 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 28000 },
    { name: 'May', value: 35000 },
    { name: 'Jun', value: 42000 },
    { name: 'Jul', value: 38000 },
  ];
  
  const apiKeys: ApiKey[] = [
    { 
      id: 1, 
      name: 'Production API Key', 
      key: dummyApiKey, 
      created: 'May 10, 2025', 
      lastUsed: '2 hours ago', 
      status: 'active' 
    },
    { 
      id: 2, 
      name: 'Development API Key', 
      key: 'sk_zen_Jk7dHg3bF9vR5sT1xL6mN2pQ8zE4wC', 
      created: 'Apr 15, 2025', 
      lastUsed: '5 days ago', 
      status: 'active' 
    },
    { 
      id: 3, 
      name: 'Testing API Key', 
      key: 'sk_zen_Rd2tY7qA3xB9vC5mP6sG1fH8jK4lZ', 
      created: 'Mar 22, 2025', 
      lastUsed: '2 weeks ago', 
      status: 'revoked' 
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-10">
      <PageHeader 
        title="API Management"
        description="Manage your API keys and monitor usage for model deployments"
      />
      
      <ApiKeyOverview
        apiKey={dummyApiKey}
        status="active"
        createdDate="May 10, 2025"
        lastUsed="2 hours ago"
      />
      
      <ApiUsageChart
        data={apiUsageData}
        totalCalls={189432}
        quota={500000}
      />
      
      <ApiKeyTable apiKeys={apiKeys} />
      
      <ApiDocumentationBanner />
    </div>
  );
};

export default ApiManagement;