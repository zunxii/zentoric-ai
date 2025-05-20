'use client'

import { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  CreditCard, 
  Users, 
  ChevronRight, 
  Bell, 
  Shield, 
  Key, 
  Globe, 
  Sparkles 
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Settings categories with their respective pages and icons
  const settingsCategories = [
    {
      title: 'Account',
      description: 'Manage your profile, preferences and account security',
      items: [
        {
          icon: User,
          name: 'Profile Settings',
          description: 'Update your personal information and preferences',
          link: '/dashboard/settings/profile'
        },
        {
          icon: Bell,
          name: 'Notifications',
          description: 'Control when and how you want to be notified',
          link: '/dashboard/settings/profile?tab=notifications'
        },
        {
          icon: Shield,
          name: 'Security',
          description: 'Configure password, two-factor authentication and more',
          link: '/dashboard/settings/profile?tab=security'
        }
      ]
    },
    {
      title: 'Billing',
      description: 'Manage your billing information and subscription plans',
      items: [
        {
          icon: CreditCard,
          name: 'Payment Methods',
          description: 'Add or update your payment details',
          link: '/dashboard/settings/billing'
        },
        {
          icon: Sparkles,
          name: 'Subscription',
          description: 'Manage your plan and usage limits',
          link: '/dashboard/settings/billing?tab=subscription'
        }
      ]
    },
    {
      title: 'Organization',
      description: 'Manage your team and API access',
      items: [
        {
          icon: Users,
          name: 'Team Members',
          description: 'Invite new members and manage their access',
          link: '/dashboard/settings/team'
        },
        {
          icon: Key,
          name: 'API Keys',
          description: 'Create and manage access keys for your applications',
          link: '/dashboard/api-management/keys'
        },
        {
          icon: Globe,
          name: 'Custom Domain',
          description: 'Configure a custom domain for your deployments',
          link: '/dashboard/settings/team?tab=domains'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-zinc-400 mt-2">Manage your account, preferences, and team settings</p>
          
          {/* Usage Stats Banner */}
          <div className="mt-8 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Current Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-zinc-400 text-sm">API Credits</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">78% used</p>
                  <p className="text-sm text-zinc-400">7,845 / 10,000</p>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-zinc-400 text-sm">Training Hours</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">42% used</p>
                  <p className="text-sm text-zinc-400">21 / 50 hours</p>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-zinc-400 text-sm">Storage</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">23% used</p>
                  <p className="text-sm text-zinc-400">115GB / 500GB</p>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: "23%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Link href="/dashboard/settings/billing">
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center">
                  Upgrade Plan
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Settings Categories */}
        <div className="space-y-10">
          {settingsCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="border-b border-zinc-800 pb-2">
                <h2 className="text-xl font-semibold">{category.title}</h2>
                <p className="text-zinc-400 text-sm mt-1">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <Link href={item.link} key={itemIndex}>
                      <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-violet-800/50 rounded-lg p-5 transition-all hover:bg-zinc-900/60 cursor-pointer group h-full">
                        <div className="flex items-center mb-3">
                          <div className="h-9 w-9 rounded-md bg-violet-900/20 border border-violet-800/30 flex items-center justify-center text-violet-400">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-600 ml-auto transform transition-transform group-hover:translate-x-1" />
                        </div>
                        <h3 className="font-medium text-white mb-1">{item.name}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold border-b border-zinc-800 pb-2">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <button className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-violet-800/50 rounded-lg p-4 transition-all hover:bg-zinc-900/60 text-left">
              <h3 className="font-medium text-white mb-1">Export Data</h3>
              <p className="text-zinc-400 text-sm">Download your account data</p>
            </button>
            
            <button className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-violet-800/50 rounded-lg p-4 transition-all hover:bg-zinc-900/60 text-left">
              <h3 className="font-medium text-white mb-1">API Documentation</h3>
              <p className="text-zinc-400 text-sm">Learn how to integrate your models</p>
            </button>
            
            <button className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-violet-800/50 rounded-lg p-4 transition-all hover:bg-zinc-900/60 text-left">
              <h3 className="font-medium text-white mb-1">Get Support</h3>
              <p className="text-zinc-400 text-sm">Contact our customer service</p>
            </button>
            
            <button className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-violet-800/50 rounded-lg p-4 transition-all hover:bg-zinc-900/60 text-left">
              <h3 className="font-medium text-white mb-1">Tutorial Center</h3>
              <p className="text-zinc-400 text-sm">Learn how to use Zentoric</p>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SettingsPage;