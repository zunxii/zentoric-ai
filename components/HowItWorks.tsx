'use client'

import { ArrowRight, Check } from 'lucide-react';

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
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Zentoric Works</h2>
          <p className="text-lg text-gray-600">Train and deploy custom AI models in minutes, not weeks.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-12 right-12 h-0.5 bg-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold mb-8 z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Pipeline</h3>
              <p className="text-gray-600 mb-6">Our serverless architecture handles all the complexity behind the scenes, from data preprocessing to model deployment.</p>
              <ul className="space-y-4">
                {[
                  "Automatic data validation and preprocessing",
                  "Parameter-Efficient Fine-Tuning (PEFT)",
                  "Serverless job queueing system",
                  "Optimized resource allocation",
                  "Automatic model evaluation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">90% Reduction</h3>
                <p className="text-white/90 text-lg mb-6">in AI model customization time compared to traditional methods.</p>
                <div className="flex space-x-2">
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Traditional</p>
                    <p className="font-bold text-xl">Weeks</p>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <p className="text-white/70 text-sm">With Zentoric</p>
                    <p className="font-bold text-xl">Hours</p>
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