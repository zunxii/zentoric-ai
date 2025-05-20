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
    <section id="faq" className="py-10 bg-black relative overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glow */}
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-violet-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-fuchsia-900/10 blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-violet-300 font-medium">Questions & Answers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300"> Questions</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-1">Everything you need to know about Zentoric.</p>
        </div>
        
        <div className="max-w-4xl mx-auto divide-y divide-zinc-800/50">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">{faq.question}</h3>
                <div className={`${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' 
                    : 'bg-zinc-900 border border-zinc-800'
                } rounded-full p-1.5 flex items-center justify-center transition-all`}>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-400" />
                  )}
                </div>
              </button>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-zinc-900/60 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-violet-800/30 transition-all relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-xl"></div>
                  
                  <p className="text-zinc-300 relative z-10">{faq.answer}</p>
                  
                  {/* Animated border glow effect for active FAQ */}
                  <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-purple-500/5 blur-md opacity-75 rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <div className="inline-flex items-center space-x-5 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl px-8 py-5 hover:border-violet-800/30 transition-all">
            <p className="text-zinc-300">
              Have more questions? <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-medium hover:opacity-80 transition-opacity">Contact our support team</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;