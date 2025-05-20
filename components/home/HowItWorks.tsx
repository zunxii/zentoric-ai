'use client'

import { ArrowRight, Check, ArrowDownRight, ChevronRight } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {}

const HowItWorks: React.FC<HowItWorksProps> = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Select Your Model",
      description: "Choose from our curated selection of foundation models optimized for different use cases."
    },
    {
      number: "02",
      title: "Upload Your Data",
      description: "Simply upload your CSV or text files. Our system handles the preprocessing and validation."
    },
    {
      number: "03",
      title: "Configure Training",
      description: "Set your parameters with our intuitive interface. No machine learning expertise required."
    },
    {
      number: "04",
      title: "Launch & Monitor",
      description: "Start training with one click and track progress in real-time on your dashboard."
    },
    {
      number: "05",
      title: "Deploy & Integrate",
      description: "Get API keys for your trained model and integrate it into your applications."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle hexagon pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%239333EA' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Accent glows */}
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-violet-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-fuchsia-900/10 blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="text-violet-300 font-medium">The Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Zentoric Works</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">Train and deploy custom AI models in minutes, not weeks.</p>
        </div>

        <div className="relative mt-20">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-24 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-violet-600/40 flex items-center justify-center text-violet-400 font-bold mb-8 z-10 shadow-lg shadow-violet-900/10 group-hover:shadow-violet-900/20 transition-all duration-300">
                  <span className="text-2xl font-mono">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-12 h-12 text-zinc-700">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-28 bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-violet-900/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center space-x-2 bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-full px-3 py-1 text-xs mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
                <span className="text-violet-300 font-medium">Advanced Technology</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Training Pipeline</h3>
              <p className="text-zinc-300 mb-8">Our serverless architecture handles all the complexity behind the scenes, from data preprocessing to model deployment.</p>
              
              <div className="space-y-5">
                {[
                  "Automatic data validation and preprocessing",
                  "Parameter-Efficient Fine-Tuning (PEFT)",
                  "Serverless job queueing system",
                  "Optimized resource allocation",
                  "Automatic model evaluation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mr-4 mt-0.5 h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-violet-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-zinc-800 p-8 md:p-12 text-white flex items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-violet-900/30 backdrop-blur-sm border border-violet-800/40 rounded-full px-3 py-1 text-xs mb-6">
                  <span className="text-violet-300 font-medium">Results</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">90% Reduction</h3>
                <p className="text-zinc-300 text-lg mb-8">in AI model customization time compared to traditional methods.</p>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6">
                  <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl backdrop-blur-sm">
                    <p className="text-zinc-400 text-sm mb-1">Traditional Approach</p>
                    <p className="font-bold text-2xl text-white">2-3 Weeks</p>
                    <div className="flex items-center mt-3 text-zinc-400 text-sm">
                      <span>Manual pipeline setup</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <ArrowDownRight className="h-8 w-8 text-violet-400" />
                  </div>
                  
                  <div className="bg-violet-900/20 border border-violet-800/30 p-5 rounded-xl backdrop-blur-sm relative overflow-hidden shadow-lg shadow-violet-500/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent"></div>
                    <div className="relative z-10">
                      <p className="text-violet-300 text-sm mb-1">With Zentoric</p>
                      <p className="font-bold text-2xl text-white">2-3 Hours</p>
                      <div className="flex items-center mt-3 text-violet-300 text-sm">
                        <span>Automated workflow</span>
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

export default HowItWorks;