'use client'

import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Zentoric has completely transformed how we use AI in our business. We were able to create a custom model in hours instead of weeks.",
      author: "Sarah Johnson",
      role: "CTO, TechSolutions Inc."
    },
    {
      quote: "The no-code interface made it possible for our team to create AI models without needing specialized ML engineers. It's been a game-changer.",
      author: "Michael Chen",
      role: "Product Manager, DataDrive"
    },
    {
      quote: "We've reduced our AI development costs by 35% while increasing the speed of deployment. Zentoric is now an essential part of our tech stack.",
      author: "Emily Rodriguez",
      role: "AI Lead, Innovex"
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-blue-600/10 blur-[120px] rounded-full"></div>
      
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
            <span className="text-blue-400 font-medium">Customer Success</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">companies</span>
          </h2>
          <p className="text-lg text-gray-300/90">See how businesses are transforming with custom AI models on Zentoric.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition shadow-lg shadow-blue-500/5 relative group"
            >
              <div className="absolute -top-3 -left-3 bg-blue-600/20 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <Quote className="absolute top-0 right-0 h-6 w-6 text-blue-500/30" />
                <p className="text-gray-300 mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;