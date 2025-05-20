'use client'

import { ArrowRight, Settings, Database, Code, BarChart, Cpu, Shield, Zap, ChevronRight } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const features: FeatureItem[] = [
    {
      icon: <Cpu className="h-5 w-5 text-violet-400" />,
      title: "Model Selection",
      description: "Choose from pre-configured foundation models optimized for different use cases."
    },
    {
      icon: <Database className="h-5 w-5 text-violet-400" />,
      title: "Data Handling",
      description: "Upload and validate your data with our intuitive interface and preprocessing tools."
    },
    {
      icon: <Code className="h-5 w-5 text-violet-400" />,
      title: "API Management",
      description: "Generate API keys and integrate your custom models into your applications."
    },
    {
      icon: <BarChart className="h-5 w-5 text-violet-400" />,
      title: "Performance Metrics",
      description: "Monitor and evaluate your model's performance with detailed analytics."
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glows */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-fuchsia-900/10 blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-violet-300 font-medium">Key Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300">custom AI models</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">Our no-code platform makes AI model customization accessible to everyone, regardless of machine learning expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-7 border border-zinc-800 hover:border-violet-800/40 shadow-lg hover:shadow-violet-900/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-black border border-zinc-800 group-hover:border-violet-800/40 flex items-center justify-center mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 relative">
          {/* Decorative elements */}
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative rounded-3xl border border-zinc-800 overflow-hidden backdrop-blur-sm shadow-xl shadow-violet-900/5">
            <div className="absolute inset-0 bg-zinc-900/70"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-2/3 mb-10 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center space-x-2 bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-full px-3 py-1 text-xs mb-6">
                    <span className="text-violet-300 font-medium">Enterprise-Ready</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your business with AI?</h3>
                  <p className="text-lg text-zinc-300 mb-8">Join hundreds of companies already using Zentoric to build custom AI solutions without hiring ML engineers.</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white rounded-lg px-6 py-3.5 font-medium transition-all flex items-center justify-center shadow-lg shadow-violet-800/20">
                      Get Started Today
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                    
                    <button className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 text-white rounded-lg px-6 py-3.5 font-medium hover:bg-zinc-800/80 transition-all flex items-center justify-center">
                      <Shield className="h-4 w-4 mr-2 text-violet-400" />
                      <span>Schedule Demo</span>
                    </button>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-violet-500/20 animate-[spin_12s_linear_infinite] flex items-center justify-center">
                      <div className="h-40 w-40 md:h-48 md:w-48"></div>
                    </div>
                    <div className="absolute inset-8 rounded-full border-4 border-dashed border-fuchsia-500/10 animate-[spin_18s_linear_infinite_reverse]"></div>
                    
                    {/* Center pulse */}
                    <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-xl shadow-violet-500/20 animate-pulse">
                      <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-black flex items-center justify-center">
                        <Zap className="h-8 w-8 md:h-10 md:w-10 text-violet-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;