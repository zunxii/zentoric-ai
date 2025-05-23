'use client'

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Zap, 
  Download, 
  Star, 
  TrendingUp, 
  Bot, 
  ShoppingCart, 
  Gift,
  ChevronRight,
  Sparkles,
  Crown,
  Heart
} from 'lucide-react';
import Link from 'next/link';

interface ModelCard {
  id: string;
  name: string;
  creator: string;
  category: 'Language' | 'Vision' | 'Audio' | 'Code';
  price: number | 'free';
  rating: number;
  downloads: number;
  tags: string[];
  isPopular?: boolean;
  isFeatured?: boolean;
}

interface CommunityStats {
  totalModels: number;
  activeCreators: number;
  monthlyDownloads: string;
  communityRating: number;
}

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'trending' | 'featured' | 'free'>('trending');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Mock data - replace with real data
  const communityStats: CommunityStats = {
    totalModels: 12847,
    activeCreators: 3254,
    monthlyDownloads: '2.1M',
    communityRating: 4.8
  };

  const modelCards: ModelCard[] = [
    {
      id: '1',
      name: 'GPT-4 Fine-tuned Marketing',
      creator: 'AI_Specialist_Pro',
      category: 'Language',
      price: 29.99,
      rating: 4.9,
      downloads: 15420,
      tags: ['Marketing', 'Content', 'GPT-4'],
      isPopular: true,
      isFeatured: true
    },
    {
      id: '2',
      name: 'Vision Pro Object Detection',
      creator: 'ComputerVisionLab',
      category: 'Vision',
      price: 'free',
      rating: 4.7,
      downloads: 28930,
      tags: ['Object Detection', 'YOLO', 'Real-time'],
      isPopular: true
    },
    {
      id: '3',
      name: 'Voice Clone Studio',
      creator: 'AudioTech_Inc',
      category: 'Audio',
      price: 49.99,
      rating: 4.8,
      downloads: 8742,
      tags: ['Voice Synthesis', 'Clone', 'TTS'],
      isFeatured: true
    },
    {
      id: '4',
      name: 'Code Assistant Pro',
      creator: 'DevMaster_AI',
      category: 'Code',
      price: 'free',
      rating: 4.6,
      downloads: 45210,
      tags: ['Code Generation', 'Debug', 'Multi-lang']
    },
    {
      id: '5',
      name: 'Financial Analyst AI',
      creator: 'FinTech_Solutions',
      category: 'Language',
      price: 79.99,
      rating: 4.9,
      downloads: 6543,
      tags: ['Finance', 'Analysis', 'Prediction'],
      isFeatured: true
    },
    {
      id: '6',
      name: 'Medical Image Scanner',
      creator: 'HealthAI_Research',
      category: 'Vision',
      price: 'free',
      downloads: 12847,
      rating: 4.5,
      tags: ['Medical', 'Radiology', 'Diagnosis'],
      isPopular: true
    }
  ];

  const getCategoryIcon = (category: ModelCard['category']) => {
    switch (category) {
      case 'Language': return <Bot className="h-4 w-4" />;
      case 'Vision': return <Sparkles className="h-4 w-4" />;
      case 'Audio': return <Zap className="h-4 w-4" />;
      case 'Code': return <TrendingUp className="h-4 w-4" />;
      default: return <Bot className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: ModelCard['category']) => {
    switch (category) {
      case 'Language': return 'from-zinc-700 to-zinc-600';
      case 'Vision': return 'from-zinc-700 to-zinc-600';
      case 'Audio': return 'from-zinc-700 to-zinc-600';
      case 'Code': return 'from-zinc-700 to-zinc-600';
      default: return 'from-zinc-700 to-zinc-600';
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const filteredModels = modelCards.filter(model => {
    switch (activeTab) {
      case 'trending': return model.isPopular;
      case 'featured': return model.isFeatured;
      case 'free': return model.price === 'free';
      default: return true;
    }
  });

  return (
    <section className={`relative bg-black py-24 overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_transparent_70%)] opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#111_1px,_transparent_1px),_linear-gradient(to_bottom,_#111_1px,_transparent_1px)] bg-[size:60px_60px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/6 w-1/3 h-1/3 bg-violet-900/5 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1/3 h-1/3 bg-fuchsia-900/5 blur-[200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2 text-sm mb-8">
            <Users className="h-4 w-4 text-violet-400" />
            <span className="text-violet-300 font-medium">Community Marketplace</span>
            <div className="flex -space-x-1 ml-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full border border-zinc-700 bg-gradient-to-br from-zinc-600 to-zinc-800 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Explore Our
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400">
              AI Community
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of creators and innovators. Discover, buy, sell, and create custom AI models. 
            From free community models to premium solutions – find the perfect AI for your needs.
          </p>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { label: 'AI Models', value: formatNumber(communityStats.totalModels), icon: Bot },
              { label: 'Active Creators', value: formatNumber(communityStats.activeCreators), icon: Users },
              { label: 'Monthly Downloads', value: communityStats.monthlyDownloads, icon: Download },
              { label: 'Avg Rating', value: communityStats.communityRating.toFixed(1), icon: Star }
            ].map((stat, index) => (
              <div key={index} className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:border-violet-800/30 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20 transition-all">
                  <stat.icon className="h-6 w-6 text-violet-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-full p-1 inline-flex">
            {(['trending', 'featured', 'free'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {tab === 'trending' && <TrendingUp className="h-4 w-4" />}
                {tab === 'featured' && <Crown className="h-4 w-4" />}
                {tab === 'free' && <Gift className="h-4 w-4" />}
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredModels.map((model, index) => (
            <div
              key={model.id}
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden hover:border-violet-800/30 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(model.category)} p-2 flex items-center justify-center`}>
                      {getCategoryIcon(model.category)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-violet-300 transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-sm text-zinc-500">by {model.creator}</p>
                    </div>
                  </div>
                  {model.isFeatured && (
                    <div className="bg-zinc-800/80 border border-zinc-700 rounded-full p-1">
                      <Crown className="h-4 w-4 text-zinc-400" />
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-zinc-400 fill-current" />
                      <span className="text-white font-medium">{model.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4 text-zinc-400" />
                      <span className="text-zinc-400">{formatNumber(model.downloads)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    {model.price === 'free' ? (
                      <span className="text-zinc-300 font-semibold">FREE</span>
                    ) : (
                      <span className="text-white font-semibold">${model.price}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center justify-center group/btn">
                    {model.price === 'free' ? (
                      <>
                        <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                        Download
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy Now
                      </>
                    )}
                  </button>
                  <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 text-white rounded-lg px-4 py-2 text-sm transition-all duration-300 flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-violet-500/0 via-fuchsia-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:via-fuchsia-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zinc-900/60 to-zinc-800/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
              <Sparkles className="h-8 w-8 text-violet-400" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h3>
            
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Start creating, sharing, and monetizing your AI models today. Join thousands of developers and businesses building the future of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-lg px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center group">
                Browse All Models
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/create" className="bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 text-white rounded-lg px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center">
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;