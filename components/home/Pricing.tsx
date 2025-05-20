'use client'

import { Check, Sparkles } from 'lucide-react';
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
    <section id="pricing" className="py-10 bg-black relative overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0">
        {/* Dark radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)] opacity-80"></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#222_1px,_transparent_1px),_linear-gradient(to_bottom,_#222_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Accent glow */}
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-violet-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-fuchsia-900/10 blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-violet-300 font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose the right 
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300"> plan for your needs</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-1">Transparent pricing for businesses of all sizes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-zinc-900/60 backdrop-blur-sm rounded-xl overflow-hidden border ${
                plan.popular ? 'border-violet-600' : 'border-zinc-800'
              } shadow-lg hover:shadow-xl transition-all transform hover:translate-y-[-5px] duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600"></div>
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-center py-1 px-4 text-xs font-medium rounded-b-md flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
              
              <div className="p-8 pt-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  {plan.price !== "Contact us" ? (
                    <>
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">${plan.price}</span>
                      <span className="text-zinc-400">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">{plan.price}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className={`flex items-center justify-center h-5 w-5 rounded-full ${
                          plan.popular ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' : 'bg-zinc-800'
                        }`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full rounded-lg px-4 py-3.5 font-medium transition-all transform hover:translate-y-[-2px] ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/20' 
                      : 'bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-white hover:bg-zinc-800/80'
                  }`}
                >
                  {plan.price === "Contact us" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
              
              {/* Animated border glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-purple-500/5 blur-md opacity-75"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-400">
            Need a custom plan? <a href="#" className="text-violet-400 font-medium hover:text-violet-300 transition-colors">Contact us</a> for custom pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;