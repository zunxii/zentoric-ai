export interface ApiKey {
  id: number;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: 'active' | 'revoked';
}

export interface UsageData {
  name: string;
  value: number;
}