'use client'

import { Check } from 'lucide-react';
import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "1 custom model",
        "10,000 API calls/month",
        "5GB data storage",
        "Community support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "199",
      features: [
        "5 custom models",
        "100,000 API calls/month",
        "25GB data storage",
        "Priority support",
        "Advanced analytics",
        "Custom endpoints"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "Unlimited custom models",
        "Unlimited API calls",
        "Unlimited data storage",
        "Dedicated support",
        "Custom integration",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-0 w-2/3 h-1/3 bg-blue-600/10 blur-[150px] rounded-full"></div>
      
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
            <span className="text-blue-400 font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Choose the right <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">plan</span> for your needs
          </h2>
          <p className="text-lg text-gray-300/90">Transparent pricing for businesses of all sizes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border ${
                plan.popular ? 'border-blue-500' : 'border-gray-800'
              } shadow-lg hover:shadow-xl transition hover:transform hover:translate-y-[-5px]`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-1 px-4 text-xs font-medium rounded-b-md">
                      Most Popular
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-8 pt-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  {plan.price !== "Contact us" ? (
                    <>
                      <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className={`flex items-center justify-center h-5 w-5 rounded-full ${
                          plan.popular ? 'bg-blue-500' : 'bg-gray-800'
                        }`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full rounded-lg px-4 py-3.5 font-medium transition transform hover:translate-y-[-2px] ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.price === "Contact us" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need a custom plan? <a href="#" className="text-blue-400 font-medium hover:text-blue-300">Contact us</a> for custom pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;