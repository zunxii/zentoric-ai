'use client'

import { ArrowRight, Settings, Database, Code, BarChart, Cpu, Shield, Zap } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const features: FeatureItem[] = [
    {
      icon: <Cpu className="h-5 w-5 text-blue-400" />,
      title: "Model Selection",
      description: "Choose from pre-configured foundation models optimized for different use cases."
    },
    {
      icon: <Database className="h-5 w-5 text-blue-400" />,
      title: "Data Handling",
      description: "Upload and validate your data with our intuitive interface and preprocessing tools."
    },
    {
      icon: <Code className="h-5 w-5 text-blue-400" />,
      title: "API Management",
      description: "Generate API keys and integrate your custom models into your applications."
    },
    {
      icon: <BarChart className="h-5 w-5 text-blue-400" />,
      title: "Performance Metrics",
      description: "Monitor and evaluate your model's performance with detailed analytics."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/3 w-1/3 h-1/4 bg-blue-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-1/3 h-1/4 bg-cyan-600/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 font-medium">Key Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">custom AI models</span>
          </h2>
          <p className="text-lg text-gray-300/90">Our no-code platform makes AI model customization accessible to everyone, regardless of machine learning expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-blue-500/30 flex items-center justify-center mb-5 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-600/5 to-transparent rounded-3xl blur-sm"></div>
          
          <div className="relative rounded-3xl border border-blue-900/50 overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-gray-900/90"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-2/3 mb-10 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-sm border border-blue-800/50 rounded-full px-3 py-1 text-xs mb-6">
                    {/* <Lightning className="h-3.5 w-3.5 text-blue-300" /> */}
                    <span className="text-blue-300 font-medium">Enterprise-Ready</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your business with AI?</h3>
                  <p className="text-lg text-gray-300 mb-8">Join hundreds of companies already using Zentoric to build custom AI solutions without hiring ML engineers.</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-6 py-3 font-medium transition flex items-center justify-center shadow-lg shadow-blue-700/20">
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    
                    <button className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 text-white rounded-lg px-6 py-3 font-medium hover:bg-gray-800 transition flex items-center justify-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-400" />
                      <span>Schedule Demo</span>
                    </button>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                      <div className="h-40 w-40 md:h-48 md:w-48"></div>
                    </div>
                    <div className="absolute inset-8 rounded-full border-4 border-dashed border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                    
                    {/* Center pulse */}
                    <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-500/30 animate-pulse">
                      <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-900 flex items-center justify-center">
                        <Zap className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
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