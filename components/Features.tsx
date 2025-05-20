'use client'

import { ArrowRight, Settings, Database, Code, BarChart } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const features: FeatureItem[] = [
    {
      icon: <Settings className="h-6 w-6 text-indigo-600" />,
      title: "Model Selection",
      description: "Choose from pre-configured foundation models optimized for different use cases."
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      title: "Data Handling",
      description: "Upload and validate your data with our intuitive interface and preprocessing tools."
    },
    {
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: "API Management",
      description: "Generate API keys and integrate your custom models into your applications."
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Performance Metrics",
      description: "Monitor and evaluate your model's performance with detailed analytics."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Everything you need to build custom AI models</h2>
          <p className="text-lg text-gray-600">Our no-code platform makes AI model customization accessible to everyone, regardless of machine learning expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to transform your business with AI?</h3>
              <p className="text-lg text-gray-600 mb-6">Join hundreds of companies already using Zentoric to build custom AI solutions without hiring ML engineers.</p>
              <a href="#" className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white rounded-full px-6 py-3 font-medium transition transform hover:scale-105 shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse" />
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 md:h-12 md:w-12 text-indigo-600" />
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