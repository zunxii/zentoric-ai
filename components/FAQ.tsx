'use client'

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Do I need machine learning expertise to use Zentoric?",
      answer: "No, Zentoric is designed as a no-code platform. Our intuitive interface and pre-configured templates make it easy for anyone to create custom AI models without ML expertise."
    },
    {
      question: "How secure is my data on Zentoric?",
      answer: "We take data security very seriously. All data is encrypted in transit and at rest. We never use your data to train other models, and you retain full ownership of your data and models."
    },
    {
      question: "What types of models can I train on Zentoric?",
      answer: "Currently, Zentoric supports fine-tuning of language models like Llama 3. We're continuously adding support for new model architectures and use cases."
    },
    {
      question: "How long does it take to train a custom model?",
      answer: "Training time depends on the size of your dataset and the complexity of your model. Typically, models are ready within a few hours, compared to weeks with traditional methods."
    },
    {
      question: "Can I integrate my custom models with my existing applications?",
      answer: "Yes, Zentoric provides API access to your trained models. We generate API keys and documentation for your custom endpoints, making integration seamless."
    },
    {
      question: "Is there a limit to how many models I can train?",
      answer: "The number of models you can train depends on your subscription plan. We offer plans for businesses of all sizes, from startups to enterprises."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-0 w-2/3 h-1/3 bg-blue-600/10 blur-[150px] rounded-full"></div>
      
      {/* Grid background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-blue-500/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-blue-500/10 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 font-medium">Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-300/90">Everything you need to know about Zentoric.</p>
        </div>
        
        <div className="max-w-4xl mx-auto divide-y divide-gray-800/50">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <div className="bg-gray-800 rounded-full p-1.5 flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Have more questions? <a href="#" className="text-blue-400 font-medium hover:text-blue-300">Contact our support team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;